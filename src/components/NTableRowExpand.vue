  <template>
  <div
    :class="{ 'is-expanded': expandedRows.includes(id) }"
    class="n-table-row__expanded"
  >
    <div v-if="expandedRows.includes(id)">
      <div
        class="n-table-row__expanded-container"
        :style="{ 'padding-left': expandWidth + 'px' }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NTableRowExpand',

  props: {
    expandedRows: {
      type: Array,
      default: () => [],
    },

    id: {
      type: String,
      default: null,
    },
    expandWidth: {
      type: Number,
      default: 70,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/colors.scss";
.expand-enter-active,
.expand-leave-active {
  transition: height 300ms ease-in-out;
  overflow: hidden;
}
.n-table-row__expanded {
  flex-basis: 100%;
  cursor: unset;
  // &:hover {
  //   background: #fff;
  // }
  &-container {
    border-left: 2px solid $green-2;
  }
  &.is-expanded {
    padding-bottom: 5px;
  }
}
</style>
