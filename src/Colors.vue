<template>
    <div class="my-10 w-100 Colors">
    <a id="colors"  class="anchor "></a>
      <h3 class="text-4xl my-10">Colors</h3>

    <div class="flex" v-for="color in colors" :key="colors[color]">
      <div
        class="mb-3 text-center text-sm uppercase "
        v-for="shade in getColors(color)"
        :key="shade"
        @click="handleColorClick(shade)"
      >
        <div
          class="mb-1 mr-1 cursor-pointer hover:shadow-lg"
          style="width: 6rem; height: 6rem"
          :style="`background: ${shade}`"
        ></div>
        {{ shade }}
      </div>
    </div>

    </div>

</template>
<script>
import tailwind from '../tailwind';

export default {
  name: 'Colors',
  computed: {
    colors() {
      return tailwind.theme.extend.colors;
    },
  },
  methods: {
    getColors(color) {
      const colors = [];
      Object.keys(color).forEach((key) => colors.push(color[key]));
      return colors.filter((shade) => shade.charAt(0) === '#').filter((shade) => shade !== '#d9d9d9');
    },

    handleColorClick(color) {
      this.$copyText(color).then(() => {
        this.$nMessage({
          message: `${color} copied to clipboard.`,
          type: 'success',
          duration: 3000,
        });
      }).catch(() => {
        this.$nMessage({
          message: 'Error copying to clipboard',
          type: 'success',
          duration: 3000,
        });
      });
    },
  },
};
</script>
