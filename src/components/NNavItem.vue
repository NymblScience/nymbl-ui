<template>
  <li class="n-nav-item nav-item flex  items-center" :tabindex="tabindex">
    <div
      v-if="!to"
      class="n-nav-item__content nav-link  cursor-pointer n-nav-link hover:text-green-200 transition-colors duration-300  w-full "
      target="_self"
      :tabindex="tabindex"
      @click="$emit('click')"
    >
      <slot />
    </div>
    <a
      v-else
      target="_self"
      class="nav-link cursor-pointer n-nav-link n-nav-item__content hover:text-green-200 transition-colors duration-300 w-full "
      tabindex="tabindex"
      :class="{ 'is-active': isActive(to) || active,  'hover:text-green-200 transition-colors duration-300': isActive(to) || active}"
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
