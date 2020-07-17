import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';

// Global Components in Vue dev
import MyWebComponent from './components/MyWebComponent';
import MainMenu from './components/MainMenu';
import Button from './components/Button';
import Alert from './components/Alert';

const WrappedComponent = wrap(Vue, MyWebComponent);
const WrappedMenu = wrap(Vue, MainMenu);
const WrappedButton = wrap(Vue, Button);
const WrappedAlert = wrap(Vue, Alert);

window.customElements.define('my-web-component', WrappedComponent);
window.customElements.define('ceg-main-menu', WrappedMenu);
window.customElements.define('ceg-button', WrappedButton);
window.customElements.define('ceg-alert', WrappedAlert);
