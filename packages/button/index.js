import DogButton from './src/button.vue';

DogButton.install = function (Vue) {
    Vue.component(DogButton.name, DogButton);
}
export default DogButton;