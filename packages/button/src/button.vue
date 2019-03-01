<template>
  <button
    class="dog-button"
    @click="handleClick"
    :disabled="buttonDisabled"
    :class="[`dog-button-${type}`,{
      'dog-button_disabled':buttonDisabled,
      'dog-button-text_disabled':buttonDisabled && type=='text'
    }]"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "DogButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    disabled: Boolean
  },
  computed: {
    buttonDisabled: function() {
      return this.disabled;
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
</style>


