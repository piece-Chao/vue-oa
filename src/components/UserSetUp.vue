<template>
    <div id="userSetUp">
      <main>
        <section class="nav">
          <span>账户信息</span>
        </section>
        <section>
          <div>
            <span>姓名：</span>
            <el-input
              class="input"
              placeholder="请输入内容"
              type="text" />
          </div>
          <div>
            <span>性别：</span>
            <el-input
              class="input"
              placeholder="请输入内容"
              type="text" />
          </div>
          <div>
            <span>出生日期：</span>
            <el-input
              class="input"
              placeholder="请输入内容"
              type="text" />
          </div>
          <div>
            <span>工龄：</span>
            <el-input
              class="input"
              placeholder="请输入内容"
              type="text" />
          </div>
          <div>
            <span>工号：</span>
            <el-input
              class="input"
              placeholder="请输入内容"
              type="text" />
          </div>
          <div>
            <span>所属部门：</span>
            <el-input
              class="input"
              placeholder="请输入内容"
              type="text" />
          </div>
        </section>
      </main>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
    #userSetUp {
      height: 100%;
      width: 100%;
      main {
        width: 960px;
        max-width: 1200px;
        margin: 60px auto;
        box-shadow: 0 1px 5px 0 hsla(0,0%,71%,.29);
        .nav {
          height: 60px;
          line-height: 60px;
          text-align: center;
          border-bottom: 1px solid #dbdbdb;
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


