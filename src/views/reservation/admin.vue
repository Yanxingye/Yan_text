<template>
  <div class="center">
    <div class="center_title">
      <span>{{$route.meta.name}}</span>
    </div>
    <div class="center_content">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="到店时间" style="margin: 20px 0;">
          <el-date-picker
            v-model="form.value1"
            type="date"
            placeholder="请输入">
          </el-date-picker>
          <el-button @click="todayClick">今天</el-button>
          <el-button @click="tomorrowClick">明天</el-button>
          <el-button @click="thisweekClick">本周</el-button>
        </el-form-item>
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
        value1: ''
      },
      tableData: [
        {

        }
      ]
    }
  },
  methods: {
    todayClick () {

    },
    tomorrowClick () {

    },
    thisweekClick () {

    }
  }
}
</script>

<style scoped>

</style>
