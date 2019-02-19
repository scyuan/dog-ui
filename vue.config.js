const path = require('path');
const md = require('markdown-it')();
const slugify = require('transliteration').slugify;
const striptags = require('./strip-tags');

function resolve(dir) {
    return path.join(__dirname, dir)
}

function convert(str) {
    str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
        return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
    });
    return str;
}

function wrap(render) {
    return function () {
        return render.apply(this, arguments)
            .replace('<code v-pre class="', '<code class="hljs ')
            .replace('<code>', '<code class="hljs">');
    };
}
module.exports = {
    // 修改 src 目录 为 examples 目录
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    // 扩展 webpack 配置
    chainWebpack: config => {
        // 配置别名
        config.resolve.alias.set('@', resolve('examples'));
        // 使 packages 加入编译
        config.module
            .rule('js')
            .include
            .add('/packages')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
        config.module.rule('md')
            .test(/\.md$/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                preventExtract: true,
                raw: true,
                // 定义处理规则
                preprocess: function (MarkdownIt, source) {
                    MarkdownIt.renderer.rules.table_open = function () {
                        return '<table class="table">';
                    };
                    // 对于代码块去除v-pre,添加高亮样式
                    MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
                    return source;
                },
                use: [
                    [require('markdown-it-anchor'), {
                        level: 2, // 添加超链接锚点的最小标题级别, 如: #标题 不会添加锚点
                        slugify: slugify, // 自定义slugify, 我们使用的是将中文转为汉语拼音,最终生成为标题id属性
                        permalink: true, // 开启标题锚点功能
                        permalinkBefore: true // 在标题前创建锚点
                    }],
                    // 'markdown-it-container'的作用是自定义代码块
                    [require('markdown-it-container'), 'demo', {
                        // 当我们写::: demo :::这样的语法时才会进入自定义渲染方法
                        validate: function (params) {
                            console.log(params);
                            return params.trim().match(/^demo\s*(.*)$/);
                        },
                        // 自定义渲染方法,这里为核心代码
                        render: function (tokens, idx) {
                            var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
                            // nesting === 1表示标签开始
                            if (tokens[idx].nesting === 1) {
                                // 获取正则捕获组中的描述内容,即::: demo xxx中的xxx
                                var description = (m && m.length > 1) ? m[1] : '';
                                // 获得内容
                                var content = tokens[idx + 1].content;
                                // 解析过滤解码生成html字符串
                                var html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
                                // 获取script中的内容
                                var script = striptags.fetch(content, 'script');
                                // 获取style中的内容
                                var style = striptags.fetch(content, 'style');
                                // 组合成prop参数,准备传入组件
                                var jsfiddle = {
                                    html: html,
                                    script: script,
                                    style: style
                                };
                                // 是否有描述需要渲染
                                var descriptionHTML = description ?
                                    md.render(description) :
                                    '';
                                // 将jsfiddle对象转换为字符串,并将特殊字符转为转义序列
                                jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle));
                                // 起始标签,写入demo-block模板开头,并传入参数
                                return `<demo-block :jsfiddle="${jsfiddle}">
                                    <div slot="desc">${html}</div>
                                    <div slot="highlight">`;


                                // return `<demo-block class="demo-box" :jsfiddle="${jsfiddle}">
                                // <div class="source" slot="source">${html}</div>
                                // ${descriptionHTML}
                                // <div class="highlight" slot="highlight">`;
                            }
                            // 否则闭合标签
                            return '</div></demo-block>\n';
                        }
                    }],
                    [require('markdown-it-container'), 'tip'],
                    [require('markdown-it-container'), 'warning']
                ]

            })
    }
}