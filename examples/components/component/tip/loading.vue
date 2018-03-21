<template>
    <div class="other">
        <div class="title1">
            Loading 警告
        </div>
        <div class="mItem alert-demo-wrap">
            <div class="title2">
                使用：
            </div>
            <div class="wrap">
                <Loading></Loading>
                <div class="q-title">说明：</div>
                <div>
                    简单的loading
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                尺寸：
            </div>
            <div class="wrap">
                <Loading size="large"></Loading>
                <Loading></Loading>
                <Loading size="small"></Loading>
                <div class="q-title" mode="fix">说明：</div>
                <div>
                    设置size属性,改变loading大小。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.size" lang="html"></DCode>
            </div>
            <div class="title2">
                区域loading,控制显示：
            </div>
            <div class="wrap">
                <FormSwitch v-model="loading1" @on-toggle="loading1 = !loading1"></FormSwitch>
                <br/>
                <br/>
                <div class="demo-loading-wrap">
                    我是区域的内容
                    <Loading fix v-if="loading1"></Loading>
                </div>
                <div class="q-title" mode="fix">说明：</div>
                <div>
                    设置fix在区域固定居中显示。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.fix" lang="html"></DCode>
            </div>
            <div class="title2">
                自定义内容：
            </div>
            <div class="wrap">
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
                <div class="q-title">说明：</div>
                <div>
                    可自定义slot,slot内容存在时，icon属性失效。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.custom" lang="html"></DCode>
            </div>
            <div class="title2">
                整页加载：
            </div>
            <div class="wrap">
                <BaseButton type="primary" @on-click-btn="handleLoading2">整页加载，2.5秒后关闭</BaseButton>
                <BaseButton type="primary" @on-click-btn="handleLoading3">自定义内容</BaseButton>
                <div class="q-title">说明：</div>
                <div>
                    使用内置$Loading方法可以全局加载。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.full" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Loading【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/tip/loading';
export default {
  data() {
    return {
        code: Code,
        loading1:true,
        api:{
            thead:[
                {
                    column:'prop',
                    name:'属性',
                },
                {
                    column:'description',
                    name:'说明',
                },
                {
                    column:'type',
                    name:'属性',
                },
                {
                    column:'option',
                    name:'可选值',
                },
                {
                    column:'default',
                    name:'默认值',
                },
            ],
            data:[
                {
                    prop:'size',
                    description:'尺寸',
                    type:'String',
                    option:'large/small',
                    default:'-'
                },
                {
                    prop:'icon',
                    description:'图标',
                    type:'String',
                    option:'-',
                    default:'load-a'
                },
                {
                    prop:'fix',
                    description:'区域显示',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                }
            ]
        }
    };
  },
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
  },
  mounted() {}
};
</script>
<style lang="sass" scoped>
.demo-loading-wrap{
    width: 100%;
    height: 200px;
    padding:90px 0;
    text-align: center;
    border:1px solid #ccc;
    position:relative;
    margin-bottom:20px;
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
