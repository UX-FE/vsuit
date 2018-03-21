<template>
  <transition-group tag="ul" :class="classes" name="list">
    <li
      v-for="(file, index) in files"
      :class="itemClasses(file)"
      :key="index"
      tabindex="0"
      @keydown.delete="!disabled && $emit('remove', file)"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="focusing = false"
    >
      <img
        :class="[prefix+'-item-thumbnail']"
        v-if="file.status !== 'uploading' && ['picture-card', 'picture'].indexOf(listType) > -1"
        :src="file.url" alt=""
      >
      <a :class="[prefix+'-item-name']" @click="handleClick(file)">
        <Icon type="document-text" ></Icon>{{file.name}}
      </a>
      <label :class="[prefix+'-item-status']">
        <!-- <Icon :type="{''}"></Icon> -->
        <i :class="{
          'el-icon-upload-success': true,
          'el-icon-circle-check': listType === 'text',
          'el-icon-check': ['picture-card', 'picture'].indexOf(listType) > -1
        }"></i>
      </label>
      <Icon type="close" :class="[prefix+'-item-close']" v-if="!disabled" @on-click-icon="$emit('remove', file)"></Icon>
      <i class="el-icon-close-tip" v-if="!disabled"></i> <!--因为close按钮只在li:focus的时候 display, li blur后就不存在了，所以键盘导航时永远无法 focus到 close按钮上-->
      <Progress
        v-if="file.status === 'uploading'"
        :type="listType === 'picture-card' ? 'circle' : 'default'"
        :stroke-width="listType === 'picture-card' ? 6 : 2"
        :percent="parsePercentage(file.percentage)">
      </Progress>
      <span :class="[prefix+'-item-actions']" v-if="listType === 'picture-card'">
        <span
           :class="[prefix+'-item-preview']"
          v-if="handlePreview && listType === 'picture-card'"
          @click="handlePreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"  :class="[prefix+'-item-delete']"
          @click="$emit('remove', file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
    </li>
  </transition-group>
</template>
<script>
//   import Locale from 'element-ui/src/mixins/locale';
import Progress from '../progress/progress';
import {
prefix
} from '../var'
const uploadPrefix = prefix + 'upload-list'

  export default {
    // mixins: [Locale],

    data() {
      return {
        focusing: false
      };
    },
    components: { Progress },

    props: {
      files: {
        type: Array,
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      handlePreview: Function,
      listType: String
    },
    data(){
      return {
        prefix:uploadPrefix
      }
    },
    computed:{
      classes(){
        return [
          `${uploadPrefix}`,
          {
            [ `${uploadPrefix}-${this.listType}`]:!!this.listType,
            [ `${uploadPrefix}-disabled`]:this.disabled
          }
        ]
      },
    },
    methods: {
      parsePercentage(val) {
        return parseInt(val, 10);
      },
      handleClick(file) {
        this.handlePreview && this.handlePreview(file);
      },
      itemClasses(file){
        return [
          `${uploadPrefix}-item`,
          `${uploadPrefix}-item-${file.status}`,
          {
            [ `${uploadPrefix}-item-${this.focusing}`]:this.focusing
          }
        ]
        
      }
    }
  };
</script>
