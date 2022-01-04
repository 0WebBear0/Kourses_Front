const routes = [
  {
    path: '',
    component: () => import('components/templates/MainLayout.vue'),
    children: [{ path: '', component: () => import('components/pages/Home') }]
  },
  {
    path: '/calculator',
    component: () => import('components/templates/MainLayout.vue'),
    children: [{ path: '', component: () => import('components/pages/Calculator') }]
  },
  {
    path: '/profile',
    component: () => import('components/templates/MainLayout.vue'),
    children: [{ path: '', component: () => import('components/pages/Profile') }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('components/pages/Error404.vue')
  }
]

export default routes
