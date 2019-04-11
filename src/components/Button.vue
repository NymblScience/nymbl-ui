<template>
  <b-button
    v-bind="$attrs"
    :variant="variant"
    :size="size"
    :block="block"
    :disabled="disabled"
    :class="classes"
    v-on="$listeners"
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
    // loading: {
    //   type: Boolean,
    //   default: false,
    // },
    /**
     * Create block level buttons — those that span the full width of a parent.
     */
    block: {
      type: Boolean,
      default: false,
    },
    /**
     * Specify button type `default`, `outline`, `text`, `icon`,
     */
    type: {
      default: 'default',
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
    /**
     * Applies just to the icon button.
     */
    round: {
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
  },
  computed: {
    classes() {
      const classes = [];
      if (this.type === 'icon') {
        classes.push('btn-icon');
        classes.push('btn-text');
      }
      if (this.type === 'text') {
        classes.push('btn-text');
      }
      if (this.type === 'outline') {
        classes.push('btn-outline');
      }
      if (this.round && this.type === 'icon') {
        classes.push('btn-icon-round');
      }
      return classes;
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/sass/main.scss";

.btn {
  white-space: nowrap;
  font-weight: 400;
}

.btn.btn-text {
  background: none;
  border: none;
  color: $text;
  font-weight: 500;
  letter-spacing: 0.04rem;
  &:focus {
    box-shadow: none;
  }
  &:focus {
    background: rgba(60, 64, 67, 0.1);
  }
}

.btn.btn-text.btn-secondary {
  color: $secondary;
  &:focus {
    background: lighten($secondary, 53%) !important;
  }
  &:hover {
    background-color: lighten($secondary, 53%) !important;
  }
  &:active {
    background-color: lighten($secondary, 36%) !important;
    color: $secondary !important;
  }
}

.btn.btn-text.btn-primary {
  color: $primary;
  &:focus {
    background: #ebfeff!important;
  }
  &:hover {
    background-color: #ebfeff!important;
  }
  &:active {
    background-color: #dafdff!important;
    color: $primary!important;
  }
}

.btn.btn-text.btn-transparent {
  &:focus {
    background: rgba(60, 64, 67, 0.1);
  }
  &:active {
    background: rgba(60, 64, 67, 0.12);
  }
}

.btn.btn-text.btn-danger {
  color: $danger;
  &:focus {
    background:  #fdede9!important
  }
  &:hover {
    background-color: #fdede9!important;
  }
  &:active {
    background-color: #fbe0da!important;
    color: $danger!important;
  }
}
.btn.btn-icon.btn-primary svg {
  color: $primary;
}

.btn.btn-icon.btn-secondary svg {
  color: $secondary;
}

.btn.btn-icon.btn-danger svg {
  color: $danger;
}

.btn.btn-icon {
  color: #333;
  &:hover {
    background: rgba(60, 64, 67, 0.1);
  }
  &:focus {
    background: rgba(60, 64, 67, 0.1);
    box-shadow: none;
  }
  &:active {
    background: rgba(60, 64, 67, 0.12);
    outline: none;
    box-shadow: 0;
  }
}

.btn.btn-icon-round {
  border-radius: 999rem;
  padding: 8px;
}

.btn.btn-outline {
  background: none;
}
.btn.btn-outline.btn-primary {
  color: $dark-green;
}

.btn.btn-primary:focus {
  background: lighten($primary, 3%);
}
.btn.btn-primary:active {
  background: darken($primary, 3%);
}
.btn.btn-primary:hover {
  background: lighten($primary, 3%);
}

.btn.btn-secondary:focus {
  background: lighten($secondary, 3%);
}
.btn.btn-danger:focus {
  background: lighten($danger, 10%);
}

.btn.btn-secondary:active {
  background: darken($secondary, 3%);
}
.btn.btn-danger:active {
  background: darken($danger, 10%);
}

.btn.btn-text-primary {
  outline: none;
  font-weight: 600;
  color: #333;
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
