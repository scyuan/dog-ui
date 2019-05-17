<style>
    .dog-button{
        margin-right:10px;
    } 
    .dog-button-group .dog-button{
        margin:0
    }
    .dog-button-group{
        margin:10px;
    }
</style>

<h4>按钮</h4>
<dog-button>默认</dog-button>
<dog-button type="primary">正常</dog-button>
<dog-button type="success">成功</dog-button>
<dog-button type="danger">危险</dog-button>
<dog-button type="info">信息</dog-button>


:::demo

```html
<dog-button>默认</dog-button>
<dog-button type="primary">正常</dog-button>
<dog-button type="success">成功</dog-button>
<dog-button type="danger">危险</dog-button>
<dog-button type="info">信息</dog-button>
```

:::

<h4>文字按钮</h4>
<dog-button type="text">文字按钮</dog-button>

:::demo

```html
<dog-button type="text">文字按钮</dog-button>
```

:::

<h5>不可用状态</h5>
<dog-button disabled>默认按钮</dog-button>
<dog-button type="primary" disabled>正常按钮</dog-button>
<dog-button type="danger" disabled>警告按钮</dog-button>
<dog-button type="text" disabled>文字按钮</dog-button>

:::demo

```html
<dog-button disabled>默认按钮</dog-button>
<dog-button type="primary" disabled>正常按钮</dog-button>
<dog-button type="danger" disabled>警告按钮</dog-button>
<dog-button type="text" disabled>文字按钮</dog-button>
```

:::

<div></div>
<dog-button-group>
    <dog-button type="primary">正常按钮</dog-button>
    <dog-button>默认按钮</dog-button>
</dog-button-group>
<div></div>

<div></div>
<dog-button-group>
<dog-button>默认按钮</dog-button>
    <dog-button>默认按钮</dog-button>
    <dog-button type="primary">正常按钮</dog-button>
    <dog-button type="primary">正常按钮</dog-button>
    <dog-button>默认按钮</dog-button>
</dog-button-group>

<h4>带icon按钮</h4>

<dog-button icon="ios-add"></dog-button>
<dog-button icon="ios-add">默认按钮</dog-button>
<dog-button type="primary" icon="ios-add">正常按钮</dog-button>
<dog-button type="danger" icon="ios-add">警告按钮</dog-button>
