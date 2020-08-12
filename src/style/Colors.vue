<template>
  <div class="colors-container">
    <div v-for="colorGroup in colors" :key="colorGroup" class="color-group">
      <div
        v-for="color in colorGroup"
        :key="color[1]"
        @click="handleColorClick(color[1])"
      >
        <div :style="{ background: color[1] }" class="color-block">
          <div>Copy!</div>
        </div>
        <div class="color-code">
          {{ color[1] }}
          <br />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import colors from "@/assets/sass/colors.scss";

export default {
  name: "Colors",
  computed: {
    colors() {
      let colorsArray = [];
      let colorsIndex = 0;
      Object.keys(colors).forEach((color, index) => {
        if (index === 0) {
          colorsArray[colorsIndex] = [];
        }

        if (index % 4 === 0 && index !== 0) {
          colorsIndex++;
          colorsArray[colorsIndex] = [];
        }
        colorsArray[colorsIndex].push([color, colors[color].toUpperCase()]);
      });
      return colorsArray;
    }
  },
  methods: {
    handleColorClick(color) {
      this.$nMessage({
        message: `${color} copied to clipboard.`,
        type: "success",
        duration: 3000
      });
    }
  }
};
</script>
<style lang="scss">
$color-block-size: 100px;
.colors-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.color-group {
  text-align: center;
  width: 46%;
  display: flex;
  background: #fff;
  border-radius: 2px;
  padding: 5px 3px 2px 5px;
  cursor: pointer;
  margin-bottom: 30px;
  justify-content: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.048);

  // &:nth-child(odd) {
  //   margin-right: 35px;
  // }
}

.color-block {
  cursor: pointer;
  width: $color-block-size;
  height: $color-block-size;
  display: flex;
  align-items: center;

  transition: all 300ms;
  justify-content: center;
  div {
    opacity: 0;
    transition: all 300ms;
    background: #fff;
    padding: 3px 8px;
    border-radius: 2px;
    font-size: 0.9rem;
  }
  &:hover {
    filter: brightness(90%);
    div {
      opacity: 1;
    }
  }
}
.color-code {
  margin-top: 8px;
  color: #595959;
  font-size: 1rem;
  // cursor: pointer;
}
</style>
