<template>
  <component
    :is="isAnchor ? 'a' : 'button'"
    class="n-button-icon"
    :aria-label="ariaLabel || tooltip"
    :class="classes"
    :disabled="disabled || loading"
    :href="isAnchor ? (disabled ? null : href) : null"
    :type="isAnchor ? null : buttonType"
    @click="onClick"
  >
    <div v-if="icon || $slots.default" class="n-button-icon__icon text-purple">
      <slot> </slot>
    </div>

    <n-loading-circle
      v-if="loading"
      class="n-button-icon__progress"
      :size="size === 'large' ? 24 : 18"
      :stroke="4.5"
    ></n-loading-circle>

    <n-popover
      v-if="hasDropdown"
      ref="dropdown"
      constain-focus
      :append-to-body="appendDropdownToBody"
      :constrain-to-scroll-parent="constrainDropdownToScrollParent"
      :position="dropdownPosition"
      :open-on="openDropdownOn"
      @close="onDropdownClose"
      @open="onDropdownOpen"
    >
      <slot name="dropdown"></slot>
    </n-popover>
  </component>
</template>

<script>
import NPopover from './NPopover.vue';
import NLoadingCircle from './NLoadingCircle.vue';

export default {
  name: 'NButtonIcon',

  components: {
    NPopover,
    NLoadingCircle,
  },

  props: {
    type: {
      type: String,
      default: 'primary', // 'primary' or 'secondary'
    },
    /**
     * Specify button type `primary`, `secondary`, `danger`,
     *
     */
    variant: {
      default: 'primary',
      type: String,
    },
    buttonType: String,
    href: String,
    color: {
      type: String,
      default: 'default', // 'default', 'primary', 'accent', 'green', 'orange', or 'red'
    },
    size: {
      type: String,
      default: 'normal', // 'mini', 'small', normal', or 'large'
    },
    icon: String,
    ariaLabel: String,
    loading: {
      type: Boolean,
      default: false,
    },
    isTransperent: {
      type: Boolean,
      default: false,
    },
    hasDropdown: {
      type: Boolean,
      default: false,
    },
    dropdownPosition: {
      type: String,
      default: 'bottom-start',
    },
    appendDropdownToBody: {
      type: Boolean,
      default: true,
    },
    constrainDropdownToScrollParent: {
      type: Boolean,
      default: true,
    },
    openDropdownOn: {
      type: String,
      default: 'click', // 'click', 'hover', 'focus', or 'always'
    },
    tooltip: String,
    openTooltipOn: String,
    tooltipPosition: String,
    disableRipple: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return [
        'cursor-pointer',
        { 'bg-gray-100': !this.isTransperent },
        'hover:bg-gray-110',
        'text-gray-400',
        'hover:text-gray-390',
        'focus:bg-gray-110',
        'active:text-gray-200',
        'active:bg-gray-110',
        'transition',
        'duration-200', 'ease-in-out',
        `n-button-icon--color-${this.color}`,
        `n-button-icon--type-${this.type}`,
        `n-button-icon--size-${this.size}`,
        { 'bg-': this.variant === 'primary' },
        { 'n-button__secondary': this.variant === 'secondary' },
        { 'n-button__danger': this.variant === 'danger' },
        { 'is-anchor': this.isAnchor },
        { 'is-loading': this.loading },
        { 'is-disabled': this.disabled || this.loading },
        { 'has-dropdown': this.hasDropdown },
      ];
    },

    isAnchor() {
      return this.href !== undefined;
    },

    progressColor() {
      if (this.type === 'primary') {
        if (this.color === 'default' || this.color === 'black') {
          return 'black';
        }

        return 'white';
      }

      if (this.color === 'white') {
        return 'white';
      }

      return 'black';
    },
  },

  methods: {
    onClick(e) {
      this.$emit('click', e);
    },

    onDropdownOpen() {
      this.$emit('dropdown-open');
    },

    onDropdownClose() {
      this.$emit('dropdown-close');
    },

    openDropdown() {
      if (this.$refs.dropdown) {
        this.$refs.dropdown.open();
      }
    },

    closeDropdown() {
      if (this.$refs.dropdown) {
        this.$refs.dropdown.close();
      }
    },

    toggleDropdown() {
      if (this.$refs.dropdown) {
        this.$refs.dropdown.toggle();
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/imports.scss";

$n-button-icon-size: rem(36px) !default;
$n-button-icon--size-mini: rem(24px) !default;
$n-button-icon--size-small: rem(32px) !default;
$n-button-icon--size-large: rem(48px) !default;

.n-button-icon {
  align-items: center;

  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  margin: 0;

  overflow: hidden;
  padding: 0;
  position: relative;
  &.is-disabled {
    pointer-events:none;
  }

    &:focus {
      outline: none;
  }
  // Fix for border radius not clipping internal content of positioned elements (Chrome/Opera)
  -webkit-mask-image: -webkit-radial-gradient(circle, white, black);

  &,
  .n-button-icon__focus-ring {
    height: $n-button-icon-size;
    width: $n-button-icon-size;
  }

  body[modality="keyboard"] &:focus {
    .n-button-icon__focus-ring {
      opacity: 1;
      transform: scale(1);
    }
  }

  // Remove the Firefox dotted outline
  &::-moz-focus-inner {
    border: 0;
  }

  &.is-anchor {
    cursor: pointer;
    text-decoration: none;

    &.is-disabled {
      cursor: default;
    }
  }

  &.is-loading {
    .n-button-icon__icon {
      opacity: 0;
    }
  }

  &.is-disabled {
    opacity: 0.6;
  }

}

.n-button-icon__icon {
  align-items: center;
  color: currentColor;
  display: flex;
  height: initial;
  justify-content: center;
  opacity: 1;
  position: relative;
  transition-delay: 0.1s;
  transition: opacity 0.2s ease;
  width: 100%; // Firefox: needs the width and height reset for flexbox centering
  z-index: 1;

  .n-icon {
    display: block;
  }
}

.n-loading-circle.n-button-icon__loading {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

/// Raised icon colors.
.n-button-icon__raised.n-button__primary svg {
  color: #85ece8;
}

.n-button-icon__raised.n-button__secondary svg {
  color: #95bfdd;
}

.n-button-icon__raised.n-button__danger svg {
  color: #dac6bb;
}

// ================================================
// Sizes
// ================================================

.n-button-icon--size-mini {
  &,
  .n-button-icon__focus-ring {
    height: $n-button-icon--size-mini;
    width: $n-button-icon--size-mini;
  }

  .n-icon {
    font-size: rem(18px);
  }
}

.n-button-icon--size-small {
  &,
  .n-button-icon__focus-ring {
    height: $n-button-icon--size-small;
    width: $n-button-icon--size-small;
  }

  .n-icon {
    font-size: rem(18px);
  }
}

.n-button-icon--size-large {
  &,
  .n-button-icon__focus-ring {
    height: $n-button-icon--size-large;
    width: $n-button-icon--size-large;
  }
}

</style>
