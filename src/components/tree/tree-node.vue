<template>
    <transition name="fade">
        <ul :class="wrapClasses">
            <li>
                <div :class="titleWrapClasses" @click="clickTitle" :style="titleStyle">
                    <span :class="[prefix+'-arrow']">
                        <Icon v-if="node.childs.length" :type="iconType" :class="{expanded:expanded}"></Icon>
                    </span>
                    <template v-if="checkable">
                        <Checkbox v-model="checked" @on-change="handleCheck" :disabled="disabled"><span :class="[prefix+'-title']">
                            <slot>{{node.title}}</slot></span>
                        </Checkbox>
                    </template>
                    <template v-else>
                        <span :class="[prefix+'-title']">
                            <slot>{{node.title}}</slot>
                        </span>
                    </template>
                </div>
                <div v-if="expanded" :class="bodyWrapClasses">
                    <TreeNode v-for="(itm,i) in node.childs" :key="i" :node="itm" :level="level+1" :disabled="itm.disabled">
                    </TreeNode>
                </div>
            </li>
        </ul>
    </transition>
</template>
<script>
    import Emitter from '../../mixins/emitter';
    import { findComponentUpward } from '../../utils/assist';
    import { prefix } from '../var';
    const treeNodePrefix = prefix+'tree-node';
    export default {
        name: 'TreeNode',
        mixins: [ Emitter ],
        props: {
            level:{
                type:[String,Number]
            },
            node:{
                type:Object,
                default(){
                    return {};
                }
            },
            disabled:{
                type:Boolean,
                default:false
            },
        },
        data () {
            return {
                prefix:treeNodePrefix,
                expanded:false,
                checkable:false,
                checked:false,
                accordion:false,
                data:this.node,
                iconType:'arrow-down-b'
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${treeNodePrefix}`,
                    {
                        [`${treeNodePrefix}-disabled`]:this.disabled
                    }
                    ];
            },
            titleWrapClasses () {
                return `${treeNodePrefix}-title-wrap`;
            },
            arrowClasses(){
                return `${treeNodePrefix}-title-arrow`;
            },
            titleClasses () {
                return `${treeNodePrefix}-title`;
            },
            bodyWrapClasses () {
                return `${treeNodePrefix}-body`;
            },
            titleStyle(){
                return {
                    'padding-left':(18*this.level)+'px'
                }
            }
        }, 
        methods: {
            handleCheck(val){
                this.checked = val;
            },
            clickTitle(){
                this.expanded = !this.expanded;
                if(this.expanded&&this.accordion){
                    
                }
                this.dispatch('Tree', 'on-click', this);
            }
        },
        mounted() {
            const Tree = findComponentUpward(this, 'Tree');
            if (Tree){
                this.checkable = Tree.checkable;
                this.iconType = Tree.iconType;
                this.accordion = Tree.accordion;
                if(!!Tree.defaultExpanded&&Tree.defaultExpanded.length&&Tree.defaultExpanded.indexOf(this.node.id)>-1){
                    this.expanded = true;
                }
                if(!!Tree.defaultChecked&&Tree.defaultChecked.length&&Tree.defaultChecked.indexOf(this.node.id)>-1){
                    this.checked = true;
                }
            }
            if(this.checkable&&this.$parent.checked){
                this.checked = true;
            }
        }
    };
</script>
