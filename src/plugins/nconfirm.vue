<template>
  <div><n-button @click="openConfirm">Open Confirm Dialog</n-button></div>
</template>

<script>
import Vue from "vue";
import nconfirm from "./nconfirm.js";
import nmessage from "./nmessage.js";
Vue.use(nconfirm);
Vue.use(nmessage);
export default {
  name: "NConfirm",

  methods: {
    openConfirm() {
      this.$nConfirm(
        "Confirm?",
        `Are you sure you want to confirm?`,
        "No",
        "Yes",
        () => this.onConfirm(),
        () => this.onDeny()
      );
    },
    onConfirm() {
      this.$nMessage("Confirmed");
    },
    onDeny() {
      this.$nMessage("Canceled", "error");
    }
  }
};
</script>

<style lang="scss" scoped></style>
