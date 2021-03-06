
import Vue from 'vue';
import axios from 'axios';



import '../css/base.css';
import '../css/bind.css';
import example from '../components/example'

Vue.prototype.$axios = axios;


import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
Vue.use(YDUI);


new Vue({
  el: '#app',
  template: '<example/>',
  components: { example }
});