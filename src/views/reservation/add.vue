<template>
  <div class="center">
    <div class="center_title">
      <span>{{$route.meta.name}}</span>
    </div>
    <div class="center_content">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item style="width: 50%" label="客户姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item style="width: 50%" label="预约服务" prop="reserva">
          <el-input v-model="form.reserva"></el-input>
        </el-form-item>
        <el-form-item style="width: 50%" label="联系方式" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item style="width: 50%" label="预约备注" prop="remark">
          <el-input  type="textarea" v-model="form.remark"></el-input>
        </el-form-item>
        <el-form-item style="padding: 0 10px">
          <el-button type="primary" @click="submitForm('form')">提交</el-button>
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
        reserva: '',
        phone: '',
        remark: '',
      },
      rules: {
        name: [
          { required: true, message: '客户姓名必填', trigger: 'blur' }
        ],
        reserva: [
          { required: true, message: '预约服务必填', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '联系方式必填', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>

<style scoped>

</style>
