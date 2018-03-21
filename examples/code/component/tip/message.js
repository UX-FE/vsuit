let code = {}

code.base = `
    <Alert type="info">这是一些提示信息</Alert>
    <Alert type="success">告诉你成功了</Alert>
    <Alert type="warn">警告你</Alert>
    <Alert type="error">大侠，报错了</Alert>
`

code.close = `
    <Alert type="info" :closable="false">这是一些提示信息</Alert>
    <Alert type="info" >这是一些提示信息<span slot="close">知道了</span></Alert>
`

code.icon = `
    <Alert type="info" show-icon>这是一些提示信息</Alert>
    <Alert type="success" show-icon>告诉你成功了</Alert>
    <Alert type="warn" show-icon>警告你</Alert>
    <Alert type="error" show-icon>大侠，报错了</Alert>
`


export default code
