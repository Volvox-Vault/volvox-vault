import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueMeta from 'vue-meta'

import linkify from 'vue-linkify'
 
Vue.directive('linkified', linkify)


Vue.use(VueMeta, {
  keyName: 'head'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

