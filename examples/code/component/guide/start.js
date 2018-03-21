let code = {}

code.main = `
    import Vue from 'vue'
    import App from 'components/app.vue';
    import vsuit from 'vuit'
    import 'vuit/dist/styles/vsuit.css';

    Vue.use(vsuit)

    new Vue({
        el: '#app',
        router: router,
        render: h => h(App)
    })
`
code.need = `
    npm i vsuit -S
`


export default code
