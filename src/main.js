import Vue from 'vue'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'
import VueSweetalert2 from 'vue-sweetalert2'
import VueMeta from 'vue-meta'
import router from './router'

Vue.use(VueClipboard)
Vue.use(VueSweetalert2)
Vue.config.productionTip = false
Vue.use(VueMeta)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
