<style>.dog-button{margin-right:10px;}</style>
<h4>按钮</h4>
<dog-button>default</dog-button>
<dog-button @click="console.log(1)" type="primary">primary</dog-button>
<dog-button type="text">text</dog-button>
<h4>文字按钮</h4>
<dog-button type="danger">error</dog-button>

:::demo

```html
<h4>按钮</h4>
<dog-button>default</dog-button>
<dog-button type="primary">primary</dog-button>
<dog-button type="text">text</dog-button>
<h4>文字按钮</h4>
<dog-button type="danger">error</dog-button>
```

:::
