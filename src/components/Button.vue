<template>
  <b-button
    :variant="type"
    :size="size"
    :block="block"
    :disabled="disabled"
  >
    <slot />
  </b-button>
</template>
<script>
import BButton from 'bootstrap-vue/es/components/button/button';

export default {
  name: 'Button',
  components: {
    BButton,
  },
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
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     * Create block level buttons — those that span the full width of a parent.
     */
    block: {
      type: Boolean,
      default: false,
    },
    /**
     * Specify button type `primary`, `secondary`, `danger`, `outline-primary`,
     * `outline-secondary`, `outline-danger`, `text-primary`, `text-secondary', 'text-primary'
     *
     */
    type: {
      default: 'primary',
      type: String,
    },
    /**
     * Disable button default functionality.
     */
    disabled: {
      default: false,
      type: Boolean,
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/sass/main.scss";

.btn {
  white-space: nowrap;
  font-weight: 400;
padding: 0.5rem 0.9rem;
  font-size: .7rem;
}
.btn-sm {

}
.btn-lg {
  padding: 1rem 2rem;
}

.btn-primary:focus {
  background: lighten(  $primary, 3% )
}

.btn-secondary:focus {
  background: lighten( $secondary, 3% )
}
.btn-danger:focus {
  background: lighten( $danger, 10% )
}
.btn-primary:active {
  background: darken(  $primary, 3% )
}

.btn-secondary:active {
  background: darken( $secondary, 3% )
}
.btn-danger:active {
  background: darken( $danger, 10% )
}

.btn-text-primary {
  outline: none;
  font-weight: 600;
  color:#333;
  &:active {
    background: #f1f1f1;
    outline: none;
  }
    &:focus {
    background: #f1f1f1;
    outline: none;
    box-shadow: none;
  }
}
</style>
