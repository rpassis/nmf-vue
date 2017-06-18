// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyBPKDLC5wL-rPF3Y4KQ7UpWnd44VQV697w',
  authDomain: 'nextmanlyferry.firebaseapp.com',
  databaseURL: 'https://nextmanlyferry.firebaseio.com',
  projectId: 'nextmanlyferry',
  storageBucket: '',
  messagingSenderId: '274115882216'
}

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
