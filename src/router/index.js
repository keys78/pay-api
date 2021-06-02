import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Home.vue'
import About from '../About.vue'
import Pricing from '../Pricing.vue'
import Contact from '../Contact.vue'
import Signup from '../Signup.vue'
import Dashboard from '../Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
   
  },
  {
    path: '/about',
    name: 'About',
    component: About
   
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
   
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
   
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
   
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
