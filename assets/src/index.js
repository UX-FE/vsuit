// es6 polyfill 加载Polyfill类库，就能使用IE10等或者还没有提供对Promise支持的浏览器中使用Promise里规定的方法。
import 'core-js/fn/array/find';
import 'core-js/fn/array/find-index';

// //import component
// import Affix from './components/affix';
// import Alert from './components/alert';
// import AutoComplete from './components/auto-complete';
// import Avatar from './components/avatar';
// import BackTop from './components/back-top';
// import Badge from './components/badge';
// import Breadcrumb from './components/breadcrumb';
// import Button from './components/button';
// import Card from './components/card';
// import Carousel from './components/carousel';
// import Cascader from './components/cascader';
// import Checkbox from './components/checkbox';
// import Circle from './components/circle';
// import Collapse from './components/collapse';
// import ColorPicker from './components/color-picker';
// import Content from './components/content';
// import DatePicker from './components/date-picker';
import DHeader from './components/dheader';
import DNav from './components/dnav';
import DSider from './components/dsider';
// import Dropdown from './components/dropdown';
// import Footer from './components/footer';
// import Form from './components/form';
// import Header from './components/header';
// import Icon from './components/icon';
// import Input from './components/input';
// import InputNumber from './components/input-number';
// import Scroll from './components/scroll';
// import Layout from './components/layout';
// import LoadingBar from './components/loading-bar';
// import Menu from './components/menu';
// import Message from './components/message';
// import Modal from './components/modal';
// import Notice from './components/notice';
// import Page from './components/page';
// import Poptip from './components/poptip';
// import Progress from './components/progress';
// import Radio from './components/radio';
// import Rate from './components/rate';
// import Sider from './components/sider';
// import Slider from './components/slider';
// import Spin from './components/spin';
// import Steps from './components/steps';
// import Switch from './components/switch';
// import Table from './components/table';
// import Tabs from './components/tabs';
// import Tag from './components/tag';
// import Timeline from './components/timeline';
// import TimePicker from './components/time-picker';
// import Tooltip from './components/tooltip';
// import Transfer from './components/transfer';
// import Tree from './components/tree';
// import Upload from './components/upload';
// import {Row, Col} from './components/grid';
// import {Select, Option, OptionGroup} from './components/select';
//import Internationalization (language conversion)
import locale from './locale/index';

//Defining components
const components = {
    // Affix,
    // Alert,
    // AutoComplete,
    // Avatar,
    // BackTop,
    // Badge,
    // Breadcrumb,
    // BreadcrumbItem: Breadcrumb.Item,
    // Button,
    // ButtonGroup: Button.Group,
    // Card,
    // Carousel,
    // CarouselItem: Carousel.Item,
    // Cascader,
    // Checkbox,
    // CheckboxGroup: Checkbox.Group,
    // Col,
    // Collapse,
    // ColorPicker,
    // Content: Content,
    // DatePicker,
    DHeader,
    DSider,
    // Dropdown,
    // DropdownItem: Dropdown.Item,
    // DropdownMenu: Dropdown.Menu,
    // Footer: Footer,
    // Form,
    // FormItem: Form.Item,
    // Header: Header,
    // Icon,
    // Input,
    // InputNumber,
    // Scroll,
    // Sider: Sider,
    // Submenu: Menu.Sub,
    // Layout: Layout,
    // LoadingBar,
    // Menu,
    // MenuGroup: Menu.Group,
    // MenuItem: Menu.Item,
    // Message,
    // Modal,
    // Notice,
    // Option: Option,
    // OptionGroup,
    // Page,
    // Panel: Collapse.Panel,
    // Poptip,
    // Progress,
    // Radio,
    // RadioGroup: Radio.Group,
    // Rate,
    // Row,
    // Select,
    // Slider,
    // Spin,
    // Step: Steps.Step,
    // Steps,
    // Table,
    // Tabs: Tabs,
    // TabPane: Tabs.Pane,
    // Tag,
    // Timeline,
    // TimelineItem: Timeline.Item,
    // TimePicker,
    // Tooltip,
    // Transfer,
    // Tree,
    // Upload
};
//Defining uxkit objects
const uxkit = {
    ...components,
    // iButton: Button,
    // iCircle: Circle,
    // iCol: Col,
    // iContent: Content,
    // iForm: Form,
    // iFooter: Footer,
    // iHeader: Header,
    // iInput: Input,
    // iMenu: Menu,
    // iOption: Option,
    // iProgress: Progress,
    // iSelect: Select,
    // iSwitch: Switch,
    // iTable: Table
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
    // Circle,
    // Switch,
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
