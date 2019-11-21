import Vue from 'vue'
import App from './App.vue'
import './assets/font/tabb/iconfont.css'
import router from '@/router/index.js'
import axios from 'axios'
Vue.use(axios)
/* 引入vant swiper组件 */
import { Swipe, SwipeItem } from 'vant';
import 'vant/lib/swipe/style';
Vue.use(Swipe).use(SwipeItem)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
