<style lang="scss" >
@import "@/assets/sass/animations.scss";
@import "@/assets/sass/colors.scss";

@import "node_modules/bootstrap/scss/_functions.scss";
@import "node_modules/bootstrap/scss/_variables.scss";
@import "node_modules/bootstrap/scss/_mixins.scss";


.navbar {
  box-shadow: 0 1px 2px rgba(57, 63, 72, 0.3);
  background: #ffffff;
}

.menu-toggle {
  display: none;
  transition: 100ms all;
  &:hover {
    border-radius: 9999px;
    background: #f1f1f1;
  }
  &:active {
    border-radius: 9999px;
    background: #f1f1f1;
  }
  padding: 10px;
}

.menu-close {
  position: absolute;
  right: 5px;
  top: 3px;
}

// @include media-breakpoint-up(xs) {
//   html {
//     background: red!important }
// }


@media only screen and (max-width: 800px) {
  .menu-toggle {
    display: block;
    animation: fadeIn 400ms;
  }
  .sidebar {
    width: 200px;
    height: 100%;
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 3010;
    right: -300px;
    transition: 400ms right;
    transition-timing-function: ease-in-out;
    padding: 20px 20px;
    z-index: 2061;
  }
  .sidebar.open {
    right: 0;
    padding-top: 50px;
  }
  .sidebar {
    .dropdown .dropdown-menu {
      transform: scale(1);
      box-shadow: none;
      padding: 0;
      margin: 0;
      border: 0;
    }
    .dropdown .dropdown-toggle {
      &:after {
        display: none;
      }
      &:hover {
        color: #bebebe;
      }
      font-size: 0.7rem;
      cursor: auto;
      color: #bebebe;
      margin-top: 1.1rem;
      padding: 0.03rem 0 !important;
      text-transform: uppercase;
      letter-spacing: 0.01rem;
    }
    .dropdown .dropdown-item {
      padding: 0.5rem 0;
      margin: 0;
    }
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
    <b-navbar-brand href="#">
      <slot name="logo" />
    </b-navbar-brand>

    <div
      class="menu-toggle"
      @click="toggleSidebar()"
    >
      <menu-icon />
    </div>
    <b-navbar-nav
      id="side-bar"
      right
      :class="{ open: show }"
      class="ml-auto sidebar"
    >
      <div
        class="menu-toggle menu-close"
        @click="hide()"
      >
        <close-icon :size="22" />
      </div>
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

      hammer.on('swiperight', () => {
        that.hide();
      });
    }, 100);
  },
  methods: {
    hide() {
      this.show = false;
      document.body.style.overflow = 'auto';
    },
    toggleSidebar() {
      this.show = true;
      document.body.style.overflow = 'hidden';
    },
  },
};
</script>
