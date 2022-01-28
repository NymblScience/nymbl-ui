<template>
  <div  class="n-select" :class="classes" >
    <input
      v-if="name"
      class="n-select__hidden-input"
      type="hidden"
      :name="name"
      :value="submittedValue"
    />

    <div class="n-select__content">
      <div
        ref="label"
        class="n-select__label"
        :tabindex="disabled ? null : tabindex || '0'"
        @focus="onFocus"
        @keydown.enter.prevent="openDropdown"
        @keydown.space.prevent="openDropdown"
        @keydown.tab="onBlur"
      >
        <div
          v-if="label || $slots.default"
          class="n-select__label-text"
          :class="labelClasses"
        >
          <slot>{{ label }}</slot>
        </div>

        <div class="n-select__display" :class="containerClasses">
          <div
            class="n-select__display-value"
            :class="{ 'is-placeholder': !hasDisplayText }"
          >
            <div v-if="type === 'image'" class="n-select-option__image">
              <div class="n-select-option__image-text">
                {{
                  hasDisplayText
                    ? displayText
                    : hasFloatingLabel && isLabelInline
                    ? null
                    : placeholder
                }}
              </div>
              <div class="n-select-option__image-object" :style="imageStyle"></div>
            </div>
            <div v-else>
              {{
                hasDisplayText
                  ? displayText
                  : hasFloatingLabel && isLabelInline
                  ? null
                  : placeholder
              }}
            </div>
          </div>

          <div class="n-select__dropdown-button flex justify-center items-center h-full">
            <svg
              width="24"
              height="22"
              class="transform translate-y-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.6946 3.13652L8.00913 11.3297C7.7277 11.6749 7.27303 11.6749 6.99087 11.3297L0.305365 3.13652C-0.101789 2.63817 -0.101789 1.82735 0.305365 1.32811C0.712519 0.829757 1.37332 0.829757 1.78048 1.32811L7.50037 8.33693L13.2188 1.32811C13.6267 0.829756 14.2875 0.829756 14.6946 1.32811C15.1018 1.82735 15.1018 2.63817 14.6946 3.13652Z"
                fill="#909090"
              />
            </svg>
          </div>
        </div>

        <n-popover
          ref="dropdown"
          class="n-select__dropdown"
          :close-on-scroll="false"
          :constrain-to-scroll-parent="false"
          :disabled="disabled"
          @close="onClose"
          @open="onOpen"
          @reveal="onReveal"
        >
          <div
            ref="dropdownContent"
            class="n-select__dropdown-content"
            tabindex="-1"
            @keydown.down.prevent="highlightOption(highlightedIndex + 1)"
            @keydown.enter.prevent.stop="selectHighlighted(highlightedIndex, $event)"
            @keydown.esc.prevent="closeDropdown()"
            @keydown.tab="onBlur"
            @keydown.up.prevent="highlightOption(highlightedIndex - 1)"
          >
            <div
              v-if="hasSearch"
              class="n-select__search relative"
              @click.stop
              @keydown.space.stop
            >
              <input
                ref="searchInput"
                v-model="query"
                autocomplete="off"
                class="n-select__search-input"
                type="text"
                :placeholder="searchPlaceholder"
              />
              <!-- eslint-disable -->
              <div class="n-select__search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path
                    d="M9.516 14.016c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5-4.5 2.016-4.5 4.5 2.016 4.5 4.5 4.5zm6 0l4.97 4.97-1.5 1.5-4.97-4.97v-.797l-.28-.282c-1.126.984-2.626 1.547-4.22 1.547-3.61 0-6.516-2.86-6.516-6.47S5.906 3 9.516 3s6.47 2.906 6.47 6.516c0 1.594-.564 3.094-1.548 4.22l.28.28h.798z"
                  />
                </svg>
              </div>
              <!-- eslint-enable -->
              <n-loading-circle
                v-if="loading"
                class="n-select__search-progress"
                :size="20"
                :stroke="4"
              ></n-loading-circle>
            </div>

            <ul ref="optionsList" class="n-select__options">
              <n-select-option
                v-for="(option, index) in filteredOptions"
                ref="options"
                :key="index"
                :highlighted="highlightedIndex === index"
                :keys="keys"
                :multiple="multiple"
                :option="option"
                :selected="isOptionSelected(option)"
                :type="type"
                :class="containerClasses"
                @click.native.stop="selectOption(option, index)"
                @mouseover.native.stop="highlightOption(index, { autoScroll: false })"
              >
                <slot
                  name="option"
                  :highlighted="highlightedIndex === index"
                  :index="index"
                  :option="option"
                  :selected="isOptionSelected(option)"
                ></slot>
              </n-select-option>

              <div v-show="hasNoResults" class="n-select__no-results">
                <slot name="no-results">No results found</slot>
              </div>
            </ul>
          </div>
        </n-popover>
      </div>

      <div v-if="hasFeedback" class="n-select__feedback">
        <div v-if="showError" class="n-select__feedback-text">
          <slot name="error">{{ error }}</slot>
        </div>

        <div v-else-if="showHelp" class="n-select__feedback-text">
          <slot name="help">{{ help }}</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fuzzysearch from 'fuzzysearch';
