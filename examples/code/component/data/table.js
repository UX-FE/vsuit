let code = {}

code.base = `
    <template>
        <Table :thead="table1.thead" :data="table1.data">
        </Table>
    </template>
    export default {
        data() {
            return {
                table1:{
                    thead:[
                        {
                            column:'date',
                            name:'日期'
                        },
                        {
                            column:'name',
                            name:'姓名'
                        },
                        {
                            column:'address',
                            name:'地址'
                        },
                    ],
                    data:[
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        }
                    ]
                }
            };
        }
    };
`

code.type = `
    <template>
        <Table :thead="table1.thead" :data="table1.data" type="strip">
        </Table>
        <br/>
        <Table :thead="table1.thead" :data="table1.data" type="zebra">
        </Table>
        <br/>
        <Table :thead="table1.thead" :data="table1.data" type="bordered">
        </Table>
    </template>
    export default {
        data() {
            return {
                table1:{
                    thead:[
                        {
                            column:'date',
                            name:'日期'
                        },
                        {
                            column:'name',
                            name:'姓名'
                        },
                        {
                            column:'address',
                            name:'地址'
                        },
                    ],
                    data:[
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        }
                    ]
                }
            };
        }
    };
`
code.order = `
    <template>
        <Table :thead="table2.thead" :data="table2.data" order type="bordered">
        </Table>
    </template>
    export default {
        data() {
            return {
                table2:{
                    thead:[
                        {
                            column:'order',
                            name:'序列',
                            width:100
                        },
                        {
                            column:'date',
                            name:'日期'
                        },
                        {
                            column:'name',
                            name:'姓名'
                        },
                        {
                            column:'address',
                            name:'地址'
                        },
                    ],
                    data:[
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        }
                    ]
                }
            };
        }
    };
`
code.title = `
    <template>
        <Table :thead="table1.thead" :data="table1.data" title="我是标题">
        </Table>
    </template>
    export default {
        data() {
            return {
                table1:{
                    thead:[
                        {
                            column:'date',
                            name:'日期'
                        },
                        {
                            column:'name',
                            name:'姓名'
                        },
                        {
                            column:'address',
                            name:'地址'
                        },
                    ],
                    data:[
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        }
                    ]
                }
            };
        }
    };
`
code.sort = `
    <template>
        <Table :thead="table3.thead" :data="table3.data" type="bordered" sortType="date">
        </Table>
    </template>
    export default {
        data() {
            return {
                table3:{
                    thead:[
                        {
                            column:'date',
                            name:'日期',
                            sort:true
                        },
                        {
                            column:'name',
                            name:'姓名',
                            sort:true
                        },
                        {
                            column:'address',
                            name:'地址',
                            sort:true
                        },
                    ],
                    data:[
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        }
                    ]
                },
            };
        }
    };
`
code.radio = `
    <template>
        <Table :thead="table1.thead" :data="table1.data" clickable type="bordered">
        </Table>
    </template>
    export default {
        data() {
            return {
                table1:{
                    thead:[
                        {
                            column:'date',
                            name:'日期'
                        },
                        {
                            column:'name',
                            name:'姓名'
                        },
                        {
                            column:'address',
                            name:'地址'
                        },
                    ],
                    data:[
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        }
                    ]
                }
            };
        }
    };
`
code.multi = `
    <template>
        <Table :thead="table4.thead" :data="table4.data" multi-select type="bordered">
        </Table>
    </template>
    export default {
        data() {
            return {
                table4:{
                    thead:[
                        {
                            type:'selection',
                            width:80
                        },
                        {
                            column:'date',
                            name:'日期',
                            sort:true
                        },
                        {
                            column:'name',
                            name:'姓名',
                            sort:true
                        },
                        {
                            column:'address',
                            name:'地址',
                            sort:true
                        },
                    ],
                    data:[
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        }
                    ]
                },
            };
        }
    };
`
code.custom = `
    <template>
        <Table :thead="table1.thead" :data="table1.data" type="bordered">
            <tr slot="tr"  v-for="(item,index) in table1.data" :key="index">
                <td v-for="(itm,i) in table1.thead" :key="i">
                    <div class="cell">
                        <template v-if="itm.column==='name'">
                            <BaseButton>{{item[itm.column]}}</BaseButton>
                        </template>
                        <template v-else>
                            <span v-html="item[itm.column]"></span>
                        </template>
                    </div>  
                </td>
            </tr>
        </Table>
    </template>
    export default {
        data() {
            return {
                table1:{
                    thead:[
                        {
                            column:'date',
                            name:'日期'
                        },
                        {
                            column:'name',
                            name:'姓名'
                        },
                        {
                            column:'address',
                            name:'地址'
                        },
                    ],
                    data:[
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        }
                    ]
                }
            };
        }
    };
`
code.open = `
    <style scoped>
    .expand-row{
        text-align:center;
    }
    </style>
    <template>
    <div class="expand-row">
        我是展开的内容
    </div>
    </template>
    <script>
    export default {
        props: {
            row: Object
        }
    };
    </script>
    import expandRow from './table-expand.vue';
    <template>
        <Table :thead="table5.thead" :data="table5.data" :expand="table5.expandRender" type="zebra">
        </Table>
    </template>
    export default {
        data() {
            return {
                table5:{
                    expandRender: (h, params) => {
                        return h(expandRow, {
                            props: {
                                row: params.row
                            }
                        })
                    },
                    thead:[
                        {
                            type:'expand',
                            width:60
                        },
                        {
                            column:'date',
                            name:'日期'
                        },
                        {
                            column:'name',
                            name:'姓名'
                        },
                        {
                            column:'address',
                            name:'地址'
                        },
                    ],
                    data:[
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        }
                    ]
                },
            };
        }
    };
`
code.fix = `
    <template>
        <Table :thead="table1.thead" :data="table1.data" title="我是标题" type="zebra" height="160">
        </Table>
    </template>
    export default {
        data() {
            return {
                table1:{
                    thead:[
                        {
                            column:'date',
                            name:'日期'
                        },
                        {
                            column:'name',
                            name:'姓名'
                        },
                        {
                            column:'address',
                            name:'地址'
                        },
                    ],
                    data:[
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        },
                        {
                            date: '2018-01-02',
                            name: '微笑',
                            address: '广州市'
                        }
                    ]
                }
            };
        }
    };
`

export default code
