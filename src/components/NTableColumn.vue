<template>
  <div
    class="n-table-column"
    :class="{
      'border-solid border-r': borderRight,
      'n-table-column_parent': span,
      'align-center': align === 'center'
    }"
    :style="computedStyle"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'NTableColumn',
  props: {
    label: {
      type: String,
      default: '',
    },
    sortable: {
      type: Boolean,
      default: false,
    },
    sortMethod: {
      type: [Function, Boolean],
      default: false,
    },
    prop: {
      type: String,
      default: '',
    },
    align: {
      type: String,
      default: 'left',
    },
    labelAlign: {
      type: String,
      default: '',
    },
    isExpandable: {
      type: Boolean,
      default: false,
    },
    isNested: {
      type: Boolean,
      default: false,
    },
    nestedWidth: {
      type: [Boolean, Number],
      default: 1,
    },
    borderRight: {
      type: Boolean,
      default: false,
    },
    customHeader: {
      type: [Boolean, String],
      default: false,
    },
    width: {
      type: Number,
      default: null,
    },
    maxWidth: {
      type: Number,
      default: null,
    },
    minWidth: {
      type: Number,
      default: null,
    },
    span: {
      type: [Object],
      default: null,
    },
  },
  computed: {
    classes() {
      const classes = [];
      return classes;
    },

    computedStyle() {
      const styles = {
        'text-align': this.align,
        'max-width': `${this.maxWidth}px`,
        'min-width': `${this.minWidth}px`,
        'border-right-color': '#ebeef5',
      };
      if (this.width) {
        styles.width = `${this.width}px`;
        styles['text-align'] = 'center';
      }
      if (this.nestedWidth) {
        styles.flex = this.nestedWidth;
      }
      return styles;
    },
  },
  created() {
    this.$emit('created');
  },
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
  border-color: #ebeef5;
  &.align-center {
    justify-content: center;
  }
  &.border-right:last-child {
    border-right: 1px solid #fff !important;
  }
  &_parent {
    display: inline-block;
    padding: 0;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 600;
    flex-grow: unset;
    flex-basis: unset;
    &:last-child {
      border-right: 0;
    }
  }
}
</style>
