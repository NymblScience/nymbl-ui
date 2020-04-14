<template>
  <div>
    <div class="styleguide-section">
      <h3>Default</h3>
      <n-button size="sm" @click="open">Open Message</n-button>
    </div>
    <div class="styleguide-section">
      <h3>Success</h3>
      <n-button size="sm" variant="secondary" @click="openSuccess"
        >Open Success</n-button
      >
    </div>
    <div class="styleguide-section">
      <h3>Error</h3>
      <n-button size="sm" variant="danger" @click="openError"
        >Open Error</n-button
      >
    </div>
    <div class="styleguide-section">
      <h3>Without Close Button</h3>
      <n-button size="sm" @click="openNoClose">Open</n-button>
    </div>
    <div class="styleguide-section">
      <h3>Persistant</h3>
      <n-button size="sm" @click="openPersistant">Open</n-button>
    </div>
    <n-button size="sm" @click="$nMessage.closeAll()">Close All</n-button>
  </div>
</template>

<script>
import Vue from "vue";
import nmessage from "./nmessage.js";
Vue.use(nmessage);
export default {
  name: "NMessage",
  data() {
    return {
      count: 0
    };
  },

  methods: {
    open() {
      this.count++;
      this.$nMessage({ title: "title", message: "Sample message" });
    },
    openSuccess() {
      this.$nMessage({
        type: "success",
        title: "Success",
        message: "Something great."
      });
    },
    openError() {
      this.$nMessage({
        type: "error",
        message: "Oops. Something horrendous hapoened."
      });
    },
    openNoClose() {
      this.$nMessage({
        message: "Oops. Something horrendous hapoened.",
        showClose: false
      });
    },
    openPersistant() {
      this.$nMessage({
        message: "Oops. Something horrendous hapoened.",
        duration: 0
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
