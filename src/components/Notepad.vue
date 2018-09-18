<template>
  <el-table
    :data="notepadList"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span :contenteditable="scope.row.isContenteditable" :spellcheck="scope.row.isSpellcheck" style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-tag :contenteditable="scope.row.isContenteditable" :spellcheck="scope.row.isSpellcheck" slot="reference" size="medium">{{ scope.row.name }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      label="描述"
      width="280">
      <template slot-scope="scope">
          <p :contenteditable="scope.row.isContenteditable" :spellcheck="scope.row.isSpellcheck">{{ scope.row.desc }}</p>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="primary"
          @click="handleDone(scope.$index, scope.row)">完成</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        desc: 'asdasdasdassssssss',
        address: '上海市普陀区金沙江路 1518 弄',
        isContenteditable: false,
        isSpellcheck: false
      }, {
        date: '2016-05-04',
        name: '王小虎',
        desc: 'asdasdasdassssssss',
        address: '上海市普陀区金沙江路 1517 弄',
        isContenteditable: false,
        isSpellcheck: false
      }, {
        date: '2016-05-01',
        name: '王小虎',
        desc: 'asdasdasdassssssss',
        address: '上海市普陀区金沙江路 1519 弄',
        isContenteditable: false,
        isSpellcheck: false
      }, {
        date: '2016-05-03',
        name: '王小虎',
        desc: 'asdasdasdassssssss',
        address: '上海市普陀区金沙江路 1516 弄',
        isContenteditable: false,
        isSpellcheck: false
      }]
    }
  },
  computed: {
    ...mapState({
      notepadList: state => state.Notepad.notepadList
    })
  },
  methods: {
    ...mapMutations([
      'deleteNotePadData'
    ]),
    ...mapActions([
      'reqNotePadList'
    ]),
    handleEdit (index, row) {
      row.isContenteditable = true
      row.isSpellcheck = true
    },
    handleDelete (index, row) {
      this.deleteNotePadData(index)
    },
    handleDone (index, row) {
      row.isContenteditable = false
      row.isSpellcheck = false
    }
  },
  created () {
    this.reqNotePadList()
  }
}
</script>
