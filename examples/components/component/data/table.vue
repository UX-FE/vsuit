<template>
    <div class="other">
        <div class="title1">
            Table 表格
        </div>
        <div class="mItem">
            <div class="title2">
                使用：
            </div>
            <div class="wrap">
                <Table :thead="table1.thead" :data="table1.data">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   最简单的表格，默认样式无边框无颜色，增加thead属性定义表头，增加data属性定义表数据
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                类型：
            </div>
            <div class="wrap">
                <Table :thead="table1.thead" :data="table1.data" type="strip">
                </Table>
                <br/>
                <Table :thead="table1.thead" :data="table1.data" type="zebra">
                </Table>
                <br/>
                <Table :thead="table1.thead" :data="table1.data" type="bordered">
                </Table>
                <br/>
                <div class="q-title">说明：</div>
                <div>
                   设置type属性改变表格类型，有strip、zebra和bordered三种类型，表示条形表格、斑马表格和带边框的表格,不设置为默认样式
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.type" lang="html"></DCode>
            </div>
            <div class="title2">
                增加序列号：
            </div>
            <div class="wrap">
                <Table :thead="table2.thead" :data="table2.data" order type="bordered">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置order属性增加序列号，固定某一列宽度，在thead数组中对应项增加width，格式为Number
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.order" lang="html"></DCode>
            </div>
            <div class="title2">
                增加标题：
            </div>
            <div class="wrap">
                <Table :thead="table1.thead" :data="table1.data" title="我是标题" type="bordered">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置title增加表格标题
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.title" lang="html"></DCode>
            </div>
            <div class="title2">
                排序：
            </div>
            <div class="wrap">
                <Table :thead="table3.thead" :data="table3.data" type="bordered" sortType="date">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置title增加表格标题
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.sort" lang="html"></DCode>
            </div>
            <div class="title2">
                单选：
            </div>
            <div class="wrap">
                <Table :thead="table1.thead" :data="table1.data" clickable type="bordered">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置clickable可选中某一行，被选中的行高亮显示
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.radio" lang="html"></DCode>
            </div>
            <div class="title2">
                多选：
            </div>
            <div class="wrap">
                <Table :thead="table4.thead" :data="table4.data" multi-select type="bordered">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置multi-select可多选
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.multi" lang="html"></DCode>
            </div>
            <div class="title2">
                自定义行：
            </div>
            <div class="wrap">
                <Table :thead="table1.thead" :data="table1.data" type="bordered">
                    <tr slot="tr"  v-for="(item,index) in table1.data" :key="index">
                        <td v-for="(itm,i) in table1.thead" :key="i">
                            <div class="cell">
                                <template v-if="itm.column==='name'">
                                    <BaseButton>{{item[itm.column]}}</BaseButton>
                                </template>
                                <template v-else>
                                    <span v-html="item[itm.column]"></span>
                                </template>
                            </div>  
                        </td>
                    </tr>
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   增加tr插槽可以自定义行
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.custom" lang="html"></DCode>
            </div>
            <div class="title2">
                展开行：
            </div> 
            <div class="wrap">
                <Table :thead="table5.thead" :data="table5.data" :expand="table5.expandRender" type="zebra">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置title增加表格标题
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.open" lang="html"></DCode>
            </div>
            <!-- <div class="title2">
                增加合计行：
            </div>
            <div class="wrap">
                <Table :thead="table1.thead" :data="table1.data" type="bordered">
                    <tr slot="sum">

                    </tr>
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置title增加表格标题
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.sum" lang="html"></DCode>
            </div> -->
            <!-- <div class="title2">
                筛选：
            </div>
            <div class="wrap">
                <Table :thead="table1.thead" :data="table1.data" title="我是标题" type="bordered">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置title增加表格标题
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.title" lang="html"></DCode>
            </div> -->
            <!-- <div class="title2">
                多级表头：
            </div>
            <div class="wrap">
                <Table :thead="table1.thead" :data="table1.data" title="我是标题" type="bordered">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置title增加表格标题
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.title" lang="html"></DCode>
            </div> -->
            <div class="title2">
                固定表头：
            </div>
            <div class="wrap">
                <Table :thead="table1.thead" :data="table1.data" title="我是标题" type="zebra" height="160">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置title增加表格标题
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.fix" lang="html"></DCode>
            </div>
            <!-- <div class="title2">
                表格的无数据和loading状态：
            </div>
            <div class="wrap">
                <Table :thead="table1.thead" :data="table1.data" title="我是标题" type="bordered">
                </Table>
                <div class="q-title">说明：</div>
                <div>
                   设置title增加表格标题
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.title" lang="html"></DCode>
            </div> -->
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Table【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Table【events】：</div>
                <Table type="bordered" :thead="event.thead" :data="event.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import expandRow from './table-expand.vue';
import Code from '../../../code/component/data/table';
export default {
  components: { expandRow },
  data() {
    return {
        code: Code,
        table1:{
            thead:[
                {
                    column:'date',
                    name:'日期'
                },
                {
                    column:'name',
                    name:'姓名'
                },
                {
                    column:'address',
                    name:'地址'
                },
            ],
            data:[
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                }
            ]
        },
        table2:{
            thead:[
                {
                    column:'order',
                    name:'序列',
                    width:100
                },
                {
                    column:'date',
                    name:'日期'
                },
                {
                    column:'name',
                    name:'姓名'
                },
                {
                    column:'address',
                    name:'地址'
                },
            ],
            data:[
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                }
            ]
        },
        table3:{
            thead:[
                {
                    column:'date',
                    name:'日期',
                    sort:true
                },
                {
                    column:'name',
                    name:'姓名',
                    sort:true
                },
                {
                    column:'address',
                    name:'地址',
                    sort:true
                },
            ],
            data:[
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                }
            ]
        },
        table4:{
            thead:[
                {
                    type:'selection',
                    width:80
                },
                {
                    column:'date',
                    name:'日期',
                    sort:true
                },
                {
                    column:'name',
                    name:'姓名',
                    sort:true
                },
                {
                    column:'address',
                    name:'地址',
                    sort:true
                },
            ],
            data:[
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                }
            ]
        },
        table5:{
            expandRender: (h, params) => {
                return h(expandRow, {
                    props: {
                        row: params.row
                    }
                })
            },
            thead:[
                {
                    type:'expand',
                    width:60
                },
                {
                    column:'date',
                    name:'日期'
                },
                {
                    column:'name',
                    name:'姓名'
                },
                {
                    column:'address',
                    name:'地址'
                },
            ],
            data:[
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                },
                {
                    date: '2018-01-02',
                    name: '微笑',
                    address: '广州市'
                }
            ]
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
                    prop:'type',
                    description:'类型',
                    type:'String',
                    option:'strip/zebra/bordered',
                    default:'-'
                },
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
                    name:'on-sorting',
                    description:'排序时触发',
                    props:'排序对应表头'
                },
                {
                    name:'on-click-row',
                    description:'点击某一行时触发',
                    props:'行数'
                }
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
    .square-badge{
        width:36px;
        height:36px;
        background:#ccc;
        border-radius:4px;
    }
    .text-badge{
        display:inline-block;
        padding-right:5px;
    }
</style>
