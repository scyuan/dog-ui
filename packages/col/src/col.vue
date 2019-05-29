<template>
  <div :class="['d-col',`d-col-${span}`]" :style="_style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "DCol",
  props: {
    span: {
      type: Number,
      default: 0
    }
  },
  computed: {
    _style() {
      // 拿父亲组件的gutter属性
      return {
        "padding-right": this.$parent.gutter / 2 + "px",
        "padding-left": this.$parent.gutter / 2 + "px"
      };
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../them-chalk/grid.less";
</style>


