### 开发一个组件步骤说明

1. 组件目录

类似于:
```
├──button                 // 组件根目录
├──src                    // 组件对象，即主要逻辑
│  ├──button.vue   
│  ├──index.js            // 导出该组件。具体怎么做看代码
├──index.js               // 整个组件根目录下，导出整个组件库。具体怎么做看代码
```
2. 然后开始开发组件
3. 开发组件后需要导出该组件
4. 在整个组件库index.js需要添加该组件。
5. 以上的语言描述可能有点不专业，以后修改。

### Button

- 给 `button` 完成样式，包括默认、正常、危险 `button` 的 `hover`、`active`、`focus` 状态的 `css`。以及 `button` 的 `disabled` 状态。

- 将 `css` 移出到 `packages/them-chalk` 目录下，`button.vue` 通过`@import` 命令引入 `css`。

- 使用 `less`。

- 通过伪类`hover`,`active`,`focus`来控制按钮的样式。[点击态样式：focus, active, hover 的区别与兼容性](https://harttle.land/2018/05/17/hover-active-focus-highlight-color.html)

### Button Group

- `css选择器`中的`:not()`用法。

- `button-group`样式编写，参照 ant-design。

### Icon

- 图标实用`ionicons`开源项目。（后期需要减少图标数以减少资源文件大小）

- `button`可以添加图标了。（css 相邻兄弟元素选择器）

### 确定组件配色

### Grid布局

Grid布局主要有Row（行）和Col（列）。需对[Class和Style的绑定](https://cn.vuejs.org/v2/guide/class-and-style.html)熟悉（对象和数组两种形式）

Row 可选属性
- gutter : col之间的间距，单位px。
- type   : 默认是空，可填flex。
- align  : flex布局交叉轴的排列方式
- justify: flex布局主轴的排列方式

Col 可选属性
- span   : 所占格数（总共24格）

#### Row

row.vue的开发没什么好说的。tag是div，通过props接受参数。然后通过computed先对参数进行一遍过滤（比如type是否是flex），标签上所使用的就直接是computed计算过的属性。

#### Col

col自身是受span控制，除此之外还有父组件的gutter属性。那么如何受父亲组件gutter所影响呢，需要通过this.$parent读取父亲组件的属性。然后再添加对应的style属性。