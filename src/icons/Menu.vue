<template>
  <span
    
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
      <title>{{ title }}</title>
  <g
     transform="translate(-105.04276,-58.778128)"
     id="g12">
    <g
       transform="matrix(0.64661,0,0,0.64661,-74.249,-105.93)"
       id="g10"
       style="fill-rule:evenodd;stroke-width:0.67193002">
      <rect
         transform="matrix(-1,-0.0019925,0.0027971,1,0,0)"
         x="-311.42999"
         y="258.29001"
         width="34.570999"
         height="5.8891001"
         rx="3.053"
         id="rect4" />
      <rect
         transform="matrix(-1,-0.0019925,0.0027971,1,0,0)"
         x="-311.39999"
         y="268.64001"
         width="34.570999"
         height="5.8891001"
         rx="3.053"
         id="rect6" />
      <rect
         transform="matrix(-1,-0.0019925,0.0027971,1,0,0)"
         x="-311.37"
         y="279.29001"
         width="34.570999"
         height="5.8891001"
         rx="3.053"
         id="rect8" />
    </g>
  </g>
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
