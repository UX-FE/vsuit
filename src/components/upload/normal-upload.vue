<template>
  <div tabindex="0" @click="handleClick" @keydown="handleKeydown" :class="[prefix]">
      <template v-if="drag">
        <upload-dragger :disabled="disabled" @on-file="uploadFiles"><slot></slot></upload-dragger>
      </template>
      <template>
        <slot></slot>
      </template>
        <input type="file" ref="input" :name="name" @change="handleChange" :multiple="multiple" :class="[prefix+'-input']" :accept="accept">
    </div>
</template>

<script>
import ajax from './ajax';
import UploadDragger from './upload-dragger.vue';
import {
prefix
} from '../var'
const uploadPrefix = prefix + 'upload'

export default {
  inject: ['uploader'],
  components: {
    UploadDragger
  },
  props: {
    type: String,
    action: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: 'file'
    },
    data: Object,
    headers: Object,
    withCredentials: Boolean,
    multiple: Boolean,
    accept: String,
    onStart:  {
      type: Function,
      default: function() {}
    },
    onProgress:{
      type: Function,
      default: function() {}
    },
    onSuccess: {
      type: Function,
      default: function() {}
    },
    onError: {
      type: Function,
      default: function() {}
    },
    beforeUpload: {
      type: Function,
      default: function() {}
    },
    drag: Boolean,
    onPreview: {
      type: Function,
      default: function() {}
    },
    onRemove: {
      type: Function,
      default: function() {}
    },
    fileList: Array,
    autoUpload: Boolean,
    listType: String,
    httpRequest: {
      type: Function,
      default: ajax
    },
    disabled: Boolean,
    limit: Number,
    onExceed: {
      type: Function,
      default: function() {}
    },
  },

  data() {
    return {
      prefix:uploadPrefix,
      mouseover: false,
      reqs: {}
    };
  },
  computed:{
      classes(){
          return [
              `${uploadPrefix}`,
              {
                  [`${uploadPrefix}-${this.listType}`]:!!this.listType
              }
          ]
      }
  },

  methods: {
    isImage(str) {
      return str.indexOf('image') !== -1;
    },
    //处理选择文件更改
    handleChange(ev) {
      const files = ev.target.files;

      if (!files) return;
      this.uploadFiles(files);
    },
    //更新选择文件
    uploadFiles(files) {console.log("uploadFiles");console.log(this.limit);console.log(this.fileList);console.log(files)
      if (this.limit && this.fileList.length + files.length > this.limit) {
        this.onExceed && this.onExceed(files, this.fileList);
        return;
      }

      let postFiles = Array.prototype.slice.call(files);
      if (!this.multiple) { postFiles = postFiles.slice(0, 1); }

      if (postFiles.length === 0) { return; }

      postFiles.forEach(rawFile => {
        this.onStart(rawFile);
        if (this.autoUpload) this.upload(rawFile);
      });
    },
    upload(rawFile, file) {console.log("upload")
      this.$refs.input.value = null;

      if (!this.beforeUpload) {
        return this.post(rawFile);
      }

      const before = this.beforeUpload(rawFile);
      if (before && before.then) {console.log(1)
        before.then(processedFile => {
          const fileType = Object.prototype.toString.call(processedFile);
          if (fileType === '[object File]' || fileType === '[object Blob]') {
            this.post(processedFile);
          } else {
            this.post(rawFile);
          }
        }, () => {
          this.onRemove(null, rawFile);
        });
      } else if (before !== false) {console.log(2)
        this.post(rawFile);
      } else {console.log(3)
        this.onRemove(null, rawFile);
      }
    },
    abort(file) {
      const { reqs } = this;
      if (file) {
        let uid = file;
        if (file.uid) uid = file.uid;
        if (reqs[uid]) {
          reqs[uid].abort();
        }
      } else {
        Object.keys(reqs).forEach((uid) => {
          if (reqs[uid]) reqs[uid].abort();
          delete reqs[uid];
        });
      }
    },
    post(rawFile) {console.log("post")
      const { uid } = rawFile;
      const options = {
        headers: this.headers,
        withCredentials: this.withCredentials,
        file: rawFile,
        data: this.data,
        filename: this.name,
        action: this.action,
        onProgress: e => {
          this.onProgress(e, rawFile);
        },
        onSuccess: res => {
          this.onSuccess(res, rawFile);
          delete this.reqs[uid];
        },
        onError: err => {
          this.onError(err, rawFile);
          delete this.reqs[uid];
        }
      };
      console.log(options)
      const req = this.httpRequest(options);
      this.reqs[uid] = req;
      if (req && req.then) {
        req.then(options.onSuccess, options.onError);
      }
    },
    handleClick() {
      if (!this.disabled) {
        this.$refs.input.value = null;
        this.$refs.input.click();
      }
    },
    handleKeydown(e) {
      if (e.keyCode === 13 || e.keyCode === 32) {
        this.handleClick();
      }
    }
  },
};
</script>
