<template>
  <component
    :is="isAnchor ? 'a' : 'button'"
    :class="classes"
    class="n-button"
    :disabled="disabled || loading"
    :href="isAnchor ? (disabled ? null : href) : null"
    :type="isAnchor ? null : type"
    @click="onClick"
  >
    <div class="n-button__content">
      <slot v-show="!loading" />
    </div>

    <n-loading-circle
      v-if="loading"
      disable-transition
      class="n-button__loading"
      :size="24"
      :stroke="3"
    ></n-loading-circle>
  </component>
</template>
<script>
import NLoadingCircle from "./NLoadingCircle.vue";
export default {
  name: "NButton",
  components: {
    NLoadingCircle
  },
  props: {
    /**
     * Specify `lg` or `sm` for the button size.
     */
    size: {
      default: null,
      type: String
      // validator(prop) {
      //   return ['sm', 'lg'].includes(prop);
      // },
    },
    /**
     * Create block level buttons — those that span the full width of a parent.
     */
    block: {
      type: Boolean,
      default: false
    },
    /**
     *
     */
    buttonType: {
      default: null,
      type: String
    },
    /**
     *
     */
    type: {
      default: null,
      type: String
    },
    /**
     * Specify button type `primary`, `secondary`, `danger`, 'transparent'
     *
     */
    variant: {
      default: "primary",
      type: String
    },
    /**
     * Applies just to the icon button.
     */
    round: {
      default: null,
      type: Boolean
    },
    /**
     * Disable button default functionality.
     */
    disabled: {
      default: false,
      type: Boolean
    },
    /**
     * Is button loading
     */
    loading: {
      default: false,
      type: Boolean
    },

    href: {
      default: null,
      type: String
    }
  },
  computed: {
    classes() {
      return [
        {
          "n-button__icon":
            this.buttonType === "icon" || this.buttonType === "icon-flat"
        },
        { "n-button__icon--flat": this.buttonType === "icon-flat" },
        { "n-button__text": this.buttonType === "text" },
        { "n-button__primary": this.variant === "primary" },
        { "n-button__secondary": this.variant === "secondary" },
        { "n-button__danger": this.variant === "danger" },
        { "n-button--sm": this.size === "sm" },
        { "n-button--lg": this.size === "lg" },
        { "n-button--block": this.block },
        { "is-anchor": this.isAnchor },
        { "is-loading": this.loading },
        { "is-disabled": this.disabled || this.loading }
      ];
    },
    isAnchor() {
      return this.href !== null;
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style lang="scss">
.n-button {
  display: inline-flex;
  justify-content: center;
  // color: #231f20;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  position: relative;
  text-decoration: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.8rem 1.1rem;
  font-size: 0.96rem;
  cursor: pointer;
  border-radius: 0.24rem;
  white-space: nowrap;
  font-weight: 500;
  text-transform: uppercase;
  box-shadow: 1px 1px 2px rgba(25, 25, 26, 0.3);
  border: none;
  line-height: 1;
  letter-spacing: 0.06rem;
  &--sm {
    padding: 0.6rem 0.8rem;
    font-size: 0.8rem;
  }
  &--lg {
    padding: 1rem 1.4rem;
    font-size: 1.2rem;
  }
  &:active:not([disabled]) {
    box-shadow: none !important;
  }
  transition: all 250ms;
  &:focus:not([disabled]) {
    outline: none;
    box-shadow: 0 1px 2px rgba(25, 25, 26, 0.7);
  }
  &:hover:not([disabled]) {
    box-shadow: 0 1px 2px rgba(25, 25, 26, 0.7);
  }
  &.is-loading {
    cursor: default;
    .n-button__content {
      opacity: 0;
    }
  }
  &.is-anchor {
    cursor: pointer;
    text-decoration: none;
    &.is-disabled {
      cursor: default;
    }
  }
  &.is-disabled {
    cursor: default;
    opacity: 0.5;
  }
}

.n-button.n-button__primary {
  background-image: linear-gradient(#c9ffff, #85ece8);
  background-color: #85ece8;
  color: #0a6b69;
  &:active:not([disabled]) {
    background: #85ece8 !important;
    color: #0a6b69 !important;
  }
  &:focus:not([disabled]) {
    background-image: linear-gradient(#c9ffff, #85ece8);
  }
  &:hover:not([disabled]) {
    color: #0a6b69;
  }
}

.n-button.n-button__secondary {
  background-image: linear-gradient(#c1e1f8, #95bfdd);
  background-color: #95bfdd;
  color: #245072;
  &:active {
    background: #95bfdd !important;
    color: #245072 !important;
  }
  &:hover {
    color: #245072;
  }
}

.n-button.n-button__danger {
  background-image: linear-gradient(#dac6bb, #a99386);
  color: #603f2c;
  background-color: #dac6bb;
  &:active {
    background: #dac6bb !important;
    color: #603f2c !important;
  }
  &:hover {
    color: #603f2c;
  }
}

.n-button.n-button__text {
  background: none;
  border: none;
  box-shadow: none;
  color: #231f20;
  letter-spacing: 0.05rem;
  font-weight: 500;
  &:focus {
    background-image: linear-gradient(#c9ffff, #85ece8);
    background-color: #85ece8;
    box-shadow: 0 1px 2px rgba(25, 25, 26, 0.7);
  }
  &:hover {
    background-image: linear-gradient(#c9ffff, #85ece8);
    background-color: #85ece8;
    color: #0a6b69;
  }
  &:active {
    background-color: #85ece8;
  }
}

.n-button.n-button__text.n-button__secondary {
  color: #245072;
  &:focus {
    background-image: linear-gradient(#c1e1f8, #95bfdd);
    background-color: #95bfdd;
    color: #245072;
  }
  &:hover {
    background-image: linear-gradient(#c1e1f8, #95bfdd);
    background-color: #95bfdd;
    color: #245072;
  }
  &:active {
    background-color: #95bfdd;
    color: #245072;
  }
}

.n-button.n-button__text.n-button__danger {
  color: #603f2c;
  &:focus {
    background-image: linear-gradient(#dac6bb, #a99386);
    color: #603f2c;
    background-color: #dac6bb;
  }
  &:hover {
    background-image: linear-gradient(#dac6bb, #a99386);
    color: #603f2c;
    background-color: #dac6bb;
  }
  &:active {
    color: #603f2c;
    background-color: #dac6bb;
  }
}

.n-button--block {
  display: block;
  width: 100%;
}

.n-loading-circle.n-button__loading {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  circle {
    stroke: #fff;
  }
}
</style>
