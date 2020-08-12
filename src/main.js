import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@/assets/css/tailwind.css';

// Import Nymbl Vue UI kit from organization GitHub npm package.
import NymblUI from '@/';

Object.keys(NymblUI.Components).forEach((name) => {
  Vue.component(name, NymblUI.Components[name]);
});

Vue.use(NymblUI.Plugins.nconfirm);
Vue.use(NymblUI.Plugins.nmessage);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
