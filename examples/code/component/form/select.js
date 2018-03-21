let code = {}

code.base = `
    <template>
        <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;">
            <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
            </Option>
        </Select>
        <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;" :max-height=100>
            <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
            </Option>
        </Select>
    </template>
    export default {
        data() {
            return {
                baseSelect:{
                    value:'apple',
                    options:[
                        {
                            value:'apple',
                            label:'苹果'
                        },
                        {
                            value:'pear',
                            label:'梨'
                        },
                        {
                            value:'banana',
                            label:'香蕉'
                        },
                        {
                            value:'pineapple',
                            label:'菠萝'
                        }
                    ]
                }
            };
        }
    };
`

code.size = `
    <template>
        <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;" size="small">
            <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
            </Option>
        </Select>
        <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;">
            <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
            </Option>
        </Select>
        <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;" size="large">
            <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
            </Option>
        </Select>
    </template>
    export default {
        data() {
            return {
                baseSelect:{
                    value:'apple',
                    options:[
                        {
                            value:'apple',
                            label:'苹果'
                        },
                        {
                            value:'pear',
                            label:'梨'
                        },
                        {
                            value:'banana',
                            label:'香蕉'
                        },
                        {
                            value:'pineapple',
                            label:'菠萝'
                        }
                    ]
                }
            };
        }
    };
`

code.arrow = `
    <template>
        <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;" bubble>
            <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
            </Option>
        </Select>
    </template>
    export default {
        data() {
            return {
                baseSelect:{
                    value:'apple',
                    options:[
                        {
                            value:'apple',
                            label:'苹果'
                        },
                        {
                            value:'pear',
                            label:'梨'
                        },
                        {
                            value:'banana',
                            label:'香蕉'
                        },
                        {
                            value:'pineapple',
                            label:'菠萝'
                        }
                    ]
                }
            };
        }
    };
`

code.disabledOpt = `
    <template>
        <Select v-model="disabledOpt.value" placeholder="请选择" style="width:200px;">
            <Option v-for="(item,index) in disabledOpt.options" :key="index" :option="item" :disabled="item.disabled">
            </Option>
        </Select>
    </template>
    export default {
        data() {
            return {
                disabledOpt:{
                    value:'apple',
                    options:[
                        {
                            value:'apple',
                            label:'苹果'
                        },
                        {
                            value:'pear',
                            label:'梨'
                        },
                        {
                            value:'banana',
                            label:'香蕉',
                            disabled:true
                        },
                        {
                            value:'pineapple',
                            label:'菠萝'
                        }
                    ]
                },
            };
        }
    };
`
code.disabled = `
    <template>
        <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;" :disabled="true">
            <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
            </Option>
        </Select>
    </template>
    export default {
        data() {
            return {
                disabledOpt:{
                    value:'apple',
                    options:[
                        {
                            value:'apple',
                            label:'苹果'
                        },
                        {
                            value:'pear',
                            label:'梨'
                        },
                        {
                            value:'banana',
                            label:'香蕉',
                            disabled:true
                        },
                        {
                            value:'pineapple',
                            label:'菠萝'
                        }
                    ]
                },
            };
        }
    };
`
code.clearable = `
    <template>
        <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;" clearable>
            <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
            </Option>
        </Select>
    </template>
    export default {
        data() {
            return {
                baseSelect:{
                    value:'apple',
                    options:[
                        {
                            value:'apple',
                            label:'苹果'
                        },
                        {
                            value:'pear',
                            label:'梨'
                        },
                        {
                            value:'banana',
                            label:'香蕉'
                        },
                        {
                            value:'pineapple',
                            label:'菠萝'
                        }
                    ]
                }
            };
        }
    };
`
code.multiple = `
    <template>
        <div class="q-title">多选：</div>
        <Select v-model="multiselect.value" placeholder="请选择" style="width:200px;" type="multiple">
            <Option v-for="(item,index) in multiselect.options" :key="index" :option="item">
            </Option>
        </Select>
        <div class="q-title">多选类型：</div>
        <Select v-model="multiselect.value" placeholder="请选择" style="width:200px;" type="multiple" multi-type="check-box">
            <Option v-for="(item,index) in multiselect.options" :key="index" :option="item">
            </Option>
        </Select>
        <div class="q-title">可全选：</div>
        <Select v-model="multiselect.value" placeholder="请选择" style="width:200px;" type="multiple" multi-type="check-box" check-all>
            <Option v-for="(item,index) in multiselect.options" :key="index" :option="item">
            </Option>
        </Select>
        <div class="q-title">有可选范围：</div>
        <Select v-model="multiselect.value" placeholder="请选择" style="width:200px;" type="multiple" :check-range="[2,3]">
            <Option v-for="(item,index) in multiselect.options" :key="index" :option="item">
            </Option>
        </Select>
        <div class="q-title">有确定和取消：</div>
        <Select v-model="multiselect.value" placeholder="请选择" style="width:200px;" type="multiple" multi-type="check-box" check-all judge>
            <Option v-for="(item,index) in multiselect.options" :key="index" :option="item">
            </Option>
        </Select>
    </template>
    export default {
        data() {
            return {
                multiselect:{
                    value:['apple','pear'],
                    options:[
                        {
                            value:'apple',
                            label:'苹果'
                        },
                        {
                            value:'pear',
                            label:'梨'
                        },
                        {
                            value:'banana',
                            label:'香蕉'
                        },
                        {
                            value:'pineapple',
                            label:'菠萝'
                        }
                    ]
                },
            };
        }
    };
`
code.custom = `
    <template>
        <Select v-model="baseSelect.value" placeholder="请选择" style="width:200px;">
            <Option v-for="(item,index) in baseSelect.options" :key="index" :option="item">
                <Icon type="heart"></Icon>  {{item.label}}
            </Option>
        </Select>
    </template>
    export default {
        data() {
            return {
                baseSelect:{
                    value:'apple',
                    options:[
                        {
                            value:'apple',
                            label:'苹果'
                        },
                        {
                            value:'pear',
                            label:'梨'
                        },
                        {
                            value:'banana',
                            label:'香蕉'
                        },
                        {
                            value:'pineapple',
                            label:'菠萝'
                        }
                    ]
                }
            };
        }
    };
`

export default code
