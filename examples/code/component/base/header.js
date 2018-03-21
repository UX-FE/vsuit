let code = {}

code.html = `
    <Header :header="header"></Header>
`

code.js = `
/**
     * 配置对象：header
     * @param {string} title - 系统标题
     * @param {object} avatar - 登录用户
     *                 name - 登录用户名称
     * @param {object} logout - 用户退出
     *                 href - 用户退出url
     *                 text - 退出名称
     * 备注：
     */
    header: {
        title: "标题",
        avatar: {
            name: "用户名"
        },
        logout: {
            href: "/logout",
            text: "退出"
        }
    }
`

export default code
