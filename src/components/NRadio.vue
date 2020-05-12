<template>
  <label class="n-radio" :class="classes" @click="toggleCheck">
    <div class="n-radio__input-wrapper">
      <input
        ref="input"
        class="n-radio__input"
        type="radio"
        :checked="checked"
        :disabled="disabled"
        :name="name"
        :tabindex="tabindex"
        :value="trueValue"
        @blur="onBlur"
        @change="onChange"
        @focus="onFocus"
      />

      <div class="n-radio__focus-ring"></div>

      <span class="n-radio__outer-circle"></span>
      <span class="n-radio__inner-circle"></span>
    </div>

    <div v-if="label || $slots.default" class="n-radio__label-text">
      <slot>{{ label }}</slot>
    </div>
  </label>
</template>

<script>
export default {
  name: "NRadio",

  props: {
    name: String,
    label: String,
    tabindex: [String, Number],
    value: {
      required: true
    },
    trueValue: {
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "primary" // 'primary' or 'accent'
    },
    buttonPosition: {
      type: String,
      default: "left" // 'left' or 'right'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isActive: false
    };
  },

  computed: {
    classes() {
      return [
        `n-radio--color-${this.color}`,
        `n-radio--button-position-${this.buttonPosition}`,
        { "is-active": this.isActive },
        { "is-checked": this.isChecked },
        { "is-disabled": this.disabled }
      ];
    },

    isChecked() {
      // eslint-disable-next-line eqeqeq
      return String(this.value).length > 0 && this.value == this.trueValue;
    }
  },

  created() {
    if (this.checked) {
      this.$emit("input", this.trueValue);
    }
  },

  methods: {
    focus() {
      this.$refs.input.focus();
    },

    toggleCheck() {
      if (!this.disabled) {
        this.$emit("input", this.trueValue);
      }
    },

    onFocus(e) {
      this.isActive = true;
      this.$emit("focus", e);
    },

    onBlur(e) {
      this.isActive = false;
      this.$emit("blur", e);
    },

    onChange(e) {
      this.$emit("change", this.isChecked, e);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/imports.scss";

$n-radio-size: rem(20px) !default;
$n-radio-stroke: rem(2px) !default;
$n-radio-focus-ring-size: $n-radio-size * 2.1 !default;
$n-radio-transition-duration: 0.3s !default;
$n-radio-label-font-size: rem(16px) !default;

.n-radio {
  align-items: center;
  display: flex;
  font-family: $font-stack;
  font-size: $ui-input-label-font-size;
  height: $n-radio-size;
  margin: 0;

  &:hover:not(.is-disabled):not(.is-checked) {
    .n-radio__outer-circle {
      border: $n-radio-stroke solid $secondary-text-color;
    }
  }

  &.is-checked {
    .n-radio__inner-circle {
      opacity: 1;
      transform: scale(0.5);
      z-index: 0;
    }
  }

  &.is-disabled {
    opacity: 0.5;

    .n-radio__input-wrapper,
    .n-radio__label-text {
      cursor: default;
    }
  }
}

.n-radio__input-wrapper {
  cursor: pointer;
  height: $n-radio-size;
  position: relative;
  width: $n-radio-size;
}

.n-radio__input {
  appearance: none;
  height: 1px;
  left: 0;
  margin: 0;
  opacity: 0;
  outline: none;
  padding: 0;
  position: absolute;
  top: 0;
  width: 1px;

  body[modality="keyboard"] &:focus + .n-radio__focus-ring {
    opacity: 1;
    transform: scale(1);
  }
}

.n-radio__outer-circle {
  background-color: transparent;
  border-radius: 50%;
  border: $n-radio-stroke solid $hint-text-color;
  height: $n-radio-size;
  left: 0;
  position: absolute;
  top: 0;
  transition: border-color 0.2s;
  width: $n-radio-size;
}

.n-radio__inner-circle {
  background-color: $hint-text-color;
  border-radius: 50%;
  height: $n-radio-size;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transform: scale(1.2);
  transition-duration: $n-radio-transition-duration;
  transition-property: transform, opacity, background-color;
  width: $n-radio-size;
  z-index: -1;
}

.n-radio__focus-ring {
  background-color: rgba(black, 0.1);
  border-radius: 50%;
  height: $n-radio-focus-ring-size;
  left: -(($n-radio-focus-ring-size - $n-radio-size) / 2);
  opacity: 0;
  position: absolute;
  top: -(($n-radio-focus-ring-size - $n-radio-size) / 2);
  transform: scale(0);
  transition: background-color 0.2s ease, transform 0.15s ease,
    opacity 0.15s ease;
  width: $n-radio-focus-ring-size;
  z-index: -1;
}

.n-radio__label-text {
  cursor: pointer;
  font-size: $n-radio-label-font-size;
  margin-left: rem(8px);
}

// ================================================
// Button Positions
// ================================================

.n-radio--button-position-right {
  .n-radio__label-text {
    margin-left: 0;
    margin-right: auto;
    order: -1;
  }
}

// ================================================
// Colors
// ================================================

.n-radio--color-primary {
  &.is-checked:not(.is-disabled) {
    .n-radio__outer-circle {
      border-color: $brand-primary-color;
    }

    .n-radio__inner-circle {
      background-color: $brand-primary-color;
    }

    .n-radio__focus-ring {
      background-color: rgba($brand-primary-color, 0.2);
    }
  }
}

.n-radio--color-accent {
  &.is-checked:not(.is-disabled) {
    .n-radio__outer-circle {
      border-color: $brand-accent-color;
    }

    .n-radio__inner-circle {
      background-color: $brand-accent-color;
    }

    .n-radio__focus-ring {
      background-color: rgba($brand-accent-color, 0.2);
    }
  }
}
</style>
