<template>
  <ui-radio-group
    class="n-radio-group"
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
  </ui-radio-group>
</template>
<script>
import "keen-ui/src/bootstrap"; // Required when using standalone components, should be imported only once in your project
import UiRadioGroup from "keen-ui/lib/UiRadioGroup";
export default {
  name: "NRadioGroup",
  components: {
    UiRadioGroup
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

.n-radio-group.ui-radio-group.is-invalid
  .n-radio-group.ui-radio-group__label-text {
  color: $form-color-invalid;
}
.n-radio-group.ui-radio-group.is-invalid .ui-radio-group__feedback {
  color: $form-color-invalid;
}
.n-radio-group.ui-radio-group:not(.is-disabled):not(.is-invalid).is-active
  .ui-radio-group__label-text {
  color: $form-color-active;
}

.n-radio-group
  .ui-radio--color-primary.is-checked:not(.is-disabled)
  .ui-radio__outer-circle {
  border-color: $form-color-active;
}
.n-radio-group
  .ui-radio--color-primary.is-checked:not(.is-disabled)
  .ui-radio__inner-circle {
  background-color: $form-color-active;
}
</style>
