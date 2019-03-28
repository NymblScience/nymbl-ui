<template>
  <b-nav-item
    v-bind="$attrs"
    :disabled="disabled"
    v-on="$listeners"
  >
    <slot />
  </b-nav-item>
</template>
<script>
import BNavItem from 'bootstrap-vue/es/components/nav/nav-item';

export default {
  name: 'NavItem',
  components: {
    BNavItem,
  },
  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
  },
};
</script>
