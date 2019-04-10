<style lang="scss" >
@import "@/assets/sass/animations.scss";
@import "@/assets/sass/colors.scss";

@import "node_modules/bootstrap/scss/_functions.scss";
@import "node_modules/bootstrap/scss/_variables.scss";
@import "node_modules/bootstrap/scss/_mixins.scss";

.navbar {
  box-shadow: 0 1px 2px rgba(57, 63, 72, 0.3);
  background: #ffffff;
  z-index: 2006;
  min-height: 4rem;
}

.navbar .menu-toggle, .navbar .menu-close {
  display: none;
}

.menu-close {
  position: absolute;
  right: 1rem;
  top: 0.8rem;
}
// @include media-breakpoint-up(xs) {
//   html {
//     background: red!important }
// }

.no-scrolling {
    overflow: hidden;
    padding-right: 17px;
}

@media only screen and (max-width: 70rem) {
  .navbar .menu-toggle, .navbar .menu-close {
    display: block;
    animation: fadeIn 400ms;
  }

  .navbar-brand {
    width: 100%;
    text-align: center;
  }

  .navbar .sidebar {
    width: 14rem;
    height: 100%;
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 3010;
    left: -14rem;
    transition: 400ms left;
    transition-timing-function: ease-in-out;
    z-index: 2061;
    display: block;
    padding: 4rem 0;
    .nav-item:hover {
      background:rgba(32,33,36,0.039)
    }
    .nav-item:active {
      background: rgba(32,33,36,0.045)
    }
    .nav-link:focus {
      box-shadow: none;
      outline:none;
      background: #f1f1f1;
      background:rgba(32,33,36,0.039)
    }
    .nav-link {
      padding-left: 1.8rem;
    }
  }

  .sidebar.open {
    left: 0;
  }

  .backdrop {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 2060;
    animation: fadeIn 400ms;
  }
}
</style>

<template>
  <b-navbar
    :fixed="fixed"
    :sticky="sticky"
    :toggleable="toggleable"
  >
    <Button
      round
      type="icon"
      variant="transparent"
      class="menu-toggle"
      @click.native="toggleSidebar()"
    >
      <menu-icon />
    </Button>

    <b-navbar-brand
      class="navbar-brand"
      href="#"
    >
      <slot name="logo" />
    </b-navbar-brand>

    <!-- Hidden in drawer  -->
    <b-navbar-nav
      id="side-bar"
      right
      :class="{ open: show }"
      class="ml-auto sidebar"
    >
      <Button
        round
        type="icon"
        variant="transparent"
        class="menu-close"
        @click.native="hide()"
      >
        <close-icon />
      </Button>
      <slot name="nav-items-drawer" />
    </b-navbar-nav>

    <!-- Always shown  -->
    <b-navbar-nav
      right
    >
      <slot name="nav-items" />
    </b-navbar-nav>
    <div
      v-if="show"
      class="backdrop"
      @click="hide()"
    />
  </b-navbar>
</template>

<script>
import BNavbar from 'bootstrap-vue/es/components/navbar/navbar';
import BNavbarBrand from 'bootstrap-vue/es/components/navbar/navbar-brand';
import BNavbarNav from 'bootstrap-vue/es/components/navbar/navbar-nav';
import ClickOutside from 'vue-click-outside';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import CloseIcon from 'vue-material-design-icons/Close.vue';
import Hammer from 'hammerjs';

export default {
  name: 'Navbar',
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarNav,
    MenuIcon,
    CloseIcon,
  },

  directives: {
    ClickOutside,
  },
  props: {
    /**
     * Set to `top` for fixed to the top of the viewport,
     * or `bottom` for fixed to the bottom of the viewport.
     */
    fixed: {
      type: String,
      default: null,
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
  created() {
    const that = this;

    setTimeout(() => {
      const element = document.getElementById('side-bar');
      const hammer = new Hammer.Manager(element);
      const swipe = new Hammer.Swipe();

      hammer.add(swipe);

      hammer.on('swipeleft', () => {
        that.hide();
      });
    }, 1000);
  },
  methods: {
    hide() {
      this.show = false;
      document.documentElement.classList.remove('no-scrolling');
    },
    toggleSidebar() {
      this.show = true;
      document.documentElement.classList.add('no-scrolling');
    },
  },
};
</script>
