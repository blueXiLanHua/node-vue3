import { createRouter, createWebHistory } from 'vue-router'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsPage.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductPage.vue')
    },
    {
      path: '/news/:id',
      name: 'newsitem',
      component: () => import('../views/NewsContent.vue')
    },
    { path: '/', redirect: '/home' }
  ]
})

router.beforeEach((to, from) => {
  nProgress.start()
  return true
})

router.afterEach((to, from) => {
  nProgress.done()
})
export default router
