import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from '@/plugins/vuetify'; // path to vuetify export
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentRound: 1,
    nextStep: 0,
    color: '#4E9455'
  }
});

new Vue({
  store,
  router,
  vuetify,
  axios,
  VueAxios,
  render: h => h(App)
}).$mount('#app');