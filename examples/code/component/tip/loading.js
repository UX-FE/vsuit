let code = {}

code.base = `
    <Loading></Loading>
`
code.size = `
    <Loading size="large"></Loading>
    <Loading></Loading>
    <Loading size="small"></Loading>
`
code.fix = `
    <template>
        <FormSwitch v-model="loading1" @on-toggle="loading1 = !loading1"></FormSwitch>
        <div class="demo-loading-wrap">
            我是区域的内容
            <Loading fix v-if="loading1"></Loading>
        </div>
    <template>
    <style lang="sass" scoped>
        .demo-loading-wrap{
            width: 100%;
            height: 200px;
            padding:90px 0;
            text-align: center;
            border:1px solid #ccc;
            position:relative;
        }
    </style>
`

code.custom = `
    <div class="demo-loading-wrap">
        我是区域的内容
        <Loading fix icon="load-d"></Loading>
    </div>
    <div class="demo-loading-wrap">
        我是区域的内容
        <Loading fix>加载中</Loading>
    </div>
    <div class="demo-loading-wrap">
        我是区域的内容
        <Loading fix>
            <Icon type="load-c" size=18 class="demo-icon-load"></Icon>
            <div>Loading</div>
        </Loading>
    </div>
`

code.full = `
    <template>
        <BaseButton type="primary" @on-click-btn="handleLoading2">整页加载，2.5秒后关闭</BaseButton>
        <BaseButton type="primary" @on-click-btn="handleLoading3">自定义内容</BaseButton>
    <template>
    export default {
      methods: {
        handleLoading2 () {
            this.$Loading.show();
            setTimeout(() => {
                this.$Loading.hide();
            }, 2500);
        },
        handleLoading3 () {
            this.$Loading.show({
                render: (h) => {
                    return h('div', [
                        h('Icon', {
                            'class': 'demo-icon-load',
                            props: {
                                type: 'load-c',
                                size: 18
                            }
                        }),
                        h('div', 'Loading')
                    ])
                }
            });
            setTimeout(() => {
                this.$Loading.hide();
            }, 2500);
        }
      }
    };
    <style lang="sass" scoped>
        .demo-loading-wrap{
            width: 100%;
            height: 200px;
            padding:90px 0;
            text-align: center;
            border:1px solid #ccc;
            position:relative;
        }
        .demo-icon-load{
            animation: rotating 2s linear infinite;
            -webkit-animation: rotating 2s linear infinite;
        }
        @keyframes rotating
        {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(1turn);
            }
        }
    </style>
`

export default code
