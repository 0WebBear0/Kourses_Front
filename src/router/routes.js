const routes = [
  {
    path: '',
    component: () => import('components/templates/MainLayout.vue'),
    children: [{ path: '', component: () => import('components/pages/Home') }]
  },
  {
    path: '/list',
    component: () => import('components/templates/MainLayout.vue'),
    children: [{ path: '', component: () => import('components/pages/List') }]
  },
  {
    path: '/registration',
    component: () => import('components/templates/MainLayout.vue'),
    children: [{ path: '', component: () => import('components/pages/Registration') }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('components/pages/Error404.vue')
  }
]

export default routes
