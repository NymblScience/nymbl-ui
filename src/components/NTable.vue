<template>
  <div
    ref="n-table"
    class="n-table"
    :class="classes"
    v-bind="$attrs"
    :style="
      isEmpty || filter.value ? null : { 'padding-bottom': rowPadding + 'px' }
    "
  >
    <div>
      <n-table-header
        v-if="loaded && labels.length > 0"
        :labels="labels"
        :sort-order="sortOrder"
        :sorted-by="sortedBy"
        :is-expandable="isExpandable"
        :expand-width="expandWidth"
        :slots="$slots"
        @changeSort="changeSort"
        @loaded="createStickyHeader(200)"
      />

      <n-table-rows ref="rows">
        <div
          v-if="isEmpty"
          class="n-table-empty"
        >
          <span v-if="!loading && !isFiltered && filter.value.length === 0">
            {{ emptyText }}
          </span>
          <span v-else-if="!loading">{{ notFoundText }}</span>
          <n-loading-circle
            v-else
            disable-transition
            class="n-button__loading"
            :size="24"
            :stroke="3"
          />
        </div>
        <n-table-row
          v-if="isEmpty"
          v-show="false"
          :is-empty="isEmpty"
        >
          <slot :row="{}" />
        </n-table-row>

        <n-table-row
          v-for="(row, index) in rows"
          :key="index.toString()"
          ref="rows"
          :class="getRowClasses(row, index)"
          :href="getRowLink(row, index)"
          @click="handleRowClick(row, index, $event)"
          @mouseDown.middle="handleRowClickMiddle(row, index, $event)"
          @click.middle="handleRowClickMiddle(row, index, $event)"
          @mounted="isRowLoaded(index + 1)"
        >
          <n-table-column-expand
            v-if="isExpandable"
            :id="index.toString()"
            ref="expand"
            :expanded-rows="expandedRows"
            :expand-width="expandWidth"
            @expand="toggleExpand(index.toString())"
          />

          <slot
            :row="row"
            :index="index"
          />

          <n-table-row-expand
            v-if="isExpandable"
            :id="index.toString()"
            :expand-width="expandWidth"
            :expanded-rows="expandedRows"
          >
            <slot
              :row="row"
              name="expanded"
            />
          </n-table-row-expand>
        </n-table-row>
      </n-table-rows>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import stickybits from 'stickybits';
import NLoadingCircle from './NLoadingCircle.vue';

import NTableHeader from './NTableHeader.vue';
import NTableRows from './NTableRows.vue';
import NTableRow from './NTableRow.vue';
import NTableRowExpand from './NTableRowExpand.vue';
import NTableColumnExpand from './NTableColumnExpand.vue';
import orderBy from '../helpers/orderBy';
import { useSlots } from 'vue';

