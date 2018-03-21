let code = {}

code.base = `
    <template>
        <Tag>标签</Tag>
        <TagGroup :tags="tag1">
            <Tag v-for="(item,index) in tag1" :key="index" :tag="item" @on-close="closeTag">
                {{item.name}}
            </Tag>
        </TagGroup>
    </template>
    export default {
        data() {
            return {
                tag1:[
                    {
                        id:'1',
                        name:'标签一'
                    },
                    {
                        id:'2',
                        name:'标签二'
                    },
                    {
                        id:'3',
                        name:'标签三'
                    },
                    {
                        id:'4',
                        name:'标签四'
                    }
                ],
            };
        }
    };
`

code.close = `
    <template>
        <Tag>标签</Tag>
        <TagGroup :tags="tag1">
            <Tag v-for="(item,index) in tag1" :key="index" :tag="item" closeable @on-close="closeTag">
                {{item.name}}
            </Tag>
        </TagGroup>
    </template>
    export default {
        data() {
            return {
                tag1:[
                    {
                        id:'1',
                        name:'标签一'
                    },
                    {
                        id:'2',
                        name:'标签二'
                    },
                    {
                        id:'3',
                        name:'标签三'
                    },
                    {
                        id:'4',
                        name:'标签四'
                    }
                ],
            };
        },
        methods: {
          closeTag (event,tag) {
              let closeIndex;
              for(var i = 0;i<this.tag2.length;i++){
                  if(this.tag2[i].name===tag.name){
                      closeIndex = i;
                  }
              }
              if(closeIndex!==undefined){
                  this.tag2.splice(closeIndex,1);
                  this.$emit('on-close-tag', event);
              }
          }
        },
    };
`
code.color = `
    <template>
        <TagGroup :tags="tag1">
            <Tag v-for="(item,index) in tag1" :key="index" :tag="item" color="green">
                {{item.name}}
            </Tag>
        </TagGroup>
        <TagGroup :tags="tag1">
            <Tag v-for="(item,index) in tag1" :key="index" :tag="item" color="red">
                {{item.name}}
            </Tag>
        </TagGroup>
    </template>
    export default {
        data() {
            return {
                tag1:[
                    {
                        id:'1',
                        name:'标签一'
                    },
                    {
                        id:'2',
                        name:'标签二'
                    },
                    {
                        id:'3',
                        name:'标签三'
                    },
                    {
                        id:'4',
                        name:'标签四'
                    }
                ],
            };
        },
    };
`
code.size = `
    <template>
        <TagGroup :tags="tag1">
            <Tag v-for="(item,index) in tag1" :key="index" :tag="item">
                {{item.name}}
            </Tag>
        </TagGroup>
    </template>
    export default {
        data() {
            return {
                tag1:[
                    {
                        id:'1',
                        name:'标签一'
                    },
                    {
                        id:'2',
                        name:'标签二'
                    },
                    {
                        id:'3',
                        name:'标签三'
                    },
                    {
                        id:'4',
                        name:'标签四'
                    }
                ],
            };
        },
    };
`
code.direction = `
    <template>
        <TagGroup :tags="tag1" deraction="horizontal">
            <Tag v-for="(item,index) in tag1" :key="index" :tag="item">
                {{item.name}}
            </Tag>
        </TagGroup>
        <TagGroup :tags="tag1" deraction="vertical">
            <Tag v-for="(item,index) in tag1" :key="index" :tag="item">
                {{item.name}}
            </Tag>
        </TagGroup>
    </template>
    export default {
        data() {
            return {
                tag1:[
                    {
                        id:'1',
                        name:'标签一'
                    },
                    {
                        id:'2',
                        name:'标签二'
                    },
                    {
                        id:'3',
                        name:'标签三'
                    },
                    {
                        id:'4',
                        name:'标签四'
                    }
                ],
            };
        },
    };
`


export default code
