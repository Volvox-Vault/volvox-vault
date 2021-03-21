import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/main/Index.vue'
import About from '../views/main/About.vue'
import Colony from '../views/main/Colony.vue'
import Collab from '../views/main/Collab.vue'
import Support from '../views/main/Support.vue'
import Submit from '../views/main/Submit.vue'
import Archive from '../views/main/Archive.vue'
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
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/colony',
    name: 'Colony',
    component: Colony
  },

  {
    path: '/archive',
    name: 'Archive',
    component: Archive
  },

  {
    path: '/collaborate',
    name: 'Collab',
    component: Collab
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
