let code = {}

code.new = `
    /* 改变主题色变量 */
    $primary-color: green;

    @import "~vsuit/dist/styles/vsuit.css";
`
code.main = `
    import Vue from 'vue'
    import App from 'components/app.vue';
    import vsuit from 'vuit'
    import './vsuit-variables.scss'

    Vue.use(vsuit)
`


export default code
