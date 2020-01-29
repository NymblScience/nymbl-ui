<template>
  <div
    class="n-table-column"
    :class="{ 'border-right': borderRight, 'n-table-column_parent': span }"
    :style="computedStyle"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "NTableColumn",
  props: {
    label: {
      type: String,
      default: ""
    },
    sortable: {
      type: Boolean,
      default: false
    },
    sortMethod: {
      type: [Function, Boolean],
      default: false
    },
    prop: {
      type: String,
      default: ""
    },
    align: {
      type: String,
      default: "left"
    },
    labelAlign: {
      type: String,
      default: ""
    },
    isExpandable: {
      type: Boolean,
      default: false
    },
    borderRight: {
      type: Boolean,
      default: false
    },

    customHeader: {
      type: [Boolean, String],
      default: false
    },
    maxWidth: {
      type: Number,
      default: null
    },
    minWidth: {
      type: Number,
      default: null
    },
    span: {
      type: [Object],
      default: null
    },
    columnWidths: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    classes() {
      const classes = [];
      return classes;
    },
    width() {
      if (this.span && this.columnWidths.length > 0) {
        const widths = this.columnWidths.slice(
          this.span.from,
          this.span.to ? this.span.to : ""
        );
        return widths.reduce((a, c) => a + c);
      }
      return null;
    },
    computedStyle() {
      const styles = {
        "text-align": this.align,
        "max-width": this.maxWidth + "px",
        "min-width": this.minWidth + "px"
      };
      if (this.width) {
        styles.width = this.width + "px";
        styles["text-align"] = "center";
      }
      return styles;
    }
  },
  created() {
    this.$emit("created");
  }
};
</script>
<style lang="scss">
@import "@/assets/sass/animations.scss";
@import "@/assets/sass/colors.scss";
@import "@/assets/sass/config.scss";
.n-table-column {
  flex-grow: 1;
  flex-basis: 0;
  overflow: hidden;
  padding: 10px 3px;
  font-size: 0.95rem;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  &.border-right {
    border-right: 1px solid gray;
  }
  &_parent {
    display: inline-block;
    padding: 0;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 500;
    border-right: 1px solid lightgray;
    flex-grow: unset;
    flex-basis: unset;
    &:last-child {
      border-right: 0;
    }
  }
}
</style>
