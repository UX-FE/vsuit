let code = {}

code.base = `
    <template>
        <RadioGroup v-model="radio1">
            <Radio label="1">单独的radio</Radio>
            <Radio label="2">单独的radio</Radio>
        </RadioGroup>
    </template>
    export default {
        data() {
            return {
                radio1:'1'
            };
        },
    };
`

code.custom = `
    <template>
        <RadioGroup v-model="radio2" disabled>
            <Radio label="man"><Icon type="man"></Icon>男</Radio>
            <Radio label="woman"><Icon type="woman"></Icon>女</Radio>
        </RadioGroup>
    </template>
    export default {
        data() {
            return {
                radio2:'man'
            };
        },
    };
`

code.disabled = `
    <template>
        <RadioGroup v-model="radio1" disabled>
            <Radio label="1">苹果</Radio>
            <Radio label="2">橘子</Radio>
        </RadioGroup>
        <RadioGroup v-model="radio3" >
            <Radio label="1" disabled>苹果</Radio>
            <Radio label="2">橘子</Radio>
            <Radio label="3">香蕉</Radio>
        </RadioGroup>
    </template>
    export default {
        data() {
            return {
                radio1:'1',
                radio3:'2
            };
        },
    };
`

code.type = `
    <template>
        <RadioGroup v-model="radio4" type="button">
            <Radio label="hour">按时</Radio>
            <Radio label="day">按天</Radio>
            <Radio label="month">按月</Radio>
            <Radio label="year">按年</Radio>
        </RadioGroup>
    </template>
    export default {
        data() {
            return {
                radio4:'hour'
            };
        },
    };
`
code.direction = `
    <template>
        <RadioGroup v-model="radio2" vertical>
            <Radio label="man"><Icon type="man"></Icon>男</Radio>
            <Radio label="woman"><Icon type="woman"></Icon>女</Radio>
        </RadioGroup>
    </template>
    export default {
        data() {
            return {
                radio2:'man',
            };
        },
    };
`

export default code
