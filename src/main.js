import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
// import MyWebComponent from './components/MyWebComponent';
import Button from './components/Button';
import Alert from './components/Alert';

// const WrappedElement = wrap(Vue, MyWebComponent);
const WrappedButton = wrap(Vue, Button);
const WrappedAlert = wrap(Vue, Alert);

// window.customElements.define('my-web-component', WrappedElement);
window.customElements.define('ceg-button', WrappedButton);
window.customElements.define('ceg-alert', WrappedAlert);
