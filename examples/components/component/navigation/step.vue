<template>
    <div class="other">
        <div class="title1">
            Step 步骤引导
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap">
                <Step :current="base">
                    <StepItem title="步骤1" content="这里是描述信息"></StepItem>
                    <StepItem title="步骤2" content="这里是描述信息"></StepItem>
                    <StepItem title="步骤3" content="这里是描述信息"></StepItem>
                    <StepItem title="步骤4" content="这里是描述信息"></StepItem>
                </Step>
                <br/>
                <BaseButton type="primary" @on-click-btn="nextBase">下一步</BaseButton>
                <div class="q-title">说明：</div>
                <div>
                    最简单的Step,设置current属性代表目前在哪个步骤。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                自定义图标：
            </div>
            <div class="wrap">
                <Step :current="2">
                    <StepItem title="步骤1" content="这里是描述信息" icon="clipboard"></StepItem>
                    <StepItem title="步骤2" content="这里是描述信息" icon="android-camera"></StepItem>
                    <StepItem title="步骤3" content="这里是描述信息" icon="android-mail"></StepItem>
                </Step>
                <div class="q-title">说明：</div>
                <div>
                    设置icon属性可以自定义图标。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.custom" lang="html"></DCode>
            </div>
            <div class="title2">
                状态：
            </div>
            <div class="wrap">
                <Step :current="1" status="error">
                    <StepItem title="步骤1" content="这里是描述信息"></StepItem>
                    <StepItem title="步骤2" content="这里是描述信息"></StepItem>
                    <StepItem title="步骤3" content="这里是描述信息"></StepItem>
                </Step>
                <div class="q-title">说明：</div>
                <div>
                    设置status属性可以设置当前步骤状态。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.status" lang="html"></DCode>
            </div>
            <div class="title2">
                垂直方向：
            </div>
            <div class="wrap">
                <Step :current="1" vertical>
                    <StepItem title="步骤1" content="这里是描述信息"></StepItem>
                    <StepItem title="步骤2" content="这里是描述信息"></StepItem>
                    <StepItem title="步骤3" content="这里是描述信息"></StepItem>
                </Step>
                <div class="q-title">说明：</div>
                <div>
                    设置vertical属性可以设置垂直状态。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.vertical" lang="html"></DCode>
            </div>
            <!-- <div class="title2">
                面包屑步骤引导：
            </div>
            <div class="wrap">
                <Step :current="1" type="bread">
                    <StepItem title="步骤1" content="这里是描述信息"></StepItem>
                    <StepItem title="步骤2" content="这里是描述信息"></StepItem>
                    <StepItem title="步骤3" content="这里是描述信息"></StepItem>
                </Step>
                <div class="q-title">说明：</div>
                <div>
                    设置vertical属性可以设置垂直状态。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.vertical" lang="html"></DCode>
            </div> -->
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Step【props】</div>
                <Table type="bordered" :thead="step.thead" :data="step.data">
                </Table>
                <div class="q-title">StepItem【props】</div>
                <Table type="bordered" :thead="stepitem.thead" :data="stepitem.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/navigation/step';
export default {
  data() {
    return {
        code: Code,
        base:0,
        step:{
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
                // {
                //     prop:'type',
                //     description:'类型,可设置为面包屑类型',
                //     type:'String',
                //     option:'bread',
                //     default:'-'
                // },
                {
                    prop:'current',
                    description:'当前步骤，从0开始',
                    type:'Number',
                    option:'-',
                    default:'0'
                },
                {
                    prop:'status',
                    description:'状态',
                    type:'String',
                    option:'wait, process, finish, error',
                    default:'process'
                },
                {
                    prop:'vertical',
                    description:'垂直',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
            ]
        },
        stepitem:{
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
                    prop:'title',
                    description:'标题',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'content',
                    description:'内容',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'icon',
                    description:'图标',
                    type:'Boolean',
                    option:'-',
                    default:'-'
                }
            ]
        }
    };
  },
  methods: {
      nextBase(){
         if(this.base<4){
          this.base += 1;
         }
      }
  },
  mounted() {}
};
</script>
<style lang="sass">
</style>
