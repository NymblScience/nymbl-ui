<template>
  <span
    :aria-hidden="decorative"
    :aria-label="title"
    class="material-design-icon star-icon"
    role="img"
    @click="$emit('click', $event)"
  >
    <svg
      :fill="fillColor"
      class="material-design-icon__svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
    >
    <!-- eslint-disable max-len -->
      <path
        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
      >
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'StarIcon',
  props: {
    title: {
      type: String,
      default: 'Star icon',
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
      default: 24,
    },
  },
};
</script>
