import Vue from 'vue'
import Bscroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import App from './App'
import router from './router'
import store from './store'

import FooterNav from './coponents/FooterNav/FooterNav.vue'

import './mock/mockServer'

Vue.config.productionTip = false
Vue.component('FooterNav', FooterNav)
Vue.prototype.$BScroll = Bscroll
Vue.prototype.$Swiper = Swiper
console.log(Vue.prototype)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h => h(App),
  store
})
