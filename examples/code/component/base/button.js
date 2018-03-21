let code = {}

code.buttonType = `
    <BaseButton>default</BaseButton>
    <BaseButton type="primary">primary</BaseButton>
    <BaseButton type="ghost">ghost</BaseButton>
    <BaseButton type="text">text</BaseButton>
`

code.buttonShape = `
    <BaseButton type="primary" shape="square">square</BaseButton>
    <BaseButton type="primary" shape="circle">circle</BaseButton>
    <BaseButton type="ghost" shape="square">square</BaseButton>
    <BaseButton type="ghost" shape="circle">circle</BaseButton>
`
code.buttonSize = `
    <BaseButton type="primary" size="large">large</BaseButton>
    <BaseButton type="primary">default</BaseButton>
    <BaseButton type="primary" size="small">small</BaseButton>
    <BaseButton type="ghost" size="large">large</BaseButton>
    <BaseButton type="ghost">default</BaseButton>
    <BaseButton type="ghost" size="small">small</BaseButton>
`
code.buttonStatus = `
    <BaseButton type="primary" status="loading">loading</BaseButton>
    <BaseButton type="primary" status="success">success</BaseButton>
    <BaseButton type="primary" status="error">error</BaseButton>
    <BaseButton type="primary" status="warning">warning</BaseButton>
`
code.buttonDisable = `
    <BaseButton>default</BaseButton>
    <BaseButton disabled>default(disabled)</BaseButton>
    <br/>
    <br/>
    <BaseButton type="primary">primary</BaseButton>
    <BaseButton type="primary" disabled>primary(disabled)</BaseButton>
    <br/>
    <br/>
    <BaseButton type="ghost">ghost</BaseButton>
    <BaseButton type="ghost" disabled>ghost(disabled)</BaseButton>
    <br/>
    <br/>
    <BaseButton type="text">text</BaseButton>
    <BaseButton type="text" disabled>text(disabled)</BaseButton>
`
code.buttonIcon = `
    <BaseButton type="primary" icon="trash-a"></BaseButton>
    <BaseButton type="primary" icon="edit"></BaseButton>
    <BaseButton type="primary" icon="funnel">漏斗</BaseButton>
    <BaseButton type="primary">剪刀<Icon type="scissors" color="#fff"></Icon></BaseButton>
`
code.group = `
    <ButtonGroup>
        <BaseButton type="primary" icon="ios-alarm"></BaseButton>
        <BaseButton type="primary" icon="ios-speedometer"></BaseButton>
        <BaseButton type="primary" icon="ios-stopwatch"></BaseButton>
    </ButtonGroup>
    <br/>
    <ButtonGroup shape="circle">
        <BaseButton type="primary" icon="ios-alarm"></BaseButton>
        <BaseButton type="primary" icon="ios-speedometer"></BaseButton>
        <BaseButton type="primary" icon="ios-stopwatch"></BaseButton>
    </ButtonGroup>
    <br/>
    <ButtonGroup vertical>
        <BaseButton type="primary" icon="ios-alarm"></BaseButton>
        <BaseButton type="primary" icon="ios-speedometer"></BaseButton>
        <BaseButton type="primary" icon="ios-stopwatch"></BaseButton>
    </ButtonGroup>
`

export default code
