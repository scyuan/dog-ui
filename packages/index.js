import DButton from './button';
import DButtonGroup from './button-group';
import DIcon from './icon';
import DRow from './row'
import DCol from './col'
import DAlert from './alert';

const components = [DButton, DButtonGroup, DIcon, DRow, DCol, DAlert];

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
    DButton
}