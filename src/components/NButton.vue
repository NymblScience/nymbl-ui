<template>
  <component
  ref="btn"
    :is="isAnchor ? 'a' : 'button'"
    :class="classes"
    class="n-button"
    :disabled="disabled || loading"
    :href="isAnchor ? (disabled ? null : href) : null"
    :type="isAnchor ? null : type"
    @click="onClick"
  >
    <div class="n-button__content " :class="containerClasses">
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
// import NLoadingCircle from './NLoadingCircle.vue';

export default {
  name: 'NButton',

  // components: {
  //   NLoadingCircle,
  // },
  props: {
    /**
     * Specify `lg` or `sm` for the button size.
     */
    size: {
      default: null,
      type: String,
      // validator(prop) {
      //   return ['sm', 'lg'].includes(prop);
      // },
    },
    /**
     * Create block level buttons — those that span the full width of a parent.
     */
    block: {
      type: Boolean,
      default: false,
    },
    /**
     *
     */
    buttonType: {
      default: null,
      type: String,
    },
    /**
     *
     */
    type: {
      default: null,
      type: String,
    },
    /**
     * Specify button type `primary`, `secondary`, `danger`, 'transparent'
     *
     */
    variant: {
      default: 'primary',
      type: String,
    },

    rounded: {
      default: null,
      type: Boolean,
    },
    roundedXl: {
      default: null,
      type: Boolean,
    },
    roundedXxl: {
      default: null,
      type: Boolean,
    },

    /**
     * Disable button default functionality.
     */
    disabled: {
      default: false,
      type: Boolean,
    },
    /**
     * Is button loading
     */
    loading: {
      default: false,
      type: Boolean,
    },

    href: {
      default: null,
      type: String,
    },
    color: {
      type: [String, Boolean],
      default: false,
    },
    /**
     * Cusotm class for container
     */
    containerClasses: String,
  },
  computed: {
    classes() {
      const isText = this.buttonType === 'text';
      return [
        { 'px-6 py-3': !this.size },
        {
          'n-button__icon':
            this.buttonType === 'icon' || this.buttonType === 'icon-flat',
        },
        { 'n-button__icon--flat': this.buttonType === 'icon-flat' },
        { 'n-button__text': isText },

        { 'bg-green-100': this.variant === 'primary' && !isText },
        { 'bg-green-150': this.variant === 'teal' && !isText },
        { 'bg-blue-400': this.variant === 'secondary' && !isText },
        { 'bg-red-100': this.variant === 'danger' && !isText },
        { 'bg-white text-green-150 hover:text-green-150 focus:text-green-150 bg-none active:text-green-150': this.variant === 'white' && !isText },

        // Variants
        { 'n-button__primary': this.variant === 'primary' },
        { 'n-button__secondary': this.variant === 'secondary' },
        { 'n-button__danger': this.variant === 'danger' },
        { 'n-button__transparent': this.variant === 'transparent' },
        // Text buttons
        { 'text-green-100 hover:text-green-200 focus:text-green-200 bg-transparent bg-none active:bg-green-300 active:text-white': this.variant === 'primary' && isText },
        { 'text-blue-400 hover:text-blue-200 focus:text-blue-200 bg-transparent bg-none active:bg-blue-200 active:text-white': this.variant === 'secondary' && isText },
        { 'text-red-100 hover:text-red-100 focus:text-red-100 bg-transparent bg-none active:bg-red-100 active:text-white': this.variant === 'danger' && isText },
        { 'text-green-100 hover:text-green-100 focus:text-green-100 bg-transparent bg-none active:text-green-100 active:text-white border-2 border-solid ': this.variant === 'transparent' },
        { 'text-green-150 hover:text-green-150 focus:text-green-150 bg-transparent bg-none active:text-green-150 active:text-white border-2 border-solid': this.variant === 'transparent-teal' },

        // Sizes
        { 'n-button--sm text-sm px-4 py-2 ': this.size === 'sm' },
        { 'n-button--lg text-lg px-8 py-4': this.size === 'lg' },

        // Misc
        { 'n-button--block': this.block },
        { 'is-anchor': this.isAnchor },
        { rounded: this.rounded },
        { 'rounded-xl': this.roundedXl },
        { 'rounded-xxl': this.roundedXxl },
        { 'is-loading': this.loading },
        { 'is-disabled': this.disabled || this.loading },
        { 'text-gray-100': this.disabled },
      ];
    },
    isAnchor() {
      return this.href !== null;
    },
  },
  methods: {
    onClick(e) {
      this.$emit('click', e);
    },
    focus() {
      this.$refs.btn.focus();
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/sass/colors.scss";
.n-button {
  display: inline-flex;
  justify-content: center;

  text-align: center;
  vertical-align: middle;
  user-select: none;
  position: relative;
  text-decoration: none;
  background-color: transparent;
  border: 1px solid transparent;
  color: #fff;
  cursor: pointer;
  border-radius: 0.24rem;
  white-space: nowrap;
  font-weight: 600;
  border: none;
  line-height: 1;
  letter-spacing: -0.17px;

  &:active:not([disabled]) {
    box-shadow: none !important;
  }
  transition: all 250ms;
  &:focus:not([disabled]) {
      outline: none;
       filter: brightness(110%);
    box-shadow: 0 1px 2px rgba(25, 25, 26, 0.7);
  }
  &:hover:not([disabled]) {
     filter: brightness(110%);
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

  &:active:not([disabled]) {
    // background: #85ece8 !important;
    // color: #0a6b69 !important;
  }
  &:focus:not([disabled]) {
    outline:none
    // background-image: linear-gradient(#c9ffff, #85ece8);
  }
  &:hover:not([disabled]) {
    // color: #0a6b69;
  }
}

.n-button.n-button__text {
  // background: none!important;
  border: none!important;
  box-shadow: none!important;
  circle {
    stroke: $text-color!important;
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
