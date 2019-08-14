<template>
  <ui-checkbox
    class="n-checkbox"
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
  </ui-checkbox>
</template>
<script>
import "keen-ui/src/bootstrap"; // Required when using standalone components, should be imported only once in your project
import UiCheckbox from "keen-ui/lib/UiCheckbox";
export default {
  name: "NCheckbox",
  components: {
    UiCheckbox
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
<style lang="scss">
@import "@/assets/sass/config.scss";

.n-checkbox.ui-checkbox--color-primary:not(.is-disabled).is-checked:hover
  .ui-checkbox__checkmark::before,
.n-checkbox.ui-checkbox--color-primary:not(.is-disabled).is-checked.is-active
  .ui-checkbox__checkmark::before {
  background-color: darken($form-color-active, 5%);
  border-color: darken($form-color-active, 5%);
}

.n-checkbox.ui-checkbox--color-primary.is-checked
  .ui-checkbox__checkmark::before {
  background-color: $form-color-active;
  border-color: $form-color-active;
}
</style>
