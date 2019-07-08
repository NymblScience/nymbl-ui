<template>
  <div class="n-table-column" :style="'text-align:' + align">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "NTableColumn",
  props: {
    label: {
      type: String,
      default: ""
    },
    sortable: {
      type: Boolean,
      default: false
    },
    prop: {
      type: String,
      default: ""
    },
    align: {
      type: String,
      default: "left"
    },
    labelAlign: {
      type: String,
      default: ""
    },
    isExpandable: {
      type: Boolean,
      default: false
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
