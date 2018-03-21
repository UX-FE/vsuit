let code = {}

code.base = `
    <Step :current="base">
        <StepItem title="步骤1" content="这里是描述信息"></StepItem>
        <StepItem title="步骤2" content="这里是描述信息"></StepItem>
        <StepItem title="步骤3" content="这里是描述信息"></StepItem>
        <StepItem title="步骤4" content="这里是描述信息"></StepItem>
    </Step>
`
code.custom = `
    <Step :current="2">
        <StepItem title="步骤1" content="这里是描述信息" icon="clipboard"></StepItem>
        <StepItem title="步骤2" content="这里是描述信息" icon="android-camera"></StepItem>
        <StepItem title="步骤3" content="这里是描述信息" icon="android-mail"></StepItem>
    </Step>
`
code.status = `
    <Step :current="1" status="error">
        <StepItem title="步骤1" content="这里是描述信息"></StepItem>
        <StepItem title="步骤2" content="这里是描述信息"></StepItem>
        <StepItem title="步骤3" content="这里是描述信息"></StepItem>
    </Step>
`
code.vertical = `
    <Step :current="1" vertical>
        <StepItem title="步骤1" content="这里是描述信息"></StepItem>
        <StepItem title="步骤2" content="这里是描述信息"></StepItem>
        <StepItem title="步骤3" content="这里是描述信息"></StepItem>
    </Step>
`


export default code
