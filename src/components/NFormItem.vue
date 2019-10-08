<template>
  <div class="n-form__item">
    <slot />
  </div>
</template>

<script>
export default {
  name: "NFormItem",
  props: {
    label: {
      type: [String, Boolean],
      default: false
    }
  }
};
</script>

<style lang="scss">
.n-form__item {
  padding-bottom: 0.7rem;
}
</style>
