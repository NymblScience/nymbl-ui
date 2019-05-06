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
.n-textbox .ui-textbox__input {
  border: 1px solid lightgray;
  border-bottom-width: 1px;
  border-radius: $n-border-radius;
  height: 2.5rem;
  margin: 0.3rem 0;
  padding: 0 0.2rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset,
    0 1px 2px rgba(0, 0, 0, 0.1) inset, 1px -1px 2px rgba(0, 0, 0, 0.1);
}

.n-textbox .ui-textbox.is-invalid:not(.is-disabled) .ui-textbox__input,
.ui-textbox.is-invalid:not(.is-disabled) .ui-textbox__textarea {
  border-color: #f44336;
  border-bottom-color: #f44336;
}

.n-textbox.ui-textbox.is-invalid:not(.is-disabled) .ui-textbox__input,
.n-textbox.ui-textbox.is-invalid:not(.is-disabled) .ui-textbox__textarea {
  border-bottom-width: 1px;
}

.n-textbox.ui-textbox {
  &.is-active:not(.is-disabled) {
    .ui-textbox__input,
    .ui-textbox__textarea {
      border-color: $dark-green;
      border-bottom-color: $dark-green;
      border-bottom-width: 1px;
    }
  }
}
</style>
