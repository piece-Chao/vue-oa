<template>
  <el-table
    :data="notepadList"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-tag slot="reference" size="medium">{{ scope.row.name }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      label="描述"
      width="280">
      <template slot-scope="scope">
          <el-input :value="scope.row.desc" :disabled="scope.row.disabled"></el-input>
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
    return {}
  },
  computed: {
    ...mapState({
      notepadList: state => state.Notepad.notepadList
    })
  },
  methods: {
    ...mapMutations([
      'deleteNotePadData',
      'modifyNotePadData',
      'saveNotePadData'
    ]),
    ...mapActions([
      'reqNotePadList'
    ]),
    handleEdit (index, row) {
      this.modifyNotePadData(index)
    },
    handleDelete (index, row) {
      this.deleteNotePadData(index)
    },
    handleDone (index, row) {
      this.saveNotePadData(index)
    }
  },
  created () {
    this.reqNotePadList()
  }
}
</script>
