// main.js 파일의 역할
// main.js에서 App.vue 파일과 Vue.js 라이브러리를 불러와서 애플리케이션을 동작시킨다.

import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
