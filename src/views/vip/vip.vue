<template>
  <div class="center">
    <div class="center_title">
      <span>{{$route.meta.name}}</span>
    </div>
    <div class="center_content">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="消费频次" style="margin: 10px 0;">
          <el-radio-group v-model="form.radio1">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="1月未消费"></el-radio-button>
            <el-radio-button label="2月未消费"></el-radio-button>
            <el-radio-button label="3月未消费"></el-radio-button>
            <el-radio-button label="4月未消费"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="消费次数" style="margin: 20px 0;">
          <el-radio-group v-model="form.radio2">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="1次以内"></el-radio-button>
            <el-radio-button label="2次以内"></el-radio-button>
            <el-radio-button label="3次以内"></el-radio-button>
            <el-radio-button label="4次以上"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="会员等级" style="margin: 20px 0;">
          <el-radio-group v-model="form.radio3">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="普通会员"></el-radio-button>
            <el-radio-button label="白银会员"></el-radio-button>
            <el-radio-button label="黄金会员"></el-radio-button>
            <el-radio-button label="vip会员"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="会员来源" style="margin: 20px 0;">
          <el-radio-group v-model="form.radio4">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="线上顾客"></el-radio-button>
            <el-radio-button label="线下顾客"></el-radio-button>
            <el-radio-button label="广告引流"></el-radio-button>
            <el-radio-button label="未知来源"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="注册时间" style="margin: 20px 0;">
          <el-date-picker
            v-model="form.value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="生日时间" style="margin: 20px 0;">
          <el-date-picker
            v-model="form.value1"
            type="date"
            placeholder="请输入">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="归属门店" style="margin: 20px 0;">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="余杭盒马店" value="1"></el-option>
            <el-option label="滨江盒马店" value="2"></el-option>
            <el-option label="西湖盒马店" value="3"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="center_content">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="会员名称"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="会员等级"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="会员余额(元)"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="累计消费(元)"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="	注册时间"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="生日时间"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="	归属门店"
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
        radio1: '全部',
        radio2: '全部',
        radio3: '全部',
        radio4: '全部',
        value1: '',
        value2: '',
        value3: ''
      },
      tableData: [
        {
          
        }
      ]
    }
  }
}
</script>

<style scoped>
.center>>>.el-radio-button__inner {
  border: none;
  border-radius: 50px;
}
.el-radio-button {
  margin-left: 10px;
  border: none;
}
</style>
