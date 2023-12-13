import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

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
import Town from '../views/main/Town.vue'
import KindWords from '../views/main/KindWords.vue'
import NotFound from '../views/NotFound.vue';
import VolvoxTimes from '../views/main/VolvoxTimes.vue'
import Diary from '../views/main/Diary.vue'
import DiaryEntries from '../views/main/DiaryEntries.vue'

import CafeDoor from '../views/cafe/CafeDoor.vue'
import CafeToronto from '../views/cafe/Toronto.vue'
import CafeSeattle from '../views/cafe/Seattle.vue'
import CafeGothenburg from '../views/cafe/Gothenburg.vue'
import CafeOsaka from '../views/cafe/Osaka.vue'
import CafePost from '../views/cafe/CafePost.vue'

/* ARCHIVE */  
import skirt from '../views/archive/2023/3/skirt.vue'
import cleaning from '../views/archive/2023/2/cleaning.vue'
import vote from '../views/archive/2023/1/vote.vue'
import trueselftemplate from '../views/archive/2023/1/trueselftemplate.vue'
import trueself from '../views/archive/2023/1/trueself.vue'
import myleswheeler from '../views/archive/2022/12/myleswheeler.vue'
import belongingthroughcreativity from '../views/archive/2022/11/belongingthroughcreativity.vue'
import figmadinnerparty from '../views/archive/2022/10/figmadinnerparty.vue'
import dearest from '../views/archive/2022/9/dearest.vue'
import celebratetheprocess from '../views/archive/2022/8/celebratetheprocess.vue'
import trevorspotlight from '../views/archive/2022/7/trevorspotlight.vue'
import seasofnoise from '../views/archive/2022/6/seasofnoise.vue'
import windchime from '../views/archive/2022/5/windchime.vue'
import mossiah from '../views/archive/2022/4/mossiah.vue'
import hoteldog from '../views/archive/2022/3/hoteldog.vue'
import fieldgossip from '../views/archive/2022/2/fieldgossip.vue'
import neopets from '../views/archive/2022/1/neopets.vue'
import pondholidayexchange from '../views/archive/2021/11/pondholidayexchange.vue'
import natan from '../views/archive/2021/10/natan.vue'
import kalil from '../views/archive/2021/9/kalil.vue'
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

/* TSFF */
import tsff from '../views/archive/2023/1/tsff.vue'
import vaisman from '../views/archive/2023/1/vaisman.vue'
import graves from '../views/archive/2023/1/graves.vue'
import cole from '../views/archive/2023/1/cole.vue'
import marker from '../views/archive/2023/1/marker.vue'
import saban from '../views/archive/2023/1/saban.vue'
import klipp from '../views/archive/2023/1/klipp.vue'
import she from '../views/archive/2023/1/she.vue'
import davis from '../views/archive/2023/1/davis.vue'
import krass from '../views/archive/2023/1/krass.vue'


/*
import dueck from '../views/archive/2023/1/dueck.vue'
import haver from '../views/archive/2023/1/haver.vue'
import liu from '../views/archive/2023/1/liu.vue'
import bjerborn from '../views/archive/2023/1/bjerborn.vue'
import stenberg from '../views/archive/2023/1/stenberg.vue'
import olanik from '../views/archive/2023/1/olanik.vue'
import tucker from '../views/archive/2023/1/tucker.vue'
import lo from '../views/archive/2023/1/lo.vue'
import perry from '../views/archive/2023/1/perry.vue'
import liebeskind from '../views/archive/2023/1/liebeskind.vue'
*/

/* ISSUES */
import Identity from '../views/archive/issues/Identity/Identity.vue'
import Proximity from '../views/archive/issues/Proximity/Proximity.vue'
import Aggregate from '../views/archive/issues/Aggregate/Aggregate.vue'
import Metamorphosis from '../views/archive/issues/Metamorphosis/Metamorphosis.vue'
import Heart from '../views/archive/issues/Heart/Heart.vue'


