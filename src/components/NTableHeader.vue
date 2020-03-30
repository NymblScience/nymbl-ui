<template>
  <div v-if="loaded" class="n-table-header">
    <div style="display: flex">
      <n-table-label
        v-if="isExpandable"
        :style="{ 'max-width': expandWidth + 'px' }"
      ></n-table-label>
      <n-table-label
        v-for="label in labels"
        :key="label.label"
        :slots="slots"
        :label="label"
        :sort-order="sortOrder"
        :sorted-by="sortedBy"
        @changeSort="changeSort"
      >
        <div style="display:flex; width: 100%;">
          <n-table-label
            v-for="(labelNested, index) in label.labels"
            :key="'nested-' + index"
            :label="labelNested"
            :slots="slots"
            :sort-order="sortOrder"
            :sorted-by="sortedBy"
            @changeSort="changeSort"
          >
          </n-table-label>
        </div>
      </n-table-label>
    </div>
  </div>
</template>
<script>
import NTableLabel from "./NTableLabel.vue";

export default {
  name: "NTableHeader",
  components: {
    NTableLabel
  },
  props: {
    labels: {
      type: Array,
      default: () => {
        return [];
      }
    },
    sortOrder: {
      type: String,
      default: "ascending"
    },
    isExpandable: {
      type: Boolean,
      default: false
    },
    expandWidth: {
      type: Number,
      default: 70
    },
    sortedBy: {
      type: String,
      default: ""
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
  mounted() {
    this.loaded = true;
  },
  methods: {
    changeSort(prop, sortOrder) {
      this.$emit("changeSort", prop, sortOrder, null, true);
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
  background: #fff;
  z-index: 2020;
}
</style>
