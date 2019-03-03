<template>
  <i
    class="dog-icon"
    :class="iconType"
  ></i>
</template>
<script>
export default {
  name: "DogIcon",
  props: {
    icon: {
      type: String,
      default: ""
    }
  },
  computed: {
    iconType() {
      return this.icon;
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../them-chalk/icon.less";
</style>


