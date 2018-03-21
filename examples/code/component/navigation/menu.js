let code = {}

code.base = `
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
`
code.accordion = `
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
`
code.disabled = `
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
`


export default code
