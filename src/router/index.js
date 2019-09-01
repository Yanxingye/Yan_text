import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

//工作台
const workbench = {
  path: '/layout/workbench',
  name: workbench,
  meta: {
    name: '工作台',
    icon: ''
  },
  component: () => import('@/views/workbench/bench')
}

//资产管理
const assets = {
  path: '/layout/assets',
  name: assets,
  meta: {
    name: '资产管理',
    icon: ''
  },
  component: () => import('@/views/assets/assets')
}

//商品
const commodity = {
  path: '/layout/commodity',
  name: commodity,
  meta: {
    name: '商品',
    icon: ''
  },
  component: () => import('@/views/commodity/list'),
  children: [
    {
      path: '/layout/commodity/add',
      name: 'addCommodity',
      meta: {
        name: '添加商品'
      },
      component: () => import('@/views/commodity/add')
    },
    {
      path: '/layout/commodity/admin',
      name: 'adminCommodity',
      meta: {
        name: '商品管理'
      },
      component: () => import('@/views/commodity/admin')
    }
  ]
}

//预约
const reservation = {
  path: '/layout/reservation',
  name: 'reservation',
  meta: {
    name: '预约',
    icon: ''
  },
  component: () => import('@/views/reservation/list'),
  children: [
    {
      path: '/layout/reservation/add',
      name: 'addReservation',
      meta: {
        name: '添加预约'
      },
      component: () => import('@/views/reservation/add')
    },
    {
      path: '/layout/reservation/admin',
      name: 'adminReservation',
      meta: {
        name: '预约管理'
      },
      component: () => import('@/views/reservation/admin')
    }
  ]
}

//订单
const order = {
  path: '/layout/order',
  name: order,
  meta: {
    name: '订单管理',
    icon: ''
  },
  component: () => import('@/views/order/order')
}

//VIP
const vip = {
  path: '/layout/vip',
  name: vip,
  meta: {
    name: 'vip',
    icon: ''
  },
  component: () => import('@/views/vip/vip')
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/layout',
      component: () => import('@/App'),

      children: [
        {
          path: '/layout',
          name: 'layout',
          component: () => import('@/layout/layout'),
          children: [workbench, commodity, assets, reservation, order, vip]
        }
      ]
    }
  ]
})
