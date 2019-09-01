<template>
  <div class="center">
    <div class="center_title">
      <span>{{$route.meta.name}}</span>
    </div>
    <div class="center_content">
      <el-row>
        <el-col :span="8" style="hight: 55px">
          <div class="center_text">
            可用余额(元)
            <el-tooltip content="相关说明" placement="top">
              <i class="iconfont icon-Group-" style="margin-top: 3px;"></i>
            </el-tooltip>
          </div>
          <div class="center_num">0.00</div>
        </el-col>
        <el-col :span="8">
          <div class="center_text">
            待结算(元)
            <el-tooltip content="相关说明" placement="top">
              <i class="iconfont icon-Group-" style="margin-top: 3px;"></i>
            </el-tooltip>
          </div>
          <div class="center_num">0.00</div>
        </el-col>
        <el-col :span="8">
          <div class="center_text">
            储值资金(元)
            <el-tooltip content="相关说明" placement="top">
              <i class="iconfont icon-Group-" style="margin-top: 3px;"></i>
            </el-tooltip>
          </div>
          <div class="center_num">0.00</div>
        </el-col>
      </el-row>
    </div>
    <div class="center_title">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="时间筛选">
              <el-date-picker
                v-model="form.value1"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="时间区间">
              <el-select v-model="form.type" placeholder="请选择">
                <el-option label="近三个月" value="1"></el-option>
                <el-option label="近半年" value="2"></el-option>
                <el-option label="近一年" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="状态">
              <el-select v-model="form.room" placeholder="请选择">
                <el-option label="提现中" value="1"></el-option>
                <el-option label="提现完成" value="2"></el-option>
                <el-option label="提现失败" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="center_content" style="marginTop: 40px;">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="申请时间"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="交易号"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="金额(万元)"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="处理完成时间"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="申请人"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="状态"
          >
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

      }
    }
  }
}
</script>

<style scoped>
.el-col-8 {
  height: 100px;
}
.center_text {
  display: flex;
  margin-top: 25px;
  justify-content:center;
}
.center_num {
  display: flex;
  font-size: 22px;
  margin-top: 10px;
  justify-content:center;
}
</style>
