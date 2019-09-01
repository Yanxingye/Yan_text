<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url("//at.alicdn.com/t/font_1349616_ykabfvs9t3.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  background-color: rgb(247, 247, 247);
  overflow: hidden;
}
body {
  margin: 0;
}
.center {
  /* background-color: rgb(185, 185, 185); */
  width: 98%;
  margin: 10px 10px;
}
.center_title {
  height: 24px;
  margin: 0 10px 20px;
}
.center_content {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin: 20px 0px;
}
.el-col-8 {
  padding: 0 20px;
}
.el-table th.is-leaf{
  background-color: rgb(247, 247, 247);
}
</style>
