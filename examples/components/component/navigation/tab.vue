<template>
    <div class="other">
        <div class="title1">
            Tab 标签切换
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap">
                <Tab v-model="tab1" @on-click-tab="handleTabs1">
                    <TabContent label="待办事项" name="1">
                        待办事项
                    </TabContent>
                    <TabContent label="在办事项" name="2">
                        在办事项
                    </TabContent>
                    <TabContent label="办结事项" name="3">
                        办结事项
                    </TabContent>
                </Tab>
                <div class="q-title">说明：</div>
                <div>
                    最简单的tab标签切换，设置标签数据
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.baseTab" lang="html"></DCode>
            </div>
            <div class="title2">
                类型：
            </div>
            <div class="wrap">
                <Tab v-model="tab1" type="bordered" @on-click-tab="handleTabs1">
                    <TabContent label="待办事项" name="1">
                        待办事项
                    </TabContent>
                    <TabContent label="在办事项" name="2">
                        在办事项
                    </TabContent>
                    <TabContent label="办结事项" name="3">
                        办结事项
                    </TabContent>
                </Tab>
                <div class="q-title">说明：</div>
                <div>
                    最简单的tab标签切换，设置标签数据
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.baseTab" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Tab【props】</div>
                <Table type="bordered" :thead="tabapi.thead" :data="tabapi.data">
                </Table>
                <div class="q-title">Tab【events】</div>
                <Table type="bordered" :thead="events.thead" :data="events.data">
                </Table>
                <div class="q-title">TabContent【props】</div>
                <Table type="bordered" :thead="tabcapi.thead" :data="tabcapi.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/navigation/tab';
export default {
  data() {
    return {
        code: Code,
        tab1:'1',
        tabs1:{
            value:'1',
            tabs:[
                {
                    name:'1',
                    text:'待办事项',
                    active:true,
                    disabled:false
                },
                {
                    name:'2',
                    text:'在办事项',
                    active:true,
                    disabled:false
                },
                {
                    name:'3',
                    text:'办结事项',
                    active:true,
                    disabled:false
                }
            ]
        },
        tabapi:{
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
                    description:'当前tab值',
                    type:'String,Number',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'type',
                    description:'类型',
                    type:'String',
                    option:'noborder、bordered',
                    default:'-'
                },
            ]
        },
        tabcapi:{
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
                    prop:'name',
                    description:'tab值',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'label',
                    description:'tab名称',
                    type:'String',
                    option:'-',
                    default:'-'
                },
            ]
        },
        events:{
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
                    name:'on-click-tab',
                    description:'点击tab时触发',
                    props:'tab值'
                }
            ]
        },
    };
  },
  methods: {
      handleTabs1(){

      }
  },
  mounted() {}
};
</script>
<style lang="sass">
</style>
