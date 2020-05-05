import Vue from 'vue'
import VueRouter from 'vue-router'
import News from '@/views/News'

Vue.use(VueRouter)

const routes = [
  { path: '/news/:id', name: 'News', component: News }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
