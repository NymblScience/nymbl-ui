import Vue from 'vue';

import VueClipboard from 'vue-clipboard2';
import NSection from '@/ui/NSection.vue';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/sass/main.scss';

// Import Nymbl Vue UI kit from organization GitHub npm package.
import NymblUI from '@/';

// import './assets/tailwind.css';

Object.keys(NymblUI.Components).forEach((name) => {
  Vue.component(name, NymblUI.Components[name]);
});

Vue.use(NymblUI.Plugins.nconfirm);
Vue.use(NymblUI.Plugins.nmessage);

Vue.component('NSection', NSection);

Vue.use(VueClipboard);

Vue.mixin({

  methods: {

    updateQuery(query) {
      this.$router.push({
        query: { ...this.$route.query, ...query },
      });
    },
    removeQuery(queryToRemove) {
      const query = { ...this.$route.query };
      if (!query[queryToRemove]) {
        return;
      }
      delete query[queryToRemove];
      this.$router.replace({ query });
    },
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