import NPopover from './NPopover.vue';
import NLoadingCircle from './NLoadingCircle.vue';
import NSelectOption from './NSelectOption.vue';

import RespondsToExternalClick from '../mixins/RespondsToExternalClick';
import { looseIndexOf, looseEqual } from '../helpers/util';
import { scrollIntoView, resetScroll } from '../helpers/element-scroll';

export default {
  name: 'NSelect',
  components: {
    NPopover,
    NLoadingCircle,
    NSelectOption,
  },

  mixins: [RespondsToExternalClick],

  props: {
    name: String,
    tabindex: [String, Number],
    // selectedOption: {
    //   type: [String, Number, Object, Array],
    //   required: true
    // },
    value: {
      type: [String, Number, Object, Array, Boolean],
    },
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    placeholder: String,
    icon: String,
    iconPosition: {
      type: String,
      default: 'left', // 'left' or 'right'
    },
    label: String,
    floatingLabel: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'basic', // 'basic' or 'image'
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    multipleDelimiter: {
      type: String,
      default: ', ',
    },
    hasSearch: {
      type: Boolean,
      default: false,
    },
    searchPlaceholder: {
      type: String,
      default: 'Search',
    },
    filter: Function,
    disableFilter: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    noResults: {
      type: Boolean,
      default: false,
    },
    keys: {
      type: Object,
      default() {
        return {
          class: 'class',
          label: 'label',
          value: 'value',
          image: 'image',
        };
      },
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    help: String,
    error: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    containerClasses: String,
  },

  data() {
    return {
      query: '',
      isActive: false,
      isTouched: false,
      selectedIndex: -1,
      highlightedIndex: -1,
      initialValue: JSON.stringify(this.selectedOption),
    };
  },

  computed: {
    classes() {
      return [
        `n-select--type-${this.type}`,
        `n-select--icon-position-${this.iconPosition}`,
        { 'is-active': this.isActive },
        { 'is-invalid': this.invalid },
        { 'is-touched': this.isTouched },
        { 'is-disabled': this.disabled },
        { 'pointer-events-none': this.disabled },
        { 'is-multiple': this.multiple },
        { 'has-label': this.hasLabel },
        { 'has-floating-label': this.hasFloatingLabel },
      ];
    },

    labelClasses() {
      return {
        'is-inline': this.hasFloatingLabel && this.isLabelInline,
        'is-floating': this.hasFloatingLabel && !this.isLabelInline,
      };
    },

    hasLabel() {
      return Boolean(this.label) || Boolean(this.$slots.default);
    },

    hasFloatingLabel() {
      return this.hasLabel && this.floatingLabel;
    },

    isLabelInline() {
      return this.selectedOption.length === 0 && !this.isActive;
    },

    hasFeedback() {
      return this.showError || this.showHelp;
    },

    showError() {
      return this.invalid && (Boolean(this.error) || Boolean(this.$slots.error));
    },

    showHelp() {
      return Boolean(this.help) || Boolean(this.$slots.help);
    },

    selectedOption() {
      return this.options.filter((option) => (option[this.keys.value] == null
        ? option === this.value
        : option[this.keys.value] === this.value))[0];
    },

    filteredOptions() {
      if (this.disableFilter) {
        return this.options;
      }

      const options = this.options.filter((option) => {
        if (this.filter) {
          return this.filter(option, this.query, this.defaultFilter);
        }

        return this.defaultFilter(option, this.query);
      });

      if (this.sort) {
        options.sort(this.sort.bind(this));
      }

      return options;
    },

    displayText() {
      if (this.multiple) {
        if (this.selectedOption.length > 0) {
          return this.selectedOption
            .map((value) => value[this.keys.label] || value)
            .join(this.multipleDelimiter);
        }

        return '';
      }

      return this.selectedOption
        ? this.selectedOption[this.keys.label] || this.selectedOption
        : '';
    },

    hasDisplayText() {
      return Boolean(this.displayText.length);
    },

    hasNoResults() {
      if (this.loading || this.query.length === 0) {
        return false;
      }

      return this.disableFilter ? this.noResults : this.filteredOptions.length === 0;
    },

    submittedValue() {
      // Assuming that if there is no name or no value,
      // then there's no need to compute the submittedValue
      if (!this.name || !this.selectedOption) {
        return '';
      }

      if (Array.isArray(this.selectedOption)) {
        return this.selectedOption
          .map((option) => option[this.keys.value] || option)
          .join(',');
      }

      return this.selectedOption[this.keys.value] || this.selectedOption;
    },
    imageStyle() {
      if (
        !this.selectedOption
        || !this.keys
        || !this.keys.image
        || !this.selectedOption[this.keys.image]
      ) {
        return '';
      }

      return {
        'background-image': `url(${this.selectedOption[this.keys.image]})`,
      };
    },
  },

  watch: {
    filteredOptions() {
      this.highlightedIndex = 0;
      resetScroll(this.$refs.optionsList);
    },

    query() {
      this.$emit('query-change', this.query);
    },

    isActive(value) {
      if (value) {
        this.addExternalClickListener(this.$el, this.onExternalClick);
      } else {
        this.removeExternalClickListener();
      }
    },
  },

  created() {
    if (!this.selectedOption || this.selectedOption === '') {
      this.setValue(null);
    }
  },

  methods: {
    /* eslint-disable  */
    setValue(value) {
      value = value ? value : this.multiple ? [] : "";

      this.$emit(
        "input",
        value[this.keys.value] == null ? value : value[this.keys.value]
      );

      this.$emit(
        "change",
        value[this.keys.value] == null ? value : value[this.keys.value]
      );
    },
    /* eslint-enable  */
    highlightOption(index, options = { autoScroll: true }) {
      let indexComputed = index;
      if (this.highlightedIndex === indexComputed || this.$refs.options.length === 0) {
        return;
      }

      const firstIndex = 0;
      const lastIndex = this.$refs.options.length - 1;

      if (indexComputed < firstIndex) {
        indexComputed = lastIndex;
      } else if (index > lastIndex) {
        indexComputed = firstIndex;
      }

      this.highlightedIndex = indexComputed;

      if (options.autoScroll) {
        this.scrollOptionIntoView(this.$refs.options[indexComputed].$el);
      }
    },

    selectHighlighted(index, e) {
      if (this.$refs.options.length > 0) {
        e.preventDefault();
        this.selectOption(this.$refs.options[index].option, index);
      }
    },

    selectOption(option, index, options = { autoClose: true }) {
      const shouldSelect = this.multiple && !this.isOptionSelected(option);

      if (this.multiple) {
        this.updateOption(option, { select: shouldSelect });
      } else {
        this.setValue(option);
        this.selectedIndex = index;
      }

      this.$emit('select', option, {
        selected: this.multiple ? shouldSelect : true,
      });

      this.highlightedIndex = index;

      if (!this.multiple) {
        this.clearQuery();
      }

      if (!this.multiple && options.autoClose) {
        this.closeDropdown();
      }
    },

    isOptionSelected(option) {
      if (this.multiple) {
        return looseIndexOf(this.selectedOption, option) > -1;
      }

      return looseEqual(this.selectedOption, option);
    },

    updateOption(option, options = { select: true }) {
      let value = [];
      let updated = false;
      const i = looseIndexOf(this.selectedOption, option);

      if (options.select && i < 0) {
        value = this.selectedOption.concat(option);
        updated = true;
      }

      if (!options.select && i > -1) {
        value = this.selectedOption.slice(0, i).concat(this.selectedOption.slice(i + 1));
        updated = true;
      }

      if (updated) {
        this.setValue(value);
      }
    },

    defaultFilter(option, query) {
      let text = option[this.keys.label] || option;

      if (typeof text === 'string') {
        text = text.toLowerCase();
      }

      return fuzzysearch(query.toLowerCase(), text);
    },

    clearSelection() {
      this.setValue(null);
    },

    clearQuery() {
      this.query = '';
    },

    focus() {
      this.$refs.label.focus();
    },

    toggleDropdown() {
      this.$refs.dropdown.toggle();
    },

    openDropdown() {
      if (this.disabled) {
        return;
      }
      console.log('opendropdown');
      this.$refs.dropdown.open();
    },

    closeDropdown(options = { blurAfterClose: false }) {
      this.$refs.dropdown.close();

      if (!this.isTouched) {
        this.isTouched = true;
        this.$emit('touch');
      }

      if (options.blurAfterClose) {
        this.isActive = false;
      } else {
        this.$refs.label.focus();
      }
    },

    onFocus(e) {
      if (this.disabled) {
        return;
      }
      if (this.isActive) {
        return;
      }

      this.isActive = true;
      this.$emit('focus', e);
    },

    onBlur(e) {
      this.isActive = false;
      this.$emit('blur', e);

      if (this.$refs.dropdown.isOpen()) {
        this.closeDropdown({ blurAfterClose: true });
      }
    },

    onOpen() {
      this.isActive = true;

      this.$refs.dropdown.$el.style.width = `${
        this.$refs.label.getBoundingClientRect().width
      }px`;

      this.$nextTick(() => {
        this.scrollOptionIntoView(this.$refs.optionsList.querySelector('.is-selected'));
      });

      this.$emit('dropdown-open');
    },

    onReveal() {
      this.$refs[this.hasSearch ? 'searchInput' : 'dropdownContent'].focus();
    },

    onClose() {
      this.highlightedIndex = this.multiple ? -1 : this.selectedIndex;
      // this.$emit("dropdown-close");
    },

    onExternalClick() {
      if (this.$refs.dropdown.isOpen()) {
        this.closeDropdown({ blurAfterClose: true });
      } else if (this.isActive) {
        this.isActive = false;
      }
    },

    scrollOptionIntoView(optionEl) {
      scrollIntoView(optionEl, {
        container: this.$refs.optionsList,
        marginTop: 180,
      });
    },

    reset() {
      this.setValue(JSON.parse(this.initialValue));
      this.clearQuery();
      this.resetTouched();

      this.selectedIndex = -1;
      this.highlightedIndex = -1;
    },

    resetTouched(options = { touched: false }) {
      this.isTouched = options.touched;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/imports.scss";

.n-select {
  align-items: flex-start;
  display: flex;
  font-family: $font-stack;
  margin-bottom: $ui-input-margin-bottom;
  outline: none;
  position: relative;

  &:hover:not(.is-disabled) {
    .n-select__label-text {
      color: $ui-input-label-color--hover;
    }

    .n-select__display {
      border-bottom-color: $ui-input-border-color--hover;
    }

    .n-select__dropdown-button {
      color: $ui-input-button-color--hover;
    }
  }

  &.is-active:not(.is-disabled) {
    .n-select__label-text,
    .n-select__icon-wrapper .ui-icon {
      color: $ui-input-label-color--active;
    }

    .n-select__display {
      border-bottom-color: $ui-input-border-color--active;
      border-bottom-width: $ui-input-border-width--active;
    }
  }

  &.has-floating-label {
    .n-select__label-text {
      // Behaves like a block, but width is the width of its content.
      // Needed here so label doesn't overflow parent when scaled.
      display: table;

      &.is-inline {
        color: $ui-input-label-color; // So the hover styles don't override it
        cursor: pointer;
        transform: translateY($ui-input-label-top--inline) scale(1.1);
      }

      &.is-floating {
        transform: translateY(0) scale(1);
      }
    }
  }

  &.has-label {
    .n-select__icon-wrapper {
      padding-top: $ui-input-icon-margin-top--with-label;
    }

    .n-select__dropdown-button {
      top: $ui-input-button-margin-top--with-label;
    }
  }

  &:not(.is-multiple) {
    .n-select__display {
      height: $ui-input-height;
      line-height: 1;
    }
  }

  &.is-multiple {
    .n-select__display {
      line-height: 1.4;
      padding-bottom: rem(4px);
      padding-top: rem(4px);
    }
  }

  &.is-invalid:not(.is-disabled) {
    .n-select__label-text,
    .n-select__icon-wrapper .ui-icon {
      color: $ui-input-label-color--invalid;
    }

    .n-select__display {
      border-bottom-color: $ui-input-border-color--invalid;
    }

    .n-select__feedback {
      color: $ui-input-feedback-color--invalid;
    }
  }

  &.is-disabled {
    .n-select__display {
      border-bottom-style: $ui-input-border-style--disabled;
      border-bottom-width: $ui-input-border-width--active;
      color: $ui-input-text-color--disabled;
      cursor: default;
    }

    .n-select__dropdown-button,
    .n-select__display-value.is-placeholder {
      color: $ui-input-text-color--disabled;
      opacity: $ui-input-button-opacity--disabled;
    }

    .n-select__icon-wrapper .ui-icon {
      opacity: $ui-input-icon-opacity--disabled;
    }

    .n-select__feedback {
      opacity: $ui-input-feedback-opacity--disabled;
    }
  }
}

.n-select__label {
  display: block;
  margin: 0;
  outline: none;
  padding: 0;
  width: 100%;
}

.n-select__icon-wrapper {
  flex-shrink: 0;
  margin-right: $ui-input-icon-margin-right;
  padding-top: $ui-input-icon-margin-top;

  .ui-icon {
    color: $ui-input-icon-color;
  }
}

.n-select__content {
  flex-grow: 1;
}

.n-select__label-text {
  color: $ui-input-label-color;
  cursor: default;
  font-size: $ui-input-label-font-size;
  line-height: $ui-input-label-line-height;
  margin-bottom: $ui-input-label-margin-bottom;
  transform-origin: left;
  transition: color 0.1s ease, transform 0.2s ease;
}

.n-select__display {
  align-items: center;
  border: none;
  border-bottom-color: $ui-input-border-color;
  border-bottom-style: solid;
  border-bottom-width: $ui-input-border-width;
  color: $ui-input-text-color;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: $ui-input-text-font-size;
  font-weight: normal;
  min-height: $ui-input-height;
  padding: 0;
  transition: border 0.1s ease;
  user-select: none;
  width: 100%;
}

.n-select__display-value {
  flex-grow: 1;

  &.is-placeholder {
    color: $hint-text-color;
  }
}

.n-select__dropdown-button {
  color: $ui-input-button-color;
  font-size: $ui-input-button-size;
  margin-left: auto;
  margin-right: rem(-4px);
}

.n-select__dropdown {
  display: block;
  list-style-type: none;
  margin: 0;
  margin-bottom: rem(8px);
  min-width: rem(180px);
  outline: none;
  padding: 0;
  width: 100%;
}

.n-select__dropdown-content {
  outline: none;
}

.n-select__search-input {
  background: none;
  border: none;
  border-bottom-color: $ui-input-border-color;
  border-bottom-style: solid;
  border-bottom-width: $ui-input-border-width;
  border-radius: 0;
  color: $ui-input-text-color;
  cursor: auto;
  font-family: inherit;
  font-size: $ui-input-text-font-size - rem(1px);
  font-weight: normal;
  height: $ui-input-height + rem(4px);
  outline: none;
  padding: rem(0 12px);
  padding-left: rem(40px);
  transition: border 0.1s ease;
  width: 100%;

  // Hide Edge and IE input clear button
  &::-ms-clear {
    display: none;
  }

  &:focus + .n-select__search-icon {
    color: $ui-input-label-color--active;
  }
}

.n-select__search {
  .n-select__search-icon,
  .n-select__search-progress {
    position: absolute;
    top: 20%;
  }
  background: #fff;
}

.n-select__search-icon {
  color: $ui-input-icon-color;
  font-size: rem(20px);
  left: rem(12px);
}

.n-select__search-progress {
  right: rem(12px);
}

.n-select__options {
  background-color: white;
  color: $primary-text-color;
  display: block;
  list-style-type: none;
  margin: 0;
  max-height: rem(256px);
  min-width: 100%;
  overflow-y: auto;
  padding: 0;
  position: relative;
}

.n-select__no-results {
  color: $secondary-text-color;
  font-size: rem(14px);
  padding: rem(8px 12px);
  width: 100%;
}

.n-select__feedback {
  color: $ui-input-feedback-color;
  font-size: $ui-input-feedback-font-size;
  line-height: $ui-input-feedback-line-height;
  margin: 0;
  padding-top: $ui-input-feedback-padding-top;
  position: relative;
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

// ================================================
// Icon Positions
// ================================================

.n-select--icon-position-right {
  .n-select__icon-wrapper {
    margin-left: rem(8px);
    margin-right: 0;
    order: 1;
  }
}

@import "@/assets/sass/config.scss";

.n-select .n-select__label-text {
  @extend .form-label-style;
}

.n-select .n-select__display {
  color: $form-color;
}
n-select.is-active:not(.is-disabled) .n-select__label-text,
.n-select.is-active:not(.is-disabled) .n-select__icon-wrapper .ui-icon {
  color: $form-color-active;
}

.n-select.n-select.is-active:not(.is-disabled) .n-select__display {
  border-bottom-color: $form-color-active;
}

.n-select.n-select.is-invalid:not(.is-disabled) .n-select__label-text,
.n-select.n-select.is-invalid:not(.is-disabled) .n-select__icon-wrapper .ui-icon {
  color: $form-color-invalid;
}
.n-select.n-select.is-invalid:not(.is-disabled) .n-select__display {
  border-bottom-color: $form-color-invalid;
}
.n-select.n-select.is-invalid:not(.is-disabled) .n-select__feedback {
  color: $form-color-invalid;
}

.n-select-option.is-selected {
  color: $form-color-active !important;
}

.n-select-option.is-selected .n-select-option__checkbox {
  color: $form-color-active !important;
}
</style>
