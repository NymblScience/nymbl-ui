<template>
  <form
    class="n-form"
    v-bind="$attrs"

    v-on="$listeners"
  >
    <slot />
    
    <div class="n-form__footer">
      <slot name="footer" />
    </div>
  </form>
</template>
<script>
export default {
  name: "NForm"
};
</script>
<style lang="scss">
.n-form {
  &__footer {
    .n-button {
      margin-right: 0.3rem;
    }
    .n-button::last-child{
      margin-right: 0;
    }
  }
}
</style>
