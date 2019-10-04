<template>
  <b-nav-item
    :tabindex="tabindex"
    v-bind="$attrs"
    :disabled="disabled"
    :link-attrs="linkAttrs()"
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
    tabindex: {
      default: false,
      type: [Number, Boolean]
    }
  },
  methods: {
    linkAttrs() {
      if (this.tabindex) {
        return {
          tabindex: this.tabindex
        };
      }
      return {};
    }
  }
};
</script>
