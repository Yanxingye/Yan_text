<template>
  <el-container style="border: 1px solid #eee">
    <el-aside width="240px" style="background-color: rgb(255, 255, 255); position: fixed">
      <div class="logo">
        <a href="#/" class="logo_text">LOGO</a>
      </div>
      <div class="message">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURcHBwb+/v7+/v76+vujo6OHh4cnJydTU1IOqnXYAAAADdFJOUxPppyMYpxkAAAD6SURBVEjH7dfbDYIwFAbguoHRCYwTKLcBOIUBaHQAIAxQwvwSEQpyaH/FFxP+5y89vacV4uQBOQix86DsxRmDV3HE4EV4YDa4QQRWSjYILKnNzQ0jekY7Yd3B1AVDeiV3wKCHsQPWPUwdkIbYYWSgtsLAwMwKfQNjFCZWWPwBhEcNz+NoZfLfrLXZPYkD+gtd/H6H97UT5+EK0FPY1ZbABaDYygysuTEvtqg9sI9AiyV/o8xgRNj0DLtHaiuszOahxgJLGueeL8Gpa8vnPHx30yEZGKo5lBwMiEnGwIKDKQMVB+UaSGzWwO2psMGPIfxgh78A8KcC/aY8ACmMo3JtJ3ljAAAAAElFTkSuQmCC" alt="" style="display: block; max-width: none; height: 40px; opacity: 1; width: 40px; margin-left: 0px; margin-top: 0px;">
        <div style="width: 60px; margin-left: 10px;">
          <span>淘小宝技术部</span>
        </div>
      </div>
      <el-menu
        :default-active="$route.path"
        router
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        >
        <el-menu-item 
        v-for="(item, index) in navList"
        :key="index"
        :index="item.index">
          <i :class="item.icon"></i>
          <span style="margin-left: 10px" slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    
    <el-container>
      <el-header class="cen_header">
        <div style="margin-right: 20px">
          <el-dropdown>
            <el-dropdown-menu></el-dropdown-menu>
            <i class="iconfont icon-fl-renyuan" style="margin-right: 5px; font-size: 20px; color: white"></i>
          </el-dropdown>
          <span>退出</span>
        </div>
        <div style="margin-right: 20px">
          <el-dropdown>
            <el-dropdown-menu></el-dropdown-menu>
            <i class="iconfont icon-bangzhu" style="margin-right: 5px; font-size: 20px; color: white"></i>
          </el-dropdown>
          <span>帮助</span>
        </div>
        <div style="margin-right: 20px">
          <el-dropdown>
            <el-dropdown-menu></el-dropdown-menu>
            <i class="iconfont icon-xinxi" style="margin-right: 5px; font-size: 20px; color: white"></i>
          </el-dropdown>
          <span>反馈</span>
        </div>
      </el-header>
      
      <el-main style="margin-left: 240px;">
        <router-view/>
      </el-main>
      <el-footer style="display: flex; justify-content: space-between">
        <a href="" class="footer_logo">LOGO</a>
        <div>© 2018 Theme designed by ICE</div>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        navList:[
          {
            index: '/layout/workbench',
            icon: 'iconfont icon-zhuye',
            name: '工作台'
          },
          {
            index: '/layout/assets',
            icon: 'iconfont icon-liebiao1',
            name: '资产管理'
          },
          {
            index: '/layout/commodity/admin',
            icon: 'iconfont icon-gouwuchekong',
            name: '商品管理'
          },
          {
            index: '/layout/commodity/add',
            icon: 'iconfont icon-shuxie',
            name: '添加商品'
          },
          {
            index: '/layout/reservation/admin',
            icon: 'iconfont icon-icon-clock',
            name: '预约管理'
          },
          {
            index: '/layout/reservation/add',
            icon: 'iconfont icon-shuxiebianji',
            name: '添加预约'
          },
          {
            index: '/layout/order',
            icon: 'iconfont icon-03',
            name: '订单管理'
          },
          {
            index: '/layout/vip',
            icon: 'iconfont icon-liebiao',
            name: '会员管理'
          }
        ]
      }
    },
    computed: {
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>

<style scoped>
  .el-header {
    background-color: #3080fe;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .logo {
    height: 62px;
    width: 100%;
    line-height: 62px;
    font-size: 30px;
    margin-right: 0px;
    background: rgb(255, 255, 255);
    justify-content: center;
    border-bottom: 1px solid rgb(245, 245, 245);
    text-align:center;
  }
  .logo_text{
    margin: 0 auto;
    text-decoration:none;
    color: #3080fe;
    font-weight: 700;
  }
  .message {
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: center;
  }
  .nav {
    width: 100%;
    height: 40px;
    display: flex;
  }
  .cen_header {
    font-size: 20px;
    display: flex;
    flex-direction: row-reverse;
    color: white;
  }
  .footer_logo {
    display: block;
    max-width: 180px;
    margin-left: 10px;
    overflow: hidden;
    color: #dddddd;
    font-weight: 700;
    font-size: 30px;
    white-space: nowrap;
    text-decoration: none;
    text-overflow: ellipsis;
  }
</style>
