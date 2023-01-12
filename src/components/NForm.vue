<template>
  <form
    class="n-form"
    v-bind="$attrs"
  >
    <slot />
    <div class="n-form__footer">
      <slot name="footer" />
    </div>
  </form>
</template>
<script>
export default {
  name: 'NForm',
};
</script>
<style lang="scss">
.n-form {
  &__footer {
    text-align: right;
    .n-button {
      margin-right: 0.5rem;
    }
    .n-button:last-child {
      margin-right: 0;
    }
  }
}
</style>
