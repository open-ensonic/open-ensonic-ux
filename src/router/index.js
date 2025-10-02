import { createRouter, createWebHashHistory } from 'vue-router'

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/ux1',
      name: 'ux1',
      component: () => import('../views/ux1/Index.vue')
    },
    {
      path: '/ux2',
      name: 'ux2',
      component: () => import('../views/ux2/Index.vue')
    }
  ]
})

export default router