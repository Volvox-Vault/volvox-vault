import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/main/Home.vue'
import About from '../views/main/About.vue'
import Artists from '../views/main/Artists.vue'
import Collaborate from '../views/main/Collaborate.vue'
import Support from '../views/main/Support.vue'
import Submit from '../views/main/Submit.vue'
import CafeDoor from '../views/cafe/CafeDoor.vue'
import CafeToronto from '../views/cafe/Toronto.vue'
import CafeSeattle from '../views/cafe/Seattle.vue'
import CafeGothenburg from '../views/cafe/Gothenburg.vue'
import CafeOsaka from '../views/cafe/Osaka.vue'
import CafePost from '../views/cafe/CafePost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/artists.html',
    name: 'Artists',
    component: Artists
  },

  {
    path: '/c4c.html',
    name: 'Collaborate',
    component: Collaborate
  },

  {
    path: '/support',
    name: 'Support',
    component: Support
  },

  {
    path: '/submit',
    name: 'Submit',
    component: Submit
  },

  {
    path: '/cafeDoor',
    name: 'CafeDoor',
    component: CafeDoor
  },

  {
    path: '/toronto',
    name: 'CafeToronto',
    component: CafeToronto
  },

  {
    path: '/seattle',
    name: 'CafeSeattle',
    component: CafeSeattle
  },

  {
    path: '/gothenburg',
    name: 'CafeGothenburg',
    component: CafeGothenburg
  },

  {
    path: '/osaka',
    name: 'CafeOsaka',
    component: CafeOsaka
  },

  {
    path: '/post',
    name: 'CafePost',
    component: CafePost
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
