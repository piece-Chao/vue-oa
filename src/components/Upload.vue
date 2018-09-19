<template>
  <div id="Upload">
    <section class="upload_container">
      <span class="title">添加文件</span>
      <el-upload list-type="picture" multiple :limit='5' :auto-upload="false"
        action=''
        accept='image/png,image/jpeg,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        :on-remove="removeFile"
        :on-change='addFile'
        :on-exceed='fileExceed'
        :file-list='fileList'>
        <div slot="tip" class="el-upload__tip">附件大小不超过5MB</div>
      <el-button size="small" type="primary">添加附件</el-button>
    </el-upload>
    </section>
    <section class="submit">
        <el-button @click="submit_upload" :disabled="fileList.length <= 0" type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </section>
    <section class="upload_container">
      <span class="title">预览</span>
      <vue-preview v-if="imgsSrc && imgsSrc.length > 0" :slides="imgsSrc"></vue-preview>
      <div v-for="file in previewList" :key="file.url" class="download_files_pwd">
        <p>
          <img @click="_downFile(file)" :src="file.file_type === 'pdf' ? '/static/images/BA_pdf.png' : '/static/images/BA_word.png'" alt="file.file_name">
          <span>{{file.name}}</span>
        </p>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState({
      fileList: state => state.Upload.fileList,
      imgsSrc: state => state.Upload.imgsSrc,
      previewList: state => state.Upload.previewList
    })
  },
  methods: {
    ...mapMutations([
      'changeFileList',
      'submitUpload'
    ]),
    removeFile (file, showList) {
      this.changeFileList(showList)
    },
    addFile (file, showList, e) {
      if (file.raw.type === 'application/pdf') {
        file.file_type = 'pdf'
      }
      if (file.raw.type === 'application/msword' || file.raw.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        file.file_type = 'docx'
      }
      this.changeFileList(showList)
    },
    fileExceed () {
      this.$message({message: '最多上传5个附件'})
    },
    submit_upload () {
      this.submitUpload()
    },
    _downFile (file) {
      let newWindow = window.open()
      newWindow.location.href = file.url
    }
  }
}
</script>
<style lang="less" scoped>
  #Upload {
    max-width: 1200px;
    width: 100%;
    height: 100%;
    min-width: 1000px;
    .upload_container {
      width: 900px;
      margin: 60px 50px;
      padding: 20px 50px;
      box-sizing: border-box;
      border: 1px solid #cccccc;
      border-radius: 6px;
      .title {
        display: inline-block;
        font: 16px 'SimSong';
        color: #67b0ff;
        margin-top: 0;
        margin-left: -20px;
        margin-bottom: 20px;
        vertical-align: top;
      }
      .download_files_pwd {
        width: 200px;
        height: 200px;
        display: inline-block;
        margin: 5px;
        cursor: pointer;
        padding-top: 50px;
        box-sizing: border-box;
        p {
          width: 100%;
          height: 100%;
          text-align: center;
          display: flex;
          flex-flow: column wrap;
          float: left;
          img {
            width: 70px;
            margin: 0 auto;
          }
        }
      }
    }
    .submit {
      height: 40px;
      button {
        width: 100px;
        height: 100%;
        background: #67b0ff;
        color: #ffffff;
        float: right;
        margin-right: 200px;
      }
    }
  }
</style>
