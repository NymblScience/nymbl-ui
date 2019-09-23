<template>
  <div class="n-textbox" :class="classes">
    <!-- <div v-if="icon || $slots.icon" class="n-textbox__icon-wrapper">
      <slot name="icon">
        <ui-icon :icon="icon"></ui-icon>
      </slot>
    </div> -->

    <div class="n-textbox__content">
      <label class="n-textbox__label">
        <input
          v-if="!multiLine"
          ref="input"
          v-autofocus="autofocus"
          class="n-textbox__input"
          :autocomplete="autocomplete ? autocomplete : null"
          :disabled="disabled"
          :max="maxValue"
          :maxlength="enforceMaxlength ? maxlength : null"
          :min="minValue"
          :name="name"
          :number="type === 'number' ? true : null"
          :placeholder="hasFloatingLabel ? null : placeholder"
          :readonly="readonly"
          :required="required"
          :step="stepValue"
          :tabindex="tabindex"
          :type="type"
          :value="value"
          :pattern="pattern"
          @blur="onBlur"
          @change="onChange"
          @focus="onFocus"
          @input="updateValue($event.target.value)"
          @keydown.enter="onKeydownEnter"
          @keydown="onKeydown"
        />

        <textarea
          v-else
          ref="textarea"
          v-autofocus="autofocus"
          class="n-textbox__textarea"
          :autocomplete="autocomplete ? autocomplete : null"
          :disabled="disabled"
          :maxlength="enforceMaxlength ? maxlength : null"
          :name="name"
          :placeholder="hasFloatingLabel ? null : placeholder"
          :readonly="readonly"
          :required="required"
          :rows="rows"
          :tabindex="tabindex"
          :value="value"
          @blur="onBlur"
          @change="onChange"
          @focus="onFocus"
          @input="updateValue($event.target.value)"
          @keydown.enter="onKeydownEnter"
          @keydown="onKeydown"
        ></textarea>

        <div
          v-if="label || $slots.default"
          class="n-textbox__label-text"
          :class="labelClasses"
        >
          <slot>{{ label }}</slot>
        </div>
      </label>

      <div v-if="hasFeedback || maxlength" class="n-textbox__feedback">
        <div v-if="showError" class="n-textbox__feedback-text">
          <slot name="error">{{ error }}</slot>
        </div>

        <div v-else-if="showHelp" class="n-textbox__feedback-text">
          <slot name="help">{{ help }}</slot>
        </div>

        <!-- <div v-if="maxlength" class="n-textbox__counter">
          {{ valueLength + "/" + maxlength }}
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import autofocus from "../directives/autofocus";

import autosize from "autosize";

