<template>
    <div class="other">
        <div class="title1">
            Modal 对话框
        </div>
        <div class="mItem">
            <div class="title2">
                使用：
            </div>
            <div class="wrap">
                <BaseButton type="primary" @on-click-btn="modal1=true">自定义内容的对话框</BaseButton>
                <BaseButton type="primary" @on-click-btn="modal2=true">自定义主体的对话框</BaseButton>
                <Modal v-model="modal1" @on-close="handleClose1">
                    <div class="demo-1">自定义的内容</div>
                </Modal>
                <Modal v-model="modal2" title="标题" @on-close="handleClose2">
                    <div slot="body">
                        <P>主体的内容1</P>
                        <P>主体的内容2</P>
                    </div>
                </Modal>
                <div class="q-title">说明：</div>
                <div>
                   简单的对话框，可自定义内容，默认点击窗口关闭对话框
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Modal【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>

            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/dialog/modal';
export default {
  data() {
    return {
        code: Code,
        modal1:false,
        modal2:false,
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
                    prop:'value',
                    description:'对话框是否显示',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'width',
                    description:'宽度',
                    type:'String，Number',
                    option:'-',
                    default:'520'
                },
                {
                    prop:'title',
                    description:'标题',
                    type:'String',
                    option:'-',
                    default:'-'
                }
            ]
        },
    };
  },
  methods: {
      handleClose1(val){
          this.modal1 = val;
      },
      handleClose2(val){
          this.modal2 = val;
      }
  },
  mounted() {}
};
</script>
<style lang="sass">
    .demo-1{
        text-align:center;
        font-size:14px;
        padding:30px 20px;
    }
</style>
