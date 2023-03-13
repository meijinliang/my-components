import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout'),
    children: [
      {
        path: '/home',
        name: 'Home',
        label: '',
        component: () => import('@/views/home')
      },
      {
        path: '/button',
        name: 'button',
        label: 'Button 按钮',
        component: () => import('@/views/button')
      },
      {
        path: '/input',
        name: 'input',
        label: 'Input 输入框',
        component: () => import('@/views/input')
      },
      {
        path: '/icon',
        name: 'icon',
        label: 'Icon 图标',
        component: () => import('@/views/icon')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
