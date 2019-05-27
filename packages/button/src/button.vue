<template>
  <button
    class="d-button"
    @click="handleClick"
    :disabled="buttonDisabled"
    :class="[`d-button-${type}`,{
      'd-button_disabled':buttonDisabled,
      'd-button-text_disabled':buttonDisabled && type=='text'
    }]"
  >
    <i class="d-icon" :class="iconType" v-if="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "DButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    icon: {
      type: String,
      default: ""
    },
    disabled: Boolean
  },
  computed: {
    buttonDisabled: function() {
      return this.disabled;
    },
    iconType: function() {
      return this.icon;
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../them-chalk/button.less";
@import "../../them-chalk/icon.less";
</style>


