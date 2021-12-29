import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import VueMeta from 'vue-meta'

Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

