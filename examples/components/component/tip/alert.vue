<template>
    <div class="other">
        <div class="title1">
            Alert 警告
        </div>
        <div class="mItem alert-demo-wrap">
            <div class="title2">
                类型：
            </div>
            <div class="wrap">
                <Alert type="info">这是一些提示信息</Alert>
                <Alert type="success">告诉你成功了</Alert>
                <Alert type="warn">警告你</Alert>
                <Alert type="error">大侠，报错了</Alert>
                <div class="q-title">说明：</div>
                <div>
                    直接显示在页面的重要提示信息，类型有info、success、warn、error四中
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.type" lang="html"></DCode>
            </div>
            <div class="title2">
                模式：
            </div>
            <div class="wrap">
                <BaseButton type="primary" @on-click-btn="alert1=true">info</BaseButton>
                <BaseButton type="primary" @on-click-btn="alert2=true">success</BaseButton>
                <BaseButton type="primary" @on-click-btn="alert3=true">warn</BaseButton>
                <BaseButton type="primary" @on-click-btn="alert4=true">error</BaseButton>
                <Alert type="info" mode="fix" v-model="alert1" @on-close="handleClose1">这是一些提示信息</Alert>
                <Alert type="success" mode="fix" v-model="alert2" @on-close="handleClose2">告诉你成功了</Alert>
                <Alert type="warn" mode="fix" v-model="alert3" @on-close="handleClose3">警告你</Alert>
                <Alert type="error" mode="fix" v-model="alert4" @on-close="handleClose4">大侠，报错了</Alert>
                <div class="q-title" mode="fix">说明：</div>
                <div>
                    设置mode属性为fix,警告浮动。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.mode" lang="html"></DCode>
            </div>
            <div class="title2">
                自动消失和停留时间：
            </div>
            <div class="wrap">
                <BaseButton type="primary" @on-click-btn="alert5=true">自动消失</BaseButton>
                <BaseButton type="primary" @on-click-btn="alert6=true">停留时间为10S</BaseButton>
                <Alert type="info" mode="fix" v-model="alert5" @on-close="handleClose5" auto-hidden >这是一些提示信息</Alert>
                <Alert type="success" mode="fix" v-model="alert6" @on-close="handleClose6" auto-hidden :duration=10>告诉你成功了</Alert>
                <div class="q-title" mode="fix">说明：</div>
                <div>
                    设置auto-hidden属性警告可以自动消失，默认1.5秒后消失，设置duration属性自定义停留时间
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.hidden" lang="html"></DCode>
            </div>
            <div class="title2">
                关闭方式：
            </div>
            <div class="wrap">
                <Alert type="info" :closable="false">这是一些提示信息</Alert>
                <Alert type="info" >这是一些提示信息<span slot="close">知道了</span></Alert>
                <div class="q-title">说明：</div>
                <div>
                    设置closable为false可以设置不可关闭，可以自定义名为close的slot定义关闭方式
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.close" lang="html"></DCode>
            </div>
            <div class="title2">
                显示图标：
            </div>
            <div class="wrap">
                <Alert type="info" show-icon>这是一些提示信息</Alert>
                <Alert type="success" show-icon>告诉你成功了</Alert>
                <Alert type="warn" show-icon>警告你</Alert>
                <Alert type="error" show-icon>大侠，报错了</Alert>
                <div class="q-title">说明：</div>
                <div>
                    设置show-icon显示图标
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.icon" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Alert【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Alert【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/tip/alert';
export default {
  data() {
    return {
        code: Code,
        alert1:false,
        alert2:false,
        alert3:false,
        alert4:false,
        alert5:false,
        alert6:false,
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
                    prop:'type',
                    description:'类型',
                    type:'String',
                    option:'success/info/warn/error',
                    default:'info'
                },
                {
                    prop:'mode',
                    description:'模式',
                    type:'String',
                    option:'normal/fix',
                    default:'normal'
                },
                {
                    prop:'auto-hidden',
                    description:'自动消失',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'duration',
                    description:'停留时间',
                    type:'Number',
                    option:'-',
                    default:'1.5'
                },
                {
                    prop:'closable',
                    description:'是否可关闭',
                    type:'Boolean',
                    option:'-',
                    default:'true'
                },
                {
                    prop:'showIcon',
                    description:'显示图标',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                }
            ]
        },
        event:{
            thead:[
                {
                    column:'name',
                    name:'事件名称',
                },
                {
                    column:'description',
                    name:'说明',
                },
                {
                    column:'props',
                    name:'参数',
                }
            ],
            data:[
                {
                    name:'on-close',
                    description:'关闭警告时触发',
                    props:'点击事件'
                }
            ]
        },
    };
  },
  methods: {
    //   handleClose1(val){
    //       this.alert1 = val;
    //   },
    //   handleClose2(val){
    //       this.alert2 = val;
    //   },
    //   handleClose3(val){
    //       this.alert3 = val;
    //   },
    //   handleClose4(val){
    //       this.alert4 = val;
    //   },
    //   handleClose5(val){
    //       this.alert5 = val;
    //   },
    //   handleClose6(val){
    //       this.alert6 = val;
    //   },
  },
  mounted() {}
};
</script>
<style lang="sass">
.alert-demo-wrap{
    .vsu-alert{
        margin-bottom:20px;
    }
}
</style>
