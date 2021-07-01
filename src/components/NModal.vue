<template>
  <transition
    name="n-modal-transition-fade"
    @after-enter="onEnter"
    @after-leave="onLeave"
  >
    <div
      v-if="isOpen"
      class="n-modal n-modal-mask"
      :class="classes"
      :role="role"
      @click.self="onBackdropClick"
    >
      <div
        class="n-modal-wrapper"
        :class="{ 'has-dummy-scrollbar': preventShift }"
        :style="alignTopStyle"
        @click.self="onBackdropClick"
      >
        <n-focus-container
          ref="focusContainer"
          class="n-modal-container"
          :class="{ 'n-modal-confirm': type === 'confirm' }"
          @keydown.stop.esc="onEsc"
        >
          <div
            v-if="type !== 'confirm'"
            class="n-modal-header"
            :class="{ 'no-title': noTitle }"
          >
            <slot v-if="!noTitle" name="header">
              <h1 class="n-modal-header-text">{{ title }}</h1>
            </slot>

            <div class="n-modal-close-button">
              <n-button-icon
                v-if="!removeCloseButton"
                is-transparent
                class="n-modal-close"
                title="Close"
                @click="close"
              >
                <close-icon :size="22" />
              </n-button-icon>
            </div>
          </div>

          <div class="n-modal-body">
            <slot></slot>
          </div>

          <div v-if="hasFooter" class="n-modal-footer">
            <slot name="footer"></slot>
          </div>
        </n-focus-container>
      </div>
    </div>
  </transition>
</template>

<script>
import CloseIcon from '../icons/Close.vue';
import NFocusContainer from './NFocusContainer.vue';
import NButtonIcon from './NButtonIcon.vue';

import classlist from '../helpers/classlist';

