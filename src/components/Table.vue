  <template>
    <el-table
      :data="tableItem"
      style="width: 100%">
      <el-table-column
        fixed
        prop="date"
        label="日期"
        sortable
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="120">
        <template slot-scope="scope">
          <el-tag
            disable-transitions>{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Table',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      tableItem: state => state.Table.tableData
    })
  },
  methods: {
    ...mapActions([
      'getTableData'
    ])
  },
  created () {
    this.getTableData()
  }
}
</script>
