<template>
  <div
    :class="['d-alert',_type?`d-alert-${_type}`:'',_border?`d-alert-${_border}`:'',_center?'is-alert-center':'']"
  >
    <i class="d-icon" :class="_icon" v-if="_icon"></i>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "DAlert",
  props: {
    border: String,
    type: String,
    center: String,
    icon: String
  },
  computed: {
    _type() {
      const types = ["success", "danger", "info"];
      return types.indexOf(this.type) > -1 ? this.type : "";
    },
    _border() {
      const types = ["success", "danger", "info"];
      if (types.indexOf(this.type) > -1) {
        return this.border != undefined &&
          (this.border === "" || this.border.length > 0)
          ? `border_${this.type}`
          : "";
      } else {
        return this.border != undefined &&
          (this.border === "" || this.border.length > 0)
          ? `border`
          : "";
      }
    },
    _center() {
      return this.center != undefined &&
        (this.center === "" || this.center.length > 0)
        ? "center"
        : "";
    },
    _icon() {
      return this.icon ? this.icon : "";
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../them-chalk/alert.less";
@import "../../them-chalk/icon.less";
</style>

