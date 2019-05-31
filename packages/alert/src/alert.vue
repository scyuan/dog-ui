<template>
  <transition name="alert-fade" mode="in-out">
    <div
      v-if="visible"
      :class="['d-alert',_type?`d-alert-${_type}`:'',_border?`d-alert-${_border}`:'',_center?'is-alert-center':'']"
    >
      <i class="d-icon" :class="_icon" v-if="_icon"></i>
      <i
        class="d-alert-btn"
        :class="closeText?'d-alert-btn_close':'d-icon md-close d-alert_icon'"
        v-if="closable"
        @click="close"
      >{{ closeText }}</i>
      <div class="d-alert_title" v-if="title">{{ title }}</div>
      <div :class="['d-alert_content',title?'has-alert-title':'']">
        <slot name="default"></slot>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "DAlert",
  props: {
    border: Boolean,
    type: String,
    center: Boolean,
    icon: String,
    closable: Boolean,
    closeText: String,
    title: String
  },
  data() {
    return {
      visible: true
    };
  },
  computed: {
    _type() {
      const types = ["success", "danger", "info"];
      return types.indexOf(this.type) > -1 ? this.type : "";
    },
    _border() {
      const types = ["success", "danger", "info"];
      if (types.indexOf(this.type) > -1) {
        return this.border ? `border_${this.type}` : "";
      } else {
        return this.border ? `border` : "";
      }
    },
    _center() {
      return this.center ? "center" : "";
    },
    _icon() {
      return this.icon ? this.icon : "";
    }
  },
  methods: {
    close() {
      this.visible = false;
      this.$emit("close");
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../them-chalk/icon.less";
@import "../../them-chalk/alert.less";
</style>

