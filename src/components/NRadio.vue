<template>
  <ui-radio
    class="n-radio"
    :disabled="disabled"
    :label="label"
    :placeholder="placeholder"
    v-bind="$attrs"
    :floating-label="floatingLabel"
    :help="help"
    :error="error"
    :invalid="invalid"
    :true-value="'Example Value'"
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

.n-radio.ui-radio--color-primary.is-checked:not(.is-disabled)
  .ui-radio__outer-circle {
  border-color: $form-color-active;
}
.n-radio.ui-radio--color-primary.is-checked:not(.is-disabled)
  .ui-radio__inner-circle {
  background-color: $form-color-active;
}
</style>
