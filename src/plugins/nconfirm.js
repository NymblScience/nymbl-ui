/* eslint-disable  no-param-reassign */
import { defineComponent } from 'vue';

import NConfirm from '../components/NConfirm.vue';

const confirm = {
  install(app) {
    app.component('NConfirm', NConfirm);

    app.config.globalProperties.$nConfirm = (
      title,
      body,
      denyButtonText,
      confirmButtonText,
      confirmFunction,
      denyFunction,
    ) => {
      // const ComponentClass = app.extend(NConfirm);
      const instance = defineComponent({
        extends: defineComponent({ ...NConfirm }),
      });
      instance.$mount();
      instance.$on('confirm', confirmFunction);
      instance.$on('deny', denyFunction);

      instance.$on('close', instance.$el.remove());
      document.getElementsByTagName('body')[0].appendChild(instance.$el);
      instance.open();
    };
  },
};

export default confirm;
