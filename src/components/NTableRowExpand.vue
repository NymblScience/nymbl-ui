<template>
  <div
    :class="{ 'is-expanded': expandedRows.includes(id) }"
    class="n-table-row__expanded"
    :style="{ 'margin-left': expandWidth + 'px' }"
  >
    <transition-expand>
      <div v-if="expandedRows.includes(id)">
        <slot />
      </div>
    </transition-expand>
  </div>
</template>

<script>
import TransitionExpand from "../transitions/TransitionExpand";

export default {
  name: "NTableRowExpand",
  components: {
    TransitionExpand
  },
  props: {
    expandedRows: {
      type: Array,
      default: () => []
    },

    id: {
      type: String,
      default: null
    },
    expandWidth: {
      type: Number,
      default: 70
    }
  }
};
</script>

<style lang="scss" scoped>
.expand-enter-active,
.expand-leave-active {
  transition: height 300ms ease-in-out;
  overflow: hidden;
}
.n-table-row__expanded {
  flex-basis: 100%;

  &:hover {
    background: #fff;
  }
}
</style>
