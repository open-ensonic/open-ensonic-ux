import { createRouter, createWebHistory } from 'vue-router'

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/HelloWorld.vue')
    }
    // 可以在这里添加更多路由
  ]
})

export default router