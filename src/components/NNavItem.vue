<template>
  <li class="n-nav-item nav-item" :tabindex="tabindex">
    <div
      v-if="!to"
      class="n-nav-item__content nav-link n-nav-link"
      target="_self"
      :tabindex="tabindex"
      @click="$emit('click')"
    >
      <slot />
    </div>
    <a
      v-else
      target="_self"
      href="#"
      class="nav-link n-nav-link"
      tabindex="tabindex"
      @click="$router.push(to)"
    >
      <slot />
    </a>
  </li>
</template>
<script>
export default {
  name: "NNavItem",

  props: {
    disabled: {
      default: false,
      type: Boolean
    },
    tabindex: {
      default: false,
      type: [Number, Boolean, String]
    },
    to: {
      default: false,
      type: [Boolean, String]
    }
  }
};
</script>
<style lang="scss">
.n-nav-item .n-nav-item__content {
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 1rem;
  padding-left: 1rem;
}
</style>
