<template>
  <div class="dog-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "DogButtonGroup"
};
</script>
<style lang="less" scoped>
@import "../../them-chalk/button-group.less";
</style>
