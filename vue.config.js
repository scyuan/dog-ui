const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
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
    }
}