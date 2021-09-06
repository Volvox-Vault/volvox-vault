import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/main/Index.vue'
import About from '../views/main/About.vue'
import Colony from '../views/main/Colony.vue'
import Bulletin from '../views/main/Bulletin.vue'
import Support from '../views/main/Support.vue'
import Contribute from '../views/main/Contribute.vue'
import Archive from '../views/main/Archive.vue'
import Shop from '../views/main/Shop.vue'
import Horoscopes from '../views/main/Horoscopes.vue'
import Pond from '../views/main/Pond.vue'

import CafeDoor from '../views/cafe/CafeDoor.vue'
import CafeToronto from '../views/cafe/Toronto.vue'
import CafeSeattle from '../views/cafe/Seattle.vue'
import CafeGothenburg from '../views/cafe/Gothenburg.vue'
import CafeOsaka from '../views/cafe/Osaka.vue'
import CafePost from '../views/cafe/CafePost.vue'

/* ARCHIVE */
import ssummer from '../views/archive/2021/8/ssummer.vue'
import alchemy from '../views/archive/2021/7/alchemy.vue'
import LHO from '../views/archive/2021/6/LHO.vue'
import noPlace from '../views/archive/2021/5/noPlace.vue'
import developingAtHomeWithWill from '../views/archive/2021/4/developingAtHomeWithWill.vue'
import cookingInsta from '../views/archive/2021/3/cookingInsta.vue'
import adaptingArtCC from '../views/archive/2021/2/adaptingArtCC.vue'
import horseChampion from '../views/archive/2021/1/horseChampion.vue'
import waterLily from '../views/archive/2020/5/waterLily.vue'
import TVS from '../views/archive/2020/4/TVS.vue'
import stillGroovin from '../views/archive/2020/3/stillGroovin.vue'
import undeclaredCargo from '../views/archive/2020/2/undeclaredCargo.vue'
import ElliottLaurel from '../views/archive/2020/1/ElliottLaurel.vue'

/* ISSUES */
import Identity from '../views/archive/issues/Identity/Identity.vue'
import Proximity from '../views/archive/issues/Proximity/Proximity.vue'
import Aggregate from '../views/archive/issues/Aggregate/Aggregate.vue'
import Metamorphosis from '../views/archive/issues/Metamorphosis/Metamorphosis.vue'
import Heart from '../views/archive/issues/Heart/Heart.vue'


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
    path: '/bulletin',
    name: 'Bulletin',
    component: Bulletin
  },

  {
    path: '/support',
    name: 'Support',
    component: Support
  },

  {
    path: '/contribute',
    name: 'Contribute',
    component: Contribute
  },

  {
    path: '/Pond',
    name: 'Pond',
    component: Pond
  },

  {
    path: '/shop',
    name: 'Shop',
    component: Shop
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
  },

  {
    path: '/horoscopes',
    name: 'Horoscopes',
    component: Horoscopes
  },

  /* ARCHIVE */

  {
    path: '/archive/ssummer',
    name: 'ssummer',
    component: ssummer
  },
  {
    path: '/archive/alchemy',
    name: 'alchemy',
    component: alchemy
  },
  {
    path: '/archive/LHO',
    name: 'LHO',
    component: LHO
  },
  {
    path: '/archive/noPlace',
    name: 'noPlace',
    component: noPlace
  },
  {
    path: '/archive/developingAtHomeWithWill',
    name: 'developingAtHomeWithWill',
    component: developingAtHomeWithWill
  },
  {
    path: '/archive/cookingInsta',
    name: 'cookingInsta',
    component: cookingInsta
  },
  {
    path: '/archive/adaptingArtCC',
    name: 'adaptingArtCC',
    component: adaptingArtCC
  },
  {
    path: '/archive/horseChampion',
    name: 'horseChampion',
    component: horseChampion
  },
  {
    path: '/archive/waterLily',
    name: 'waterLily',
    component: waterLily
  },
  {
    path: '/archive/TVS',
    name: 'TVS',
    component: TVS
  },
  {
    path: '/archive/stillGroovin',
    name: 'stillGroovin',
    component: stillGroovin
  },
  {
    path: '/archive/undeclaredCargo',
    name: 'undeclaredCargo',
    component: undeclaredCargo
  },
  {
    path: '/archive/ElliottLaurel',
    name: 'ElliottLaurel',
    component: ElliottLaurel
  },

  /* Issues */

  {
    path: '/issues/identity',
    name: 'Identity',
    component: Identity
  },
  {
    path: '/issues/proximity',
    name: 'Proximity',
    component: Proximity
  },
  {
    path: '/issues/aggregate',
    name: 'Aggregate',
    component: Aggregate
  },
  {
    path: '/issues/metamorphosis',
    name: 'Metamorphosis',
    component: Metamorphosis
  },
  {
    path: '/issues/heart',
    name: 'Heart',
    component: Heart
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