export default {
  name: "NTextbox",

  directives: {
    autofocus
  },

  props: {
    name: String,
    placeholder: String,
    tabindex: [String, Number],
    value: {
      type: [String, Number],
      default: ""
    },
    icon: String,
    iconPosition: {
      type: String,
      default: "left" // 'left' or 'right'
    },
    label: String,
    floatingLabel: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text" // all the possible HTML5 input types, except those that have a special UI
    },
    multiLine: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 2
    },
    autocomplete: String,
    autofocus: {
      type: Boolean,
      default: false
    },
    autosize: {
      type: Boolean,
      default: true
    },
    min: Number,
    max: Number,
    step: {
      type: String,
      default: "any"
    },
    maxlength: Number,
    enforceMaxlength: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    help: String,
    pattern: String,
    error: String,
    invalid: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isActive: false,
      isTouched: false,
      initialValue: this.value,
      autosizeInitialized: false
    };
  },

  computed: {
    classes() {
      return [
        `n-textbox--icon-position-${this.iconPosition}`,
        { "is-active": this.isActive },
        { "is-invalid": this.invalid },
        { "is-touched": this.isTouched },
        { "is-multi-line": this.multiLine },
        { "has-counter": this.maxlength },
        { "is-disabled": this.disabled },
        { "has-label": this.hasLabel },
        { "has-floating-label": this.hasFloatingLabel }
      ];
    },

    labelClasses() {
      return {
        "is-inline": this.hasFloatingLabel && this.isLabelInline,
        "is-floating": this.hasFloatingLabel && !this.isLabelInline
      };
    },

    hasLabel() {
      return Boolean(this.label) || Boolean(this.$slots.default);
    },

    hasFloatingLabel() {
      return this.hasLabel && this.floatingLabel;
    },

    isLabelInline() {
      return this.valueLength === 0 && !this.isActive;
    },

    minValue() {
      if (this.type === "number" && this.min !== undefined) {
        return this.min;
      }

      return null;
    },

    maxValue() {
      if (this.type === "number" && this.max !== undefined) {
        return this.max;
      }

      return null;
    },

    stepValue() {
      return this.type === "number" ? this.step : null;
    },

    valueLength() {
      return this.value ? this.value.length : 0;
    },

    hasFeedback() {
      return this.showError || this.showHelp;
    },

    showError() {
      return (
        this.invalid && (Boolean(this.error) || Boolean(this.$slots.error))
      );
    },

    showHelp() {
      return Boolean(this.help) || Boolean(this.$slots.help);
    }
  },

  created() {
    // Normalize the value to an empty string if it's null
    if (this.value === null) {
      this.initialValue = "";
      this.updateValue("");
    }
  },

  mounted() {
    if (this.multiLine && this.autosize) {
      autosize(this.$refs.textarea);
      this.autosizeInitialized = true;
    }
  },

  beforeDestroy() {
    if (this.autosizeInitialized) {
      autosize.destroy(this.$refs.textarea);
    }
  },

  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },

    onChange(e) {
      this.$emit("change", this.value, e);
    },

    onFocus(e) {
      this.isActive = true;
      this.$emit("focus", e);
    },

    onBlur(e) {
      this.isActive = false;
      this.$emit("blur", e);

      if (!this.isTouched) {
        this.isTouched = true;
        this.$emit("touch");
      }
    },

    onKeydown(e) {
      this.$emit("keydown", e);
    },

    onKeydownEnter(e) {
      this.$emit("keydown-enter", e);
    },

    reset() {
      // Blur the input if it's focused to prevent required errors
      // when it's value is reset
      if (
        document.activeElement === this.$refs.input ||
        document.activeElement === this.$refs.textarea
      ) {
        document.activeElement.blur();
      }

      this.updateValue(this.initialValue);
      this.resetTouched();
    },

    resetTouched(options = { touched: false }) {
      this.isTouched = options.touched;
    },

    refreshSize() {
      if (this.autosizeInitialized) {
        autosize.update(this.$refs.textarea);
      }
    },

    focus() {
      (this.$refs.input || this.$refs.textarea).focus();
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/imports.scss";

.n-textbox {
  align-items: flex-start;
  display: flex;
  font-family: $font-stack;
  margin-bottom: $ui-input-margin-bottom;

  &:hover:not(.is-disabled) {
    .n-textbox__label-text {
      color: $ui-input-label-color--hover;
    }

    .n-textbox__input,
    .n-textbox__textarea {
      border-bottom-color: $ui-input-border-color--hover;
    }
  }

  &.is-active:not(.is-disabled) {
    .n-textbox__input,
    .n-textbox__textarea {
      border-bottom-color: $ui-input-border-color--active;
      border-bottom-width: $ui-input-border-width--active;
    }

    .n-textbox__label-text,
    .n-textbox__icon-wrapper .ui-icon {
      color: $ui-input-label-color--active;
    }
  }

  &.has-label {
    .n-textbox__icon-wrapper {
      padding-top: $ui-input-icon-margin-top--with-label;
    }
  }

  &.has-counter {
    .n-textbox__feedback-text {
      padding-right: rem(48px);
    }
  }

  &.has-floating-label {
    .n-textbox__label-text {
      // Behaves like a block, but width is the width of its content.
      // Needed here so label doesn't overflow parent when scaled.
      display: table;

      &.is-inline {
        color: $ui-input-label-color; // So the hover styles don't override it
        cursor: text;
        transform: translateY($ui-input-label-top--inline) scale(1.1);
      }

      &.is-floating {
        transform: translateY(0) scale(1);
      }
    }

    // Fixes glitch in chrome where label and input value overlap each other
    // when webkit-autofill value has not been propagated yet (e.g. https://github.com/vuejs/vue/issues/1331)
    // The webkit-autofill value will only be propagated on first click into the viewport.
    // Before that .is-inline will be wrongly set and cause the auto filled input value and the label to overlap.
    // This fix will style the wrong .is-inline like an .is-floating in case :-webkit-autofill is set.
    .n-textbox__label
      > input:-webkit-autofill
      + .n-textbox__label-text.is-inline {
      transform: translateY(0) scale(1);
    }
  }

  &.is-invalid:not(.is-disabled) {
    .n-textbox__label-text,
    .n-textbox__icon-wrapper .ui-icon,
    .n-textbox__counter {
      color: $ui-input-label-color--invalid;
    }

    .n-textbox__input,
    .n-textbox__textarea {
      border-bottom-color: $ui-input-border-color--invalid;
    }

    .n-textbox__feedback {
      color: $ui-input-feedback-color--invalid;
    }
  }

  &.is-disabled {
    .n-textbox__input,
    .n-textbox__textarea {
      border-bottom-style: $ui-input-border-style--disabled;
      border-bottom-width: $ui-input-border-width--active;
      color: $ui-input-text-color--disabled;
    }

    .n-textbox__icon-wrapper .ui-icon {
      opacity: $ui-input-icon-opacity--disabled;
    }

    .n-textbox__feedback {
      opacity: $ui-input-feedback-opacity--disabled;
    }
  }
}

.n-textbox__label {
  display: flex;
  flex-direction: column-reverse;
  margin: 0;
  padding: 0;
  width: 100%;
}

.n-textbox__icon-wrapper {
  flex-shrink: 0;
  margin-right: rem(12px);
  padding-top: $ui-input-icon-margin-top;

  .ui-icon {
    color: $ui-input-icon-color;
  }
}

.n-textbox__content {
  flex-grow: 1;
}

.n-textbox__label-text {
  color: $ui-input-label-color;
  cursor: default;
  font-size: $ui-input-label-font-size;
  line-height: $ui-input-label-line-height;
  margin-bottom: $ui-input-label-margin-bottom;
  transform-origin: left;
  transition: color 0.1s ease, transform 0.2s ease;
}

.n-textbox__input,
.n-textbox__textarea {
  background: none;
  border: none;
  border-bottom-color: $ui-input-border-color;
  border-bottom-style: solid;
  border-bottom-width: $ui-input-border-width;
  border-radius: 0;
  color: $ui-input-text-color;
  cursor: auto;
  display: block;
  font-family: inherit;
  font-size: $ui-input-text-font-size;
  font-weight: normal;
  margin: 0;
  outline: none;
  padding: 0;
  transition: border 0.1s ease;
  width: 100%;
}

.n-textbox__input {
  height: $ui-input-height;
}

.n-textbox__textarea {
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: rem(6px);
  resize: vertical;
}

.n-textbox__feedback {
  color: $ui-input-feedback-color;
  font-size: $ui-input-feedback-font-size;
  line-height: $ui-input-feedback-line-height;
  margin: 0;
  padding-top: $ui-input-feedback-padding-top;
  position: relative;
}

.n-textbox__counter {
  position: absolute;
  right: 0;
  top: $ui-input-feedback-padding-top;
}

// ================================================
// Icon position
// ================================================

.n-textbox--icon-position-right {
  .n-textbox__icon-wrapper {
    margin-left: rem(8px);
    margin-right: 0;
    order: 1;
  }
}

@import "@/assets/sass/animations.scss";
@import "@/assets/sass/colors.scss";
@import "@/assets/sass/config.scss";

.n-textbox .n-textbox__label-text {
  @extend .form-label-style;
}

.n-textbox .n-textbox__input::placeholder {
  color: $form-color-placeholder;
}

.n-textbox .n-textbox__input,
.n-textbox__textarea {
  color: $form-color;
}

.n-textbox.n-textbox.is-invalid:not(.is-disabled) .n-textbox__label-text,
.n-textbox.n-textbox.is-invalid:not(.is-disabled)
  .n-textbox__icon-wrapper
  .ui-icon,
.n-textbox.n-textbox.is-invalid:not(.is-disabled) .n-textbox__counter {
  color: $form-color-invalid;
}
.n-textbox.n-textbox.is-invalid:not(.is-disabled) .n-textbox__input,
.n-textbox.n-textbox.is-invalid:not(.is-disabled) .n-textbox__textarea {
  border-bottom-color: $form-color-invalid;
}
.n-textbox.n-textbox.is-invalid:not(.is-disabled) .n-textbox__feedback {
  color: $form-color-invalid;
}

.n-textbox.n-textbox.is-active:not(.is-disabled) .n-textbox__input,
.n-textbox.n-textbox.is-active:not(.is-disabled) .n-textbox__textarea {
  border-bottom-color: $form-color-active;
}
.n-textbox.n-textbox.is-active:not(.is-disabled) .n-textbox__label-text,
.n-textbox.n-textbox.is-active:not(.is-disabled)
  .n-textbox__icon-wrapper
  .ui-icon {
  color: $form-color-active;
}

.n-textbox.n-text.is-disabled .n-textbox__input {
  border-bottom-width: 0;
  cursor: default;
  color: $form-color;
}

// Disable spinners for number input.
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>