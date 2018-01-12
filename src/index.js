// es6 polyfill 加载Polyfill类库，就能使用IE10等或者还没有提供对Promise支持的浏览器中使用Promise里规定的方法。
import 'core-js/fn/array/find';
import 'core-js/fn/array/find-index';

//import component
//import base component
import BaseButton from './components/button';
//import example component
import DHeader from './components/dheader';
import DNav from './components/dnav';
import DSider from './components/dsider';
import DFooter from './components/dfooter';
import Date from './components/date';
import Dial from './components/dial';
import locale from './locale/index';

//Defining components
const components = {
    DHeader,
    DSider,
    DFooter,
    Date,
    Dial,
    BaseButton
};
//Defining uxkit objects
const uxkit = {
    ...components,
};
//Define the installation function
const install = function(Vue, opts = {}) {
    //Judge whether or not it has been install
    if (install.installed) return;
    locale.use(opts.locale);
    locale.i18n(opts.i18n);

    Object.keys(uxkit).forEach(key => {
        Vue.component(key, uxkit[key]);
    });

    // Vue.prototype.$Loading = LoadingBar;
    // Vue.prototype.$Message = Message;
    // Vue.prototype.$Modal = Modal;
    // Vue.prototype.$Notice = Notice;
    // Vue.prototype.$Spin = Spin;
};

// auto install while vue exist
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
//Define API
const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    locale: locale.use,
    i18n: locale.i18n,
    install,
    ...components
};
//Define API.lang
API.lang = (code) => {
    const langObject = window['uxkit/locale'].default;
    if (code === langObject.i.locale) locale.use(langObject);
    else console.log(`The ${code} language pack is not loaded.`); // eslint-disable-line no-console
};
//exports API
module.exports.default = module.exports = API;   // eslint-disable-line no-undef
