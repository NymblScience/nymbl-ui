<template>
  <div class="n-table-arrows">
    <div       style="margin-top: -0.18rem"
>
    <menu-up
      :class="{ 'n-active': activeArrow === 'ascending' && isActive }"
    />
    </div>
    <div       style="margin-top: -1rem">
    <menu-down
      :class="{ 'n-active': activeArrow === 'descending' && isActive }"

    />
    </div>
  </div>
</template>
<script>
import MenuUp from 'vue-material-design-icons/MenuUp.vue';

import MenuDown from 'vue-material-design-icons/MenuDown.vue';

export default {
  name: 'NTableArrows',
  components: {
    MenuUp,
    MenuDown,
  },
  props: {
    activeArrow: {
      type: String,
      default: '',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      const classes = [];
      return classes;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/sass/animations.scss";
@import "@/assets/sass/colors.scss";
@import "@/assets/sass/config.scss";
.n-table-arrows {
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: color 0.1s ease;
  color: #595959;
}

.n-table-arrows .n-active {
  transition: color 0.1s ease;

  color: $green-2;
}
</style>
