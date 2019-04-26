<template>
  <span
    :aria-hidden="decorative"
    :aria-label="title"
    class="material-design-icon menu-icon"
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
      <g transform="translate(-105.24 -61.446)">
        <g
          transform="matrix(.64661 0 0 .64661 -74.249 -105.93)"
          fill-rule="evenodd"
          stroke-width=".67193"
        >
          <rect
            transform="matrix(-1 -.0019925 .0027971 1 0 0)"
            x="-311.43"
            y="258.29"
            width="34.571"
            height="5.8891"
            rx="3.053"
          />
          <rect
            transform="matrix(-1 -.0019925 .0027971 1 0 0)"
            x="-311.4"
            y="268.64"
            width="34.571"
            height="5.8891"
            rx="3.053"
          />
          <rect
            transform="matrix(-1 -.0019925 .0027971 1 0 0)"
            x="-311.37"
            y="279.29"
            width="34.571"
            height="5.8891"
            rx="3.053"
          />
        </g>
      </g>
      <title>{{ title }}</title>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MenuIcon",
  props: {
    title: {
      type: String,
      default: "Menu"
    },
    decorative: {
      type: Boolean,
      default: false
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
</script>
