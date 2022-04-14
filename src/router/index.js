import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoApp from '../views/TodoApp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TodoApp',
    component: TodoApp
  },
  {
    path: '/Praca',
    name: 'Praca',
    component: () => import('../views/PracaView.vue')
  },
  {
    path: '/Nauka',
    name: 'Nauka',
    component: () => import('../views/NaukaView.vue')
  },
  {
    path: '/Odpoczywanie',
    name: 'Odpoczywanie',
    component: () => import('../views/OdpoczywanieView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
