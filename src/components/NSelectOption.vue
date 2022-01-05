<template>
  <li class="n-select-option" :class="classes" @mouseover.stop="$emit('mouseover')" @click.stop="$emit('click')"  >
    <slot>
      <div v-if="type === 'basic'" class="n-select-option__basic">
        {{ option[keys.label] || option }}
      </div>

      <div v-if="type === 'image'" class="n-select-option__image">
        <div class="n-select-option__image-text">{{ option[keys.label] }}</div>
        <div class="n-select-option__image-object" :style="imageStyle"></div>
      </div>
    </slot>
  </li>
</template>

<script>
export default {
  name: 'NSelectOption',
  props: {
    option: {
      type: [String, Object],
      required: true,
    },
    type: {
      type: String,
      default: 'basic', // 'basic' or 'image'
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    highlighted: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    keys: {
      type: Object,
      default() {
        return {
          class: 'class',
          label: 'label',
          image: 'image',
        };
      },
    },
  },
  computed: {
    classes() {
      return [
        `n-select-option--type-${this.type}`,
        this.option[this.keys.class],
        { 'is-highlighted': this.highlighted },
        { 'is-selected': this.selected },
      ];
    },
    imageStyle() {
      return {
        'background-image': `url(${this.option[this.keys.image]})`,
      };
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/imports.scss";
$n-select-option-checkbox-color: rgba(black, 0.38) !default;

.n-select-option {
  align-items: center;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: $ui-dropdown-item-font-size;
  user-select: none;

  &.is-selected {
    background-color: rgba(black, 0.05);
    color: $brand-primary-color;
    font-weight: 600;

    .n-select-option__checkbox {
      color: $brand-primary-color;
    }
  }

  &.is-highlighted {
    background-color: rgba(black, 0.1);
  }
}

.n-select-option__basic,
.n-select-option__image-text {
  @include text-truncation;
}

.n-select-option__image {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.n-select-option__image-object {
  background-position: 50%;
  background-size: cover;
  height: rem(32px);
  margin-right: rem(12px);
  width: rem(32px);
}

.n-select-option__checkbox {
  color: $n-select-option-checkbox-color;
  margin-left: auto;
}

// ================================================
// Types
// ================================================

.n-select-option--type-basic {
  padding: rem(6px 12px);
}

.n-select-option--type-image {
  padding: rem(4px 12px);
}
</style>
