import { createWebHistory, createRouter } from 'vue-router'
import Index from './index.vue'

export const route = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: 'template',
      },
    },
  ]
})
