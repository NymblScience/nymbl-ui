import NMessages from "../components/NMessages.vue";

const message = {
  install(Vue) {
    Vue.component("NMessages", NMessages);

    Vue.prototype.$nMessage = options => {
      const nMessagesElement = document.getElementById("n-messages");
      if (!nMessagesElement) {
        const ComponentClass = Vue.extend(NMessages);
        const nMessages = new ComponentClass();
        nMessages.$mount();
        window.nMessages = nMessages;
        document.getElementsByTagName("body")[0].appendChild(nMessages.$el);
      }

      window.nMessages.add(options);
    };

    Vue.prototype.$nMessage.closeAll = () => {
      if (window.nMessages) {
        window.nMessages.closeAll();
      }
    };
  }
};

export default message;
