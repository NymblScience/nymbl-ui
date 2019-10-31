<template>
  <div
    ref="n-table"
    class="n-table"
    :class="classes"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <n-table-header
      v-if="loaded && labels.length > 0"
      :labels="labels"
      :sort-order="sortOrder"
      :sorted-by="sortedBy"
      :is-expandable="isExpandable"
      @changeSort="changeSort"
    />

    <n-table-rows ref="rows">
      <div v-if="isEmpty" class="n-table-empty">{{ emptyText }}</div>

      <n-table-row
        v-for="(row, index) in orderedRows"
        v-else
        :key="'row-' + index"
        class="n-table-row"
        @click.native="$emit('row-click', row, index, $event)"
      >
        <n-table-column
          v-if="isExpandable"
          class="n-table-expand-toggle n-table-column-expand"
          :is-expandable="isExpandable"
          @click.native="toggleExpand(index)"
        >
          <ChevronRight
            :class="{ 'is-expanded': expandedRows.includes(index) }"
            class="n-table-expand-toggle-icon"
          />
        </n-table-column>

        <slot :row="row" />
        <!-- <transition-expand> -->
        <div
          v-if="isExpandable && expandedRows.includes(index)"
          class="n-table-row-expanded box"
        >
          <slot name="expanded" :row="row"> </slot>
        </div>
        <!-- </transition-expand> -->
      </n-table-row>
    </n-table-rows>
  </div>
</template>
<script>
import NTableHeader from "./NTableHeader.vue";
import NTableRows from "./NTableRows.vue";
import NTableRow from "./NTableRow.vue";
import NTableColumn from "./NTableColumn.vue";

import orderBy from "../helpers/orderBy";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";
// import { TransitionExpand } from "vue-transition-expand";
// import "vue-transition-expand/dist/vue-transition-expand.css";

export default {
  name: "NTable",
  components: {
    NTableHeader,
    NTableRow,
    NTableRows,
    NTableColumn,
    // TransitionExpand,
    ChevronRight
  },
  props: {
    /**
     * Table data
     */
    data: {
      default: function() {
        return [];
      },
      type: Array
    },

    isExpandable: {
      default: false,
      type: Boolean
    },
    /**
     * Sort by property, optionally specifify the order
     */
    sortBy: {
      default: () => {
        return { prop: "", order: "ascending" };
      },
      type: Object
    },
    align: {
      default: "left",
      type: String
    },
    labelAlign: {
      default: "left",
      type: String
    },
    /**
     * Specify empty text
     */
    emptyText: {
      default: "Empty",
      type: String
    }
  },
  data() {
    return {
      loaded: false,
      sortedBy: "",
      sortOrder: "ascending",
      expandedRows: []
    };
  },
  computed: {
    classes() {
      const classes = [];
      return classes;
    },

    children() {
      // #TODO Add protection that just column elements are valid children.
      if (this.loaded) {
        let columns = this.$refs.rows.$children[0];
        return columns;
      }
      return [];
    },
    labels() {
      const labels = [];
      if (this.isEmpty) {
        return labels;
      }
      this.children.$children.forEach(column => {
        if (column._props.isExpandable) {
          return;
        }

        let label = {
          label: column._props.label,
          sortable: column._props.sortable,
          prop: column._props.prop,
          align: column._props.align,
          labelAlign: column._props.align
        };
        labels.push(label);
      });

      return labels;
    },
    orderedRows() {
      let data = this.data;

      let orderedData = data;

      if (this.sortedBy) {
        orderedData = orderBy(this.sortedBy, data);
      }

      if (this.sortOrder === "descending") {
        return orderedData.reverse();
      }

      return orderedData;
    },
    isEmpty() {
      if (this.data.length < 1) {
        return true;
      }
      return false;
    }
  },
  created() {
    if (this.sortBy.order) {
      this.sortOrder = this.sortBy.order;
    }

    if (this.sortBy.prop) {
      this.sortedBy = this.sortBy.prop;
    }
  },
  mounted() {
    this.loaded = true;

    // this.orderedRows = this.data;

    // if (this.sortBy.prop) {
    //   this.changeSort(this.sortBy.prop, this.sortOrder);
    // }
  },
  methods: {
    toggleExpand(row) {
      let expandedRows = this.expandedRows;

      if (expandedRows.includes(row)) {
        let filteredRows = expandedRows.filter(item => item !== row);
        this.expandedRows = filteredRows;
        return;
      }

      this.expandedRows.push(row);
    },
    changeSort(property, sortOrder = "ascending") {
      if (sortOrder === "toggle") {
        if (this.sortOrder === "ascending") {
          sortOrder = "descending";
        } else {
          sortOrder = "ascending";
        }
      }

      this.sortedBy = property;

      this.sortOrder = sortOrder;
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/sass/animations.scss";
@import "@/assets/sass/colors.scss";
@import "@/assets/sass/config.scss";

.active {
  color: green;
}

.n-table-empty {
  text-align: center;
  width: 100%;
  padding: 2rem 0;
  font-size: 1.3rem;
}

.n-table-column-expand {
  max-width: 2rem;
}

.n-table-expand-toggle {
  cursor: pointer;
}
.n-table-expand-toggle-icon {
  // transform: rotate(1deg);
  transition: transform 2s ease-in-out, -webkit-transform 2s ease-in-out;
}

.n-table-expand-toggle-icon.is-expanded {
  transform: rotate(90deg);
}

.n-table-row {
  padding: 10px 0;
  border-bottom: 1px solid #ebeef5;
  display: flex;
  flex-wrap: wrap;
  transition: background-color 0.25s ease;
  .n-table-row-expanded {
    flex-basis: 100%;
    // display: none;
    margin-left: 2rem;
    padding-top: 1rem;
    &:hover {
      background: #fff;
    }
  }
  .is-expanded {
    display: block;
  }
  .n-table-column {
    flex-grow: 1;
    flex-basis: 0;
  }
  &:hover {
    background: #e9fdfe;
  }
}
</style>
