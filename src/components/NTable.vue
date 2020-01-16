<template>
  <div
    ref="n-table"
    class="n-table"
    :class="classes"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <div style="display:flex">
      <slot name="header"> </slot>
    </div>
    <n-table-header
      v-if="loaded && labels.length > 0"
      :labels="labels"
      :sort-order="sortOrder"
      :sorted-by="sortedBy"
      :is-expandable="isExpandable"
      :slots="$slots"
      @changeSort="changeSort"
    />

    <n-table-rows ref="rows">
      <div v-if="isEmpty" class="n-table-empty">
        <span v-if="!loading">{{ emptyText }}</span>
        <span v-else>
          Loading...
        </span>
      </div>

      <n-table-row v-if="isEmpty" v-show="false" :is-empty="isEmpty">
        <slot :row="{}"></slot>
      </n-table-row>

      <n-table-row
        v-for="(row, index) in orderedRows"
        v-else
        :key="'row-' + index"
        class="n-table-row"
        :class="getRowClass(row, index)"
        @click.native="$emit('row-click', row, index, $event)"
      >
        <!-- <n-table-column
          v-if="isExpandable"
          class="n-table-expand-toggle n-table-column-expand"
          :is-expandable="isExpandable"
          @click.native="toggleExpand(index)"
        >
          <ChevronRight
            :class="{ 'is-expanded': expandedRows.includes(index) }"
            class="n-table-expand-toggle-icon"
          />
        </n-table-column> -->

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
import stickybits from "stickybits";
// import NTableColumn from "./NTableColumn.vue";

import orderBy from "../helpers/orderBy";
// import ChevronRight from "vue-material-design-icons/ChevronRight.vue";
// import { TransitionExpand } from "vue-transition-expand";
// import "vue-transition-expand/dist/vue-transition-expand.css";

export default {
  name: "NTable",
  components: {
    NTableHeader,
    NTableRow,
    NTableRows

    // NTableColumn
    // TransitionExpand,
    // ChevronRight
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
    loading: {
      default: false,
      type: Boolean
    },
    isExpandable: {
      default: false,
      type: Boolean
    },
    stickyHeader: {
      default: false,
      type: Boolean
    },
    stickyHeaderOffset: {
      default: 0,
      type: Number
    },

    filter: {
      default: () => {
        return { props: [], value: "" };
      },
      type: Object
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
    },
    /**
     * Specify row class. e.g. getRowClass(row, index)
     */
    rowClass: {
      default: null,
      type: Function
    },
    /**
     * Disable sorting. Used whenever back-end does the sorting.
     */
    sortDisabled: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      loaded: false,
      sortedBy: "",
      sortOrder: "ascending",
      sortMethod: null,
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
      if (this.loaded && !this.isEmpty && this.$refs.rows) {
        return this.$refs.rows.$children;
      }
      return [];
    },
    labels() {
      const labels = [];
      if (this.isEmpty) {
        return labels;
      }

      if (this.children[0]) {
        this.children[0].$children.forEach(column => {
          if (column._props.isExpandable) {
            return;
          }

          let label = {
            label: column._props.label,
            sortable: column._props.sortable,
            prop: column._props.prop,
            align: column._props.align,
            labelAlign: column._props.align,
            maxWidth: column._props.maxWidth,
            minWidth: column._props.minWidth,
            customHeader: column._props.customHeader,
            sortMethod: column._props.sortMethod
          };
          labels.push(label);
        });
      }

      return labels;
    },
    orderedRows() {
      let data = this.data;

      let orderedData = data;

      if (this.sortedBy && !this.sortDisabled) {
        orderedData = orderBy(this.sortedBy, data, this.sortMethod);
      }

      if (this.filter.value) {
        let props =
          this.filter.props.length < 1
            ? Object.keys(orderedData[0])
            : this.filter.props;

        orderedData = orderedData.filter(data =>
          props.some(prop =>
            data[prop].toLowerCase().includes(this.filter.value.toLowerCase())
          )
        );
      }

      if (this.sortOrder === "descending" && !this.sortDisabled) {
        return orderedData.reverse();
      }

      return orderedData;
    },
    isEmpty() {
      return this.data.length < 1;
    }
  },
  watch: {
    orderedRows() {
      this.createStickyHeader(1500);
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
    if (this.stickyHeader) {
      this.createStickyHeader(1500);
    }
  },
  methods: {
    // and(row) {
    //   let expandedRows = this.expandedRows;

    //   if (expandedRows.includes(row)) {
    //     let filteredRows = expandedRows.filter(item => item !== row);
    //     this.expandedRows = filteredRows;
    //     return;
    //   }

    //   this.expandedRows.push(row);
    // },
    createStickyHeader(timeout = 100) {
      const that = this;
      // Fixed header for the table component
      setTimeout(function() {
        stickybits(".n-table-header", {
          stickyBitStickyOffset: that.stickyHeaderOffset,
          useStickyClasses: true
        });
      }, timeout);
    },
    changeSort(property, sortOrder = "ascending", sortMethod) {
      if (sortOrder === "toggle") {
        if (this.sortOrder === "ascending") {
          sortOrder = "descending";
        } else {
          sortOrder = "ascending";
        }
      }

      this.sortedBy = property;

      this.sortOrder = sortOrder;
      if (sortMethod) {
        this.sortMethod = sortMethod;
      } else {
        this.sortMethod = false;
      }
      this.$emit("sort", {
        sortedBy: this.sortedBy,
        sortOrder: this.sortOrder
      });
    },
    getRowClass(row, index) {
      if (this.rowClass) {
        return this.rowClass(row, index);
      }
      return "";
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
  font-size: 1rem;
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
    overflow: hidden;
    padding: 0 3px;
    font-size: 0.95rem;
    text-overflow: ellipsis;
  }
  &:hover {
    background: #e9fdfe;
  }
}
</style>
