import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import vuetify from './plugins/vuetify';
import axios from "axios";
import "./assets/css/index.css";
import "./assets/css/iconfont.css";
import VCharts from 'v-charts';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)
Vue.use(VCharts)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
