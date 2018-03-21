<template>
    <div class="other">
        <div class="title1">
            Menu 菜单
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap">
                <Menu current="overview/real" :openeds="['overview']">
                    <SubMenu name="overview">
                        <template slot="title">
                            <Icon type="android-list"></Icon>基本概况
                        </template>
                        <MenuItem name="overview/real">实时数据</MenuItem>
                        <MenuItem name="overview/key">关键数据</MenuItem>
                        <MenuItem name="overview/version">版本分布</MenuItem>
                    </SubMenu>
                    <SubMenu name="user">
                        <template slot="title">
                            <Icon type="android-desktop"></Icon>用户分析
                        </template>
                        <MenuItem name="user/active">活跃度</MenuItem>
                        <MenuItem name="user/stay">用户留存</MenuItem>
                        <MenuItem name="user/leave">用户流失</MenuItem>
                    </SubMenu>
                    <SubMenu name="admin">
                        <template slot="title">
                            <Icon type="android-people"></Icon>用户管理
                        </template>
                        <MenuItem name="admin/account">账号设置</MenuItem>
                        <MenuItem name="admin/list">账号列表</MenuItem>
                    </SubMenu>
                    <SubMenu name="set">
                        <template slot="title">
                            <Icon type="android-options"></Icon>综合设置
                        </template>
                        <MenuItem name="set/version">版本管理</MenuItem>
                        <MenuItem name="set/channel">渠道管理</MenuItem>
                    </SubMenu>
                </Menu>
                <br/>
                <Menu direction="horizontal" current="1">
                    <MenuItem name="1">
                        <Icon type="android-home"></Icon>首页
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="android-apps"></Icon>组件
                    </MenuItem>
                    <SubMenu name="3">
                        <template slot="title">
                            <Icon type="android-download"></Icon>资源
                        </template>
                        <MenuGroup title="文档">
                            <MenuItem name="3-1">demo1</MenuItem>
                            <MenuItem name="3-2">demo2</MenuItem>
                            <MenuItem name="3-3">demo3</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="下载">
                            <MenuItem name="3-4">GitTab</MenuItem>
                        </MenuGroup>
                    </SubMenu>
                    <MenuItem name="4">
                        <Icon type="android-call"></Icon>帮助
                    </MenuItem>
                </Menu>
                <div class="q-title">说明：</div>
                <div>
                    menu菜单默认竖向，可设置direction属性为horizontal，将菜单设置为横向。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                开启手风琴模式：
            </div>
            <div class="wrap">
                <Menu current="overview/real" :openeds="['overview']" accordion>
                    <SubMenu name="overview">
                        <template slot="title">
                            <Icon type="android-list"></Icon>基本概况
                        </template>
                        <MenuItem name="overview/real">实时数据</MenuItem>
                        <MenuItem name="overview/key">关键数据</MenuItem>
                        <MenuItem name="overview/version">版本分布</MenuItem>
                    </SubMenu>
                    <SubMenu name="user">
                        <template slot="title">
                            <Icon type="android-desktop"></Icon>用户分析
                        </template>
                        <MenuItem name="user/active">活跃度</MenuItem>
                        <MenuItem name="user/stay">用户留存</MenuItem>
                        <MenuItem name="user/leave">用户流失</MenuItem>
                    </SubMenu>
                    <SubMenu name="admin">
                        <template slot="title">
                            <Icon type="android-people"></Icon>用户管理
                        </template>
                        <MenuItem name="admin/account">账号设置</MenuItem>
                        <MenuItem name="admin/list">账号列表</MenuItem>
                    </SubMenu>
                    <SubMenu name="set">
                        <template slot="title">
                            <Icon type="android-options"></Icon>综合设置
                        </template>
                        <MenuItem name="set/version">版本管理</MenuItem>
                        <MenuItem name="set/channel">渠道管理</MenuItem>
                    </SubMenu>
                </Menu>
                <div class="q-title">说明：</div>
                <div>
                    设置accordion属性，一次只能打开一个菜单
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.accordion" lang="html"></DCode>
            </div>
            <div class="title2">
                禁用状态：
            </div>
            <div class="wrap">
                <Menu current="overview/real" :openeds="['overview']" accordion>
                    <SubMenu name="overview">
                        <template slot="title">
                            <Icon type="android-list"></Icon>基本概况
                        </template>
                        <MenuItem name="overview/real">实时数据</MenuItem>
                        <MenuItem name="overview/key">关键数据</MenuItem>
                        <MenuItem name="overview/version">版本分布</MenuItem>
                    </SubMenu>
                    <SubMenu name="user" disabled>
                        <template slot="title">
                            <Icon type="android-desktop"></Icon>用户分析
                        </template>
                        <MenuItem name="user/active">活跃度</MenuItem>
                        <MenuItem name="user/stay">用户留存</MenuItem>
                        <MenuItem name="user/leave">用户流失</MenuItem>
                    </SubMenu>
                    <MenuItem name="admin" disabled>账号设置</MenuItem>
                    <SubMenu name="set">
                        <template slot="title">
                            <Icon type="android-options"></Icon>综合设置
                        </template>
                        <MenuItem name="set/version">版本管理</MenuItem>
                        <MenuItem name="set/channel">渠道管理</MenuItem>
                    </SubMenu>
                </Menu>
                <div class="q-title">说明：</div>
                <div>
                    设置disabled属性禁用
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.disabled" lang="html"></DCode>
            </div>
            <!-- <div class="title2">
                折叠：
            </div>
            <div class="wrap">
                <Menu current="overview/real" :openeds="['overview']" accordion collapse>
                    <SubMenu name="overview">
                        <template slot="title">
                            <Icon type="android-list"></Icon>基本概况
                        </template>
                        <MenuItem name="overview/real">实时数据</MenuItem>
                        <MenuItem name="overview/key">关键数据</MenuItem>
                        <MenuItem name="overview/version">版本分布</MenuItem>
                    </SubMenu>
                    <SubMenu name="user">
                        <template slot="title">
                            <Icon type="android-desktop"></Icon>用户分析
                        </template>
                        <MenuItem name="user/active">活跃度</MenuItem>
                        <MenuItem name="user/stay">用户留存</MenuItem>
                        <MenuItem name="user/leave">用户流失</MenuItem>
                    </SubMenu>
                    <SubMenu name="admin">
                        <template slot="title">
                            <Icon type="android-people"></Icon>用户管理
                        </template>
                        <MenuItem name="admin/account">账号设置</MenuItem>
                        <MenuItem name="admin/list">账号列表</MenuItem>
                    </SubMenu>
                    <SubMenu name="set">
                        <template slot="title">
                            <Icon type="android-options"></Icon>综合设置
                        </template>
                        <MenuItem name="set/version">版本管理</MenuItem>
                        <MenuItem name="set/channel">渠道管理</MenuItem>
                    </SubMenu>
                </Menu>
                <div class="q-title">说明：</div>
                <div>
                    设置collapse属性设置折叠功能
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.customBread" lang="html"></DCode>
            </div> -->
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Menu【props】：</div>
                <Table type="bordered" :thead="menuapi.thead" :data="menuapi.data">
                </Table>
                <div class="q-title">Menu【events】：</div>
                <Table type="bordered" :thead="menuevent.thead" :data="menuevent.data">
                </Table>
                <div class="q-title">MenuItem【props】：</div>
                <Table type="bordered" :thead="menuiapi.thead" :data="menuiapi.data">
                </Table>
                <div class="q-title">MenuGroup【props】：</div>
                <Table type="bordered" :thead="menugapi.thead" :data="menugapi.data">
                </Table>
                <div class="q-title">SubMenu【props】：</div>
                <Table type="bordered" :thead="menusapi.thead" :data="menusapi.data">
                </Table>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/navigation/menu';
export default {
  data() {
    return {
        code: Code,
        menuapi:{
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
                    prop:'direction',
                    description:'方向',
                    type:'String',
                    option:'horizontal、vertical',
                    default:'vertical'
                },
                {
                    prop:'current',
                    description:'当前菜单',
                    type:'String，Number',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'openeds',
                    description:'当前打开的菜单',
                    type:'Array',
                    option:'-',
                    default:'[]'
                },
                {
                    prop:'accordion',
                    description:'手风琴模式',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
            ]
        },
        menuevent:{
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
                    name:'on-change-menu',
                    description:'点击菜单时触发',
                    props:'菜单标志'
                }
            ]
        },
        menuiapi:{
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
                    description:'菜单标志，可以是url或id',
                    type:'String, Number',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'disabled',
                    description:'禁用',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
            ]
        },
        menugapi:{
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
                    description:'组名',
                    type:'String',
                    option:'-',
                    default:'-'
                },
            ]
        },
        menusapi:{
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
                    description:'菜单标志，可以是url或id',
                    type:'String, Number',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'disabled',
                    description:'禁用',
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
</style>
