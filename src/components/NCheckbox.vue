<template>
  <label class="n-checkbox" :class="classes">
    <input
      ref="input"
      class="n-checkbox__input"
      type="checkbox"
      :checked.prop="isChecked"
      :disabled="disabled"
      :name="name"
      :tabindex="tabindex"
      :value="submittedValue"
      @blur="onBlur"
      @click="onClick"
      @focus="onFocus"
    />

    <div class="n-checkbox__checkmark">
      <div class="n-checkbox__focus-ring"></div>
    </div>

    <div v-if="label || $slots.default" class="n-checkbox__label-text">
      <slot>{{ label }}</slot>
    </div>
  </label>
</template>

<script>
import { looseEqual } from "../helpers/util";

export default {
  name: "NCheckbox",

  props: {
    name: String,
    label: String,
    tabindex: [String, Number],
    value: {
      required: true
    },
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    },
    submittedValue: {
      type: String,
      default: "on" // HTML default
    },
    checked: {
      type: Boolean,
      default: false
    },
    boxPosition: {
      type: String,
      default: "left" // 'left' or 'right'
    },
    color: {
      type: String,
      default: "primary" // 'primary' or 'accent'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isActive: false,
      isChecked: looseEqual(this.value, this.trueValue) || this.checked
    };
  },

  computed: {
    classes() {
      return [
        `n-checkbox--color-${this.color}`,
        `n-checkbox--box-position-${this.boxPosition}`,
        { "is-checked": this.isChecked },
        { "is-active": this.isActive },
        { "is-disabled": this.disabled }
      ];
    }
  },

  watch: {
    value() {
      this.isChecked = looseEqual(this.value, this.trueValue);
    }
  },

  created() {
    this.$emit("input", this.isChecked ? this.trueValue : this.falseValue);
  },

  methods: {
    focus() {
      this.$refs.input.focus();
    },

    onClick(e) {
      const isCheckedPrevious = this.isChecked;
      const isChecked = e.target.checked;

      this.$emit("input", isChecked ? this.trueValue : this.falseValue, e);

      if (isCheckedPrevious !== isChecked) {
        this.$emit("change", isChecked ? this.trueValue : this.falseValue, e);
      }
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

$n-checkbox-border-width: rem(2px) !default;
$n-checkbox-checkmark-width: rem(2px) !default;
$n-checkbox-transition-duration: 0.15s !default;
$n-checkbox-label-font-size: rem(16px) !default;

$n-checkbox-size: rem(20px);
$n-checkbox-focus-ring-size: $n-checkbox-size * 2.1;

.n-checkbox {
  align-items: center;
  display: flex;
  font-family: $font-stack;
  font-weight: normal;
  margin: 0;
  // margin-bottom: rem(8px);
  position: relative;

  &:not(.is-disabled):not(.is-checked):hover,
  &:not(.is-disabled):not(.is-checked).is-active {
    .n-checkbox__checkmark::before {
      border-color: rgba(black, 0.6);
    }
  }

  &.is-checked {
    .n-checkbox__checkmark::after {
      border-bottom: $n-checkbox-checkmark-width solid white;
      border-right: $n-checkbox-checkmark-width solid white;
      opacity: 1;
    }
  }

  &.is-disabled {
    .n-checkbox__checkmark,
    .n-checkbox__label-text {
      color: $disabled-text-color;
      cursor: default;
    }

    .n-checkbox__checkmark::before {
      border-color: rgba(black, 0.26);
    }

    &.is-checked {
      .n-checkbox__checkmark::before {
        background-color: rgba(black, 0.26);
        border: none;
      }
    }
  }
}

.n-checkbox__label-text {
  cursor: pointer;
  font-size: $n-checkbox-label-font-size;
  margin-left: rem(8px);
}

.n-checkbox__checkmark {
  background-color: white;
  cursor: pointer;
  flex-shrink: 0;
  height: $n-checkbox-size;
  position: relative;
  width: $n-checkbox-size;
  border-radius: $ui-default-border-radius;
  // Background
  &::before {
    border-radius: $ui-default-border-radius;
    border: $n-checkbox-border-width solid $hint-text-color;
    box-sizing: border-box;
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: all 0.3s ease;
    width: 100%;
  }

  // Checkmark
  &::after {
    bottom: rem(5px);
    box-sizing: border-box;
    content: "";
    display: block;
    height: rem(13px);
    left: rem(7px);
    opacity: 0;
    position: absolute;
    transform: rotate(45deg);
    transition-delay: 0.1s;
    transition: opacity 0.3s ease;
    width: rem(6px);
  }
}

.n-checkbox__input {
  position: absolute;
  opacity: 0;

  body[modality="keyboard"] &:focus + .n-checkbox__checkmark {
    .n-checkbox__focus-ring {
      opacity: 1;
      transform: scale(1);
    }
  }
}

.n-checkbox__focus-ring {
  border-radius: 50%;
  height: $n-checkbox-focus-ring-size;
  margin-left: -($n-checkbox-focus-ring-size - $n-checkbox-size) / 2;
  margin-top: -($n-checkbox-focus-ring-size - $n-checkbox-size) / 2;
  opacity: 0;
  position: absolute;
  transform: scale(0);
  transition-duration: $n-checkbox-transition-duration;
  transition-property: opacity, transform;
  transition-timing-function: ease-out;
  width: $n-checkbox-focus-ring-size;
  background-color: rgba(black, 0.12);
}

// ================================================
// Box Positions
// ================================================

.n-checkbox--box-position-right {
  .n-checkbox__label-text {
    margin-left: 0;
    margin-right: auto;
    order: -1;
  }
}

// ================================================
// Colors
// ================================================

.n-checkbox--color-primary {
  &:not(.is-disabled).is-checked:hover,
  &:not(.is-disabled).is-checked.is-active {
    .n-checkbox__checkmark::before {
      background-color: darken($brand-primary-color, 5%);
      border-color: darken($brand-primary-color, 5%);
    }
  }

  &.is-checked {
    .n-checkbox__checkmark::before {
      background-color: $brand-primary-color;
      border-color: $brand-primary-color;
    }

    .n-checkbox__focus-ring {
      background-color: rgba($brand-primary-color, 0.18);
    }
  }
}

.n-checkbox--color-accent {
  &:not(.is-disabled).is-checked:hover,
  &:not(.is-disabled).is-checked.is-active {
    .n-checkbox__checkmark::before {
      background-color: darken($brand-accent-color, 5%);
      border-color: darken($brand-accent-color, 5%);
    }
  }

  &.is-checked {
    .n-checkbox__checkmark::before {
      background-color: $brand-accent-color;
      border-color: $brand-accent-color;
    }

    .n-checkbox__focus-ring {
      background-color: rgba($brand-accent-color, 0.18);
    }
  }
}
</style>
