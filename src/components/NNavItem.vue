<template>
  <li class="n-nav-item nav-item flex  items-center" :tabindex="tabindex">
    <div
      v-if="!to && !href"
      class="n-nav-item__content nav-link  cursor-pointer n-nav-link hover:text-green-200 transition-colors duration-300  w-full "
      target="_self"
      :class="{  'hover:text-green-200 transition-colors duration-300 is-active': isActive(to)}"
      :tabindex="tabindex"
      @click="$emit('click')"
    >
      <slot />
    </div>
    <a
      v-else-if="to"
      target="_self"
      class="nav-link cursor-pointer n-nav-link n-nav-item__content hover:text-green-200 transition-colors duration-300 w-full "
      tabindex="tabindex"
      :class="{  'hover:text-green-200 transition-colors duration-300 is-active': isActive(to)}"
      @click="$router.push(to)"
    >
      <slot />
    </a>
    <a
      v-else-if="href"
      target="_self"
      class="nav-link cursor-pointer n-nav-link n-nav-item__content hover:text-green-200 transition-colors duration-300 w-full "
      tabindex="tabindex"
      :class="{  'hover:text-green-200 transition-colors duration-300 is-active': isActive(to)}"
      :href="href"
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
    href: {
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
      if (this.active) {
        return true;
      }
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

.n-nav-item .nav-link {
  cursor: pointer;
  &.is-active {
    font-weight: 500;
    color: $green-3;
  }
}
.n-nav-item .n-nav-item__content {

  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 1rem;
  padding-left: 1rem;
}
</style>
