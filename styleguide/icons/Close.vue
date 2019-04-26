<template>
  <span
    :aria-hidden="decorative"
    :aria-label="title"
    class="material-design-icon close-icon"
    role="img"
    @click="$emit('click', $event)"
  >
    <svg
      class="material-design-icon__svg"
      :fill="fillColor"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
    >
      <title>{{ title }}</title>
      <g transform="translate(-105.24 -61.446)">
        <g transform="matrix(.67321 0 0 .67321 -108.44 -113.77)">
          <path
            d="m326.29 261.4c6.5931 6.581 13.216 13.134 19.79 19.733 1.1898 1.2726 1.2693 3.6619-0.35503 4.6205-1.4856 0.90229-3.3959 0.15814-4.4251-1.0912-6.4716-6.46-12.972-12.892-19.426-19.37-1.1898-1.2726-1.2693-3.6619 0.35503-4.6205 1.3052-0.7982 3.045-0.31454 4.0606 0.72816z"
            fill-rule="evenodd"
            stroke-width=".67116"
          />
          <path
            d="m326.29 261.4c6.5931 6.581 13.216 13.134 19.79 19.733 1.1898 1.2726 1.2693 3.6619-0.35503 4.6205-1.4856 0.90229-3.3959 0.15814-4.4251-1.0912-6.4716-6.46-12.972-12.892-19.426-19.37-1.1898-1.2726-1.2693-3.6619 0.35503-4.6205 1.3052-0.7982 3.045-0.31454 4.0606 0.72816z"
            fill-rule="evenodd"
            stroke-width=".67116"
          />
          <path
            d="m341.74 261.38c-6.5931 6.581-13.216 13.134-19.79 19.733-1.1898 1.2726-1.2693 3.6619 0.35503 4.6205 1.4856 0.9023 3.3959 0.15813 4.4252-1.0912 6.4716-6.46 12.972-12.892 19.426-19.37 1.1898-1.2726 1.2693-3.6619-0.35504-4.6205-1.3052-0.79819-3.045-0.31454-4.0606 0.72816z"
            fill-rule="evenodd"
            stroke-width=".67116"
          />
        </g>
      </g>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CloseIcon",
  props: {
    title: {
      type: String,
      default: "Close"
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
