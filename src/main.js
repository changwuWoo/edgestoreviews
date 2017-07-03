// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/index'

Vue.config.productionTip = false
// 使用vee-validate
/* eslint-disable no-new */
Vue.prototype.$store = store
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
