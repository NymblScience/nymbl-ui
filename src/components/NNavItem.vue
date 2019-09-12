<template>
  <b-nav-item
    :tab-index="tabIndex"
    v-bind="$attrs"
    :disabled="disabled"
    v-on="$listeners"
  >
    <slot />
  </b-nav-item>
</template>
<script>
import BNavItem from "bootstrap-vue/es/components/nav/nav-item";

export default {
  name: "NNavItem",
  components: {
    BNavItem
  },
  props: {
    disabled: {
      default: false,
      type: Boolean
    },
    tabIndex: {
      default: 0,
      type: Number
    }
  }
};
</script>
