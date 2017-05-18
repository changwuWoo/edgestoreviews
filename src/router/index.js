import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import login from '@/views/login'
import home from '@/views/home'
import accessLogin from '@/views/accesstoken'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '',
      name: 'home',
      component: home
    },
    {
      path: '/accessLogin',
      name: 'accessLogin',
      component: accessLogin
    }
  ]
})
