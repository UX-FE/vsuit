<template>
    <div class="other">
        <div class="title1">
            文件上传
        </div>
        <div class="mItem">
            <div class="title2">
                使用：
            </div>
            <div class="wrap">
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
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div>
            <div class="title2">
                图片上传与预览：
            </div>
            <div class="wrap">
                <Upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <Icon v-else type="plus" class="avatar-uploader-icon"></Icon>
                    </Upload>
                <Alert type="info" mode="fix" v-model="uploadtip1">{{uploadtip1_text}}</Alert>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.preview" lang="html"></DCode>
            </div>
            <div class="title2">
                手动上传：
            </div>
            <div class="wrap">
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
                <div class="q-title">代码示例：</div>
                <DCode :code="code.action" lang="html"></DCode>
            </div>
            <!-- <div class="title2">
                多张图片上传：
            </div>
            <div class="wrap">
                <el-uploadUpload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
                </Upload>
                <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
                <Upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <Icon v-else type="plus" class="avatar-uploader-icon"></Icon>
                    </Upload>
                <Alert type="info" mode="fix" v-model="uploadtip1">{{uploadtip1_text}}</Alert>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.base" lang="html"></DCode>
            </div> -->
            <div class="title2">
                API：
            </div>
            <div class="wrap">
                <div class="q-title">Upload【props】：</div>
                <Table type="bordered" :thead="api.thead" :data="api.data">
                </Table>
            </div>
            <!-- <div class="wrap">
                <div class="q-title">说明：</div>
                <div>
                    文件上传
                    <br/>
                    通过设置upload的相关配置，设置显示样式，不设置为默认样式
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.html" lang="html"></DCode>
                <div class="q-title">API：</div>
                <DCode :code="code.js" lang="js"></DCode>
            </div> -->
        </div>
    </div>
</template>
<script>
  import Code from '../../../code/component/form/upload'
  export default {
    name: 'vUpload',
    data () {
      return {
        code: Code,
        imageUrl: '',
        uploadtip1_text:'',
        uploadtip1:false,
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        api:{
            thead:[
                {
                    column:'prop',
                    name:'属性',
                },
                {
                    column:'description',
                    name:'说明',
                },
                {
                    column:'type',
                    name:'属性',
                },
                {
                    column:'option',
                    name:'可选值',
                },
                {
                    column:'default',
                    name:'默认值',
                },
            ],
            data:[
                {
                    prop:'action',
                    description:'必选参数，上传的地址',
                    type:'String',
                    option:'-',
                    default:'-'
                },
                {
                    prop:'multiple',
                    description:'是否支持多选文件',
                    type:'Boolean',
                    option:'-',
                    default:'false'
                },
                {
                    prop:'name',
                    description:'上传的文件字段名',
                    type:'String',
                    option:'-',
                    default:'-'
                }
            ]
        },
      }
    },
    components: {
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
        this.uploadtip1_text = `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`;
        this.uploadtip1 = true;
      },
      beforeRemove(file, fileList) {
          alert(`确定移除 ${ file.name }？`)
      }
    },
    mounted () {}
  }
</script>
<style lang="sass">
.avatar-uploader .vsu-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .vsu-upload:hover {
    border-color: #409EFF;
  }
  i.vsu-ion.avatar-uploader-icon {
    font-size:30px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>