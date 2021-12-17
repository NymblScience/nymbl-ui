import { createApp } from 'vue';
import VueClipboard from 'vue-clipboard2';

import router from './router';

import App from './App.vue';
import './assets/tailwind.css';
import NymblUI from '@/';
import NSection from '@/ui/NSection.vue';

const app = createApp(App);
app.use(router);
// import store from './store';
// import './assets/sass/main.scss';

// Import Nymbl Vue UI kit from organization GitHub npm package.

// import './assets/tailwind.css';

// console.log(NymblUI.Components);
Object.keys(NymblUI.Components).forEach((name) => {
  app.component(name, NymblUI.Components[name]);
});

app.use(NymblUI.Plugins.nconfirm);
app.use(NymblUI.Plugins.nmessage);

app.component('NSection', NSection);

app.use(VueClipboard);

// app.mixin({
//   methods: {
//     updateQuery(query) {
//       this.$router.push({
//         query: { ...this.$route.query, ...query },
//       });
//     },
//     removeQuery(queryToRemove) {
//       const query = { ...this.$route.query };
//       if (!query[queryToRemove]) {
//         return;
//       }
//       delete query[queryToRemove];
//       this.$router.replace({ query });
//     },
//   },
// });

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app');
app.mount('#app');
