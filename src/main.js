import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'

import { router, configureFakeBackend } from '@/_helpers'

import 'vuesax/dist/vuesax.css'

Vue.config.productionTip = false

Vue.use(Vuesax)

configureFakeBackend();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
