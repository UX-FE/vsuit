<template>
    <div :type="type" :class="classes" :disabled="disabled" @click="buttonClick">
        <Icon v-if="!!icon" :type="icon" color="#fff"></Icon>
        <span v-if="!!status" class="status-icon">
            <Icon v-if="status==='loading'" type="load-a" color="#fff"></Icon>
            <Icon v-if="status==='success'" type="android-done" color="#fff"></Icon>
            <Icon v-if="status==='error'" type="close" color="#fff"></Icon>
            <Icon v-if="status==='warning'" type="alert" color="#fff"></Icon>
        </span>
        <span>
            <slot></slot>
        </span>
    </div>
</template>
<script>
import { oneOf } from '../../utils/assist'
import { prefix } from '../var'
const btnPrefix = prefix + 'btn'
export default {
  name: 'BaseButton',
  props: {
    type: {// 按钮类型
      type: String,
      validator (value) {
        return oneOf(value, ['default', 'primary', 'ghost', 'text'])
      }

    },
    shape: {// 按钮形状
      type: String,
      validator (value) {
        return oneOf(value, ['square', 'circle', 'circle-outline'])
      }
    },
    size: {// 按钮大小
      type: String,
      validator (value) {
        return oneOf(value, ['small', 'large'])
      }
    },
    icon: {
      type: String
    },
    status: String, // 按钮状态（是否加载中）
    disabled: Boolean // 按钮是否不可用
  },
  data () {
    return {
    }
  },
  computed: {
    classes () {
      return [
        `${btnPrefix}`,
        {
          [`${btnPrefix}-${this.type}`]: !!this.type,
          [`${btnPrefix}-${this.shape}`]: !!this.shape,
          [`${btnPrefix}-${this.size}`]: !!this.size,
          [`${btnPrefix}-${this.status}`]: !!this.status
        }
      ]
    }
  },
  methods: {
    buttonClick (event) {
      this.$emit('on-click-btn', event)
    }
  },
  mounted () {
  }
}
</script>
