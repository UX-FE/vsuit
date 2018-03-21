let code = {}

code.base = `
    <DropDown>
        <div class="drop-title">下拉菜单<Icon type="ios-arrow-down"></Icon></div>
        <DropDownList slot="list">
            <DropDownItem>产品管理</DropDownItem>
            <DropDownItem>账号管理</DropDownItem>
        </DropDownList>
    </DropDown>
    <DropDown align="center">
        <div class="drop-title">下拉菜单<Icon type="ios-arrow-down"></Icon></div>
        <DropDownList slot="list">
            <DropDownItem>产品管理</DropDownItem>
            <DropDownItem>账号管理</DropDownItem>
        </DropDownList>
    </DropDown>
    <DropDown align="right">
        <div class="drop-title">下拉菜单<Icon type="ios-arrow-down"></Icon></div>
        <DropDownList slot="list">
            <DropDownItem>产品管理</DropDownItem>
            <DropDownItem>账号管理</DropDownItem>
        </DropDownList>
    </DropDown>
`

code.trigger = `
    <DropDown trigger="hover">
        <div class="drop-title">hover触发<Icon type="ios-arrow-down"></Icon></div>
        <DropDownList slot="list">
            <DropDownItem>产品管理</DropDownItem>
            <DropDownItem>账号管理</DropDownItem>
        </DropDownList>
    </DropDown>
    <DropDown trigger="click">
        <div class="drop-title">click触发<Icon type="ios-arrow-down"></Icon></div>
        <DropDownList slot="list">
            <DropDownItem>产品管理</DropDownItem>
            <DropDownItem>账号管理</DropDownItem>
        </DropDownList>
    </DropDown>
`


export default code
