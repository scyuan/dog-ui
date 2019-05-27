<template>
  <div class="d-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "DButtonGroup"
};
</script>
<style lang="less" scoped>
@import "../../them-chalk/button-group.less";
</style>
