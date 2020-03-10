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
      :expand-width="expandWidth"
      :slots="$slots"
      @changeSort="changeSort"
    />

    <n-table-rows ref="rows">
      <div v-if="isEmpty" class="n-table-empty">
        <span v-if="!loading && !isFiltezred && filter.value.length === 0">
          {{ emptyText }}
        </span>
        <span v-else-if="!loading">{{ notFoundText }}</span>
        <span v-else>Loading...</span>
      </div>

      <n-table-row v-if="isEmpty" v-show="false" :is-empty="isEmpty">
        <slot :row="{}"></slot>
      </n-table-row>

      <n-table-row
        v-for="(row, index) in rows"
        :key="row.key"
        :class="
          (getRowClass(row, index),
          { 'is-expanded': expandedRows.includes(row.key) })
        "
        @click.native="$emit('row-click', row, index, $event)"
        @mounted="isRowLoaded(index + 1)"
      >
        <n-table-column-expand
          v-if="isExpandable"
          :id="row.key"
          :expanded-rows="expandedRows"
          :expand-width="expandWidth"
          @expand="toggleExpand(row.key)"
        />

        <slot :row="row" :index="index" />

        <n-table-row-expand
          v-if="isExpandable"
          :id="row.key"
          :expand-width="expandWidth"
          :expanded-rows="expandedRows"
        >
          <slot :row="row" name="expanded" />
        </n-table-row-expand>
      </n-table-row>
    </n-table-rows>
  </div>
</template>
<script>
import NTableHeader from "./NTableHeader.vue";
import NTableRows from "./NTableRows.vue";
import NTableRow from "./NTableRow.vue";
import NTableRowExpand from "./NTableRowExpand.vue";
import NTableColumnExpand from "./NTableColumnExpand.vue";
import stickybits from "stickybits";
import orderBy from "../helpers/orderBy";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "NTable",
  components: {
    NTableHeader,
    NTableRow,
    NTableRows,
    NTableRowExpand,
    NTableColumnExpand
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
     * Enable/Disable url Queries. Vue $router has to be included.
     */
    urlQueries: {
      default: true,
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
      expandWidth: 50,
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
      let labels = [];

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
          borderRight: column._props.borderRight,
          isNested: column._props.isNested,
          nestedWidth: column._props.nestedWidth,
          // Get nested columns as children
          labels: column._props.isNested ? getLabels(column) : []
        };
      };

      const getLabels = column2 => {
        let labels = [];

        for (const column of column2.$children) {
          if (column.$options._componentTag === "n-table-column") {
            labels.push(createLabel(column));
          } else if (column.$options._componentTag.includes("user-list")) {
            labels.push(getLabels(column)[0]);
          }
        }

        return labels;
      };

      if (this.children[0]) {
        labels = getLabels(this.children[0]);
      }

      return labels;
    },
    rows() {
      let data = [...this.data];

      if (this.sortedBy && !this.sortDisabled) {
        data = orderBy(this.sortedBy, data, this.sortMethod);
      }

      if (this.filter.value) {
        data = this.filterRows(data);
      }

      // Add Id for Vue Key.add
      if (this.isExpandable) {
        data.forEach(row => (row.key = uuidv4()));
      }

      if (this.sortOrder === "descending" && !this.sortDisabled) {
        return data.reverse();
      }

      return data.slice(0, this.rowLoaded);
    },
    isEmpty() {
      return this.rows.length < 1;
    }
  },

  // watch: {
  //   rows() {
  //     this.$nextTick(() => {
  //       // this.updateStickyHeader(5000);
  //     });
  //   }
  // },

  mounted() {
    this.loaded = true;
    if (this.stickyHeader) {
      this.createStickyHeader(0);
    }

    if (this.sortBy.order) {
      this.sortOrder = this.sortBy.order;
    }

    if (this.sortBy.prop) {
      this.sortedBy = this.sortBy.prop;
    }

    // // Add sort order to URL
    // if (this.urlQueries) {
    //   this.changeSort(this.$route.query.sortedBy, this.$route.query.sortOrder);
    // }
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
    isRowLoaded(index) {
      const that = this;

      if (index % 30 == 0) {
        setTimeout(function() {
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
        console.log(
          "stickybitsInstancetoBeUpdated :",
          stickybitsInstancetoBeUpdated
        );
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
    },
    toggleExpand(key) {
      const expandedRows = [...this.expandedRows];
      expandedRows.includes(key)
        ? (this.expandedRows = expandedRows.filter(row => row !== key))
        : this.expandedRows.push(key);
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

.n-table-row {
  border-bottom: 1px solid #ebeef5;
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
  transition: background-color 0.25s ease;

  &:hover {
    background: #e9fdfe;
  }
  &.is-expanded {
    &:hover {
      background: unset;
    }
  }
}
</style>
