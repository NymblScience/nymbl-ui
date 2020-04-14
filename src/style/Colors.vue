<template>
  <div class="color-container">
    <div
      v-for="(color, key) in colors"
      :key="color"
      class="color"
      @click="handleColorClick(color)"
    >
      <div :style="{ background: color }" class="color-block">
        <span>Copy!</span>
      </div>
      <div class="color-code">
        {{ color }} <br />
        <div style="color: #999">${{ key }}</div>
        <!--<br />
        <n-button size="sm">Copy</n-button> -->
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
      return colors;
    }
  },
  methods: {
    handleColorClick(color) {
      this.$nMessage(`${color} copied.`);
    }
  }
};
</script>
<style lang="scss">
$color-block-size: 120px;
.color-container {
  max-width: 500px;
}
.color {
  width: 24.6%;
  display: inline-block;
  text-align: center;
  cursor: pointer;
}
.color-block {
  background: red;
  // width: 200px;
  padding: 40px;
  width: $color-block-size;
  height: $color-block-size;
  display: flex;
  align-items: center;
  margin: 20px 20px;

  // margin-right: 20px;
  // margin-bottom: 10px;
  // margin-top: 20px;

  // display: inline-block;
}
.color-code {
  margin-top: 8px;
  margin-bottom: 15px;
  font-size: 1rem;
  // cursor: pointer;
}
</style>
