<template>
    <div class="other">
        <div class="title1">
            Transfer 传输框
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap">
                <Transfer id="transfer1" :data="transfer1.data" sumable></Transfer>
                <br/>
                <Transfer id="transfer2" :data="transfer1.data" :check-all=false></Transfer>
                <div class="q-title">说明：</div>
                <div>
                    最简单的传输框，设置data属性传入源数据,设置check-all=false可去除全选，默认有全选
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <!-- <div class="title2">
                增加搜索：
            </div>
            <div class="wrap">
                <Transfer id="transfer3" :data="transfer1.data"></Transfer>
                <div class="q-title">说明：</div>
                <div>
                    自定义年份位置，调整样式
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div> -->
            <div class="title2">
                自定义：
            </div>
            <div class="wrap">
                <Transfer id="transfer4" :data="transfer1.data" :titles="['source','target']">
                    <span slot="back">《到左边</span>
                    <span slot="to">到右边》</span>
                </Transfer>
                <div class="q-title">说明：</div>
                <div>
                    设置slot自定义
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.custom" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Transfer【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <!-- <div class="q-title">Transfer【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table> -->
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/view/transfer'
export default {
  data () {
    return {
        code:Code,
        transfer1:{
            titles:["source","target"],
            data:this.generateData()
        },
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
                    prop:'id',
                    description:'id,必须',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'data',
                    description:'数据',
                    type:'Array',
                    option:'-',
                    default:'[]'
                },
                {
                    prop:'check-all',
                    description:'是否全选',
                    type:'Boolean',
                    option:'-',
                    default:'true'
                },
                {
                    prop:'titles',
                    description:'标题',
                    type:'String',
                    option:'-',
                    default:'-'
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
                    name:'on-click-icon',
                    description:'点击图标时触发',
                    props:'点击事件'
                }
            ]
        },
    }
  },
  methods: {
      generateData(){
          const data = [];
          for(let i = 0;i<=20;i++){
              data.push({
                value:i,
                label:'选项'+i,
                disabled:false
              })
          }
          return data;
      }
  },
  mounted () {}
}
</script>
<style lang="sass">
</style>
