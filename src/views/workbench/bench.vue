<template>
  <div class="center">
    <div class="center_title">
      <el-row>
        <el-col :span="6">
          <div class="chart" style="backgroundColor: rgb(27, 201, 142);">
            <div class="chart_data">
              <p>年度销售数</p>
              <div style="display: flex">
                <h2>1,293</h2>
                <div class="per">15%</div>
              </div>
            </div>
            <div>
              <canvas class="canvas" id="myCanvas" width="100%" height="100px"></canvas>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="chart" style="backgroundColor: rgb(230, 71, 88);">
            <div class="chart_data">
              <p>年度销售数</p>
              <div style="display: flex">
                <h2>1,293</h2>
                <div class="per">15%</div>
              </div>
            </div>
            <div>
              <canvas class="canvas" id="myCanvas1" width="100%" height="100px"></canvas>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="chart" style="backgroundColor: rgb(159, 133, 255);">
            <div class="chart_data">
              <p>年度销售数</p>
              <div style="display: flex">
                <h2>1,293</h2>
                <div class="per">15%</div>
              </div>
            </div>
            <div>
              <canvas class="canvas" id="myCanvas2" width="100%" height="100px"></canvas>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="chart" style="backgroundColor: rgb(229, 217, 54);">
            <div class="chart_data">
              <p>年度销售数</p>
              <div style="display: flex">
                <h2>1,293</h2>
                <div class="per">15%</div>
              </div>
              
            </div>
            <div>
              <canvas class="canvas" id="myCanvas3" width="100%" height="100px"></canvas>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="center_content">
      <h4>收入概览</h4>
      <el-row>
        <el-col :span="8">
          <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
          <div class="ring_text">
            预付金额
            <span>0.00</span>
          </div>
        </el-col>
        <el-col :span="16">
          <el-row>
            <el-col :span="12"
            v-for="(item, index) in data5List"
            :key="index"
            style="margin: 170px 0 0 0">
              <div class="center_text">
                {{item.name}}
                <el-tooltip content="item.direction" placement="top">
                  <i class="iconfont icon-Group-" style="margin-top: 3px;"></i>
                </el-tooltip>
              </div>
              <div class="center_num">{{item.num}}</div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="center_content">
      <el-row>
        <el-col :span="6"
        v-for="(item, index) in dataList"
        :key="index"
        style="margin: 20px 0">
          <div class="center_text">
            {{item.name}}
            <el-tooltip content="item.direction" placement="top">
              <i class="iconfont icon-Group-" style="margin-top: 3px;"></i>
            </el-tooltip>
          </div>
          <div class="center_num">{{item.num}}</div>
        </el-col>
      </el-row>
    </div>
    <div class="center_content">
      <el-row>
        <el-col :span="6"
        v-for="(item, index) in data1List"
        :key="index"
        style="margin: 20px 0">
          <div class="center_text">
            {{item.name}}
            <el-tooltip content="item.direction" placement="top">
              <i class="iconfont icon-Group-" style="margin-top: 3px;"></i>
            </el-tooltip>
          </div>
          <div class="center_num">{{item.num}}</div>
        </el-col>
      </el-row>
    </div>
    <div class="center_content">
      <h4>常用导航</h4>
      <el-row>
        <el-col :span="8"
        v-for="(item, index) in subList"
        :key="index">
          <div class="sub_btn" :style="{backgroundColor: item.color}"
            @click="$router.push({path: item.routePath})">
            {{item.sub}}
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="center_content">
      <h4>预约概况</h4>
      <el-row>
        <el-col :span="12">
          <ve-ring :data="chartData1" :settings="chartSettings"></ve-ring>
          <div class="ring_text">
            预付金额
            <span>0.00</span>
          </div>
        </el-col>
        <el-col :span="12">
          <ve-ring :data="chartData2" :settings="chartSettings"></ve-ring>
          <div class="ring_text">
            预付金额
            <span>0.00</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="center_content">
      <h4>付款方式</h4>
      <el-row>
        <el-col :span="12">
          <ve-ring :data="chartData3" :settings="chartSettings"></ve-ring>
          <div class="ring_text">
            预付金额
            <span>0.00</span>
          </div>
        </el-col>
        <el-col :span="12">
          <ve-ring :data="chartData4" :settings="chartSettings"></ve-ring>
          <div class="ring_text">
            预付金额
            <span>0.00</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="center_content">
      <el-row>
        <el-col :span="6"
        v-for="(item, index) in data2List"
        :key="index"
        style="margin: 20px 0">
          <div class="center_text">
            {{item.name}}
            <el-tooltip content="item.direction" placement="top">
              <i class="iconfont icon-Group-" style="margin-top: 3px;"></i>
            </el-tooltip>
          </div>
          <div class="center_num">{{item.num}}</div>
        </el-col>
      </el-row>
    </div>
    <div class="center_content">
      <el-row>
        <el-col :span="12"
        v-for="(item, index) in data3List"
        :key="index"
        style="margin: 20px 0">
          <div class="center_text">
            {{item.name}}
            <el-tooltip content="item.direction" placement="top">
              <i class="iconfont icon-Group-" style="margin-top: 3px;"></i>
            </el-tooltip>
          </div>
          <div class="center_num">{{item.num}}</div>
        </el-col>
      </el-row>
    </div>
    <div class="center_content">
      <h4>汇总数据</h4>
      <el-row>
        <el-col :span="6"
        v-for="(item, index) in data4List"
        :key="index"
        style="margin: 20px 0">
          <div class="center_text">
            {{item.name}}
            <el-tooltip content="item.direction" placement="top">
              <i class="iconfont icon-Group-" style="margin-top: 3px;"></i>
            </el-tooltip>
          </div>
          <div class="center_num">{{item.num}}</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      limitShowNum: 3
    }
    return {
      dataList: [
        {
          name: '营业收入',
          direction: '相关说明',
          num: '123,459'
        },
        {
          name: '充值收入',
          direction: '相关说明',
          num: '3,954'
        },
        {
          name: '现金支付',
          direction: '相关说明',
          num: '509,432'
        },
        {
          name: '网上支付',
          direction: '相关说明',
          num: '249,234'
        },
        {
          name: '实体下单',
          direction: '相关说明',
          num: '123,459'
        },
        {
          name: '网上下单',
          direction: '相关说明',
          num: '3,954'
        },
        {
          name: '新增用户',
          direction: '相关说明',
          num: '2,334'
        },
        {
          name: '新增会员',
          direction: '相关说明',
          num: '1,234'
        }
      ],
      data1List: [
        {
          name: '营业收入',
          direction: '相关说明',
          num: '123,459'
        },
        {
          name: '充值收入',
          direction: '相关说明',
          num: '3,954'
        },
        {
          name: '现金支付',
          direction: '相关说明',
          num: '509,432'
        },
        {
          name: '网上支付',
          direction: '相关说明',
          num: '249,234'
        }
      ],
      subList: [
        {
          sub: '资产管理',
          color: 'rgb(94, 131, 251)',
          routePath: '/layout/assets'
        },
        {
          sub: '商品管理',
          color: 'rgb(247, 218, 71)',
          routePath: '/layout/commodity/admin'
        },
        {
          sub: '预约管理',
          color: 'rgb(238, 112, 109)',
          routePath: '/layout/reservation'
        },
        {
          sub: '订单管理',
          color: 'rgb(88, 202, 154)',
          routePath: '/layout/order'
        },
        {
          sub: '会员管理',
          color: 'rgb(88, 202, 154)',
          routePath: '/layout/vip'
        },
        {
          sub: '添加商品',
          color: 'rgb(68, 126, 255)',
          routePath: '/layout/commodity/add'
        }
      ],
      data2List: [
        {
          name: '营业收入',
          direction: '相关说明',
          num: '123,459'
        },
        {
          name: '充值收入',
          direction: '相关说明',
          num: '3,954'
        },
        {
          name: '现金支付',
          direction: '相关说明',
          num: '509,432'
        },
        {
          name: '网上支付',
          direction: '相关说明',
          num: '249,234'
        }
      ],
      data3List: [
        {
          name: '营业收入',
          direction: '相关说明',
          num: '123,459'
        },
        {
          name: '充值收入',
          direction: '相关说明',
          num: '3,954'
        }
      ],
      data4List: [
        {
          name: '营业收入',
          direction: '相关说明',
          num: '123,459'
        },
        {
          name: '充值收入',
          direction: '相关说明',
          num: '3,954'
        },
        {
          name: '现金支付',
          direction: '相关说明',
          num: '509,432'
        },
        {
          name: '网上支付',
          direction: '相关说明',
          num: '249,234'
        }
      ],
      data5List: [
        {
          name: '营业收入',
          direction: '相关说明',
          num: '123,459'
        },
        {
          name: '充值收入',
          direction: '相关说明',
          num: '3,954'
        }
      ],
      myCanvas: '',
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '网店收入', '访问用户': 34.4 },
          { '日期': '实体收入', '访问用户': 65.5 }
        ]
      },
      chartData1: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '网店预付金额', '访问用户': 30 },
          { '日期': '实体点预付金额', '访问用户': 70 }
        ]
      },
      chartData2: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '网店预约', '访问用户': 80 },
          { '日期': '实体店预约', '访问用户': 20 }
        ]
      },
      chartData3: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '现金', '访问用户': 20 },
          { '日期': '微信', '访问用户': 10 },
          { '日期': '支付宝', '访问用户': 70 }
        ]
      },
      chartData4: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '现金', '访问用户': 60 },
          { '日期': '微信', '访问用户': 30 },
          { '日期': '支付宝', '访问用户': 10 }
        ]
      }
    }
  },
  mounted () {
    var canvas = document.getElementById('myCanvas');
    var ctx = myCanvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'white'
    ctx.moveTo(10,90);
    ctx.lineTo(10,80);
    ctx.stroke();
    ctx.moveTo(10,80);
    ctx.lineTo(30,60);
    ctx.stroke();
    ctx.moveTo(30,60);
    ctx.quadraticCurveTo(40, 40, 40, 30);
    ctx.stroke();
    ctx.moveTo(40, 30)
    ctx.quadraticCurveTo(60, 0, 70, 60);
    ctx.stroke();
    ctx.moveTo(70, 60)
    ctx.quadraticCurveTo(80, 80, 90, 80);
    ctx.stroke();
    ctx.moveTo(90, 80);
    ctx.lineTo(90, 90);
    ctx.stroke();
    ctx.moveTo(90, 90);
    ctx.lineTo(10, 90);
    ctx.stroke();
    var canvas = document.getElementById('myCanvas1');
    var ctx = myCanvas1.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'white'
    ctx.moveTo(10,90);
    ctx.lineTo(10,80);
    ctx.stroke();
    ctx.moveTo(10,80);
    ctx.lineTo(30,60);
    ctx.stroke();
    ctx.moveTo(30,60);
    ctx.quadraticCurveTo(40, 40, 40, 30);
    ctx.stroke();
    ctx.moveTo(40, 30)
    ctx.quadraticCurveTo(60, 0, 70, 60);
    ctx.stroke();
    ctx.moveTo(70, 60)
    ctx.quadraticCurveTo(80, 80, 90, 80);
    ctx.stroke();
    ctx.moveTo(90, 80);
    ctx.lineTo(90, 90);
    ctx.stroke();
    ctx.moveTo(90, 90);
    ctx.lineTo(10, 90);
    ctx.stroke();
    var canvas = document.getElementById('myCanvas2');
    var ctx = myCanvas2.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'white'
    ctx.moveTo(10,90);
    ctx.lineTo(10,80);
    ctx.stroke();
    ctx.moveTo(10,80);
    ctx.lineTo(30,60);
    ctx.stroke();
    ctx.moveTo(30,60);
    ctx.quadraticCurveTo(40, 40, 40, 30);
    ctx.stroke();
    ctx.moveTo(40, 30)
    ctx.quadraticCurveTo(60, 0, 70, 60);
    ctx.stroke();
    ctx.moveTo(70, 60)
    ctx.quadraticCurveTo(80, 80, 90, 80);
    ctx.stroke();
    ctx.moveTo(90, 80);
    ctx.lineTo(90, 90);
    ctx.stroke();
    ctx.moveTo(90, 90);
    ctx.lineTo(10, 90);
    ctx.stroke();
    var canvas = document.getElementById('myCanvas3');
    var ctx = myCanvas3.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'white'
    ctx.moveTo(10,90);
    ctx.lineTo(10,80);
    ctx.stroke();
    ctx.moveTo(10,80);
    ctx.lineTo(30,60);
    ctx.stroke();
    ctx.moveTo(30,60);
    ctx.quadraticCurveTo(40, 40, 40, 30);
    ctx.stroke();
    ctx.moveTo(40, 30)
    ctx.quadraticCurveTo(60, 0, 70, 60);
    ctx.stroke();
    ctx.moveTo(70, 60)
    ctx.quadraticCurveTo(80, 80, 90, 80);
    ctx.stroke();
    ctx.moveTo(90, 80);
    ctx.lineTo(90, 90);
    ctx.stroke();
    ctx.moveTo(90, 90);
    ctx.lineTo(10, 90);
    ctx.stroke();
  }
}
</script>

<style scoped>
.center_title {
  height: 220px;
}
.chart {
  width: 90%;
  height: 200px;
  background-color: #526632;
}
.chart_data {
  margin: 0 10px;
  height: 50px;
  width: 100%;
  color: #fff;
}
.per {
  width: 30px;
  height: 30px;
  margin: 25px 0 0 15px;
}
.canvas {
  margin-top: 50px;
  width: 100%;
  height: 100px;
}
h4 {
  margin: 0 0 20px 0;
}
.center_text {
  display: flex;
  margin-top: 15px;
  justify-content:center;
}
.center_num {
  display: flex;
  font-size: 22px;
  justify-content:center;
}
.sub_btn {
  width: 100px;
  height: 60px;
  border-radius: 5px;
  margin: 10px auto;
  text-align:center;
  line-height: 60px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
}
canvas {
  border: 0px solid #fff;
}
.ring_text {
  width: 70px;
  text-align: center;
  position: relative;
  left: 41%;
  bottom: 218px;
}
.ring_text span {
  font-size: 24px;
}
</style>
