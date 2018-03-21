let code = {}

code.base = `
    <template>
        <Form ref="form1" :value="form1" :rules="rules1" :label-width=80>
            <FormItem name="name" label="姓名">
                <FormInput v-model="form1.name" placeholder="请输入姓名" :width="300"></FormInput>
            </FormItem>
            <FormItem name="radio" label="性别">
                <RadioGroup v-model="form1.radio">
                    <Radio label="man"><Icon type="man"></Icon>男</Radio>
                    <Radio label="woman"><Icon type="woman"></Icon>女</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem name="check" label="爱好">
                <CheckboxGroup v-model="form1.check">
                    <Checkbox value="1" label="音乐"></Checkbox>
                    <Checkbox value="2" label="书法"></Checkbox>
                    <Checkbox value="3" label="绘画"></Checkbox>
                    <Checkbox value="4" label="计算机"></Checkbox>
                </CheckboxGroup>
            </FormItem>
            <FormItem name="select" label="学校">
                <Select v-model="form1.select" placeholder="请选择" style="width:300px;" bubble>
                    <Option :option="{value:'1',label:'学校1'}"></Option>
                    <Option :option="{value:'2',label:'学校2'}"></Option>
                    <Option :option="{value:'3',label:'学校3'}"></Option>
                </Select>
            </FormItem>
            <FormItem name="switch" label="服从调配">
                <FormSwitch v-model="form1.switch"></FormSwitch>
            </FormItem>
            <FormItem name="rate" label="自我评价">
                <Rate v-model="form1.rate" allow-half></Rate>
            </FormItem>
            <FormItem name="textarea" label="备注">
                <FormInput v-model="form1.textarea" placeholder="请输入" type="textarea" :width="300"></FormInput>
            </FormItem>
            <FormItem>
                <BaseButton type="primary" @on-click-btn="handleSubmit('form1')">立即提交</BaseButton>
                <BaseButton type="ghost" style="margin-left: 8px" @on-click-btn="handleReset('form1')">重置</BaseButton>
            </FormItem>
        </Form>
    </template>
    export default {
        data() {
        return {
            form1:{
                name:'',
                radio:'',
                check:[],
                select:'',
                switch:true,
                rate:0,
                textarea:''
            },
            rules1:{
                name:[
                    {required: true, message: '请输入姓名', trigger: 'blur' }
                ],
                radio: [
                    { required: true, message: '请选择性别', trigger: 'change' }
                ],
                check: [
                    { required: true, type: 'array', min: 1, message: '请选择爱好', trigger: 'change' },
                    { type: 'array', max: 2, message: '请选择2个', trigger: 'change' }
                ],
                select: [
                    { required: true, message: '请选择学校', trigger: 'change' }
                ],
                textarea: [
                    { required: true, message: '请输入备注', trigger: 'blur' },
                    { type: 'string', min: 20, message: '输入不能少于20字', trigger: 'blur' }
                ]
            }
        };
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        console.log("success");
                    } else {
                        console.log("fail");
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        },
        mounted() {}
    };
`
code.align = `
    <template>
        <div>
            <RadioGroup :value="labelPosition" type="button" @on-change="handleChangeP">
                <Radio label="left">left</Radio>
                <Radio label="top">top</Radio>
                <Radio label="right">right</Radio>
            </RadioGroup>
        </div>
        <br/>
        <Form ref="form2" :value="form2" :label-position="labelPosition" :label-width="80" style="width: 500px">
            <FormItem
                    v-for="(item, index) in form2.items"
                    v-if="item.status"
                    :key="index"
                    :label="'Item ' + item.index"
                    :name="'items.' + index + '.value'"
                    :rules="{required: true, message: 'Item ' + item.index +' 不能为空', trigger: 'blur'}">
                <Row>
                    <Col span="18">
                        <FormInput v-model="item.value" placeholder="请输入" :width="300"></FormInput>
                    </Col>
                    <Col span="4">
                        <Icon type="minus-circled" @on-click-icon="handleRemove2(index)" size="24"></Icon>
                    </Col>
                </Row>
            </FormItem>
            <FormItem>
                <Row>
                    <Col span="12">
                        <Icon type="plus-circled" @on-click-icon="handleAdd2(index)" size="24"></Icon>
                    </Col>
                </Row>
            </FormItem>
            <FormItem>
                <BaseButton type="primary" @on-click-btn="handleSubmit2('form2')">立即提交</BaseButton>
                <BaseButton type="ghost" style="margin-left: 8px" @on-click-btn="handleReset('form2')">重置</BaseButton>
            </FormItem>
        </Form>
    </template>
    export default {
        data() {
        return {
            labelPosition:'left',
            index: 1,
            form2: {
                items: [
                    {
                        value: '',
                        index: 1,
                        status: 1
                    }
                ]
            },
        };
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        console.log("success");
                    } else {
                        console.log("fail");
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        },
        mounted() {}
    };
`

