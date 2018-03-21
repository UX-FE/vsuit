let code = {}

code.base = `
    <template>
        <Tree :tree="tree1.data" @on-click-node="handleClickNode">
        </Tree>
    </template>
    export default {
        data() {
            return {
                tree1:{
                    data:[
                        {
                            id:1,
                            title:'一级1',
                            childs:[
                                {
                                    id:1.1,
                                    title:'一级1-1',
                                    childs:[
                                        {
                                            title:'一级1-1-1',
                                            childs:[
                                                
                                            ]
                                        },
                                        {
                                            title:'一级1-1-2',
                                            childs:[
        
                                            ]
                                        },
                                        
                                    ]
                                },
                                {
                                    id:1.2,
                                    title:'一级1-2',
                                    childs:[
        
                                    ]
                                },
                            ]
                        },
                        {
                            id:2,
                            title:'一级2',
                            childs:[
                                {
                                    id:2.1,
                                    title:'一级2-1',
                                    childs:[
                                        
                                    ]
                                },
                                {
                                    id:2.2,
                                    title:'一级2-2',
                                    childs:[
        
                                    ]
                                },
        
                            ]
                        },
                        {
                            id:3,
                            title:'一级3',
                            childs:[
                                {
                                    id:3.1,
                                    title:'一级3-1',
                                    childs:[
                                        
                                    ]
                                },
                                {
                                    id:3.2,
                                    title:'一级3-2',
                                    childs:[
        
                                    ]
                                },
        
                            ]
                        }
                    ]
                },
            };
        },
        methods: {
            handleClickNode(data){
                console.log(data);
            }
        },
        mounted() {}
    };
`

code.check = `
    <template>
        <Tree :tree="tree1.data" checkable @on-click-node="handleClickNode"></Tree>
    </template>
    export default {
        data() {
            return {
                tree1:{
                    data:[
                        {
                            id:1,
                            title:'一级1',
                            childs:[
                                {
                                    id:1.1,
                                    title:'一级1-1',
                                    childs:[
                                        {
                                            title:'一级1-1-1',
                                            childs:[
                                                
                                            ]
                                        },
                                        {
                                            title:'一级1-1-2',
                                            childs:[
        
                                            ]
                                        },
                                        
                                    ]
                                },
                                {
                                    id:1.2,
                                    title:'一级1-2',
                                    childs:[
        
                                    ]
                                },
                            ]
                        },
                        {
                            id:2,
                            title:'一级2',
                            childs:[
                                {
                                    id:2.1,
                                    title:'一级2-1',
                                    childs:[
                                        
                                    ]
                                },
                                {
                                    id:2.2,
                                    title:'一级2-2',
                                    childs:[
        
                                    ]
                                },
        
                            ]
                        },
                        {
                            id:3,
                            title:'一级3',
                            childs:[
                                {
                                    id:3.1,
                                    title:'一级3-1',
                                    childs:[
                                        
                                    ]
                                },
                                {
                                    id:3.2,
                                    title:'一级3-2',
                                    childs:[
        
                                    ]
                                },
        
                            ]
                        }
                    ]
                },
            };
        },
        methods: {
            handleClickNode(data){
                console.log(data);
            }
        },
        mounted() {}
    };
`
code.defaultCheck = `
    <template>
        <Tree :tree="tree1.data" checkable @on-click-node="handleClickNode" :default-expanded="[1,2]" :default-checked="[1.2]"></Tree>
    </template>
    export default {
        data() {
            return {
                tree1:{
                    data:[
                        {
                            id:1,
                            title:'一级1',
                            childs:[
                                {
                                    id:1.1,
                                    title:'一级1-1',
                                    childs:[
                                        {
                                            title:'一级1-1-1',
                                            childs:[
                                                
                                            ]
                                        },
                                        {
                                            title:'一级1-1-2',
                                            childs:[
        
                                            ]
                                        },
                                        
                                    ]
                                },
                                {
                                    id:1.2,
                                    title:'一级1-2',
                                    childs:[
        
                                    ]
                                },
                            ]
                        },
                        {
                            id:2,
                            title:'一级2',
                            childs:[
                                {
                                    id:2.1,
                                    title:'一级2-1',
                                    childs:[
                                        
                                    ]
                                },
                                {
                                    id:2.2,
                                    title:'一级2-2',
                                    childs:[
        
                                    ]
                                },
        
                            ]
                        },
                        {
                            id:3,
                            title:'一级3',
                            childs:[
                                {
                                    id:3.1,
                                    title:'一级3-1',
                                    childs:[
                                        
                                    ]
                                },
                                {
                                    id:3.2,
                                    title:'一级3-2',
                                    childs:[
        
                                    ]
                                },
        
                            ]
                        }
                    ]
                },
            };
        },
        methods: {
            handleClickNode(data){
                console.log(data);
            }
        },
        mounted() {}
    };
`
code.disabled = `
    <template>
        <Tree :tree="tree2.data" checkable @on-click-node="handleClickNode" :default-expanded="[1,2]" :default-checked="[1.2]"></Tree>
    </template>
    export default {
        data() {
            return {
                tree2:{
                    data:[
                        {
                            id:1,
                            title:'一级1',
                            childs:[
                                {
                                    id:1.1,
                                    disabled:true,
                                    title:'一级1-1',
                                    childs:[
                                        {
                                            title:'一级1-1-1',
                                            childs:[
                                                
                                            ]
                                        },
                                        {
                                            title:'一级1-1-2',
                                            childs:[
        
                                            ]
                                        },
                                        
                                    ]
                                },
                                {
                                    id:1.2,
                                    title:'一级1-2',
                                    disabled:true,
                                    childs:[
        
                                    ]
                                },
                            ]
                        },
                        {
                            id:2,
                            title:'一级2',
                            disabled:true,
                            childs:[
                                {
                                    id:2.1,
                                    disabled:true,
                                    title:'一级2-1',
                                    childs:[
                                        
                                    ]
                                },
                                {
                                    id:2.2,
                                    title:'一级2-2',
                                    childs:[
        
                                    ]
                                },
        
                            ]
                        },
                        {
                            id:3,
                            title:'一级3',
                            childs:[
                                {
                                    id:3.1,
                                    title:'一级3-1',
                                    childs:[
                                        
                                    ]
                                },
                                {
                                    id:3.2,
                                    title:'一级3-2',
                                    childs:[
        
                                    ]
                                },
        
                            ]
                        }
                    ]
                },
            };
        },
        methods: {
            handleClickNode(data){
                console.log(data);
            }
        },
        mounted() {}
    };
`

export default code
