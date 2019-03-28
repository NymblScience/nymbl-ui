<template>
  <b-nav-item-dropdown
    v-bind="$attrs"
    :disabled="disabled"
    :text="text"
    right
    v-on="$listeners"
  >
    <slot />
  </b-nav-item-dropdown>
</template>
<script>
import BNavItemDropdown from 'bootstrap-vue/es/components/nav/nav-item-dropdown';

export default {
  name: 'NavDropdown',
  components: {
    BNavItemDropdown,
  },
  props: {
    text: {
      default: '',
      type: String,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
  },
};
</script>