code.dyma = `
    <template>
        <Form ref="form2" :value="form2" :label-width="80" style="width: 500px">
            <FormItem
                    v-for="(item, index) in form2.items"
                    v-if="item.status"
                    :key="index"
                    :label="'Item ' + item.index"
                    :name="'items.' + index + '.value'"
                    :rules="{required: true, message: 'Item ' + item.index +' 不能为空', trigger: 'blur'}">
                <Row>
                    <Col span="18">
                        <FormInput v-model="item.value" placeholder="请输入" :width="300"></FormInput>
                    </Col>
                    <Col span="4">
                        <Icon type="minus-circled" @on-click-icon="handleRemove2(index)" size="24"></Icon>
                    </Col>
                </Row>
            </FormItem>
            <FormItem>
                <Row>
                    <Col span="12">
                        <Icon type="plus-circled" @on-click-icon="handleAdd2(index)" size="24"></Icon>
                    </Col>
                </Row>
            </FormItem>
            <FormItem>
                <BaseButton type="primary" @on-click-btn="handleSubmit('form2')">立即提交</BaseButton>
                <BaseButton type="ghost" style="margin-left: 8px" @on-click-btn="handleReset('form2')">重置</BaseButton>
            </FormItem>
        </Form>
    </template>
    export default {
        data() {
        return {
            labelPosition:'left',
            index: 1,
            form2: {
                items: [
                    {
                        value: '',
                        index: 1,
                        status: 1
                    }
                ]
            },
        };
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        console.log("success");
                    } else {
                        console.log("fail");
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        },
        mounted() {}
    };
`
code.custom = `
    <template>
        <Form ref="form3" :value="form3" :rules="rule3" :label-width="80">
            <FormItem label="密码" name="passwd">
                <FormInput type="password" v-model="form3.passwd"></FormInput>
            </FormItem>
            <FormItem label="再次输入" name="passwdCheck">
                <FormInput type="password" v-model="form3.passwdCheck"></FormInput>
            </FormItem>
            <FormItem label="年龄" name="age">
                <FormInput type="text" v-model="form3.age" number></FormInput>
            </FormItem>
            <FormItem>
                <BaseButton type="primary" @on-click-btn="handleSubmit('form3')">立即提交</BaseButton>
                <BaseButton type="ghost" style="margin-left: 8px" @on-click-btn="handleReset('form3')">重置</BaseButton>
            </FormItem>
        </Form>
    </template>
    export default {
        data() {
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.form3.passwdCheck !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.form3.validateField('passwdCheck');
                }
                callback();
            }
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请确认密码'));
            } else if (value !== this.form3.passwd) {
                callback(new Error('两次输入的密码不一样!'));
            } else {
                callback();
            }
        };
        const validateAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('请输入年龄'));
            }
            // 模拟异步验证效果
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入数字'));
                } else {
                    if (value < 18) {
                        callback(new Error('年龄大于18岁'));
                    } else {
                        callback();
                    }
                }
            }, 1000);
        };
        return {
            form3: {
                passwd: '',
                passwdCheck: '',
                age: ''
            },
            rule3: {
                passwd: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                passwdCheck: [
                    { validator: validatePassCheck, trigger: 'blur' }
                ],
                age: [
                    { validator: validateAge, trigger: 'blur' }
                ]
            },
        };
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        console.log("success");
                    } else {
                        console.log("fail");
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        },
        mounted() {}
    };
`
export default code
