import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'Home',
        // import 异步加载
        component: () => import('@/views/home')
      },
      {
        path: '/form',
        name: 'Form',
        component: () => import('@/views/form')
      }
    ]
  }
]

export const wildcardRoute = {
  path: '*',
  redirect: '/404',
  hidden: true
}

const router = new VueRouter({
  routes
})

export default router
