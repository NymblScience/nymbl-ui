<template>
  <ui-select
    class="n-select"
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
<style lang="scss">
@import "@/assets/sass/config.scss";

.n-select.ui-select.is-active:not(.is-disabled) .ui-select__label-text,
.ui-select.is-active:not(.is-disabled) .ui-select__icon-wrapper .ui-icon {
  color: $form-color-active;
}

.n-select.ui-select.is-active:not(.is-disabled) .ui-select__display {
  border-bottom-color: $form-color-active;
}

.n-select.ui-select.is-invalid:not(.is-disabled) .ui-select__label-text,
.n-select.ui-select.is-invalid:not(.is-disabled)
  .ui-select__icon-wrapper
  .ui-icon {
  color: $form-color-active;
}
.n-select.ui-select.is-invalid:not(.is-disabled) .ui-select__display {
  border-bottom-color: $form-color-active;
}
.n-select.ui-select.is-invalid:not(.is-disabled) .ui-select__feedback {
  color: $form-color-active;
}

.ui-select-option.is-selected {
  color: $form-color-active !important;
}

.ui-select-option.is-selected .ui-select-option__checkbox {
  color: $form-color-active !important;
}
</style>
