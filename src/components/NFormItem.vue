<template>
  <div class="n-form__item">
    <div v-if="label" class="n-form__item-label">{{ label }}</div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'NFormItem',
  props: {
    label: {
      type: [String, Boolean],
      default: false,
    },
  },
};
</script>

<style lang="scss">
.n-form__item {
  padding-bottom: 0.7rem;
  &-label {
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.03rem;
    color: #292f2f;
  }
}
</style>
