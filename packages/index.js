import DogButton from './button';
import DogButtonGroup from './button-group';
import DogIcon from './icon';

const components = [DogButton, DogButtonGroup, DogIcon];

const install = function (Vue) {
    if (install.installed) return;
    components.map(component => {
        Vue.component(component.name, component)
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    DogButton
}