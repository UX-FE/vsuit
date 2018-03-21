let code = {}

code.base = `
    <template>
        <Collapse v-model="collapse1.value">
            <Collapse-item v-for="(item,index) in collapse1.data" :key="index" :name="item.name">
                <p slot="title">{{item.title}}</p>
                <div slot="content">
                    <p v-for="(itm,i) in item.content" :key="i">{{itm}}</p>
                </div>
            </Collapse-item>
        </Collapse>
    </template>
    export default {
        data() {
        return {
            collapse1:{
                value:[],
                data:[
                    {
                        name:'1',
                        title:'title1',
                        content:[
                            '这是一段内容',
                            '这是一段内容'
                        ]
                    },
                    {
                        name:'2',
                        title:'title2',
                        content:[
                            '这是一段内容',
                            '这是一段内容'
                        ]
                    },
                    {
                        name:'3',
                        title:'title3',
                        content:[
                            '这是一段内容',
                            '这是一段内容'
                        ]
                    }
                ]
            }
        }
    };
`
code.custom = `
    <template>
        <Collapse v-model="collapse2.value" :icon-type="collapse2.iconType" icon-position="right">
            <Collapse-item v-for="(item,index) in collapse2.data" :key="index" :name="item.name">
                <p slot="title">{{item.title}}</p>
                <div slot="content">
                    <p v-for="(itm,i) in item.content" :key="i">{{itm}}</p>
                </div>
            </Collapse-item>
        </Collapse>
    </template>
    export default {
        data() {
        return {
            collapse2:{
                value:['1'],
                iconType:['arrow-right-b','arrow-down-b'],
                data:[
                    {
                        name:'1',
                        title:'title1',
                        content:[
                            '这是一段内容',
                            '这是一段内容'
                        ]
                    },
                    {
                        name:'2',
                        title:'title2',
                        content:[
                            '这是一段内容',
                            '这是一段内容'
                        ]
                    },
                    {
                        name:'3',
                        title:'title3',
                        content:[
                            '这是一段内容',
                            '这是一段内容'
                        ]
                    }
                ]
            }
        }
    };
`
code.open = `
    <template>
        <Collapse v-model="collapse1.value" default-status="allOpen">
            <Collapse-item v-for="(item,index) in collapse1.data" :key="index" :name="item.name">
                <p slot="title">{{item.title}}</p>
                <div slot="content">
                    <p v-for="(itm,i) in item.content" :key="i">{{itm}}</p>
                </div>
            </Collapse-item>
        </Collapse>
    </template>
    export default {
        data() {
        return {
            collapse1:{
                value:[],
                data:[
                    {
                        name:'1',
                        title:'title1',
                        content:[
                            '这是一段内容',
                            '这是一段内容'
                        ]
                    },
                    {
                        name:'2',
                        title:'title2',
                        content:[
                            '这是一段内容',
                            '这是一段内容'
                        ]
                    },
                    {
                        name:'3',
                        title:'title3',
                        content:[
                            '这是一段内容',
                            '这是一段内容'
                        ]
                    }
                ]
            }
        }
    };
`


export default code
