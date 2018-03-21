<template>
    <div :class="wrapClasses">
        <TreeNode v-for="(item,index) in tree" :key="index" :node="item" :level=0 :disabled="item.disabled">
        </TreeNode>
    </div>
</template>
<script>
    import { prefix } from '../var';
    const treePrefix = prefix+'tree';
    export default {
        name: 'Tree',
        props: {
            tree:{
                type:Array,
                default(){
                    return [];
                }
            },
            checkable:{
                type:Boolean,
                default:false
            },
            accordion:{
                type:Boolean,
                default:false
            },
            minChecked:{
                type:Number
            },
            maxChecked:{
                type:Number
            },
            defaultExpanded:{
                type:Array
            },
            defaultChecked:{
                type:Array
            },
            iconType:{
                type:String,
                default:'arrow-down-b'
            }
        },
        data () {
            return {
                data:this.tree
            };
        },
        computed: {
            wrapClasses () {
                return `${treePrefix}`;
            }
        }, 
        methods: {
            handleClickNode(node){
                this.$emit("on-click-node",node.data);
            }
        },
        mounted() {
            this.$on('on-click', this.handleClickNode);
        }
    };
</script>
