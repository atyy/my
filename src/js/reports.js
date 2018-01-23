

import Vue from 'vue';
import axios from 'axios';
import '../css/base.css';
import '../css/reports.css';
import router from '../router/index';
import reports from '../components/reports';

Vue.prototype.$axios = axios;


import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
Vue.use(YDUI);


Vue.config.productionTip = false;


new Vue({
  el: '#app',
  template: '<reports/>',
  router,
  components: { reports }
});