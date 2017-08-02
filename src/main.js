import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import routes from './router/router.js'
Vue.use(ElementUI)
Vue.use(VueRouter)
console.log(routes)
const router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
//.$mount('#app')