<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon menu-up-icon"
        role="img"

        v-on="listeners">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="M7,15L12,10L17,15H7Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'MenuUpIcon',
  props: {
    title: {
      type: String,
      default: 'Menu Up icon',
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
