import Vue from 'vue'
import App from './App.vue'
import '../public/css/base.css'
import '../public/css/reset.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
