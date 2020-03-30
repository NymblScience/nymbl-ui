import Alarm from "./alarm.vue";
// This is your plugin object. It can be exported to be used anywhere.
const NMessage = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue) {
    Vue.component("alarm", Alarm);
    Vue.prototype.$message = function() {
      var ComponentClass = Vue.extend(Alarm);
      var instance = new ComponentClass();
      instance.$mount(); // pass nothing
      document.getElementsByTagName("body")[0].appendChild(instance.$el);
      instance.$el.remove();
    };
  }
};

export default NMessage;
