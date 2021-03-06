// es6 polyfill 加载Polyfill类库，就能使用IE10等或者还没有提供对Promise支持的浏览器中使用Promise里规定的方法。
import 'core-js/fn/array/find'
import 'core-js/fn/array/find-index'

console.log(11111111111)
// import component
// import base component
import Row from './components/row'
import Col from './components/col'
import Layout from './components/layout'
import Header from './components/header'
import Sider from './components/sider'
import Main from './components/main'
import Footer from './components/footer'
import Icon from './components/icon'
import BaseButton from './components/button'
import ButtonGroup from './components/buttongroup'
// import form component
import FormInput from './components/input'
import Select from './components/select'
import FormSwitch from './components/switch'
import Rate from './components/rate'
import Upload from './components/upload'
import Option from './components/option'
import OptionGroup from './components/optiongroup'
import Radio from './components/radio'
import RadioGroup from './components/radiogroup'
import Checkbox from './components/checkbox'
import CheckboxGroup from './components/checkboxgroup'
import Form from './components/form'
import FormItem from './components/formitem'
// import dialog component
import Modal from './components/modal'
// import tip component
import Alert from './components/alert'
import Loading from './components/loading'
import Tooltip from './components/tooltip'
import Bubble from './components/bubble'
// import data component
import Table from './components/table'
import Page from './components/page'
import Tree from './components/tree'
import TreeNode from './components/treenode'
import Progress from './components/progress'
import Tag from './components/tag'
import TagGroup from './components/taggroup'
import Badge from './components/badge'
// import navigation component
import Step from './components/step'
import StepItem from './components/stepitem'
import Bread from './components/bread'
import BreadItem from './components/breaditem'
import Tab from './components/tab'
import TabContent from './components/tabcontent'
import Menu from './components/menu'
import MenuGroup from './components/menugroup'
import MenuItem from './components/menuitem'
import SubMenu from './components/submenu'
import DropDown from './components/dropdown'
import DropDownList from './components/dropdownlist'
import DropDownItem from './components/dropdownitem'
// import view component
import Avatar from './components/avatar'
import Card from './components/card'
import CardGroup from './components/cardgroup'
import Transfer from './components/transfer'
import TimeLine from './components/timeline'
import Scroll from './components/scroll'
import TimeLineItem from './components/timelineitem'
import Carousel from './components/carousel'
import CarouselItem from './components/carouselitem'
import Collapse from './components/collapse'
import CollapseItem from './components/collapseitem'
import BackTop from './components/backtop'
// import example component
import DSider from './components/dsider'
import DFooter from './components/dfooter'
import DCode from './components/dcode'
import Date from './components/date'
import Dial from './components/dial'

import locale from './locale/index'

// Defining components
const components = {
  Row,
  Col,
  Layout,
  Header,
  Sider,
  Main,
  Footer,
  Icon,
  Select,
  FormSwitch,
  Option,
  OptionGroup,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem,
  Table,
  Page,
  Tree,
  TreeNode,
  Progress,
  Tooltip,
  Bubble,
  Tag,
  TagGroup,
  Badge,
  DSider,
  DFooter,
  DCode,
  Date,
  Dial,
  Avatar,
  BaseButton,
  ButtonGroup,
  Transfer,
  TimeLine,
  TimeLineItem,
  Scroll,
  Carousel,
  CarouselItem,
  BackTop,
  Tab,
  TabContent,
  Step,
  StepItem,
  Bread,
  BreadItem,
  Rate,
  Upload,
  Collapse,
  CollapseItem,
  FormInput,
  Card,
  CardGroup,
  Menu,
  MenuItem,
  MenuGroup,
  SubMenu,
  DropDown,
  DropDownList,
  DropDownItem,
  Modal,
  Alert,
  Loading
}

const vsuit = {
  ...components
}
// Define the installation function
const install = function (Vue, opts = {}) {
    // Judge whether or not it has been install
  if (install.installed) return
  locale.use(opts.locale)
  locale.i18n(opts.i18n)

  Object.keys(vsuit).forEach(key => {
    Vue.component(key, vsuit[key])
  })
  Vue.prototype.$Modal = Modal
  Vue.prototype.$Loading = Loading

    // Vue.prototype.$Loading = LoadingBar;
    // Vue.prototype.$Message = Message;
    // Vue.prototype.$Modal = Modal;
    // Vue.prototype.$Notice = Notice;
    // Vue.prototype.$Spin = Spin;
}

// auto install while vue exist
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// Define API
const API = {
  version: process.env.VERSION, // eslint-disable-line no-undef
  locale: locale.use,
  i18n: locale.i18n,
  install,
  ...components
}
// Define API.lang
API.lang = (code) => {
  const langObject = window['vsuit/locale'].default
  if (code === langObject.i.locale) locale.use(langObject)
  else console.log(`The ${code} language pack is not loaded.`) // eslint-disable-line no-console
}
// exports API
module.exports.default = module.exports = API   // eslint-disable-line no-undef
