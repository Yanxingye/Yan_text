<template>
  <div class="center">
    <div class="center_title">
      <span>{{$route.meta.name}}</span>
      <el-button @click="addGoods()" type="primary" size="small" style="float: right">添加商品</el-button>
    </div>
    <div class="center_content">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="商品名称">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="商品分类">
              <el-select v-model="form.type" placeholder="请选择">
                <el-option label="智能" value="1"></el-option>
                <el-option label="数码" value="2"></el-option>
                <el-option label="新品" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="归属门店">
              <el-select v-model="form.room" placeholder="请选择">
                <el-option label="余杭盒马店" value="1"></el-option>
                <el-option label="滨江盒马店" value="2"></el-option>
                <el-option label="西湖盒马店" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="center_content">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="姓名"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="预约服务"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="接待人"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="到店时间"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="预约时间"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="预约门店"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="	预约备注"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="操作"
          width="180"
          >
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="primary" size="small">详情</el-button>
            <el-button size="small" style="border:1px solid red; color: red;">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        type: '',
        room: ''
      },
      tableData: [
        {

        }
      ]
    }
  },
  methods: {
    addGoods () {
      this.$router.push({name: 'addCommodity'})
    }
  }
}
</script>

<style scoped>

</style>
