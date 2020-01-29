<template>
  <div
    ref="n-table"
    class="n-table"
    :class="classes"
    v-bind="$attrs"
    :style="isEmpty ? null : { 'padding-bottom': rowPadding + 'px' }"
    v-on="$listeners"
  >
    <n-table-header
      v-if="loaded && labels.length > 0"
      :labels="labels"
      :sort-order="sortOrder"
      :sorted-by="sortedBy"
      :is-expandable="isExpandable"
      :slots="$slots"
      @changeSort="changeSort"
    >
      <template v-slot:default="columnWidths">
        <slot :columnWidths="columnWidths.columnWidths" name="header"> </slot>
      </template>
    </n-table-header>

    <n-table-rows ref="rows">
      <div v-if="isEmpty" class="n-table-empty">
        <span v-if="!loading && !isFiltered && filter.value.length === 0">{{
          emptyText
        }}</span>
        <span v-else-if="!loading">{{ notFoundText }}</span>
        <span v-else>
          Loading...
        </span>
      </div>

      <n-table-row v-if="isEmpty" v-show="false" :is-empty="isEmpty">
        <slot :row="{}"></slot>
      </n-table-row>

      <n-table-row
        v-for="(row, index) in rows"
        :key="'row-' + index"
        class="n-table-row"
        :class="getRowClass(row, index)"
        @click.native="$emit('row-click', row, index, $event)"
        @mounted="rowLoadedTrue(index + 1)"
      >
        <slot :row="row" />
      </n-table-row>

      <!-- <RecycleScroller
        v-slot="{ item, index }"
        class="scroller"
        :items="rows"
        :item-size="64"
        key-field="id"
      >
        <n-table-row @mounted="rowLoadedTrue(index + 1)">
          <slot :row="item" />
        </n-table-row>
      </RecycleScroller> -->
    </n-table-rows>
  </div>
</template>
<script>
import NTableHeader from "./NTableHeader.vue";
import NTableRows from "./NTableRows.vue";
import NTableRow from "./NTableRow.vue";
import stickybits from "stickybits";
// import NTableColumn from "./NTableColumn.vue";
// import { Fragment } from "vue-fragment";

// import { RecycleScroller } from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

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
    isFiltered: {
      default: false,
      type: Boolean
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
      default: "No Entries",
      type: String
    },
    /**
     * Specify empty text
     */
    notFoundText: {
      default: "No Entries Found",
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
    },
    /**
     * Disable sorting. Used whenever back-end does the sorting.
     */
    rowsz: {
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
      expandedRows: [],
      rowLoaded: 30
    };
  },
  computed: {
    classes() {
      const classes = [];
      return classes;
    },
    rowPadding() {
      if (this.data && this.rows) {
        return (this.data.length - this.rows.length) * 90;
      }
      return 0;
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

      const createLabel = column => {
        return {
          label: column._props.label,
          sortable: column._props.sortable,
          prop: column._props.prop,
          align: column._props.align,
          labelAlign: column._props.align,
          maxWidth: column._props.maxWidth,
          minWidth: column._props.minWidth,
          customHeader: column._props.customHeader,
          sortMethod: column._props.sortMethod,
          borderRight: column._props.borderRight
        };
      };

      const getLabel = column => {
        column.$children.forEach(column => {
          if (column.$options._componentTag !== "n-table-column") {
            getLabel(column);
            return;
          }

          labels.push(createLabel(column));
        });
      };

      if (this.children[0]) {
        getLabel(this.children[0]);
      }

      return labels;
    },
    rows() {
      let data = this.data;

      let orderedData = data;

      if (this.sortedBy && !this.sortDisabled) {
        orderedData = orderBy(this.sortedBy, data, this.sortMethod);
      }

      if (this.filter.value) {
        orderedData = this.filterRows(orderedData);
      }

      if (this.sortOrder === "descending" && !this.sortDisabled) {
        return orderedData.reverse();
      }

      return orderedData.slice(0, this.rowLoaded);
    },
    isEmpty() {
      return this.rows.length < 1;
    }
  },

  watch: {
    rows() {
      this.updateStickyHeader(1000);
    }
  },

  created() {
    // const that = this;
    if (this.sortBy.order) {
      this.sortOrder = this.sortBy.order;
    }

    if (this.sortBy.prop) {
      this.sortedBy = this.sortBy.prop;
    }
    // setTimeout(function() {
    //   that.rowLoaded = true;
    // }, 10000);
  },
  mounted() {
    this.loaded = true;
    if (this.stickyHeader) {
      this.createStickyHeader(1500);
    }
  },

  methods: {
    filterRows(data) {
      const props =
        this.filter.props.length < 1 ? Object.keys(data[0]) : this.filter.props;

      return data.filter(data =>
        props.some(prop =>
          data[prop]
            ? data[prop].toLowerCase().includes(this.filter.value.toLowerCase())
            : false
        )
      );
    },
    rowLoadedTrue(index) {
      const that = this;

      if (index % 30 == 0) {
        setTimeout(function() {
          console.log("that.rowLoaded :", that.rowLoaded);
          that.rowLoaded = index + 30;
        }, 0);
      }
    },

    createStickyHeader(timeout = 100) {
      const that = this;
      // Fixed header for the table component
      setTimeout(() => {
        stickybits(".n-table-header", {
          stickyBitStickyOffset: that.stickyHeaderOffset,
          useStickyClasses: true
        });
      }, timeout);
    },
    updateStickyHeader(timeout = 0) {
      setTimeout(function() {
        const stickybitsInstancetoBeUpdated = stickybits(".n-table-header");

        stickybitsInstancetoBeUpdated.update();
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

  &:hover {
    background: #e9fdfe;
  }
}
</style>
