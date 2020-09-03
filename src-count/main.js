import Vue from 'vue'
import App from './app.vue'
import store from '@/store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store //所有的组件对象多了一个$store对象
})
