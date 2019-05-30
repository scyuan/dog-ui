<template>
  <div
    :class="['d-row',_type === 'flex'?'d-row-flex':'',_type === 'flex' && _align ? `is-align-${_align}`:'',_type === 'flex' && _justify ? `is-justify-${_justify}`:'']"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "DRow",
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    // 可选flex
    type: {
      type: String,
      default: ""
    },
    // flex布局垂直方向
    //
    align: {
      type: String,
      default: ""
    },
    // flex布局水平方向
    //
    justify: {
      type: String,
      default: ""
    }
  },
  computed: {
    _type() {
      return this.type === "flex" ? "flex" : "";
    },
    _justify() {
      // 水平布局只有5种方式
      const arr = [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around"
      ];
      return arr.indexOf(this.justify) > -1 ? this.justify : "";
    },
    _align() {
      // 垂直布局只有5种方式
      const arr = ["flex-start", "flex-end", "center", "baseline", "stretch"];
      return arr.indexOf(this.align) > -1 ? this.align : "";
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../them-chalk/grid.less";
</style>



