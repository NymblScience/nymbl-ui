<template>
  <div
    class="n-table-label"
    :class="{
      'text-center': label.align === 'center' || label.isNested,
      'border-right': label.borderRight || label.isNested,
      'n-table-label_nested': label.isNested
    }"
    :style="{
      'max-width': label.maxWidth + 'px',
      'min-width': label.minWidth + 'px',
      flex: label.nestedWidth
    }"
  >
    <span v-if="label.customHeader">
      <custom-header :custom-header="slots[label.customHeader]"></custom-header>
    </span>

    <span
      v-else-if="label.sortable"
      class="n-table-label-sortable"
      @click="$emit('changeSort', label.prop, 'toggle', label.sortMethod)"
    >
      <span>{{ label.label }}</span>
      <n-table-arrows
        :active-arrow="sortOrder"
        :is-active="sortedBy === label.prop"
      ></n-table-arrows>
    </span>

    <span v-else class="n-table-label-container" style="width: 100%">{{
      label.label
    }}</span>

    <slot> </slot>
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
  name: "NTableLabel",
  components: {
    NTableArrows,
    CustomHeader
  },
  props: {
    label: {
      type: Object,
      default: () => {
        return {};
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
  mounted() {
    if (this.label.sortMethod && this.sortedBy === this.label.prop) {
      this.$emit(
        "changeSort",
        this.label.prop,
        "toggle",
        this.label.sortMethod
      );
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/colors.scss";
.n-table-label {
  flex-grow: 1;
  flex-basis: 0;
  font-size: 0.85rem;
  text-transform: uppercase;
  font-weight: 500;
  padding: 6px 3px 6px 3px;
  color: #595959;
  user-select: none;
  flex-flow: row nowrap;
  display: flex;
  align-items: center;

  .n-table-label-sortable {
    cursor: pointer;
  }
  &.text-center {
    justify-content: center;
  }
  &.border-right {
    border-right: 1px solid gray;
  }
  &_nested {
    display: flex;
    color: $gray-1;
    flex-flow: row wrap;
    &:last-child {
      border-right: none !important;
    }
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
</style>
