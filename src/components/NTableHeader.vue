<template>
  <div class="n-table-header">
    <div v-if="isExpandable" class="n-table-column-expand n-table-label" />
    <div
      v-for="(label, index) in labels"
      :key="'label-' + index"
      class="n-table-label"
    >
      <div
        v-if="label.sortable"
        class="n-table-label-sortable"
        :class="{
          'label-centered': label.align === 'center',
          'label-right': label.align === 'right'
        }"
      >
        <span @click="$emit('changeSort', label.prop, 'toggle')">
          {{ label.label }}</span
        >
        <n-table-arrows
          :active-arrow="sortOrder"
          :is-active="sortedBy === label.prop"
          @sortAscending="$emit('changeSort', label.prop, 'ascending')"
          @sortDescending="$emit('changeSort', label.prop, 'descending')"
        >
        </n-table-arrows>
      </div>
      <span v-else>
        {{ label.label }}
      </span>
    </div>
  </div>
</template>
<script>
import NTableArrows from "./NTableArrows.vue";
export default {
  name: "NTableHeader",
  components: {
    NTableArrows
  },
  props: {
    labels: {
      type: Array,
      default: () => {
        return [];
      }
    },
    isExpandable: {
      type: Boolean,
      default: false
    },
    sortOrder: {
      type: String,
      default: "ascending"
    },
    sortedBy: {
      type: String,
      default: ""
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

<style lang="scss">
.n-table-header {
  padding: 0;
  margin: 0;
  list-style: none;
  border-bottom: 1px solid #ebeef5;

  display: flex;
  .n-table-label {
    flex-grow: 1;
    flex-basis: 0;
    text-transform: uppercase;
    font-weight: 500;
    color: #292f2f;
    user-select: none;
    text-align: center;
    .n-table-label-sortable {
      cursor: pointer;
    }
  }
  .n-table-label-sortable {
    flex-flow: row nowrap;
    display: flex;
    align-items: center;
    flex: 1 0 auto;
  }
  .label-centered {
    align-items: center;
    justify-content: center;
  }
  .label-right {
    align-items: flex-end;
    justify-content: flex-end;
  }
}
</style>
