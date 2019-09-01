<template>
  <div class="center">
    <div class="center_title">
      <span>{{$route.meta.name}}</span>
    </div>
    <div class="center_content">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="订单编号">
              <el-input v-model="form.name" placeholder="请输入订单编号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="商品编号">
              <el-input v-model="form.name" placeholder="请输入商品编号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="申请单号">
              <el-input v-model="form.name" placeholder="请输入申请单号"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="订单名称">
              <el-input v-model="form.name" placeholder="请输入订单名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="订单状态">
              <el-select v-model="form.region" placeholder="请选择" style="width: 100%">
                <el-option label="已发货" value="1"></el-option>
                <el-option label="代发货" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="订单类型">
              <el-select v-model="form.region" placeholder="请选择" style="width: 100%">
                <el-option label="普通订单" value="1"></el-option>
                <el-option label="代付订单" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="isAdvancedSearch">
          <el-col :span="8">
            <el-form-item label="创建时间">
              <el-date-picker
                v-model="value1"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width: 100%">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="下单时间">
              <el-date-picker
                v-model="value2"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width: 100%">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="退款时间">
              <el-date-picker
                v-model="value3"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                style="width: 100%">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="isAdvancedSearch">
          <el-col :span="8">
            <el-form-item label="付款方式">
              <el-select v-model="form.region" placeholder="请选择" style="width: 100%">
                <el-option label="微信" value="1"></el-option>
                <el-option label="支付宝" value="2"></el-option>
                <el-option label="银行卡" value="3"></el-option>
                <el-option label="找人代付" value="4"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="物流方式">
              <el-select v-model="form.region" placeholder="请选择" style="width: 100%">
                <el-option label="快递发货" value="1"></el-option>
                <el-option label="上面自提" value="2"></el-option>
                <el-option label="同城发货" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-checkbox v-model="checked" style="margin-left: 10px">查询我处理过的订单</el-checkbox>
          </el-col>
        </el-row>
        <el-form-item style="padding: 0 10px">
          <el-button style="margin-left: 40%" type="primary" @click="submitForm('value')">搜索</el-button>
          <el-button @click="resetForm('value')">重置</el-button>
          <div class="advancedSearch"
           @click="advancedSearch"
           v-if="isDownSearch">
            高级搜索
            <i class="el-icon-arrow-down"></i>
          </div>
          <div class="advancedSearch"
           @click="advancedSearch"
           v-if="isUpSearch">
            高级搜索
            <i class="el-icon-arrow-up"></i>
          </div>
        </el-form-item>
      </el-form>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="订单编号"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="商品编号"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="订单名称"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="付款方式"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="订单类型"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="创建时间"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="	物流方式"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="订单状态"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="操作"
          >
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return{
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      value1: '',
      value2: '',
      value3: '',
      checked: false,
      isAdvancedSearch: false,
      isUpSearch: false,
      isDownSearch: true,
      tableData: [
        {
          data: '1'
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    advancedSearch() {
      this.isAdvancedSearch = !this.isAdvancedSearch
      this.isUpSearch = !this.isUpSearch
      this.isDownSearch = !this.isDownSearch
    } 
  }
}
</script>

<style scoped>
.advancedSearch {
  float: right;
  cursor: pointer;
}
</style>
