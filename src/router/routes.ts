import { RouteRecordRaw } from 'vue-router'
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'ClassPage',
    component: () => import('@/views/home-page/HomePage.vue'),
  },
  {
    path: '/memorization/:id',
    name: 'TestPage',
    component: () => import('@/views/test-page/TestPage.vue'),
  },
  {
    path: '/dictation/:id',
    name: 'DictationPage',
    component: () => import('@/views/dictation-page/DictationPage.vue'),
  },
]
