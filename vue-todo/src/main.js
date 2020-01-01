import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'

new Vue({
  el: '#app',
  store: store, // ES6문법: store이라고 써도 된다.
  render: h => h(App)
})
