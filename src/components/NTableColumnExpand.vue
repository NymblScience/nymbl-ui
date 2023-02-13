<template>
  <n-table-column
    class="n-table-column__expand"
    :style="{ 'max-width': expandWidth + 'px' }"
  >
    <n-button-icon
      class="n-table-column__expand-icon"
      type="secondary"
      :class="{ 'is-expanded': expandedRows.includes(id) }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        @click="handleExpand"
      >
        <path d="M8.578 16.36l4.594-4.595L8.578 7.17l1.406-1.405 6 6-6 6z" />
      </svg>
    </n-button-icon>
  </n-table-column>
</template>

<script>
import NTableColumn from './NTableColumn.vue';
import NButtonIcon from './NButtonIcon.vue';

export default {
  name: 'NTableColumnExpand',
  components: {
    NButtonIcon,
    NTableColumn,
  },
  props: {
    expandedRows: {
      type: Array,
      default: () => [],
    },
    expandWidth: {
      type: Number,
      default: 70,
    },
    id: {
      type: String,
      default: null,
    },
  },
  emits: ['expand'],
  methods: {
    handleExpand() {
       this.$emit('expand');
    },
  },
};
</script>

<style lang="scss" scoped>
.n-table-column__expand-icon {
  transition: transform 300ms ease-in-out;
  &.is-expanded {
    transform: rotateZ(90deg);
  }
}
</style>
