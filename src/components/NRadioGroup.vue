<template>
  <div class="n-radio-group" :class="classes">
    <div v-if="label || $slots.default" class="n-radio-group__label-text">
      <slot>{{ label }}</slot>
    </div>

    <div class="n-radio-group__radios">
      <n-radio
        v-for="option in options"
        :id="option[keys.id]"
        :key="option[keys.id]"
        v-model="selectedOptionValue"
        class="n-radio-group__radio"
        :button-position="buttonPosition"
        :checked="isOptionCheckedByDefault(option)"
        :class="option[keys.class]"
        :color="color"
        :disabled="disabled || option[keys.disabled]"
        :name="name"
        :tabindex="tabindex"
        :true-value="option[keys.value] || option"
        @blur="onBlur"
        @focus="onFocus"
        >{{ option[keys.label] || option }}</n-radio
      >
    </div>

    <div v-if="hasFeedback" class="n-radio-group__feedback">
      <div v-if="showError" class="n-radio-group__feedback-text">
        <slot name="error">{{ error }}</slot>
      </div>

      <div v-else-if="showHelp" class="n-radio-group__feedback-text">
        <slot name="help">{{ help }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
import NRadio from "./NRadio.vue";

export default {
  name: "NRadioGroup",

  components: {
    NRadio
  },

  props: {
    name: {
      type: String,
      required: true
    },
    tabindex: [String, Number],
    label: String,
    options: {
      type: Array,
      required: true
    },
    value: {
      required: true
    },
    keys: {
      type: Object,
      default() {
        return {
          id: "id",
          class: "class",
          label: "label",
          value: "value",
          checked: "checked",
          disabled: "disabled"
        };
      }
    },
    color: {
      type: String,
      default: "primary" // 'primary' or 'accent'
    },
    buttonPosition: {
      type: String,
      default: "left" // 'left' or 'right'
    },
    vertical: {
      type: Boolean,
      default: false
    },
    help: String,
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
      initialValue: this.value,
      selectedOptionValue: this.value
    };
  },

  computed: {
    classes() {
      return [
        `n-radio-group--color-${this.color}`,
        `n-radio-group--button-position-${this.buttonPosition}`,
        { "is-vertical": this.vertical },
        { "is-active": this.isActive },
        { "is-invalid": this.invalid },
        { "is-disabled": this.disabled }
      ];
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

  watch: {
    selectedOptionValue() {
      this.$emit("input", this.selectedOptionValue);
      this.$emit("change", this.selectedOptionValue);
    },

    value() {
      this.selectedOptionValue = this.value;
    }
  },

  methods: {
    reset() {
      this.$emit("input", this.initialValue);
    },

    isOptionCheckedByDefault(option) {
      // eslint-disable-next-line eqeqeq
      return (
        this.initialValue == option[this.keys.value] ||
        this.initialValue == option ||
        option[this.keys.checked]
      );
    },

    onFocus(e) {
      this.isActive = true;
      this.$emit("focus", e);
    },

    onBlur(e) {
      this.isActive = false;
      this.$emit("blur", e);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/imports.scss";

.n-radio-group {
  font-family: $font-stack;

  &:not(.is-disabled):not(.is-invalid):hover {
    .n-radio-group__label-text {
      color: $ui-input-label-color--hover;
    }
  }

  &:not(.is-disabled):not(.is-invalid).is-active {
    .n-radio-group__label-text {
      color: $ui-input-label-color--active;
    }
  }

  &.is-vertical {
    .n-radio-group__radios {
      flex-direction: column;
      padding-top: rem(8px);
    }

    .n-radio-group__radio {
      margin-bottom: rem(12px);
      margin-left: 0;
      width: 100%;
    }
  }

  &.is-invalid {
    .n-radio-group__label-text {
      color: $ui-input-border-color--invalid;
    }

    .n-radio-group__feedback {
      color: $ui-input-feedback-color--invalid;
    }
  }

  &.is-disabled {
    .n-radio-group__feedback {
      opacity: $ui-input-feedback-opacity--disabled;
    }
  }
}

.n-radio-group__label-text {
  color: $ui-input-label-color;
  font-size: $ui-input-label-font-size;
  line-height: $ui-input-label-line-height;
  transition: color 0.1s ease;
}

.n-radio-group__radios {
  align-items: center;
  display: flex;
  min-height: $ui-input-height;
}

.n-radio.n-radio-group__radio {
  margin-left: rem(24px);

  &:first-child {
    margin-left: 0;
  }
}

.n-radio-group__feedback {
  color: $ui-input-feedback-color;
  font-size: $ui-input-feedback-font-size;
  line-height: $ui-input-feedback-line-height;
  margin: 0;
  padding-top: $ui-input-feedback-padding-top - rem(4px);
  position: relative;
}

// ================================================
// Button Positions
// ================================================

.n-radio-group--button-position-right {
  &:not(.is-vertical) {
    .n-radio__label-text {
      margin-right: rem(8px);
    }
  }
}

@import "@/assets/sass/config.scss";

.n-radio-group__label-text {
  @extend .form-label-style;
}

.n-radio-group.is-invalid .n-radio-group__label-text {
  color: $form-color-invalid;
}
.n-radio-group.is-invalid .n-radio-group__feedback {
  color: $form-color-invalid;
}
.n-radio-group:not(.is-disabled):not(.is-invalid).is-active
  .n-radio-group__label-text {
  color: $form-color-active;
}

.n-radio--color-primary.is-checked:not(.is-disabled) .n-radio__outer-circle {
  border-color: $form-color-active;
}

.n-radio--color-primary.is-checked:not(.is-disabled) .n-radio__inner-circle {
  background-color: $form-color-active;
}
</style>
