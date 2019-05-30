<style>
p{
  border-radius:6px;
  height:40px;
}
.a{
  background:#7f8c8d;
  font-size:14px;
}
.b{
  background:#95a5a6;
  font-size:18px;
}
div.a{
  background:#7f8c8d;
  height:40px;
  border-radius:6px;
}
div.b{
  background:#95a5a6;
  height:40px;
  border-radius:6px;
}
.c{
  height:50px;
  background:rgb(236, 240, 241);
  margin-bottom:15px;
  border-radius:6px;
}
</style>

<d-row :gutter="10" class="c">
  <d-col :span='16' class="a"></d-col>
  <d-col :span='8' class="b"></d-col>
</d-row>
<d-row :gutter="10" class="c">
  <d-col :span='8' class="a"></d-col>
  <d-col :span='8' class="b"></d-col>
  <d-col :span='8' class="a"></d-col>
</d-row>
<d-row :gutter="10" class="c">
  <d-col :span='6' class="a"></d-col>
  <d-col :span='6' class="b"></d-col>
  <d-col :span='6' class="a"></d-col>
  <d-col :span='6' class="b"></d-col>
</d-row>

:::demo

```html
<d-row :gutter="10">
  <d-col :span='6'></d-col>
  <d-col :span='6'></d-col>
  <d-col :span='6'></d-col>
  <d-col :span='6'></d-col>
</d-row>
```

:::

<h2>flex布局</h2>
<h3>主轴方向</h3>
<d-row :gutter="10" type="flex" justify="flex-start" class="c">
  <d-col :span='6' class="a"></d-col>
  <d-col :span="6" class="b"></d-col>
  <d-col :span="6" class="a"></d-col>
</d-row>
<d-row :gutter="10" type="flex" justify="center" class="c">
  <d-col :span='6' class="a"></d-col>
  <d-col :span="6" class="b"></d-col>
  <d-col :span="6" class="a"></d-col>
</d-row>
<d-row :gutter="10" type="flex" justify="flex-end" class="c">
  <d-col :span='6' class="a"></d-col>
  <d-col :span="6" class="b"></d-col>
  <d-col :span="6" class="a"></d-col>
</d-row>
<d-row :gutter="10" type="flex" justify="space-between" class="c">
  <d-col :span='6' class="a"></d-col>
  <d-col :span="6" class="b"></d-col>
  <d-col :span="6" class="a"></d-col>
</d-row>
<d-row :gutter="10" type="flex" justify="space-around" class="c">
  <d-col :span='6' class="a"></d-col>
  <d-col :span="6" class="b"></d-col>
  <d-col :span="6" class="a"></d-col>
</d-row>
<h3>交叉轴方向</h3>
<d-row :gutter="10" type="flex" align="flex-start" class="c">
  <d-col :span='6' class="a"><p ></p></d-col>
  <d-col :span="6" class="b"><p ></p></d-col>
  <d-col :span="6" class="a"><p ></p></d-col>
</d-row>
<d-row :gutter="10" type="flex" align="center" class="c">
  <d-col :span='6' class="a"><p ></p></d-col>
  <d-col :span="6" class="b"><p ></p></d-col>
  <d-col :span="6" class="a"><p ></p></d-col>
</d-row>
<d-row :gutter="10" type="flex" align="flex-end" class="c">
  <d-col :span='6' class="a"><p></p></d-col>
  <d-col :span="6" class="b"><p></p></d-col>
  <d-col :span="6" class="a"><p></p></d-col>
</d-row>
<d-row :gutter="10" type="flex" align="baseline" class="c">
  <d-col :span='6' class="a"><p>baseline</p></d-col>
  <d-col :span="6" class="b"><p>baseline</p></d-col>
  <d-col :span="6" class="a"><p>baseline</p></d-col>
</d-row>
<d-row :gutter="10" type="flex" align="stretch" class="c">
  <d-col :span='6' class="a"><p ></p></d-col>
  <d-col :span="6" class="b"><p ></p></d-col>
  <d-col :span="6" class="a"><p ></p></d-col>
</d-row>