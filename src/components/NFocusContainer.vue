<template>
  <component :is="tag" class="n-focus-container">
    <span
      v-if="renderRedirector"
      class="n-focus-container__focus-redirector"
      @focus="redirectFocus($event, { isTabbingForward: false })"
    ></span>

    <div ref="content" class="n-focus-container__content">
      <slot></slot>
    </div>

    <span
      v-if="!disabled && containFocus"
      ref="lastFocusable"
      class="n-focus-container__last-focusable"
    ></span>

    <span
      v-if="renderRedirector"
      class="n-focus-container__focus-redirector"
      tabindex="0"
      @focus="redirectFocus($event, { isTabbingForward: true })"
    ></span>
  </component>
</template>

<script>
export default {
  name: "NFocusContainer",

  props: {
    containFocus: {
      type: Boolean,
      default: true
    },
    focusRedirector: Function,
    disabled: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    },
    lazy: {
      type: Boolean,
      defualt: true // When true, the focus redirectors are not rendered until containFocus is true
    }
  },

  computed: {
    renderRedirector() {
      if (this.disabled) {
        return false;
      }

      return this.lazy ? this.containFocus : true;
    }
  },

  methods: {
    focus() {
      this.$refs.content.focus();
    },

    redirectFocus(e, options) {
      if (!this.containFocus) {
        this.$emit("focus-overflow", e, options);
        return;
      }

      e.stopPropagation();

      if (this.focusRedirector) {
        this.focusRedirector(e, options);
        return;
      }

      if (options.isTabbingForward) {
        this.$refs.content.focus();
      } else {
        this.$refs.lastFocusable.focus();
      }
    }
  }
};
</script>

<style lang="scss">
.n-focus-container__focus-redirector,
.n-focus-container__last-focusable {
  opacity: 0;
  position: absolute;
}

.n-focus-container__content {
  outline: none;
}
</style>
