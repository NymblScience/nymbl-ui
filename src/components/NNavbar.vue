<style lang="scss">
@import "@/assets/sass/animations.scss";
@import "@/assets/sass/colors.scss";

.n-navbar {
  box-shadow: 0 1px 2px rgba(57, 63, 72, 0.3);
  background: #ffffff;
  z-index: 2003;
  min-height: 4rem;
}

.container {
  margin-top: 0;
}

.n-navbar .n-nav-toggle,
.n-navbar .menu-close {
  display: none;
}

.n-navbar .n-nav-toggle {
  padding-left: 0;
  padding-right: 0;
}

.n-navbar .router-link-active {
  color: $dark-green !important;
}

@media only screen and (max-width: 70rem) {
  .navigation-help-icon {
    margin-left: 0.6rem;
  }
}

.menu-close {
  position: absolute;
  right: 1rem;
  top: 0.8rem;
}
</style>

<template>
  <div
    class="n-navbar w-full flex items-center"
    :class="{
      drawer,
      'n-transparent': transparent,
      fixed,
      'top-0': fixed,
      'right-0': fixed,
      'left-0': fixed,
      'px-0': fixed,
      'px-12': !fixed,
    }"
  >
    <div class="w-full flex mx-auto" :style="`max-width: ${containerWidth}`">
      <n-button-icon
        v-if="drawer"
        is-raised
        class="n-nav-toggle"
        @click="toggleSidebar()"
      >
        <menu-icon />
      </n-button-icon>

      <div tabindex="-1" class="navbar-brand flex item-center" href="#">
        <slot name="logo" />
      </div>

      <div>
        <h1><slot name="title"></slot></h1>
      </div>
      <!-- Hidden in drawer  -->
      <ul id="side-bar" :class="{ open: show }" class="ml-auto sidebar flex list-none">
        <n-button-icon
          is-raised
          variant="danger"
          class="menu-close"
          @click="hide()"
        >
          <close-icon />
        </n-button-icon>
        <slot name="nav-items-drawer" />
      </ul>

      <!-- Always shown  -->
      <ul class="flex list-none">
        <slot name="nav-items" />
      </ul>
      <div v-if="show" class="backdrop" @click="hide()" />
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';
// import Hammer from 'hammerjs';
import MenuIcon from '../assets/icons/Menu.vue';
import CloseIcon from '../assets/icons/Close.vue';
import classlist from '../helpers/classlist';

export default {
  name: 'NNavbar',
  components: {
    MenuIcon,
    CloseIcon,
  },

  directives: {
    ClickOutside,
  },
  props: {
    /**
     * Enable or disable responsive side drawer menu.
     */
    drawer: {
      type: Boolean,
      default: false,
    },
    /**
     * Set to `top` for fixed to the top of the viewport,
     * or `bottom` for fixed to the bottom of the viewport.
     */
    fixed: {
      type: String,
      default: null,
    },

    /**
     * Set inner container width
     */
    containerWidth: {
      type: String,
      default: '2000px',
    },
    /**
     * Set to `true` to make the navbar stick to the top of the viewport
     * (or parent container that has `position: relative` set) when scrolled.
     */
    sticky: {
      type: Boolean,
      default: false,
    },
    /**
     * Possible toggleable values are `sm`, `md`, `lg` and `xl`.
     * Setting toggleable to `true` (or an empty string)
     * will set the navbar to be always collapsed,
     * while setting it to `false` (the default) will disable collapsing (always expanded).
     */
    toggleable: {
      type: [Boolean, String],
      default: false,
    },
    /**
     * Set to `true` to make the navbar transparent
     */
    transparent: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      dropdownVisible: false,
      show: false,
    };
  },
  computed: {
    me() {
      return false;
    },
  },
  methods: {
    hide() {
      this.show = false;
      classlist.remove(document.body, 'n-navbar__open');
      classlist.remove(document.body, 'n-no-scrolling');
    },
    toggleSidebar() {
      this.show = true;
      classlist.add(document.body, 'n-no-scrolling');
      classlist.add(document.body, 'n-navbar__open');
    },
  },
};
</script>
