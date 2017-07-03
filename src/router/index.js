import Vue from 'vue'
import Router from 'vue-router'
import login from 'views/login'
import home from 'views/home'
import accessLogin from 'views/accesstoken'
import register from 'views/register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/accessLogin',
      name: 'accessLogin',
      component: accessLogin
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
