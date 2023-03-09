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
        component: () => import('@/views/home')
      },
      {
        path: '/button',
        name: 'button',
        component: () => import('@/views/button')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
