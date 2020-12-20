import Vue from 'vue'
import VueRouter from 'vue-router'

import Repositories from '../views/Repositories.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Repositories',
    component: Repositories
  }
]

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
