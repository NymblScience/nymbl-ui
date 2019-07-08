<template>
  <div class="n-table-rows">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "NTableRows",
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  computed: {
    classes() {
      const classes = [];
      return classes;
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/sass/animations.scss";
@import "@/assets/sass/colors.scss";
@import "@/assets/sass/config.scss";
</style>
