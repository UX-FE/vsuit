let code = {}

code.base = `
    <FormInput v-model="input1.value" placeholder="请输入"></FormInput>
    <FormInput v-model="input1.value" placeholder="请输入" :width="300"></FormInput>
`

code.type = `
    <FormInput v-model="input2.value" placeholder="请输入" type="textarea"></FormInput>
    <FormInput v-model="input2.value" placeholder="请输入" type="textarea" :width="300"></FormInput>
    <FormInput v-model="input2.value" placeholder="请输入" type="textarea" :width="300" :rows=5></FormInput>
`

code.disabled = `
    <FormInput v-model="input1.value" placeholder="请输入" :width="300" disabled></FormInput>
    <FormInput v-model="input1.value" placeholder="请输入" type="textarea" :width="300" disabled></FormInput>
`

code.clear = `
    <FormInput v-model="input1.value" placeholder="请输入" :width="300"  clearable></FormInput>
`
code.icon = `
    <FormInput v-model="input1.value" placeholder="请输入" :width="300"  clearable pre-icon="ios-search-strong"></FormInput>
    <FormInput v-model="input1.value" placeholder="请输入" :width="300"  clearable>
        <span slot="preIcon" class="custom-search">
            <Icon slot="preIcon" type="ios-search-strong"></Icon>
        </span>
    </FormInput>
    <FormInput v-model="input1.value" placeholder="请输入" :width="300" :aft-icon="'eye-disabled'"></FormInput>
`

code.size = `
    <FormInput v-model="input1.value" placeholder="请输入" :width="300"  clearable :pre-icon="'search'" size="large"></FormInput>
    <FormInput v-model="input1.value" placeholder="请输入" :width="300"  clearable :pre-icon="'search'"></FormInput>
    <FormInput v-model="input1.value" placeholder="请输入" :width="300"  clearable :pre-icon="'search'" size="small"></FormInput>
`
code.fix =  `
    <FormInput v-model="input1.value" placeholder="请输入">
        <span slot="prepend" class="custom-pre">http://</span>
        <span slot="append" class="custom-append">.com</span>
    </FormInput>
`

export default code
