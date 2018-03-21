<template>
    <div class="other">
        <div class="title1">
            Card 卡片
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap">
                <Card style="width:350px;">
                    <div slot="head">
                        新增用户
                    </div>
                    <div slot="body">
                        <p style="color: #16BA5C;font-size: 40px;">12,310</p>
                    </div>
                    <div slot="footer">
                        日新增2.23%
                    </div>
                </Card>
                <div class="q-title">说明：</div>
                <div>
                    最简单的卡片，包含标题，内容和底栏，都需要具名slot分发
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                简单卡片：
            </div>
            <div class="wrap">
                <Card style="width:350px;">
                    <div>
                        <p>列表内容1</p>
                        <p>列表内容2</p>
                        <p>列表内容...</p>
                    </div>
                </Card>
                <div class="q-title">说明：</div>
                <div>
                    只有内容区域
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.simple" lang="html"></DCode>
            </div>
            <div class="title2">
                卡片组：
            </div>
            <div class="wrap">
                <CardGroup>
                    <Card style="width:25%;">
                        <div slot="head">
                            新增用户
                        </div>
                        <div slot="body">
                            <p style="color: #16BA5C;font-size: 40px;">12,310</p>
                        </div>
                        <div slot="footer">
                            日新增2.23%
                        </div>
                    </Card>
                    <Card style="width:25%;">
                        <div slot="head">
                            新增用户
                        </div>
                        <div slot="body">
                            <p style="color: #16BA5C;font-size: 40px;">12,310</p>
                        </div>
                        <div slot="footer">
                            日新增2.23%
                        </div>
                    </Card>
                    <Card style="width:25%;">
                        <div slot="head">
                            新增用户
                        </div>
                        <div slot="body">
                            <p style="color: #16BA5C;font-size: 40px;">12,310</p>
                        </div>
                        <div slot="footer">
                            日新增2.23%
                        </div>
                    </Card>
                    <Card style="width:25%;">
                        <div slot="head">
                            新增用户
                        </div>
                        <div slot="body">
                            <p style="color: #16BA5C;font-size: 40px;">12,310</p>
                        </div>
                        <div slot="footer">
                            日新增2.23%
                        </div>
                    </Card>
                </CardGroup>
                <br/>
                <CardGroup vertical>
                    <Card style="width:25%;">
                        <div slot="head">
                            新增用户
                        </div>
                        <div slot="body">
                            <p style="color: #16BA5C;font-size: 40px;">12,310</p>
                        </div>
                        <div slot="footer">
                            日新增2.23%
                        </div>
                    </Card>
                    <Card style="width:25%;">
                        <div slot="head">
                            新增用户
                        </div>
                        <div slot="body">
                            <p style="color: #16BA5C;font-size: 40px;">12,310</p>
                        </div>
                        <div slot="footer">
                            日新增2.23%
                        </div>
                    </Card>
                    <Card style="width:25%;">
                        <div slot="head">
                            新增用户
                        </div>
                        <div slot="body">
                            <p style="color: #16BA5C;font-size: 40px;">12,310</p>
                        </div>
                        <div slot="footer">
                            日新增2.23%
                        </div>
                    </Card>
                    <Card style="width:25%;">
                        <div slot="head">
                            新增用户
                        </div>
                        <div slot="body">
                            <p style="color: #16BA5C;font-size: 40px;">12,310</p>
                        </div>
                        <div slot="footer">
                            日新增2.23%
                        </div>
                    </Card>
                </CardGroup>
                <div class="q-title">说明：</div>
                <div>
                    卡片可以成组使用，可以设置vertical属性设置卡片为竖向
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.group" lang="html"></DCode>
            </div>
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Card【slot】：</div>
                <Table type="bordered" :thead="cardslot.thead" :data="cardslot.data">
                </Table>
                <div class="q-title">Card【evets】：</div>
                <Table type="bordered" :thead="cardevets.thead" :data="cardevets.data">
                </Table>
                <div class="q-title">CardGroup【props】：</div>
                <Table type="bordered" :thead="cardgroup.thead" :data="cardgroup.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/view/card';
export default {
  data() {
    return {
        code: Code,
        cardslot:{
            thead:[
                {
                    column:'name',
                    name:'名称',
                },
                {
                    column:'description',
                    name:'说明',
                }
            ],
            data:[
                {
                    name:'head',
                    description:'自定义卡片标题，如果是简单文字，可以使用<p>标签包裹',
                },
                {
                    name:'body',
                    description:'自定义卡片主体',
                },
                {
                    name:'footer',
                    description:'自定义卡片底栏',
                },
                {
                    name:'无',
                    description:'卡片主体内容',
                },
            ]
        },
        cardevets:{
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
                    name:'on-click-card',
                    description:'点击卡片时触发',
                    props:'点击事件'
                }
            ]
        },
        cardgroup:{
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
                    prop:'vertical',
                    description:'是否竖向',
                    type:'Boolean',
                    option:'-',
                    default:'false'
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
.demo-year-left{
    .vsu-timeline{
        .vsu-timeline-item{
            padding: 0 0 12px 46px;
            .vsu-timeline-item-line{
                left: 52px;
            }
            .vsu-timeline-item-content{
                .time{
                    .year{
                        position: absolute;
                        left: -38px;
                    }
                    .day{

                    }
                    .version{
                        margin-left: 40px;
                        width: 60px;
                        height: 17px;
                        border-radius: 15px;
                        background: #aaa;
                        color: #fff;
                        vertical-align: middle;
                        margin: -3px 40px 0;
                        text-align: center;
                        display: inline-block;
                    }
                    .download{
                        margin-left: 20px;
                        width: 81px;
                        height: 17px;
                        display: inline-block;
                        border-radius: 20px;
                        text-align: center;
                        line-height: 18px;
                        cursor: pointer;
                        background-color: #72b22d;
                        color: #fff;
                        vertical-align: top;
                    }
                }
                .content{
                    padding: 5px;
                }
            }
        }
    }
}
.custom{
    padding-left: 20px;
    .content{
        padding: 0 5px 10px 20px;
    }
}
</style>
