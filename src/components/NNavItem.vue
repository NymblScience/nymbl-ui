<template>
  <li class="n-nav-item nav-item flex  items-center" :tabindex="tabindex">
    <div
      v-if="!to"
      class="n-nav-item__content nav-link n-nav-link hover:text-green-200 transition-colors duration-300"
      target="_self"
      :tabindex="tabindex"
      @click="$emit('click')"
    >
      <slot />
    </div>
    <a
      v-else
      target="_self"
      class="nav-link n-nav-link n-nav-item__content hover:text-green-200 transition-colors duration-300"
      tabindex="tabindex"
      :class="{ 'text-green': isActive(to), 'font-bold': isActive(to), 'hover:text-green-200 transition-colors duration-300': isActive(to)}"
      @click="$router.push(to)"
    >
      <slot />
    </a>
  </li>
</template>
<script>
export default {
  name: 'NNavItem',

  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
    tabindex: {
      default: false,
      type: [Number, Boolean, String],
    },
    to: {
      default: false,
      type: [Boolean, String],
    },
    active: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    isActive(to) {
      // If no vue router is defined.
      if (!this.$route) {
        return false;
      }
      return this.$route.matched.filter((path) => path.path === to).length > 0;
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/sass/colors.scss";
.n-nav-item .n-nav-item-active {
  color: $green-2 !important;
  font-weight: 500;
}
.n-nav-item .nav-link {
  cursor: pointer;
}
.n-nav-item .n-nav-item__content {
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 1rem;
  padding-left: 1rem;
}
</style>
