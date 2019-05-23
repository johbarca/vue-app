import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main.vue'
import Register from '@/components/Register'
import Logo from '@/components/Logo'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  }, {
    path: '/Register',
    name: 'Register',
    component: Register
  },{
    path: '/main',
    name: 'main',
    component: Main
  },{
      path:'/logo',
      name:'logo',
      component:Logo
  }]
})
