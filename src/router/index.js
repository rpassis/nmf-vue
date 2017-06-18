import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Admin from '@/components/Admin'

Vue.use(Router)

const routes = [
  { path: '/', component: Hello },
  { path: '/user', component: Admin }
]

export default new Router({
  routes
})
