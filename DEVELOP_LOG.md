### 2019年05月29日 更新 
### 开发一个组件步骤说明

1. 组件目录

类似于:
––––button                 // 组件根目录
    |––––src               // 组件对象，即主要逻辑
    |    |––––button.vue   
    |
    |––––index.js          // 导出该组件。具体怎么做看代码
    |
————index.js               // 整个组件根目录下，导出整个组件库。具体怎么做看代码

2. 然后开始开发组件
3. 开发组件后需要导出该组件
4. 在整个组件库index.js需要添加该组件。
5. 以上的语言描述可能有点不专业，以后修改。

### 2019 年 03 月 01 日

- 给 `button` 完成样式，包括默认、正常、危险 `button` 的 `hover`、`active`、`focus` 状态的 `css`。以及 `button` 的 `disabled` 状态。

- 将 `css` 移出到 `packages/them-chalk` 目录下，`button.vue` 通过`@import` 命令引入 `css`。

- 使用 `less`。

### 2019 年 03 月 02 日

- 通过伪类`hover`,`active`,`focus`来控制按钮的样式。[点击态样式：focus, active, hover 的区别与兼容性](https://harttle.land/2018/05/17/hover-active-focus-highlight-color.html)

#### 开发`dog-button-group`

- `css选择器`中的`:not()`用法。

- `button-group`样式编写，参照 ant-design。

### 2019 年 03 月 03 日

#### 开发`dog-icon`

- 图标实用`ionicons`开源项目。（后期需要减少图标数以减少资源文件大小）

- `button`可以添加图标了。（css 相邻兄弟元素选择器）


#### 确定组件配色
