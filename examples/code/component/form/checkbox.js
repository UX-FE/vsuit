let code = {}

code.base = `
    <template>
        <Checkbox v-model="checkbox1">单独的选框</Checkbox>
    </template>
    export default {
        data() {
            return {
                checkbox1:true,
            };
        }
    };
`

code.disabled = `
    <template>
        <Checkbox v-model="disabledbox" disabled>单独的选框</Checkbox>
    </template>
    export default {
        data() {
            return {
                disabledbox:true,
            };
        }
    };
`

code.group = `
    <template>
        <CheckboxGroup v-model="checkbox2.check">
            <Checkbox v-for="(item,index) in checkbox2.boxs" :key="index" v-model="item.value" :label="item.label"></Checkbox>
        </CheckboxGroup>
        <CheckboxGroup v-model="checkbox2.check" vertical>
            <Checkbox v-for="(item,index) in checkbox2.boxs" :key="index" v-model="item.value" :label="item.label"></Checkbox>
        </CheckboxGroup>
    </template>
    export default {
        data() {
            return {
                checkbox2:{
                    check:[2],
                    boxs:[{
                        value:1,
                        label:'选择1'
                    },{
                        value:2,
                        label:'选择2'
                    },{
                        value:3,
                        label:'选择3'
                    }]
                },
            };
        }
    };
`

code.number = `
    <template>
        <CheckboxGroup v-model="checkbox3.check" :min="1" :max="2">
            <Checkbox v-for="(item,index) in checkbox3.boxs" :key="index" v-model="item.value" :label="item.label"></Checkbox>
        </CheckboxGroup>
    </template>
    export default {
        data() {
            return {
                checkbox3:{
                    check:[2],
                    boxs:[{
                        value:1,
                        label:'选择1'
                    },{
                        value:2,
                        label:'选择2'
                    },{
                        value:3,
                        label:'选择3'
                    }]
                },
            };
        }
    };
`
code.type = `
    <template>
        <CheckboxGroup v-model="checkbox2.check">
            <Checkbox type="button" v-for="(item,index) in checkbox2.boxs" :key="index" v-model="item.value" :label="item.label"></Checkbox>
        </CheckboxGroup>
        <br/>
        <CheckboxGroup v-model="checkbox2.check">
            <Checkbox type="bordered" v-for="(item,index) in checkbox2.boxs" :key="index" v-model="item.value" :label="item.label"></Checkbox>
        </CheckboxGroup>
    </template>
    export default {
        data() {
            return {
                checkbox2:{
                    check:[2],
                    boxs:[{
                        value:1,
                        label:'选择1'
                    },{
                        value:2,
                        label:'选择2'
                    },{
                        value:3,
                        label:'选择3'
                    }]
                },
            };
        }
    };
`
code.custom = `
    <template>
        <CheckboxGroup v-model="checkbox2.check">
            <Checkbox v-for="(item,index) in checkbox2.boxs" :key="index" v-model="item.value">
                <Icon type="android-cloud"></Icon>自定义的box{{index}}
            </Checkbox>
        </CheckboxGroup>
    </template>
    export default {
        data() {
            return {
                checkbox2:{
                    check:[2],
                    boxs:[{
                        value:1,
                        label:'选择1'
                    },{
                        value:2,
                        label:'选择2'
                    },{
                        value:3,
                        label:'选择3'
                    }]
                },
            };
        }
    };
`
code.all = `
    <template>
        <Checkbox v-model="all.isCheckAll" @on-change="CheckAll">全选</Checkbox>
        <br/>
        <br/>
        <CheckboxGroup v-model="all.check" @on-change="handleCheckAll">
            <Checkbox v-for="(item,index) in all.boxs" :key="index" v-model="item.value">
                <Icon type="android-cloud"></Icon>自定义的box{{index}}
            </Checkbox>
        </CheckboxGroup>
    </template>
    export default {
        data() {
            return {
                all:{
                    isCheckAll:false,
                    check:[2],
                    boxs:[{
                        value:1,
                        label:'选择1'
                    },{
                        value:2,
                        label:'选择2'
                    },{
                        value:3,
                        label:'选择3'
                    }]
                },
            };
        },
        methods: {
            CheckAll(){
                this.all.isCheckAll = !this.all.isCheckAll;
                  this.all.check = [];
                if(this.all.isCheckAll){
                    for(var i = 0;i<this.all.boxs.length;i++){
                        this.all.check.push(this.all.boxs[i].value)
                    }
                }
            },
            handleCheckAll(){
                if(this.all.check.length===this.all.boxs.length){
                    this.all.isCheckAll = true;
                }else{
                    this.all.isCheckAll = false;
      
                }
            }
        },
    };
`
code.icon = `
    <template>
        <CheckboxGroup v-model="checkbox2.check">
            <Checkbox :icon-type="checkbox2.iconType" v-for="(item,index) in checkbox2.boxs" :key="index" v-model="item.value" :label="item.label"></Checkbox>
        </CheckboxGroup>
    </template>
    export default {
        data() {
            return {
                checkbox2:{
                    iconType:['android-checkbox-outline-blank','android-checkbox-outline'],
                    check:[2],
                    boxs:[{
                        value:1,
                        label:'选择1'
                    },{
                        value:2,
                        label:'选择2'
                    },{
                        value:3,
                        label:'选择3'
                    }]
                },
            };
        }
    };
`

export default code
