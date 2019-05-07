<template>
  <ui-radio
    :options="options"
    :disabled="disabled"
    :label="label"
    :placeholder="placeholder"
    v-bind="$attrs"
    :floating-label="floatingLabel"
    :help="help"
    :error="error"
    :invalid="invalid"
    v-on="$listeners"
  >
    <slot />
  </ui-radio>
</template>
<script>
import "keen-ui/src/bootstrap"; // Required when using standalone components, should be imported only once in your project
import UiRadio from "keen-ui/lib/UiRadio";
export default {
  name: "NRadio",
  components: {
    UiRadio
  },
  props: {
    /**
     * Select Options
     */
    options: {
      type: Array,
      default: function() {
        return [];
      }
    },
    /**
     * The size of the button
     * `small, normal, large`
     */
    placeholder: {
      default: "",
      type: String
    },
    label: {
      default: "",
      type: String
    },
    help: {
      default: "",
      type: String
    },
    error: {
      default: "",
      type: String
    },
    floatingLabel: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    },
    invalid: {
      default: false,
      type: Boolean
    }
  }
};
</script>
<style></style>
