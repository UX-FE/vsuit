<template>
    <div :class="wrapClasses">
        <div :class="sourceClasses">
            <div :class="[prefix+'-panel-header']">
                <slot name="sourceHeader">
                    <template v-if="checkAll">
                        <Checkbox v-model="checkAllOrigins" name="souce-check-all" @on-change="checkSourceAll" :disabled="(currentTargets.length===data.length)?true:false">{{titles[0]}}</Checkbox>
                    </template>
                    <template v-else>
                        {{titles[0]}}
                    </template>
                    <span v-if="sumable" class="sum">{{sourceChecked.length}}/{{data.length}}</span>
                </slot>
            </div>
            <div :class="[prefix+'-panel-body']">
            <Scroll>
                <CheckboxGroup slot="scrollList" v-model="sourceChecked" vertical name="source-group"  @on-change="handleCheckSourceAll">
                    <Checkbox :class="[prefix+'-panel-item']" v-for="(item,index) in data" :key="index" :disabled="(currentTargets.indexOf(item.value)>-1)?true:false" v-model="item.value" :label="item.label"></Checkbox>
                </CheckboxGroup>
            </Scroll>
            </div>
            <div :class="[prefix+'-panel-footer']"></div>
        </div>
        <div :class="[prefix+'-action']">
            <div :class="backButtonClasses" @click="back"><slot name="back"><Icon :type="actionIcons[0]"></Icon></slot></div>
            <div :class="toButtonClasses" @click="to"><slot name="to"><Icon :type="actionIcons[1]"></Icon></slot></div>
        </div>
        <div :class="destinationClasses">
            <div :class="[prefix+'-panel-header']">
                <slot name="destinationHeader">
                    <template v-if="checkAll">
                        <Checkbox v-model="checkAllTargets" name="target-check-all" @on-change="checkTargetAll" :disabled="!this.currentTargetChecks.length">{{titles[1]}}</Checkbox>
                    </template>
                    <template v-else>
                        {{titles[1]}}
                    </template>
                    <span v-if="sumable" class="sum">{{targetChecked.length}}/{{currentTargetChecks.length}}</span>
                </slot>
            </div>
            <div :class="[prefix+'-panel-body']">
                <CheckboxGroup v-model="targetChecked" vertical name="target-group" @on-change="handleCheckTargetAll">
                    <Checkbox :class="[prefix+'-panel-item']" v-for="(item,index) in currentTargetChecks" :key="index" v-model="item.value" :label="item.label"></Checkbox>
                </CheckboxGroup>
            </div>
            <div :class="[prefix+'-panel-footer']"></div>
        </div>
    </div>
</template>
<script>
    import BaseButton from '../button'
    import Scroll from '../scroll'
    import Icon from '../icon'
    import Checkbox from '../checkbox'
    import CheckboxGroup from '../checkboxgroup'
    import { oneOf } from '../../utils/assist'

import { prefix } from '../var'
const transferPrefix = prefix + 'transfer'

export default {
      name: 'Transfer',
      props: {
        id: {
          type: String,
          required: true
        },
        data: {
          type: Array,
          default () {
            return []
          }
        },
        actionIcons: {
          type: Array,
          default () {
            return ['android-arrow-back', 'android-arrow-forward']
          }
        },
        titles: {
          type: Array,
          default () {
            return ['源列表', '目的列表']
          }
        },
        checkAll: {
          type: Boolean,
          default: true
        },
        checkType: {
          type: String,
          default: 'default',
          validator (value) {
            return oneOf(value, ['button', 'bordered', 'default'])
          }
        },
        height: {
          type: [Number, String],
          default: 240
        },
        sumable: {
          type: Boolean,
          default: false
        },
        filterable: {
          type: Boolean,
          default: false
        }
      },
      data () {
        return {
          prefix: transferPrefix,
          checkAllOrigins: false,
          checkAllTargets: false,
          sourceChecked: [],
          currentTargetChecks: [],
          currentTargets: [],
          targetChecked: [],
        }
  },
      computed: {
        wrapClasses () {
          return [
            `${transferPrefix}`
          ]
        },
        sourceClasses () {
          return [
            `${transferPrefix}-panel`,
            `${transferPrefix}-panel-source`
    
          ]
        },
        destinationClasses () {
          return [
            `${transferPrefix}-panel`,
            `${transferPrefix}-panel-destination`
    
          ]
        },
        backButtonClasses () {
          return [
            `${transferPrefix}-button`,
            {
              'disabled': !this.currentTargets.length
            }
    
          ]
        },
        toButtonClasses () {
          return [
            `${transferPrefix}-button`,
            {
              'disabled': !this.data.length || (this.data.length && this.data.length === this.currentTargets.length)
            }
          ]
        }
      },
      methods: {
        back () {
          if (!this.currentTargetChecks.length) {
            return false
          }
          for (var i = 0; i < this.targetChecked.length; i++) {
            this.currentTargets.splice(this.currentTargets.indexOf(this.targetChecked[i]), 1)
          }
          this.currentTargetChecks = []
          for (var j = 0; j < this.currentTargets.length; j++) {
            for (var z = 0; z < this.data.length; z++) {
              if (this.currentTargets[j] === this.data[z].value) {
                this.currentTargetChecks.push(this.data[z])
              }
            }
          }
          this.checkAllTargets = false
          this.targetChecked = []
        },
        to () {
                // 没有源数据或者左侧的源列表全部选中到了右边时，不响应
          if (!this.data.length || (this.data.length && this.data.length === this.currentTargets.length)) {
            return false
          }
                // 右侧的数据value集合，代表左侧选中且移动的value集合，用于判断左侧复选框状态
          for (var i = 0; i < this.sourceChecked.length; i++) {
            this.currentTargets.push(this.sourceChecked[i])
          }
          this.currentTargetChecks = []
          for (var j = 0; j < this.currentTargets.length; j++) {
            for (var z = 0; z < this.data.length; z++) {
              if (this.currentTargets[j] === this.data[z].value) {
                this.currentTargetChecks.push(this.data[z])
              }
            }
          }
          this.checkAllOrigins = false
          this.sourceChecked = []
        },
        checkSourceAll () {
          //this.checkAllOrigins = !this.checkAllOrigins
          this.sourceChecked = []
          if (this.checkAllOrigins) {
            for (var i = 0; i < this.data.length; i++) {
              this.sourceChecked.push(this.data[i].value)
            }
          }
        },
        handleCheckSourceAll () {
          if (this.sourceChecked.length === this.data.length) {
            this.checkAllOrigins = true
          } else {
            this.checkAllOrigins = false
          }
        },
        checkTargetAll () {
          //this.checkAllTargets = !this.checkAllTargets
          this.targetChecked = []
          if (this.checkAllTargets) {
            for (var i = 0; i < this.currentTargetChecks.length; i++) {
              this.targetChecked.push(this.currentTargetChecks[i].value)
            }
          }
        },
        handleCheckTargetAll () {
          if (this.targetChecked.length === this.currentTargetChecks.length) {
            this.checkAllTargets = true
          } else {
            this.checkAllTargets = false
          }
        }
      },
      watch: {
      },
      mounted () {
      }
    }
</script>
