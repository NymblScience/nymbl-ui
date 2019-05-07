<template>
  <ui-select
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
  </ui-select>
</template>
<script>
import "keen-ui/src/bootstrap"; // Required when using standalone components, should be imported only once in your project
import UiSelect from "keen-ui/lib/UiSelect";
export default {
  name: "NSelect",
  components: {
    UiSelect
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
<style>
/* .ui-select .ui-select__display {
  border: 1px solid lightgray;
  padding: 20px 20px;
  border-radius: 5px;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1) inset,
    0 1px 4px rgba(0, 0, 0, 0.1) inset, 1px -1px 2px rgba(0, 0, 0, 0.1);
} */
</style>
