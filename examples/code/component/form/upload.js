let code = {}

code.base = `
  <template>
    <Upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
        <BaseButton size="small" type="primary">点击上传</BaseButton>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </Upload>
    <Alert type="info" mode="fix" v-model="uploadtip1">{{uploadtip1_text}}</Alert>
  </template>
  export default {
    data () {
      return {
        uploadtip1_text:'',
        uploadtip1:false,
        fileList: [
          {
            name: 'food.jpeg', 
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }, 
          {
            name: 'food2.jpeg', 
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }
        ],
      }
    },
    watch: {
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.uploadtip1_text = '当前限制选择 3 个文件，本次选择了 files.length 个文件，共选择了 files.length + fileList.length个文件';
        this.uploadtip1 = true;
      },
      beforeRemove(file, fileList) {
          alert('确定移除 file.name ？')
      }
    },
    mounted () {}
  }

`
code.action = `
  <template>
    <Upload
    class="upload-demo"
    ref="upload"
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    :auto-upload="false">
    <BaseButton slot="trigger" size="small" type="primary">选取文件</BaseButton>
    <BaseButton slot="action" style="margin-left: 10px;" size="small" type="primary" @click="submitUpload">上传到服务器</BaseButton>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </Upload>
  </template>
  export default {
    data () {
      return {
        uploadtip1_text:'',
        uploadtip1:false,
        fileList: [
          {
            name: 'food.jpeg', 
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }, 
          {
            name: 'food2.jpeg', 
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }
        ],
      }
    },
    watch: {
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.uploadtip1_text = '当前限制选择 3 个文件，本次选择了 files.length 个文件，共选择了 files.length + fileList.length个文件';
        this.uploadtip1 = true;
      },
      beforeRemove(file, fileList) {
          alert('确定移除 file.name ？')
      }
    },
    mounted () {}
  }

`
code.preview = `
  <template>
    <Upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <Icon v-else type="plus" class="avatar-uploader-icon"></Icon>
    </Upload>
  </template>
  export default {
    data () {
      return {
        imageUrl: '',
      }
    },
    watch: {
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
    },
    mounted () {}
  }

`


export default code
