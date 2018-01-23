

import Vue from 'vue';
import axios from 'axios';
import '../css/base.css';
import '../css/acbind.css';
import acbind from '../components/acbind'

Vue.prototype.$axios = axios;


import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
Vue.use(YDUI);




new Vue({
  el: '#app',
  template: '<acbind/>',
  components: { acbind }
});