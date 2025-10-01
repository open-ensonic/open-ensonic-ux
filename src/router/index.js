import { createRouter, createWebHistory } from 'vue-router'

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
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
    // 可以在这里添加更多路由
  ]
})

export default router