Vue.use(VueRouter)
Vue.use(VueMeta)

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

  {
    path: '/town',
    name: 'Town',
    component: Town
  },

  {
    path: '/kindwords',
    name: 'KindWords',
    component: KindWords
  },

  {
    path: '/volvoxtimes',
    name: 'VolvoxTimes',
    component: VolvoxTimes
  },
  {
    path: '/diary',
    name: 'Diary',
    component: Diary
  },
  {
    path: '/archive/diary',
    name: 'DiaryEntries',
    component: DiaryEntries
  },

  /* ARCHIVE */ 
  {
    path: '/archive/skirt',
    name: 'skirt',
    component: skirt
  },
  {
    path: '/archive/cleaning',
    name: 'cleaning',
    component: cleaning
  },
  {
    path: '/vote',
    name: 'vote',
    component: vote
  },
  {
    path: '/trueselftemplate',
    name: 'trueselftemplate',
    component: trueselftemplate
  },
  {
    path: '/trueself',
    name: 'trueself',
    component: trueself
  },
  {
    path: '/archive/myleswheeler',
    name: 'myleswheeler',
    component: myleswheeler
  },
  {
    path: '/archive/belongingthroughcreativity',
    name: 'belongingthroughcreativity',
    component: belongingthroughcreativity
  },
  {
    path: '/archive/figmadinnerparty',
    name: 'figmadinnerparty',
    component: figmadinnerparty
  },
  {
    path: '/archive/dearest',
    name: 'dearest',
    component: dearest
  },
  {
    path: '/archive/celebratetheprocess',
    name: 'celebratetheprocess',
    component: celebratetheprocess
  },
  {
    path: '/archive/trevorspotlight',
    name: 'trevorspotlight',
    component: trevorspotlight
  },
  {
    path: '/archive/seasofnoise',
    name: 'seasofnoise',
    component: seasofnoise
  },
  {
    path: '/windchime',
    name: 'windchime',
    component: windchime
  },
  {
    path: '/archive/mossiah',
    name: 'mossiah',
    component: mossiah
  },
  {
    path: '/archive/hoteldog',
    name: 'hoteldog',
    component: hoteldog
  },
  {
    path: '/archive/fieldgossip',
    name: 'fieldgossip',
    component: fieldgossip
  },
  {
    path: '/archive/neopets',
    name: 'neopets',
    component: neopets
  },
  {
    path: '/archive/pondholidayexchange',
    name: 'pondholidayexchange',
    component: pondholidayexchange
  },
  {
    path: '/archive/natan',
    name: 'natan',
    component: natan
  },
  {
    path: '/archive/kalil',
    name: 'kalil',
    component: kalil
  },
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

  /* TSFF */
  {
    path: '/trueself/filmfest',
    name: 'tsff',
    component: tsff
  },
  {
    path: '/trueself/vaisman',
    name: 'vaisman',
    component: vaisman
  },
  {
    path: '/trueself/graves',
    name: 'graves',
    component: graves
  },
  {
    path: '/trueself/cole',
    name: 'cole',
    component: cole
  },
  {
    path: '/trueself/marker',
    name: 'marker',
    component: marker
  },
  {
    path: '/trueself/saban',
    name: 'saban',
    component: saban
  },  {
    path: '/trueself/klipp',
    name: 'klipp',
    component: klipp
  },
  {
    path: '/trueself/she',
    name: 'she',
    component: she
  },
  {
    path: '/trueself/davis',
    name: 'davis',
    component: davis
  },
  {
    path: '/trueself/krass',
    name: 'krass',
    component: krass
  },
  /*
  {
    path: '/trueself/liebeskind',
    name: 'liebeskind',
    component: liebeskind
  },

    {
    path: '/trueself/perry',
    name: 'perry',
    component: perry
  },
    {
    path: '/trueself/lo',
    name: 'lo',
    component: lo
  },
      {
    path: '/trueself/tucker',
    name: 'tucker',
    component: tucker
  },
      {
    path: '/trueself/olanick',
    name: 'olanick',
    component: olanick
  },
      {
    path: '/trueself/bjerborn',
    name: 'bjerborn',
    component: bjerborn
  },
       {
    path: '/trueself/stenberg',
    name: 'stenberg',
    component: stenberg
  },
       {
    path: '/trueself/liu',
    name: 'liu',
    component: liu
  },
        {
    path: '/trueself/dueck',
    name: 'dueck',
    component: dueck
  },
        {
    path: '/trueself/haver',
    name: 'haver',
    component: haver
  },
  */

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
  },

  /* ERROR 404 */

  {
    path: '*',
    name: 'Not Found',
    component: NotFound
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
