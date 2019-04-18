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
import BButton from "bootstrap-vue/es/components/button/button";

export default {
  name: "Button",
  components: {
    BButton
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
    // loading: {
    //   type: Boolean,
    //   default: false,
    // },
    /**
     * Create block level buttons — those that span the full width of a parent.
     */
    block: {
      type: Boolean,
      default: false
    },
    /**
     * Specify button type `default`, `outline`, `text`, `icon`,
     */
    type: {
      default: "default",
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
    }
  },
  computed: {
    classes() {
      const classes = [];
      if (this.type === "icon") {
        classes.push("btn-icon");
        classes.push("btn-text");
      }
      if (this.type === "text") {
        classes.push("btn-text");
      }
      if (this.type === "outline") {
        classes.push("btn-outline");
      }
      if (this.round && this.type === "icon") {
        classes.push("btn-icon-round");
      }
      return classes;
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/sass/main.scss";

.btn {
  white-space: nowrap;
  font-weight: 500;
  text-transform: uppercase;
  box-shadow: 0 1.5px 3px rgba(25, 25, 26, 0.3);
  border: none;
  line-height: 1;
  letter-spacing: 0.06rem;
  &:active {
    box-shadow: none;
  }
  transition: all 700ms;
}

.btn.btn-primary {
  background-image: linear-gradient(#85ece8, #c9ffff);
  color: #0a6b69;
  &:active {
    background: #85ece8 !important;
    color: #0a6b69 !important;
  }
  &:focus {
  }
  // &:hover {
  //   transform: translateY(-0.06rem);
  // }
}

.btn.btn-secondary {
  background-image: linear-gradient(#95bfdd, #c1e1f8);
  color: #245072;
  &:active {
    background: #95bfdd !important;
    color: #245072 !important;
  }
  &:focus {
  }
  &:hover {
  }
}

.btn.btn-danger {
  background-image: linear-gradient(#dac6bb, #a99386);
  color: #603f2c;
  box-shadow: 0 1px 2px rgba(57, 63, 72, 0.3);
  &:focus {
    background: #dac6bb;
  }
  // &:hover {
  //   background-color: #fdede9 !important;
  // }
  &:active {
    background: #dac6bb !important;
    box-shadow: none;
    color: #603f2c !important;
    // background-color: #fbe0da !important;
    // color: $danger !important;
  }
}

.btn.btn-text {
  background: none;
  border: none;
  box-shadow: none;
  color: $text;
  letter-spacing: 0.05rem;
  font-size: 0.8rem;
  font-weight: 500;
  &:focus {
    box-shadow: none;
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
  color: #0a6b69;
  &:focus {
    background-color: #e9fdfe;
  }
  &:hover {
    background-color: #e9fdfe !important;
  }
  &:active {
    background-color: #c9ffff !important;
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
  background-image: linear-gradient(#dac6bb, #a99386);
  color: #603f2c;
  box-shadow: 0 1px 2px rgba(57, 63, 72, 0.3);
  &:focus {
    background: #dac6bb;
  }
  // &:hover {
  //   background-color: #fdede9 !important;
  // }
  &:active {
    background: #dac6bb;
    box-shadow: none;
    color: #603f2c;
    // background-color: #fbe0da !important;
    // color: $danger !important;
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
  box-shadow: none;
  -webkit-filter: drop-shadow(1.5px 1.5px 0px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(1.5px 1.5px 0px rgba(0, 0, 0, 0.7));

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
