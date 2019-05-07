<template>
  <b-dropdown-item v-bind="$attrs" :disabled="disabled" v-on="$listeners">
    <slot />
  </b-dropdown-item>
</template>
<script>
import BDropdownItem from "bootstrap-vue/es/components/dropdown/dropdown-item";

export default {
  name: "DropdownItem",
  components: {
    BDropdownItem
  },
  props: {
    disabled: {
      default: false,
      type: Boolean
    }
  }
};
</script>
