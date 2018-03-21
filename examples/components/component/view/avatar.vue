<template>
    <div class="other">
        <div class="title1">
            Avatar 头像
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap">
                <Avatar icon="person"></Avatar>
                <Avatar icon="android-person"></Avatar>
                <Avatar icon="android-contact"></Avatar>
                <br/>
                <br/>
                <Avatar type="circle" icon="person"></Avatar>
                <Avatar type="square" icon="person"></Avatar>
                <Avatar type="noback">demo@126.com</Avatar>
                <div class="q-title">说明：</div>
                <div>
                    设置icon属性设置头像图标，设置type属性设置头像形状，不要背景设置type为noback。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                缩放：
            </div>
            <div class="wrap">
                <Avatar icon="person" scale="1.2"></Avatar>
                <Avatar icon="person"></Avatar>
                <Avatar icon="person" scale="0.8"></Avatar>
                <div class="q-title">说明：</div>
                <div>
                    设置scale属性可以缩放头像，跳转大小。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.scale" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Avatar【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/view/avatar';
export default {
  data() {
    return {
        code: Code,
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
                    option:'circle/square/noback',
                    default:'circle'
                },
                {
                    prop:'icon',
                    description:'图标',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'scale',
                    description:'缩放比例',
                    type:'Number,String',
                    option:'-',
                    default:'1'
                },
            ]
        },
    };
  },
  methods: {
  },
  mounted() {}
};
</script>
<style lang="sass">
</style>
