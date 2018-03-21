let code = {}

code.html = `
    <Sider :sider="sider"></Sider>
`

code.js = `
/**
     * 配置对象：sider
     * @param {object} list - 菜单列表
     *                 name - 菜单名称
     *                 href - 页面跳转url
     *                 icon - 菜单icon（一级菜单）
     *                 module - 模块（一级菜单/二级所属一级菜单）
     *                 slide - 是否展开（true-是；false-否）
     *                 list - 菜单列表（一级菜单的二级菜单）
     * @param {object} cur - 当前选中菜单
     *                 module - 模块（一级菜单/二级所属一级菜单）
     *                 href - 页面跳转url
     * @param {object} slideIcon - 展开收起icon
     *                 up - 向上（展开）
     *                 down - 向下（收起）
     * 备注：
     */
    sider: {
        list: [
            {
                name: "一级菜单1",
                href: "/menu1",
                icon: "menu1",
            },
            {
                name: "一级菜单2",
                icon: "menu2",
                module: "menu2",
                slide: true,
                list: [
                    {
                        name: "二级菜单1",
                        href: "/menu2_1",
                        module: "menu2",
                    },
                    {
                        name: "二级菜单2",
                        href: "/menu2_2",
                        module: "menu2"
                    }
                ]
            },
            {
                name: "一级菜单3",
                icon: "menu3",
                module: "menu3",
                slide: false,
                list: [
                    {
                        name: "二级菜单1",
                        href: "/menu3_1",
                        module: "menu3",
                    },
                    {
                        name: "二级菜单2",
                        href: "/menu3_2",
                        module: "menu3"
                    },
                    {
                        name: "二级菜单3",
                        href: "/menu3_2",
                        module: "menu3"
                    }
                ]
            }
        ],
        cur:{
            module: "menu2",
            href: "/menu2_2"
        },
        slideIcon:{
            up: "slideUp",
            down: "slideDown"
        }
    }
`
export default code
