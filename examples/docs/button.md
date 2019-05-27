<style>
    .d-button{
        margin-right:10px;
    } 
    .d-button-group .d-button{
        margin:0
    }
    .d-button-group{
        margin:10px;
    }
</style>

<h4>按钮</h4>
<d-button>默认</d-button>
<d-button type="primary">正常</d-button>
<d-button type="success">成功</d-button>
<d-button type="danger">危险</d-button>
<d-button type="info">信息</d-button>


:::demo

```html
<d-button>默认</d-button>
<d-button type="primary">正常</d-button>
<d-button type="success">成功</d-button>
<d-button type="danger">危险</d-button>
<d-button type="info">信息</d-button>
```

:::

<h4>文字按钮</h4>
<d-button type="text">文字按钮</d-button>

:::demo

```html
<d-button type="text">文字按钮</d-button>
```

:::

<h5>不可用状态</h5>
<d-button disabled>默认按钮</d-button>
<d-button type="primary" disabled>正常按钮</d-button>
<d-button type="danger" disabled>警告按钮</d-button>
<d-button type="text" disabled>文字按钮</d-button>

:::demo

```html
<d-button disabled>默认按钮</d-button>
<d-button type="primary" disabled>正常按钮</d-button>
<d-button type="danger" disabled>警告按钮</d-button>
<d-button type="text" disabled>文字按钮</d-button>
```

:::

<div></div>
<d-button-group>
    <d-button>默认按钮</d-button>
    <d-button>默认按钮</d-button>
</d-button-group>
<div></div>

<div></div>
<d-button-group>
    <d-button type="primary">正常按钮</d-button>
    <d-button type="primary">正常按钮</d-button>
</d-button-group>

<div></div>
<d-button-group>
    <d-button type="success">正常按钮</d-button>
    <d-button type="success">正常按钮</d-button>
</d-button-group>

<div></div>
<d-button-group>
    <d-button type="info">正常按钮</d-button>
    <d-button type="info">正常按钮</d-button>
</d-button-group>

<div></div>
<d-button-group>
    <d-button type="danger">正常按钮</d-button>
    <d-button type="danger">正常按钮</d-button>
</d-button-group>

<h4>带icon按钮</h4>

<d-button icon="ios-add"></d-button>
<d-button icon="ios-add">默认按钮</d-button>
<d-button type="primary" icon="ios-add">正常按钮</d-button>
<d-button type="danger" icon="ios-add">警告按钮</d-button>