export default {
  name: 'NTable',
  components: {
    NTableHeader,
    NTableRow,
    NTableRows,
    NTableRowExpand,
    NTableColumnExpand,
    NLoadingCircle,
  },
  props: {
    /**
     * Table data
     */
    data: {
      default: () => [],
      type: Array,
    },
    loading: {
      default: false,
      type: Boolean,
    },
    isExpandable: {
      default: false,
      type: Boolean,
    },
    stickyHeader: {
      default: false,
      type: Boolean,
    },
    stickyHeaderOffset: {
      default: 63,
      type: Number,
    },
    isFiltered: {
      default: false,
      type: Boolean,
    },

    filter: {
      default: () => ({ props: [], value: '' }),
      type: Object,
    },
    /**
     * Sort by property, optionally specifify the order
     */
    sortBy: {
      default: () => ({ prop: '', order: 'ascending' }),
      type: Object,
    },
    align: {
      default: 'left',
      type: String,
    },
    labelAlign: {
      default: 'left',
      type: String,
    },
    /**
     * Specify empty text
     */
    emptyText: {
      default: 'No Entries',
      type: String,
    },
    /**
     * Specify empty text
     */
    notFoundText: {
      default: 'No Entries Found',
      type: String,
    },
    /**
     * Specify row class. e.g. getRowClass(row, index)
     */
    rowClass: {
      default: null,
      type: Function,
    },
    
        /**
     * Specify row link. e.g. getRowLink(row, index)
     */
    rowLink: {
      default: null,
      type: Function,
    },
    /**
     * Disable sorting. Used whenever back-end does the sorting.
     */
    sortDisabled: {
      default: false,
      type: Boolean,
    },
    /**
     * Enable/Disable url Queries. Vue $router has to be included.
     */
    urlQueries: {
      default: false,
      type: Boolean,
    },
    /**
     * Add a link to go when row is clicked.
     */
    link: {
      default: false,
      type: [Boolean]
    },
  },
  data() {
    return {
      loaded: false,
      sortedBy: '',
      sortOrder: 'ascending',
      sortMethod: null,
      expandedRows: [],
      expandWidth: 50,
      rowLoaded: 30,
    };
  },
  setup() {


const slots = useSlots();

const children = slots.default();
// const children2 = children.de;
return {children};

  },
  computed: {
    slots() {
      return this.$slots.default;
    },
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

    labels() {
      let labels = [];

      if (this.isEmpty) {
        return labels;
      }
   
      const getLabels = (children) => {
        const labels = [];
        for (const child in children) {
          if (children[child].type.name === 'NTableColumn') {
            labels.push(createLabel(children[child]));
          } 

        }
     
        return labels;
      };

      const createLabel = (column) => ({
        label: column.props.label,
        sortable: !!column.props.sortable,
        prop: column.props.prop,
        align: column.props.align,
        labelAlign: column.props.align,
        maxWidth: column.props['max-width'],
        minWidth: column.props['min-width'],
        sortMethod: column.props['sort-method'],
        borderRight: column.props['border-right'],
        isNested: column.props['is-nested'],
        nestedWidth: column.props['nested-width'],
        // Get nested columns as children
        // labels: column._props.isNested ? getLabels(column) : [],
      });

      if (this.children) {
        labels = getLabels(this.children);
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

      if (this.sortOrder === 'descending' && !this.sortDisabled) {
        return data.reverse();
      }

      return data.slice(0, this.rowLoaded);
    },
    isEmpty() {
      return this.rows.length < 1;
    },
    sortQueries() {
      if (this.urlQueries) {
        return {
          sortedBy: this.$route.query.sortedBy,
          sortOrder: this.$route.query.sortOrder,
        };
      }
      return {};
    },
  },

  watch: {
    sortQueries: {
      immediate: false,
      deep: true,
      handler(newSortQueries) {
        if (this.urlQueries) {
          this.changeSort(newSortQueries.sortedBy, newSortQueries.sortOrder);
        }
      },
    },
  },

  mounted() {
    this.loaded = true;

    if (this.sortBy.order) {
      this.sortOrder = this.sortBy.order;
    }

    if (this.sortBy.prop) {
      this.sortedBy = this.sortBy.prop;
    }

    // Add sort order to URL
    if (this.urlQueries) {
      if (this.$route.query.sortedBy) {
        this.changeSort(
          this.$route.query.sortedBy,
          this.$route.query.sortOrder,
        );
      } else {
        this.$router.push({
          query: {
            ...this.$route.query,
            sortedBy: this.sortedBy,
            sortOrder: this.sortOrder,
          },
        });
      }
    }
  },

  methods: {
    filterRows(data) {
      const props = this.filter.props.length < 1 ? Object.keys(data[0]) : this.filter.props;

      return data.filter((data) => props.some((prop) => (data[prop]
        ? data[prop]
          .toString()
          .toLowerCase()
          .includes(this.filter.value.toLowerCase())
        : false)));
    },
    isRowLoaded(index) {
      const that = this;

      if (index % 30 == 0) {
        setTimeout(() => {
          that.rowLoaded = index + 30;
        }, 0);
      }
    },

    createStickyHeader(timeout = 400) {
      if (!this.stickyHeader) {
        return;
      }
      const that = this;
      // Fixed header for the table component
      setTimeout(() => {
        stickybits('.n-table-header', {
          stickyBitStickyOffset: that.stickyHeaderOffset,
          useStickyClasses: true,
        });
      }, timeout);
    },
    // updateStickyHeader(timeout = 0) {
    //   setTimeout(function() {
    //     const stickybitsInstancetoBeUpdated = stickybits(".n-table-header");

    //     stickybitsInstancetoBeUpdated.update();
    //   }, timeout);
    // },
    changeSort(
      property,
      sortOrder = 'ascending',
      sortMethod,
      isHeader = false,
    ) {
      if (sortOrder === 'toggle') {
        if (this.sortOrder === 'ascending') {
          sortOrder = 'descending';
        } else {
          sortOrder = 'ascending';
        }
      }

      if (isHeader && this.urlQueries) {
        this.$router.push({
          query: {
            ...this.$route.query,
            page: 1,
          },
        });
      }

      const current = {
        sortedBy: this.sortedBy,
        sortOrder: this.sortOrder,
      };
      const next = {
        sortedBy: property,
        sortOrder,
      };

      if (JSON.stringify(next) === JSON.stringify(current)) {
        console.log('returned');
        return;
      }

      // Add to URL query
      if (this.urlQueries) {
        this.$router.push({
          query: {
            ...this.$route.query,
            sortedBy: property,
            sortOrder,
          },
        });
      }

      this.sortedBy = property;
      this.sortOrder = sortOrder;

      if (sortMethod) {
        this.sortMethod = sortMethod;
      } else {
        this.sortMethod = false;
      }

      this.$emit('sort', {
        sortedBy: this.sortedBy,
        sortOrder: this.sortOrder,
      });
    },
    getRowClasses(row, index) {
      let classes = [];
      if (this.rowClass) {
        classes = this.rowClass(row, index).split(' ');
      }

      if (this.expandedRows.includes(index.toString())) {
        classes.push('is-expanded');
      }

      return classes.join(' ');
    },
    getRowLink(row, index) {
      let link;
      if (this.rowLink) {
        link = this.rowLink(row, index)
      }
      return link
    },
    handleRowClick(row, index, $event) {
           const rowElement = this.$refs.rows[index];
      this.$emit('row-click', row, index, $event, rowElement);
    },
    handleRowClickMiddle(row, index, $event) {
           const rowElement = this.$refs.rows[index];
      this.$emit('row-click-middle', row, index, $event, rowElement);
    },
    toggleExpand(key, close = false) {
      const expandedRows = [...this.expandedRows];
      if (expandedRows.includes(key) || close) {
        this.expandedRows = expandedRows.filter((row) => row !== key);
        this.$emit('expand', 'closed', key);
      } else {
        this.expandedRows.push(key);
        this.$emit('expand', 'expanded', key);
      }
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/sass/animations.scss";
@import "@/assets/sass/colors.scss";
@import "@/assets/sass/config.scss";

.n-table {
  .n-table-rows,
  .n-table.header {
    @media (max-width: 1000px) {
      min-width: 1000px;
    }
  }

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
  transition: all 0.25s ease;
    &:hover {
      box-shadow: inset 0 0 0 99999px rgba(0, 0, 0, 0.03);
    }
    &.is-expanded {
    &:hover {
      box-shadow: inset 0 0 0 99999px rgba(0, 0, 0, 0.03);
    }
  }
}
}
</style>
