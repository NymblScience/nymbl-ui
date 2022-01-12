/* eslint-disable  no-param-reassign */
import { defineComponent, createApp } from 'vue';

import NMessages from '../components/NMessages.vue';

const message = {
  install(app) {
    app.config.globalProperties.$nMessage = (options) => {
      const nMessagesElement = document.getElementById('n-messages');
      if (!nMessagesElement) {
        const app2 = createApp(
          defineComponent({ ...NMessages }),
        );

        const vm = app2.mount('#messages');
        app.nMessages = vm;
      }
      app.nMessages.add(options);
    };

    app.config.globalProperties.$nMessage.closeAll = () => {
      if (app.nMessages) {
        app.nMessages.closeAll();
      }
    };
  },
};

export default message;
