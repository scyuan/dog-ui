import DAlert from './src/alert.vue';

DAlert.install = function (Vue) {
  Vue.component(DAlert.name, DAlert)
}
export default DAlert;