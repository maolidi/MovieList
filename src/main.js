import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
Vue.config.productionTip = false
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.use(Vuetify)
import axios from 'axios'
import Qs from 'qs'
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;
import md5 from 'js-md5';
Vue.prototype.md5 = md5;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
