let code = {}

code.baseSwitch = `
    <FormSwitch v-model="switch1"></FormSwitch>
    <FormSwitch :value="switch1"></FormSwitch>
`

code.size = `
    <FormSwitch size="large" v-model="switch1"></FormSwitch>
    <FormSwitch v-model="switch1"></FormSwitch>
    <FormSwitch size="small" v-model="switch1"></FormSwitch>
`

code.disabled = `
    <FormSwitch disabled v-model="switch1"></FormSwitch>
`

code.custom = `
    <FormSwitch v-model="switch1">
        <span slot="open">开</span>
        <span slot="shut">关</span>
    </FormSwitch>
    <FormSwitch size="large" v-model="switch1">
        <span slot="open">ON</span>
        <span slot="shut">OFF</span>
    </FormSwitch>
`
code.text = `
    <FormSwitch v-model="switch1" label="是否选中">
    </FormSwitch>
    <br/>
    <br/>
    <FormSwitch v-model="switch1" openlabel="按年付费" shutlabel="按月付费">
    </FormSwitch>
`

export default code
