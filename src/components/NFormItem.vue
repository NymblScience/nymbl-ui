<template>
<div class="n-form__item">

</div>
</template>

<script>
export default {
  name: "NFormItem",
  props: {
    label: {
      type: [String, Boolean],
      default: false
    },

  },
};
</script>

<style lang="scss">
.n-form__item {
  padding: 1rem 0;
}
</style>
