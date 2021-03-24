import Vue from 'vue';
import App from './App.vue';
import router from './router';
import dataTestDirectives from '@/plugins/directives/dataTestDirective';
import i18n from '@/plugins/i18n';
import vuetify from '@/plugins/vuetify';
import store from '@/store';
import '@/styles/main.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  i18n,
  vuetify,
  dataTestDirectives,
  render: (h) => h(App),
}).$mount('#app');
