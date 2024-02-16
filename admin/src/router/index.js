import { createRouter, createWebHistory } from 'vue-router'
import routeConfigArr from './routeConfig.js'
import { useRouteStateStore, useUserStore } from '@/stores/index.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/',
      name: 'layout',
      component: () => import('../views/LayoutPage.vue'),
      redirect: '/home/index'
    },
    {
      path: '/:pathMatch(.*)',
      name: 'notfound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

router.beforeEach((to) => {
  const UserStore = useUserStore()
  const RouteStateStore = useRouteStateStore()
  if (to.path === '/login') {
    return true
  } else {
    if (!UserStore.token) {
      return '/login'
    } else {
      if (!RouteStateStore.routeState) {
        addRoute()
        RouteStateStore.setRouteState(true)
        return to.fullPath
      } else {
        return true
      }
    }
  }
})

const addRoute = () => {
  routeConfigArr.forEach((item) => {
    Checkpermission(item) && router.addRoute('layout', item)
  })
}
const Checkpermission = (item) => {
  const UserStore = useUserStore()
  if (item.admin) {
    return UserStore.userInfo.role === 1
  }
  return true
}
export default router
