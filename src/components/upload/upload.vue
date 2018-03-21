<template>
   <div>
        <template v-if="typeof FormData !== 'undefined'">
            <NormalUpload 
            :type="type" 
            :drag="drag" 
            :action="action" 
            :multiple="multiple" 
            :headers="headers" 
            :name="name" 
            :data="data" 
            :accept="accept" 
            :fileList="fileList" 
            :autoUpload="autoUpload" 
            :listType="listType" 
            :disabled="disabled" 
            :limit="limit" 
            :before-upload="beforeUpload"
            :with-credentials="withCredentials"
            :on-exceed="onExceed"
            :on-start="handleStart"
            :on-progress="handleProgress"
            :on-success="handleSuccess"
            :on-error="handleError"
            :on-preview="onPreview"
            :on-remove="handleRemove"
            :http-request="httpRequest"
            ref="upload-inner"
            ><slot v-if="$slots.trigger" name="trigger"></slot><slot v-else></slot></NormalUpload>
        </template>
        <template v-else>
            <IframeUpload 
            :type="type" 
            :drag="drag" 
            :action="action" 
            :multiple="multiple" 
            :headers="headers" 
            :name="name" 
            :data="data" 
            :accept="accept" 
            :fileList="fileList" 
            :autoUpload="autoUpload" 
            :listType="listType" 
            :disabled="disabled" 
            :limit="limit" 
            :before-upload="beforeUpload"
            :with-credentials="withCredentials"
            :on-exceed="onExceed"
            :on-start="handleStart"
            :on-progress="handleProgress"
            :on-success="handleSuccess"
            :on-error="handleError"
            :on-preview="onPreview"
            :on-remove="handleRemove"
            :http-request="httpRequest"
            ref="upload-inner"
            ><slot v-if="$slots.trigger" name="trigger"></slot><slot v-else></slot></IframeUpload>
        </template>
        <slot name="action"></slot>
        <slot name="tip"></slot>
       <UploadList v-if="showFileList&&listType !== 'picture-card'"
          :disabled="uploadDisabled"
          :listType="listType"
          :files="uploadFiles"
          @on-remove="handleRemove"
          :handlePreview="onPreview">
        </UploadList>
    </div>
</template>

<script>
import UploadList from './upload-list';
import NormalUpload from './normal-upload';
import IframeUpload from './iframe-upload';
import Progress from '../progress/progress';
// import Migrating from 'element-ui/src/mixins/migrating';
import {
prefix
} from '../var'
const uploadPrefix = prefix + 'upload'

function noop() {}

export default {
  name: 'Upload',

//   mixins: [Migrating],

  components: {
    Progress,
    UploadList,
    NormalUpload,
    IframeUpload
  },

  provide: {
    uploader: this
  },

  inject: {
    elForm: {
      default: ''
    }
  },

  props: {
    action: {
      type: String,
      required: true
    },
    headers: {
      type: Object,
      default() {
        return {};
      }
    },
    data: Object,
    multiple: Boolean,
    name: {
      type: String,
      default: 'file'
    },
    drag: Boolean,
    dragger: Boolean,
    withCredentials: Boolean,
    showFileList: {
      type: Boolean,
      default: true
    },
    accept: String,
    type: {
      type: String,
      default: 'select'
    },
    beforeUpload: Function,
    beforeRemove: Function,
    onRemove: {
      type: Function,
      default: noop
    },
    onChange: {
      type: Function,
      default: noop
    },
    onPreview: {
      type: Function
    },
    onSuccess: {
      type: Function,
      default: noop
    },
    onProgress: {
      type: Function,
      default: noop
    },
    onError: {
      type: Function,
      default: noop
    },
    fileList: {
      type: Array,
      default() {
        return [];
      }
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    listType: {
      type: String,
      default: 'text' // text,picture,picture-card
    },
    httpRequest: Function,
    disabled: Boolean,
    limit: Number,
    onExceed: {
      type: Function,
      default: noop
    }
  },

  data() {
    return {
      prefix:uploadPrefix,
      uploadFiles: [],
      dragOver: false,
      draging: false,
      tempIndex: 1,
      FormData:FormData
    };
  },

  computed: {
    uploadDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  },

  watch: {
    fileList: {
      immediate: true,
      handler(fileList) {console.log("filelist change")
        this.uploadFiles = fileList.map(item => {
          item.uid = item.uid || (Date.now() + this.tempIndex++);
          item.status = 'success';
          return item;
        });
      }
    }
  },

  methods: {
    handleStart(rawFile) {console.log("handleStart")
      rawFile.uid = Date.now() + this.tempIndex++;
      let file = {
        status: 'ready',
        name: rawFile.name,
        size: rawFile.size,
        percentage: 0,
        uid: rawFile.uid,
        raw: rawFile
      };

      try {
        file.url = URL.createObjectURL(rawFile);
      } catch (err) {
        console.error(err);
        return;
      }

      this.uploadFiles.push(file);
      this.onChange(file, this.uploadFiles);
    },
    handleProgress(ev, rawFile) {console.log("handleProgress")
      const file = this.getFile(rawFile);
      this.onProgress(ev, file, this.uploadFiles);
      file.status = 'uploading';
      file.percentage = ev.percent || 0;
    },
    handleSuccess(res, rawFile) {console.log("handleSuccess")
      const file = this.getFile(rawFile);

      if (file) {
        file.status = 'success';
        file.response = res;

        this.onSuccess(res, file, this.uploadFiles);
        this.onChange(file, this.uploadFiles);
      }
    },
    handleError(err, rawFile) {console.log("handleError")
      const file = this.getFile(rawFile);
      const fileList = this.uploadFiles;

      file.status = 'fail';

      fileList.splice(fileList.indexOf(file), 1);

      this.onError(err, file, this.uploadFiles);
      this.onChange(file, this.uploadFiles);
    },
    handleRemove(file, raw) {console.log("handleRemove")
      if (raw) {
        file = this.getFile(raw);
      }
      let doRemove = () => {
        this.abort(file);
        let fileList = this.uploadFiles;
        fileList.splice(fileList.indexOf(file), 1);
        this.onRemove(file, fileList);
      };

      if (!this.beforeRemove) {
        doRemove();
      } else if (typeof this.beforeRemove === 'function') {
        const before = this.beforeRemove(file, this.uploadFiles);
        if (before && before.then) {
          before.then(() => {
            doRemove();
          }, noop);
        } else if (before !== false) {
          doRemove();
        }
      }
    },
    getFile(rawFile) {
      let fileList = this.uploadFiles;
      let target;
      fileList.every(item => {
        target = rawFile.uid === item.uid ? item : null;
        return !target;
      });
      return target;
    },
    abort(file) {
      this.$refs['upload-inner'].abort(file);
    },
    clearFiles() {
      this.uploadFiles = [];
    },
    submit() {
      this.uploadFiles
        .filter(file => file.status === 'ready')
        .forEach(file => {
          this.$refs['upload-inner'].upload(file.raw);
        });
    },
    getMigratingConfig() {
      return {
        props: {
          'default-file-list': 'default-file-list is renamed to file-list.',
          'show-upload-list': 'show-upload-list is renamed to show-file-list.',
          'thumbnail-mode': 'thumbnail-mode has been deprecated, you can implement the same effect according to this case: http://element.eleme.io/#/zh-CN/component/upload#yong-hu-tou-xiang-shang-chuan'
        }
      };
    }
  },
  created(){
      return FormData;
  }
};
</script>
