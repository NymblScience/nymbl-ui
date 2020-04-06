import NConfirm from "../components/NConfirm.vue";

const confirm = {
  install(Vue) {
    Vue.component("NConfirm", NConfirm);

    Vue.prototype.$nConfirm = (
      title,
      body,
      denyButtonText,
      confirmButtonText,
      confirmFunction,
      denyFunction
    ) => {
      const ComponentClass = Vue.extend(NConfirm);
      const instance = new ComponentClass({
        propsData: {
          isPlugin: true,
          body: body,
          title: title,
          denyButtonText: denyButtonText,
          confirmButtonText: confirmButtonText
        }
      });
      instance.$mount();
      instance.$on("confirm", confirmFunction);
      instance.$on("deny", denyFunction);

      instance.$on("close", instance.$el.remove());
      document.getElementsByTagName("body")[0].appendChild(instance.$el);
      instance.open();
    };
  }
};

export default confirm;
