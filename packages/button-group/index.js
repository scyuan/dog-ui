import DogButtonGroup from './src/button-group.vue';

DogButtonGroup.install = function (Vue) {
    Vue.component(DogButtonGroup.name, DogButtonGroup);
}

export default DogButtonGroup;