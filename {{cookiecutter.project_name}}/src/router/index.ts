import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/404',
      name: 'not_found',
      component: () => import('@/views/NotFound.vue')
    },
    {
      path: '/:all(.*)',
      redirect: '/404'
    }
  ]
})

export default router