export default {
  name: 'NModal',
  components: {
    CloseIcon,
    NFocusContainer,
    NButtonIcon,
  },

  props: {
    title: {
      type: String,
      default: 'A title',
    },
    alignTop: {
      type: Boolean,
      default: false,
    },
    alignTopMargin: {
      type: Number,
      default: 60,
    },
    size: {
      /* Size of the modal - 'small', 'normal', 'large', 'fullscreen', or 'auto' */
      type: String,
      default: 'normal',
    },
    /**
     * Make dialog fullscreen in responsive breakpoints.
     */
    type: {
      default: 'default',
      type: String,
    },
    role: {
      type: String,
      default: 'dialog', // 'dialog' or 'alertdialog'
    },
    /**
     * Stack action buttons in the footer.
     */
    stackedButtons: {
      type: Boolean,
      default: false,
    },
    removeCloseButton: {
      type: Boolean,
      default: false,
    },
    preventShift: {
      type: Boolean,
      default: true,
    },
    customClass: {
      type: String,
      default: '',
    },
    noTitle: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isOpen: false,
      lastFocusedElement: null,
    };
  },

  computed: {
    classes() {
      return [
        this.customClass,
        `n-modal-size-${this.size}`,
        { 'has-footer': this.hasFooter },
        { 'is-stacked': this.stackedButtons },
        { 'is-open': this.isOpen },
        { 'is-aligned-top': this.alignTop },
      ];
    },

    alignTopStyle() {
      if (this.alignTop) {
        return { 'padding-top': `${this.alignTopMargin}px` };
      }

      return null;
    },

    toggleTransition() {
      return 'n-modal-transition-fade';
      // return `n-modal-transition-${this.transition}`;
    },

    hasFooter() {
      return Boolean(this.$slots.footer);
    },
  },

  watch: {
    isOpen() {
      this.$nextTick(() => {
        this[this.isOpen ? 'onOpen' : 'onClose']();
      });
    },
  },

  beforeDestroy() {
    if (this.isOpen) {
      this.returnFocus();
    }
  },

  methods: {
    open() {
      this.isOpen = true;
    },

    close() {
      this.isOpen = false;
    },

    redirectFocus() {
      this.$refs.focusContainer.focus();
    },

    returnFocus() {
      if (this.lastFocusedElement) {
        this.lastFocusedElement.focus();
      }
    },

    onBackdropClick() {
      this.close();
    },
    onEsc() {
      this.close();
    },
    onOpen() {
      document.body.appendChild(this.$el);
      this.lastFocusedElement = document.activeElement;

      this.$refs.focusContainer.focus();

      classlist.add(document.body, 'n-modal-is-open');
      classlist.add(document.body, 'n-no-scrolling');
      this.incrementOpenModalCount();

      this.$emit('open');
      this.$nextTick(() => {
        this.$store.commit('updateOpenedModals', this);
      });
    },

    onClose() {
      this.returnFocus();
      this.$emit('close');
    },

    onEnter() {
      this.$emit('reveal');
    },

    onLeave() {
      this.$emit('hide');
      const newCount = this.decrementOpenModalCount();

      this.$nextTick(() => {
        this.$store.commit('removeFromOpenedModals', this);
      });

      if (newCount === 0) {
        classlist.remove(document.body, 'n-modal-is-open');
        classlist.remove(document.body, 'n-no-scrolling');
      }
    },

    getOpenModalCount() {
      const count = document.body.getAttribute('data-ui-open-modals');
      return count === undefined ? 0 : Number(count);
    },

    setOpenModalCount(count) {
      const normalizedCount = Math.max(0, count);

      if (normalizedCount === 0) {
        document.body.removeAttribute('data-ui-open-modals');
      } else {
        document.body.setAttribute('data-ui-open-modals', normalizedCount);
      }

      return normalizedCount;
    },

    incrementOpenModalCount() {
      return this.setOpenModalCount(this.getOpenModalCount() + 1);
    },

    decrementOpenModalCount() {
      return this.setOpenModalCount(this.getOpenModalCount() - 1);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/imports.scss";

$n-modal-transition-duration: 0.3s !default;
$n-modal-mask-background: rgba(black, 0.5) !default;
$n-modal-header-height: rem(56px);
$n-modal-footer-height: rem(90px);

$n-modal-font-size: rem(14px);
$n-modal-header-font-size: rem(18px);

.n-modal {
  font-family: $font-stack;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  &.is-aligned-top {
    .n-modal-wrapper {
      vertical-align: initial;
    }
  }

  &.has-footer {
    .n-modal-body {
      max-height: calc(
        100vh - #{$n-modal-header-height + $n-modal-footer-height}
      );
    }
  }

  &:not(.has-footer) {
    .n-modal-body {
      padding: rem(16px 24px 24px);
    }
  }
}

.n-modal-mask {
  background-color: $n-modal-mask-background;
  transition: opacity $n-modal-transition-duration ease;
  width: 100%;
  z-index: 2009;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.n-modal-wrapper {
  overflow: hidden;
  text-align: center;
  margin: 0 auto;
}

.n-modal-container {
  border-radius: 0.3rem;
  background-color: white;
  box-shadow: 0 2.5px 4px rgba(25, 25, 26, 0.7);
  display: inline-block;
  margin: 0 auto;
  padding: 0.75rem;
  max-height: 100vh;
  max-width: 90vw;
  outline: none;
  overflow: hidden;
  text-align: initial;
  transition: all $n-modal-transition-duration ease;
  width: rem(528px);
}

// SM
@media (max-width: 700px) {
  .n-modal-confirm {
    max-width: 80vh;
  }
}

.n-modal-confirm {
  max-width: 20rem;
}

.n-modal-header {
  align-items: center;
  display: flex;
  height: $n-modal-header-height;
  padding: rem(0 24px);
  position: relative;
  padding-top: 0.5rem;
  z-index: 1;
  flex-flow: row nowrap;
  // align-items: center;
  flex: 1 0 auto;
  justify-content: space-between;
  &.no-title {
    .n-button-icon {
      position: absolute;
      top: 0;
      right: 0;
    }
    height: 0;
    padding: 0;
  }
}

.n-modal-header-text {
  align-items: center;
  display: flex;
  flex-grow: 1;
  font-weight: 400;
  font-size: 1.2rem;
  color: #292f2f;
  margin: 0;
  // align-self: flex-start;
}

.n-modal-close-button {
  margin-top: -0.25rem;
  margin-left: auto;
  margin-right: rem(-8px);
  // align-self: flex-start;
}

.n-modal-body {
  max-height: calc(100vh - #{$n-modal-header-height});
  overflow-y: auto;
  padding: rem(16px 24px);
}

.n-modal-footer {
  align-items: center;
  display: flex;
  height: $n-modal-footer-height;
  justify-content: flex-end;
  padding: 0.5rem 1rem;

  .n-button {
    margin-left: rem(8px);
    &:first-child {
      margin-left: 0;
    }
  }
}
.is-stacked {
  .n-modal-footer {
    flex-direction: column;
    .n-button {
      align-self: flex-end;
      margin-bottom: 0.3rem;
    }
  }
}

.n-modal-size-small {
  & > .n-modal-wrapper > .n-modal-container {
    width: rem-calc(320px);
  }
}
//
.n-modal-size-large {
  & > .n-modal-wrapper > .n-modal-container {
    width: rem-calc(848px);
  }
}

.n-modal-size-fullscreen {
  & > .n-modal-wrapper > .n-modal-container {
    border-radius: 0;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    .n-modal-body {
      padding-top: 1.5rem;
      height: calc(100vh - #{$n-modal-header-height});
    }
  }
}

.n-modal-size-auto {
  & > .n-modal-wrapper > .n-modal-container {
    width: initial;
  }
}

// Transitionz
.n-modal-transition-fade-enter,
.n-modal-transition-fade-leave-active {
  opacity: 0;
}

.modal-open {
  overflow: hidden;
}

.modal-open .navigation-main {
  padding-right: 51px !important;
}
</style>
