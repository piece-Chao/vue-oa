<template>
    <div id="userSetUp">
      <main>
        <section class="nav">
          <span>账户信息</span>
        </section>
        <section class="content">
          <TitleAndInput title="姓名：" :value="dataItem.name" :disabled="localStorageDate.name ? true : false" placeholder="请输入内容" type="text" :onInput="_onInputName" />
          <TitleAndInput title="性别：" :value="dataItem.sex" :disabled="localStorageDate.sex ? true : false" placeholder="请输入内容" type="text" :onInput="_onInputSex" />
          <TitleAndInput title="出生日期：" :value="dataItem.date" :disabled="localStorageDate.date ? true : false" placeholder="请输入内容" type="text" :onInput="_onInputDate" />
          <TitleAndInput title="年龄：" :value="dataItem.age" :disabled="localStorageDate.age ? true : false" placeholder="请输入内容" type="text" :onInput="_onInputAge" />
          <TitleAndInput title="工号：" :value="dataItem.workNumber" placeholder="请输入内容" type="text" :onInput="_onInputWorkNumber" />
          <TitleAndInput title="所属部门：" :value="dataItem.department" placeholder="请输入内容" type="text" :onInput="_onInputDepartment" />
          <div class="setup_button">
            <el-button @click="_onSubmit" type="primary">保 存</el-button>
          </div>
        </section>
      </main>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import { TitleAndInput } from './SubComponent'
export default {
  data () {
    return {
      dataItem: {
        name: '',
        sex: '',
        date: '',
        age: '',
        workNumber: '',
        department: ''
      },
      localStorageDate: ''
    }
  },
  components: {
    TitleAndInput
  },
  methods: {
    ...mapActions([
      'saveUserInfo'
    ]),
    _onInputName (value) {
      this.dataItem.name = value
    },
    _onInputSex (value) {
      this.dataItem.sex = value
    },
    _onInputDate (value) {
      this.dataItem.date = value
    },
    _onInputAge (value) {
      this.dataItem.age = value
    },
    _onInputWorkNumber (value) {
      this.dataItem.workNumber = value
    },
    _onInputDepartment (value) {
      this.dataItem.department = value
    },
    _onSubmit () {
      this.$confirm('确认保存此信息，保存后姓名、性别、出生日期、年龄不可更改, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.saveUserInfo(this.dataItem)
        this.$message({
          type: 'success',
          message: '保存成功!'
        })
        // TODO
        window.location.reload()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    }
  },
  created () {
    let oaDataItem = localStorage.getItem('oaDataItem')
    if (oaDataItem) {
      this.dataItem = JSON.parse(oaDataItem)
      this.localStorageDate = JSON.parse(oaDataItem)
    }
  }
}
</script>
<style lang="less" scoped>
    #userSetUp {
      height: 100%;
      width: 100%;
      main {
        width: 720px;
        max-width: 960px;
        margin: 60px auto;
        box-shadow: 0 1px 5px 0 hsla(0,0%,71%,.29);
        .nav {
          height: 60px;
          line-height: 60px;
          text-align: center;
          border-bottom: 1px solid #dbdbdb;
        }
        .content {
          padding: 20px 0 30px 0;
          box-sizing: border-box;
          .setup_button {
            text-align: center;
            margin-top: 30px;
            button {
              width: 80px;
              height: 36px;
              line-height: 36px;
              padding: 0;
              margin: 0 auto;
            }
          }
        }
        section {
          > div {
            display: flex;
            margin: 10px 0;
            line-height: 60px;
            padding: 0 100px;
            box-sizing: border-box;
            span {
              flex: 0.2;
              padding-right: 20px;
              box-sizing: border-box;
              text-align: right;
            }
            .input {
              flex: 0.8;
              margin-right: 100px;
            }
          }
        }
      }
    }
</style>
