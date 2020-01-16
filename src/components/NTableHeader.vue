<template>
  <div v-if="loaded" class="n-table-header">
    <!-- <div v-if="isExpandable" class="n-table-column-expand n-table-label" /> -->

    <div
      v-for="(label, index) in labels"
      :key="'label-' + index"
      class="n-table-label"
      :style="{
        'max-width': label.maxWidth + 'px',
        'min-width': label.minWidth + 'px'
      }"
      :class="{
        'text-center': label.labelAlign.toLowerCase() === 'center',
        'text-right': label.labelAlign.toLowerCase() === 'right',
        'text-left': label.labelAlign.toLowerCase() === 'left'
      }"
    >
      <span v-if="label.customHeader.length > 0">
        <customHeader :custom-header="slots[label.customHeader]"></customHeader>
      </span>

      <span v-else-if="label.sortable" class="n-table-label-sortable">
        <span
          @click="$emit('changeSort', label.prop, 'toggle', label.sortMethod)"
          >{{ label.label }}</span
        >
        <n-table-arrows
          :active-arrow="sortOrder"
          :is-active="sortedBy === label.prop"
          @sortAscending="$emit('changeSort', label.prop, 'ascending')"
          @sortDescending="$emit('changeSort', label.prop, 'descending')"
        ></n-table-arrows>
      </span>

      <span v-else class="n-table-label-container">
        {{ label.label }}
      </span>
    </div>
  </div>
</template>
<script>
const CustomHeader = {
  props: ["customHeader"],
  render: function(createElement) {
    return createElement("div", this.customHeader);
  }
};

import NTableArrows from "./NTableArrows.vue";
export default {
  name: "NTableHeader",
  components: {
    NTableArrows,
    CustomHeader
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
    },
    labelAlign: {
      type: String,
      default: "left"
    },
    slots: {
      type: [Array, Object],
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      loaded: false
    };
  },
  computed: {
    classes() {
      const classes = [];
      return classes;
    }
  },
  mounted() {
    this.loaded = true;
  }
};
</script>

<style lang="scss">
.n-table-header {
  padding: 0;
  margin: 0;
  list-style: none;
  border-bottom: 1px solid #ebeef5;
  background: #fff;
  display: flex;
  .n-table-label {
    flex-grow: 1;
    flex-basis: 0;
    font-size: 0.85rem;
    text-transform: uppercase;
    font-weight: 500;
    padding: 18px 0 8px 0;
    color: #595959;
    user-select: none;
    text-align: center;
    flex-flow: row nowrap;
    display: flex;
    align-items: center;

    .n-table-label-sortable {
      cursor: pointer;
    }
    &.text-center {
      justify-content: center;
    }
  }
  .n-table-label-sortable {
    flex-flow: row nowrap;
    display: flex;
    align-items: center;
    flex: 1 0 auto;
  }

  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-left {
    text-align: left;
  }
}
</style>
