<template>
 <!-- eslint-disable max-len  -->

  <span

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
      <g
        id="g12"
        transform="matrix(1.2488021,0,0,1.2488021,-134.01129,-76.229999)"
      >
        >
        <g id="g10" transform="matrix(0.67321,0,0,0.67321,-108.44,-113.77)">
          <path
            id="path4"
            d="m 326.29,261.4 c 6.5931,6.581 13.216,13.134 19.79,19.733 1.1898,1.2726 1.2693,3.6619 -0.35503,4.6205 -1.4856,0.90229 -3.3959,0.15814 -4.4251,-1.0912 -6.4716,-6.46 -12.972,-12.892 -19.426,-19.37 -1.1898,-1.2726 -1.2693,-3.6619 0.35503,-4.6205 1.3052,-0.7982 3.045,-0.31454 4.0606,0.72816 z"
            inkscape:connector-curvature="0"
            style="fill-rule:evenodd;stroke-width:0.67115998"
          />
          <path
            id="path6"
            d="m 326.29,261.4 c 6.5931,6.581 13.216,13.134 19.79,19.733 1.1898,1.2726 1.2693,3.6619 -0.35503,4.6205 -1.4856,0.90229 -3.3959,0.15814 -4.4251,-1.0912 -6.4716,-6.46 -12.972,-12.892 -19.426,-19.37 -1.1898,-1.2726 -1.2693,-3.6619 0.35503,-4.6205 1.3052,-0.7982 3.045,-0.31454 4.0606,0.72816 z"
            inkscape:connector-curvature="0"
            style="fill-rule:evenodd;stroke-width:0.67115998"
          />
          <path
            id="path8"
            d="m 341.74,261.38 c -6.5931,6.581 -13.216,13.134 -19.79,19.733 -1.1898,1.2726 -1.2693,3.6619 0.35503,4.6205 1.4856,0.9023 3.3959,0.15813 4.4252,-1.0912 6.4716,-6.46 12.972,-12.892 19.426,-19.37 1.1898,-1.2726 1.2693,-3.6619 -0.35504,-4.6205 -1.3052,-0.79819 -3.045,-0.31454 -4.0606,0.72816 z"
            inkscape:connector-curvature="0"
            style="fill-rule:evenodd;stroke-width:0.67115998"
          />
        </g>
      </g>
    </svg>
  </span>
</template>

<script>
export default {
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
      default: 24,
    },
  },
};
</script>
