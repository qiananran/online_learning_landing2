import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/footer',
    name: 'Footer',
    component: ()=>import('../components/Footer.vue')
  },
  {
    path: '/header',
    name: 'Header',
    component: ()=>import('../components/Header.vue')
  },
  {
    path: '/mybody',
    name: 'MyBody',
    component: ()=>import('../components/MyBody.vue')
  },

  
]

const router = new VueRouter({
  routes
})

export default router
