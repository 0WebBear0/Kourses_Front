
const routes = [
  {
    path: '',
    component: () => import('components/templates/MainLayout.vue'),
    children: [
      { path: '', component: () => import('components/pages/Home') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('components/pages/Error404.vue')
  }
]

export default routes
