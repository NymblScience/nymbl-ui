<template>
  <div></div>
</template>

<script>
import Vue from "vue";
import test from "./test.js";
Vue.use(test);
export default {
  name: "Test",
  created() {
    this.$message();
  }
};
</script>

<style lang="scss" scoped></style>
