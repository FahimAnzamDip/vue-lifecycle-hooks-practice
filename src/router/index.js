import { createRouter, createWebHistory } from 'vue-router'
import Slider from '../views/Slider.vue'
import Chart from '../views/Chart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Slider
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart
    }
  ]
})

export default router
