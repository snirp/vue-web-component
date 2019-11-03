import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import MyWebComponent from './components/MyWebComponent';
import Button from './components/Button';

const WrappedElement = wrap(Vue, MyWebComponent);
const WrappedButton = wrap(Vue, Button);

window.customElements.define('my-web-component', WrappedElement);
window.customElements.define('ceg-button', WrappedButton);
