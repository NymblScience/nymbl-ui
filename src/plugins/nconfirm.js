import NConfirm from "../components/NConfirm.vue";
// This is your plugin object. It can be exported to be used anywhere.
const confirm = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue) {
    Vue.component("NConfirm", NConfirm);

    Vue.prototype.$nConfirm = function(
      title,
      body,
      denyButtonText,
      confirmButtonText,
      confirmFunction,
      denyFunction
    ) {
      var ComponentClass = Vue.extend(NConfirm);
      var instance = new ComponentClass({
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
