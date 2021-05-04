import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import vuetify from './plugins/vuetify';
import axios from "axios";
import "./assets/css/index.css";
import "./assets/css/iconfont.css";
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import "echarts/lib/component/title";
// import VCharts from 'v-charts-v2'

// Vue.use(VCharts)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.component("v-chart", ECharts);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
