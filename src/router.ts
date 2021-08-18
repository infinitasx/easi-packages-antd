import { createWebHistory, createRouter } from 'vue-router'
import Index from './index.vue'
import Test from './test.vue'

export const route = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/test',
      meta: {
        title: 'template',
      },
      children: [
        {
          path: '/test',
          name: 'Test',
          component: Test,
          meta: {
            title: 'template',
          },
        }
      ]
    },
  ]
})
