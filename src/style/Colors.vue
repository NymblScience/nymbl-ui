<template>
  <div class="color-container">
    <div v-for="color in colors" :key="color" class="color">
      <div :style="{ background: color }" class="color-block"></div>
      <div class="color-code">{{ color }}</div>
    </div>
  </div>
</template>
<script>
import colors from "@/assets/sass/colors.scss";

export default {
  name: "Colors",
  computed: {
    colors() {
      return Object.values(colors);
    }
  }
};
</script>
<style lang="scss">
.color-container {
  max-width: 500px;
  margin: 50px auto;
}
.color {
  width: 24.6%;
  display: inline-block;
  text-align: center;
}
.color-block {
  background: red;
  // width: 200px;
  padding: 40px;
  width: 80px;
  height: 80px;
  height: 2rem;
  margin: 0 auto;

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
