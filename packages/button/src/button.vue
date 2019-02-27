<template>
  <button
    class="dog-button"
    :class="[`dog-button-${type}`]"
  >
    <slot>Default</slot>
  </button>
</template>
<script>
export default {
  name: "DogButton",
  props: {
    type: {
      type: String,
      default: "default"
    }
  }
};
</script>
<style lang="less" scoped>
.dog-button {
  line-height: 1.499;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  height: 32px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;
}
.dog-button:hover,
.dog-button:focus {
  color: #1890ff;
  border-color: #1890ff;
}
.dog-button:active,
.dog-button:focus {
  outline: 0;
}
.dog-button-primary {
  border: 1px solid #1890ff;
  background: #1890ff;
  color: #fff;
}
.dog-button-primary:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}
.dog-button-danger {
  border: 1px solid #f5222d;
  background: #f5222d;
  color: #fff;
}
.dog-button-primary:hover,
.dog-button-primary:focus,
.dog-button-danger:hover,
.dog-button-danger:focus {
  color: #fff;
}
.dog-button-danger:hover,
.dog-button-danger:focus {
  border-color: #f5222d;
}
.dog-button-text {
  color: #1890ff;
  border: 0;
  box-shadow: none;
  padding-left: 0;
  padding-right: 0;
}
</style>


