import { createApp } from 'vue';
import VueClipboard from 'vue-clipboard2';

import router from './router';

import App from './App.vue';
import NymblUI from '@/';
import './assets/tailwind.css';
import NSection from '@/ui/NSection.vue';

const app = createApp(App);
app.use(router);
// import store from './store';
// import './assets/sass/main.scss';

// Import Nymbl Vue UI kit from organization GitHub npm package.

// import './assets/tailwind.css';

// console.log(NymblUI.Components);
// Import Nymbl Vue UI kit from organization GitHub npm package.
const { Components, Plugins } = NymblUI;

Object.keys(Components).forEach((name) => {
  app.component(name, Components[name]);
});

app.use(Plugins.nconfirm);
app.use(Plugins.nmessage);

app.component('NSection', NSection);

app.use(VueClipboard);

app.mixin({
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
app.mount('#app');
