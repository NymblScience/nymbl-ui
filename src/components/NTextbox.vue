<template>
  <ui-textbox
    class="n-textbox"
    :options="options"
    :disabled="disabled"
    :label="label"
    :placeholder="placeholder"
    v-bind="$attrs"
    :floating-label="floatingLabel"
    :help="help"
    :error="error"
    :invalid="invalid"
    :name="name"
    v-on="$listeners"
  >
    <slot />
  </ui-textbox>
</template>
<script>
import "keen-ui/src/bootstrap"; // Required when using standalone components, should be imported only once in your project
import UiTextbox from "keen-ui/lib/UiTextbox";
export default {
  name: "NTextbox",
  components: {
    UiTextbox
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
    name: {
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
@import "@/assets/sass/animations.scss";
@import "@/assets/sass/colors.scss";
@import "@/assets/sass/config.scss";

.n-textbox.ui-textbox.is-invalid:not(.is-disabled) .ui-textbox__label-text,
.n-textbox.ui-textbox.is-invalid:not(.is-disabled)
  .ui-textbox__icon-wrapper
  .ui-icon,
.n-textbox.ui-textbox.is-invalid:not(.is-disabled) .ui-textbox__counter {
  color: $form-color-invalid;
}
.n-textbox.ui-textbox.is-invalid:not(.is-disabled) .ui-textbox__input,
.n-textbox.ui-textbox.is-invalid:not(.is-disabled) .ui-textbox__textarea {
  border-bottom-color: $form-color-invalid;
}
.n-textbox.ui-textbox.is-invalid:not(.is-disabled) .ui-textbox__feedback {
  color: $form-color-invalid;
}

.n-textbox.ui-textbox.is-active:not(.is-disabled) .ui-textbox__input,
.n-textbox.ui-textbox.is-active:not(.is-disabled) .ui-textbox__textarea {
  border-bottom-color: $form-color-active;
}
.n-textbox.ui-textbox.is-active:not(.is-disabled) .ui-textbox__label-text,
.n-textbox.ui-textbox.is-active:not(.is-disabled)
  .ui-textbox__icon-wrapper
  .ui-icon {
  color: $form-color-active;
}
</style>
