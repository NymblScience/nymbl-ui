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
  name: "NButton",
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
     * Specify button type `default`, `outline`, `text`, `icon`, 'flat-icon',
     */
    buttonType: {
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
      classes.push("n-button");
      classes.push("nymbl-btn");
      if (this.buttonType === "icon") {
        classes.push("btn-icon");
      }
      if (this.buttonType === "icon-flat") {
        classes.push("btn-icon");
        classes.push("btn-icon-flat");
      }
      if (this.buttonType === "text") {
        classes.push("btn-text");
      }
      if (this.buttonType === "outline") {
        classes.push("btn-outline");
      }
      if (this.round && this.buttonType === "icon") {
        classes.push("btn-icon-round");
      }
      return classes;
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/sass/main.scss";

.btn.nymbl-btn {
  white-space: nowrap;
  font-weight: 500;
  text-transform: uppercase;
  box-shadow: 1px 1px 2px rgba(25, 25, 26, 0.3);
  border: none;
  line-height: 1;
  letter-spacing: 0.06rem;
  &:active {
    box-shadow: none;
  }
  transition: all 250ms;
  &:focus {
    box-shadow: 0 1px 2px rgba(25, 25, 26, 0.7);
  }
  &:hover:not([disabled]) {
    box-shadow: 0 1px 2px rgba(25, 25, 26, 0.7);
  }
}

.btn.btn-primary {
  background-image: linear-gradient(#c9ffff, #85ece8);
  background-color: #85ece8;
  color: #0a6b69;
  &:active {
    background: #85ece8 !important;
    color: #0a6b69 !important;
  }
  &:focus {
    background-image: linear-gradient(#c9ffff, #85ece8);
  }
  &:hover {
    color: #0a6b69;
  }
}

.btn.btn-secondary {
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

.btn.btn-danger {
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

.btn.btn-text {
  background: none;
  border: none;
  box-shadow: none;
  color: $text;
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

.btn.btn-text.btn-secondary {
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

.btn.btn-text.btn-danger {
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
.btn.btn-icon.btn-primary svg {
  color: #85ece8;
}

.btn.btn-icon.btn-secondary svg {
  color: #95bfdd;
}

.btn.btn-icon.btn-danger svg {
  color: #dac6bb;
}

.btn.btn-icon {
  color: #333;
  box-shadow: none;
  background: none;
  border: none;
  -webkit-filter: drop-shadow(0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.5));
  filter: drop-shadow(0.05rem 0.05rem 0.05rem rgba(0, 0, 0, 0.5));

  &:hover {
    background: none !important;
    box-shadow: none !important;
    -webkit-filter: drop-shadow(0.053rem 0.053rem 0.053rem rgba(0, 0, 0, 0.8));
    filter: drop-shadow(0.053rem 0.053rem 0.053rem rgba(0, 0, 0, 0.8));
  }
  &:focus {
    background: none !important;
    box-shadow: none !important;
    -webkit-filter: drop-shadow(0.053rem 0.053rem 0.053rem rgba(0, 0, 0, 0.8));
    filter: drop-shadow(0.053rem 0.053rem 0.053rem rgba(0, 0, 0, 0.8));
  }
  &:active {
    -webkit-filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.7));

    background: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
}

.btn.btn-icon.btn-icon-flat {
  filter: none;
  &:hover {
    filter: none;
  }
  &:focus {
    filter: none;
  }
  &:active {
    filter: none;
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
</style>
