import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PlazmetView from '../views/PlazmetView.vue'
import UslugiView from '../views/UslugiView.vue'
const routes = [
  {
    path: '/',
    name: 'start',
    component: HomeView
  },
  {
    path: '/uslugi',
    name: 'usługi',
    component: UslugiView
  },
  {
    path: '/plazmet',
    name: 'plazmet',
    component: PlazmetView
  },
  {
    path: '/about',
    name: 'kontakt',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
