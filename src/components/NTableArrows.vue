<template>
  <div class="n-table-arrows">
    <menu-up
      :class="{ 'n-active': activeArrow === 'ascending' && isActive }"
      style="margin-top: -0.18rem"
      @click="$emit('sort')"
    />
    <menu-down
      :class="{ 'n-active': activeArrow === 'descending' && isActive }"
      style="margin-top: -1rem"
      @click="$emit('sort')"
    />
  </div>
</template>
<script>
import MenuUp from "vue-material-design-icons/MenuUp.vue";

import MenuDown from "vue-material-design-icons/MenuDown.vue";
export default {
  name: "NTableArrows",
  components: {
    MenuUp,
    MenuDown
  },
  props: {
    activeArrow: {
      type: String,
      default: ""
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      const classes = [];
      return classes;
    }
  }
};
</script>
<style lang="scss" scoped>
.n-table-arrows {
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: color 0.1s ease;
  color: #595959;
}

.n-table-arrows .n-active {
  transition: color 0.1s ease;

  color: #09b3b0;
}
@import "@/assets/sass/animations.scss";
@import "@/assets/sass/colors.scss";
@import "@/assets/sass/config.scss";
</style>
