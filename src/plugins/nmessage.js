/* eslint-disable  no-param-reassign */
import { defineComponent } from 'vue';

import NMessages from '../components/NMessages.vue';

const message = {
  install(app) {
    app.component('NMessages', NMessages);

    app.config.globalProperties.$nMessage = (options) => {
      const nMessagesElement = document.getElementById('n-messages');
      if (!nMessagesElement) {
        const nMessages = defineComponent({
          extends: defineComponent({ ...NMessages }),
        });
        nMessages.$mount();
        window.nMessages = nMessages;
        document.getElementsByTagName('body')[0].appendChild(nMessages.$el);
      }

      window.nMessages.add(options);
    };

    app.config.globalProperties.$nMessage.closeAll = () => {
      if (window.nMessages) {
        window.nMessages.closeAll();
      }
    };
  },
};

export default message;
