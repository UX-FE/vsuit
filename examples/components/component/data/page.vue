<template>
    <div class="other">
        <div class="title1">
            Page 分页
        </div>
        <div class="mItem">
            <div class="title2">
                使用：
            </div>
            <div class="wrap">
                <Page :pages="pages1" :current=6>
                    <span slot="pre">上一页</span>
                    <span slot="next">下一页</span>
                    <span slot="prefold"><<</span>
                    <span slot="nextfold">>></span>
                </Page>
                <div class="q-title">说明：</div>
                <div>
                   最简单的分页，设置pages传入分页数据，设置current传入当前页数，通过slot自定义快捷跳转
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                输入跳转：
            </div>
            <div class="wrap">
                <Page :pages="pages1" :current=6 showJump>
                    <span slot="pre">上一页</span>
                    <span slot="next">下一页</span>
                    <span slot="prefold"><<</span>
                    <span slot="nextfold">>></span>
                </Page>
                <div class="q-title">说明：</div>
                <div>
                   设置showJump,显示输入跳转功能
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.jump" lang="html"></DCode>
            </div>
            <div class="title2">
                无边框：
            </div>
            <div class="wrap">
                <Page :pages="pages1" :current=6 noborder showJump>
                    <span slot="pre">上一页</span>
                    <span slot="next">下一页</span>
                    <span slot="prefold"><<</span>
                    <span slot="nextfold">>></span>
                </Page>
                <div class="q-title">说明：</div>
                <div>
                   设置noborder,分页按钮无边框
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.noborder" lang="html"></DCode>
            </div>
            <div class="title2">
                显示切换每页页数：
            </div>
            <div class="wrap">
                <Page :pages="pages1" :current=6 showJump showOpts>
                    <span slot="pre">上一页</span>
                    <span slot="next">下一页</span>
                    <span slot="prefold"><<</span>
                    <span slot="nextfold">>></span>
                </Page>
                <div class="q-title">说明：</div>
                <div>
                   设置showOpts,可切换每页页数
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.noborder" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Page【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
                <div class="q-title">Page【evets】：</div>
                <Table type="bordered" :thead="events.thead" :data="events.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/data/page';
export default {
  data() {
    return {
        code: Code,
        pages1:{
            "limit": 10,//一页显示多少条
            "slider": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],//分页数组
            "lastPage": false,//是否是最后一页
            "hasNextPage": true,//是否有下一页
            "nextPage": 2,//下一页
            "hasPrePage": false,//是否有上一页
            "endRow": 10,//当前页结束行标
            "prePage": 1,//上一页
            "totalCount":102,//总数
            "page": 1,//当前页
            "startRow": 1,//当前页开始行标
            "firstPage": true,//是否第一页
            "offset": 0,//与第一页的便宜
            "totalPages": 10//总页数
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
                    prop:'current',
                    description:'默认传入当前页数',
                    type:'Number',
                    option:'-',
                    default:'1'
                },
                {
                    prop:'pageSize',
                    description:'默认传入一页数目',
                    type:'Number',
                    option:'-',
                    default:'10'
                },
                {
                    prop:'pageOpts',
                    description:'可选择的一页数目选择数组',
                    type:'Array',
                    option:'-',
                    default:'[10,20,30,40]'
                },
                {
                    prop:'noborder',
                    description:'设置无边框',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'pages',
                    description:'分页数据',
                    type:'Object',
                    option:'',
                    default:'{}'
                },
                {
                    prop:'showOpts',
                    description:'显示切换页数',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'showJump',
                    description:'显示跳转',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                }
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
                    name:'on-change',
                    description:'页数改变时触发',
                    props:'切换的页数'
                },
                {
                    name:'on-change-size',
                    description:'每页显示数改变时触发',
                    props:'每页显示数'
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
