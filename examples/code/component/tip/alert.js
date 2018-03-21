let code = {}

code.type = `
    <Alert type="info">这是一些提示信息</Alert>
    <Alert type="success">告诉你成功了</Alert>
    <Alert type="warn">警告你</Alert>
    <Alert type="error">大侠，报错了</Alert>
`

code.mode = `
    <template>
        <BaseButton type="primary" @on-click-btn="alert1=true">info</BaseButton>
        <BaseButton type="primary" @on-click-btn="alert2=true">success</BaseButton>
        <BaseButton type="primary" @on-click-btn="alert3=true">warn</BaseButton>
        <BaseButton type="primary" @on-click-btn="alert4=true">error</BaseButton>
        <Alert type="info" mode="fix" v-model="alert1" @on-close="handleClose1">这是一些提示信息</Alert>
        <Alert type="success" mode="fix" v-model="alert2" @on-close="handleClose2">告诉你成功了</Alert>
        <Alert type="warn" mode="fix" v-model="alert3" @on-close="handleClose3">警告你</Alert>
        <Alert type="error" mode="fix" v-model="alert4" @on-close="handleClose4">大侠，报错了</Alert>
    </template>
    export default {
        data() {
            return {
                alert1:false,
                alert2:false,
                alert3:false,
                alert4:false,
            };
        },
        methods: {
            handleClose1(val){
                this.alert1 = val;
            },
            handleClose2(val){
                this.alert2 = val;
            },
            handleClose3(val){
                this.alert3 = val;
            },
            handleClose4(val){
                this.alert4 = val;
            }
        },
        mounted() {}
    };
`
code.hidden = `
    <template>
        <BaseButton type="primary" @on-click-btn="alert5=true">自动消失</BaseButton>
        <BaseButton type="primary" @on-click-btn="alert6=true">停留时间为10S</BaseButton>
        <Alert type="info" mode="fix" v-model="alert5" @on-close="handleClose5" auto-hidden >这是一些提示信息</Alert>
        <Alert type="success" mode="fix" v-model="alert6" @on-close="handleClose6" auto-hidden :duration=10>告诉你成功了</Alert>
    </template>
    export default {
        data() {
            return {
                alert5:false,
                alert6:false,
            };
        },
        methods: {
            handleClose5(val){
                this.alert5 = val;
            },
            handleClose6(val){
                this.alert6 = val;
            },
        },
        mounted() {}
    };
`

code.close = `
    <Alert type="info" :closable="false">这是一些提示信息</Alert>
    <Alert type="info" >这是一些提示信息<span slot="close">知道了</span></Alert>
`

code.icon = `
    <Alert type="info" show-icon>这是一些提示信息</Alert>
    <Alert type="success" show-icon>告诉你成功了</Alert>
    <Alert type="warn" show-icon>警告你</Alert>
    <Alert type="error" show-icon>大侠，报错了</Alert>
`


export default code
