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
  },
  // data() {
  //   return {
  //     colors: [
  //       "#0C6A69",
  //       "#09B3B0",
  //       "#83EAE7",
  //       "#CCFEFF",
  //       "#244F6F",
  //       "#4B88B5",
  //       "#94BFDF",
  //       "#C2E2F9",
  //       "#5E3D2A",
  //       "#8E6853",
  //       "#A79184",
  //       "#D9C5BA",
  //       "#292F2F",
  //       "#595959",
  //       "#A2A2A2",
  //       "#BCBCBC",
  //       "#BB5F15",
  //       "#E2771F",
  //       "#EDAB6F",
  //       "#F8D8B9",
  //       "#751316",
  //       "#AC1A1F",
  //       "#D47F80",
  //       "#F5D0D0"
  //     ]
  //   };
  // },
  created() {
    console.log("variables :", colors);
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
