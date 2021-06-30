<template>
<!-- eslint-disable max-len  -->

  <span
    :aria-hidden="decorative"
    :aria-label="title"
    class="material-design-icon close-icon"
    role="img"
    @click="$emit('click', $event)"
  >
    <close :size="size" />
  </span>
</template>
<script>
import Close from './vue-material/Close.vue';

export default {
  components: {
    Close,
  },
  name: 'CloseIcon',
  props: {
    title: {
      type: String,
      default: 'Close',
    },
    decorative: {
      type: Boolean,
      default: false,
    },
    fillColor: {
      type: String,
      default: 'currentColor',
    },
    size: {
      type: Number,
      default: 28,
    },
  },
};
</script>
