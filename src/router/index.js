import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/home',
    component: Home
  }
    
]

const router = new VueRouter({
  routes
})

export default router
