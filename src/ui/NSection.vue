<template>
  <section>
    <h3 class="my-6 text-xl">{{ title }}</h3>
     <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
