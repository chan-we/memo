import { RouteRecordRaw } from 'vue-router'
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'ClassPage',
    component: () => import('@/views/class-page/ClassPage.vue'),
  },
  {
    path: '/:id',
    name: 'TestPage',
    component: () => import('@/views/test-page/TestPage.vue'),
  },
]
