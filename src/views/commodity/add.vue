<template>
  <div class="center">
    <div class="center_title">
      <span>{{$route.meta.name}}</span>
      <el-button @click="addGoods()" type="primary" size="small" style="float: right">添加商品</el-button>
    </div>
    <div class="center_content">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="商品名称" style="width: 50%">
          <el-input v-model="form.name" placeholder="请输入商品名称"></el-input>
        </el-form-item>
        <el-form-item label="条形码" style="width: 50%">
          <el-input v-model="form.name" placeholder="请输入数字条形码"></el-input>
        </el-form-item>
        <el-form-item label="库存量"
          @mouseover="mouseOver"
          @mouseleave="mouseLeave"
          :class="showButton">
          <el-input-number style="width: 15%;" v-model="num8" controls-position="right" @change="handleChange"></el-input-number>
        </el-form-item>
        <el-form-item label="商品标签" style="width: 50%">
          <el-select v-model="form.region" placeholder="请选择" style="width: 100%">
            <el-option label="新品" value="1"></el-option>
            <el-option label="数码" value="2"></el-option>
            <el-option label="智能" value="3"></el-option>
            <el-option label="生活" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品价格" style="width: 50%">
          <el-input v-model="form.name" placeholder="请输入商品价格"></el-input>
        </el-form-item>
        <el-form-item label="预售时间" style="width: 50%">
          <el-date-picker
            v-model="form.value2"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            style="width: 100%">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="预约条件">
          <el-radio v-model="form.radio1" label="1">需要支付</el-radio>
          <el-radio v-model="form.radio1" label="2">无需支付</el-radio>
        </el-form-item>
        <el-form-item label="体验展示">
          <el-radio v-model="form.radio2" label="1">展示</el-radio>
          <el-radio v-model="form.radio2" label="2">不展示</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button style="margin-left: 40%" type="primary" @click="submitForm('value')">提交</el-button>
        </el-form-item>
      </el-form>
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
        room: '',
        region: '',
        value2: '',
        radio1: '1',
        radio2: '1'
      },
      num8: 0,
      showButton: ''
    }
  },
  methods: {
    addGoods () {
      this.$router.push({name: 'addCommodity'})
    },
    submitForm () {

    },
    handleChange(value) {
      console.log(value);
    },
    mouseOver () {
      this.active = "display: block"
    },
    mouseLeave () {

    }
  }
}
</script>

<style scoped>
/* .center>>>.el-input-number__increase {
  display: none
}
.center>>>.el-input-number__decrease {
  display: none
} */
</style>
