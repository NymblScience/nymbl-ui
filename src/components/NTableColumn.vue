<template>
  <div
    class="n-table-column"
    :style="{
      'text-align': align,
      'max-width': maxWidth + 'px',
      'min-width': minWidth + 'px'
    }"
  >
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
    sortMethod: {
      type: [Function, Boolean],
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
    },

    customHeader: {
      type: [Boolean, String],
      default: false
    },
    maxWidth: {
      type: Number,
      default: null
    },
    minWidth: {
      type: Number,
      default: null
    }
  },
  computed: {
    classes() {
      const classes = [];
      return classes;
    }
  },
  created() {
    this.$emit("created");
  }
};
</script>
<style lang="scss">
@import "@/assets/sass/animations.scss";
@import "@/assets/sass/colors.scss";
@import "@/assets/sass/config.scss";
</style>
