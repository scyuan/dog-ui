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
    <i
      class="dog-icon"
      :class="iconType"
      v-if="icon"
    ></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
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


