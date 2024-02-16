const routeConfigArr = [
  {
    path: '/home/index',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/center/index',
    name: 'center',
    component: () => import('../views/center/index.vue')
  },
  {
    path: '/news/add',
    name: 'newsadd',
    component: () => import('../views/news/NewsAdd.vue')
  },
  {
    path: '/news/edit/:id',
    name: 'newsedite',
    component: () => import('../views/news/NewsEdit.vue')
  },
  {
    path: '/news/list',
    name: 'newslist',
    component: () => import('../views/news/NewsList.vue')
  },
  {
    path: '/user/add',
    name: 'useradd',
    admin: true,
    component: () => import('../views/user/UserAdd.vue')
  },
  {
    path: '/user/list',
    name: 'userlist',
    admin: true,
    component: () => import('../views/user/UserList.vue')
  },
  {
    path: '/product/add',
    name: 'productadd',
    component: () => import('../views/product/ProductAdd.vue')
  },
  {
    path: '/product/list',
    name: 'productlist',
    component: () => import('../views/product/ProductList.vue')
  },
  {
    path: '/product/edit/:id',
    name: 'productEdit',
    component: () => import('../views/product/ProductEdit.vue')
  }
]

export default routeConfigArr
