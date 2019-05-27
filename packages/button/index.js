import DButton from './src/button.vue';

DButton.install = function (Vue) {
    Vue.component(DButton.name, DButton);
}
export default DButton;