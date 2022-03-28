<template>
  <div tabindex="-1" class="n-datepicker" :class="classes">
    <div class="n-datepicker__content">
      <div
        class="n-datepicker__display-value"
        :class="{ 'is-placeholder': !hasDisplayText }"
        @click="onClick($event)"
      >
        <n-textbox
          ref="textbox"
          v-model="inputDate"
          :label="label"
          :help="help"
          :disabled="disabled"
          :invalid="invalid"
          :error="error"
          :name="name"
          autocomplete="off"
          :placeholder="placeholder"
          :readonly="!textInput"
          :clearable="clearable"
          @focus="onFocus"
          @clear="clear"
          @keydown.tab="onBlur"
          @input="onUpdateInput"
        >
        </n-textbox>
      </div>

      <div class="">
        <n-popover
          v-if="usesPopover"
          v-show="!disabled"
          ref="popover"
          tabindex="-1"
          :append-to-body="true"
          open-on="manual"
          :close-on-scroll="false"
          @close="onPickerClose"
          @open="onPickerOpen"
        >
          <n-calendar
            :color="color"
            :date-filter="dateFilter"
            :lang="lang"
            :has-year="hasYear"
            :max-date="maxDate"
            :min-date="minDate"
            :orientation="orientation"
            :value="date"
            :start-of-week="startOfWeek"
            @date-select="onDateSelect"
          ></n-calendar>
        </n-popover>
      </div>
    </div>
  </div>
</template>

<script>
import NCalendar from './NCalendar.vue';
import NPopover from './NPopover.vue';
import NTextbox from './NTextbox.vue';
import { defaultLang, humanize } from '../helpers/date';

export default {
  name: 'NDatepicker',
  title: 'Datepicker',
  components: {
    NCalendar,
    NTextbox,
    NPopover,
  },

  props: {
    name: String,
    value: [Date, String],
    tabindex: [String, Number],
    startOfWeek: {
      type: Number,
      default: 0,
    },
    minDate: Date,
    maxDate: Date,
    yearRange: Array,
    lang: {
      type: Object,
      default() {
        return defaultLang;
      },
    },
    customFormatter: Function,
    dateFilter: Function,
    color: {
      type: String,
      default: 'primary', // 'primary' or 'accent'
    },
    orientation: {
      type: String,
      default: 'portrait', // 'portrait' or 'landscape'
    },
    pickerType: {
      type: String,
      default: 'popover', // 'popover' or 'modal'
    },
    okButtonText: {
      type: String,
      default: 'OK',
    },
    cancelButtonText: {
      type: String,
      default: 'Cancel',
    },
    placeholder: String,
    defaultDate: Date,
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
    clearable: {
      type: Boolean,
      default: false,
    },
    textInput: {
      type: Boolean,
      default: true,
    },
    hasYear: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      isActive: false,
      isTouched: false,
      isTextBox: false,
      valueAtModalOpen: null,
      initialValue: JSON.stringify(this.value),
      inputDate: humanize(this.value),
    };
  },

  computed: {
    date() {
      return typeof this.value === 'string' ? new Date(this.value) : this.value;
    },

    classes() {
      return [
        `n-datepicker--icon-position-${this.iconPosition}`,
        `n-datepicker--orientation-${this.orientation}`,
        { 'is-active': this.isActive },
        { 'is-invalid': this.invalid },
        { 'is-touched': this.isTouched },
        { 'is-disabled': this.disabled },
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
      return !this.date && !this.isActive;
    },

    hasFeedback() {
      return this.showError || this.showHelp;
    },

    showError() {
      return (
        this.invalid && (Boolean(this.error) || Boolean(this.$slots.error))
      );
    },

    showHelp() {
      return Boolean(this.help) || Boolean(this.$slots.help);
    },

    displayText() {
      if (!this.date) {
        return '';
      }

      return this.customFormatter
        ? this.customFormatter(this.date, this.lang)
        : humanize(this.date, this.lang);
    },

    hasDisplayText() {
      return Boolean(this.displayText.length);
    },

    usesPopover() {
      return this.pickerType === 'popover';
    },

    usesModal() {
      return this.pickerType === 'modal';
    },
  },
  watch: {
    value() {
      this.$emit('input', this.date);
    },
  },

  mounted() {
    document.addEventListener('click', this.onExternalClick);
  },

  unmounted() {
    document.removeEventListener('click', this.onExternalClick);
  },

  methods: {
    focusTextBox() {

    },
    isPickerOpen() {
      return this.usesModal
        ? this.$refs.modal.isOpen
        : this.$refs.popover.isOpen();
    },
    onDateSelect(date) {
      this.$emit('input', date.toISOString());
      console.log(date);
      this.inputDate = humanize(date.toISOString());
      this.$emit('change', date.toISOString());
      this.closePicker();
    },
    onUpdateInput() {
      const isValidDate = (dateObject) => new Date(dateObject)
        .toString() !== 'Invalid Date';

      if (this.inputDate === '') {
        this.$emit('input', null);
        return;
      }
      /* eslint-disable */
      const date = new Date(this.inputDate).toISOString();
      if (date) {
        if (isValidDate(date)) {
          this.$emit('input', date);
        }
        
      }
      /* eslint-enable */
    },

    togglePicker() {
      if (this.isPickerOpen()) {
        this.closePicker();
      } else {
        this.openPicker();
      }
    },

    openPicker() {
      if (this.disabled) {
        return;
      }

      this.$refs.popover.open();
    },

    closePicker() {
      if (this.usesPopover) {
        this.$refs.popover.close();
      }
    },

    onClick(event) {
      console.log(event);
      const clearable = document.getElementsByClassName('n-textbox__clearable');
      if (event.composedPath().includes(clearable[0])) {
        console.log('clearble');
        this.closePicker();

        return;
      }

      this.togglePicker();
    },

    onFocus(e) {
      // if (this.usesPopover && !this.$refs.popover.isOpen()) {
      //   return;
      // }
      this.isActive = true;

      this.$emit('focus', e);
      if (this.isPickerOpen()) {
        this.closePicker({ returnFocus: false });
      }
    },

    onBlur(e) {
      this.isActive = false;
      this.$emit('blur', e);
      if (this.usesPopover && this.$refs.popover.isOpen()) {
        this.closePicker({ autoBlur: true });
      }
    },

    onPickerOpen() {
      if (!this.value && this.defaultDate) {
        this.$emit('input', this.defaultDate);
      }

      this.isActive = true;
      this.$emit('open');
    },

    onPickerClose() {
      this.$emit('close');
      this.$emit('close');
      if (!this.isTouched) {
        this.isTouched = true;
        this.$emit('touch');
      }
    },

    onPickerCancel() {
      this.$emit('input', this.valueAtModalOpen);
      this.$refs.modal.close();
    },

    onExternalClick(e) {
      if (this.disabled) {
        return;
      }

      const clickWasInternal = this.$el.contains(e.target)
        || this.$refs[this.usesPopover ? 'popover' : 'modal'].$el.contains(
          e.target,
        );

      if (clickWasInternal) {
        return;
      }

      this.isActive = false;
    },

    clear() {
      this.$emit('input', null);
      this.inputDate = null;
      this.$emit('change', null);
      this.$emit('clear');
      setTimeout(() => {
        this.closePicker({ autoBlur: true });
      }, 0);
    },

    reset() {
      this.$emit('input', JSON.parse(this.initialValue));
    },

    resetTouched(options = { touched: false }) {
      this.isTouched = options.touched;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/imports.scss";

@import "@/assets/sass/config.scss";

.n-datepicker .n-datepicker__label-text {
  @extend .form-label-style;
}

.n-datepicker .n-datepicker__display {
  color: $form-color;
}

.n-datepicker.is-active:not(.is-disabled) .n-datepicker__label-text,
.n-datepicker.is-active:not(.is-disabled) .n-datepicker__icon-wrapper .ui-icon {
  color: $form-color-active;
}

.n-datepicker.is-active:not(.is-disabled) .n-datepicker__display {
  border-bottom-color: $form-color-active;
}

.n-datepicker.is-invalid:not(.is-disabled) .n-datepicker__label-text,
.n-datepicker.is-invalid:not(.is-disabled)
  .n-datepicker__icon-wrapper
  .ui-icon {
  color: $form-color-invalid;
}
.n-datepicker.is-invalid:not(.is-disabled) .n-datepicker__display {
  border-bottom-color: $form-color-invalid;
}
.n-datepicker.is-invalid:not(.is-disabled) .n-datepicker__feedback {
  color: $form-color-invalid;
}

.n-calendar-month__header {
  background: #0ab4b1;
  span {
    color: #fff !important;
    font-weight: 600;
  }
}

.n-calendar__body {
  padding: 0 !important;
  // height: 16rem !important;
  background: #fff;
}

.n-calendar-controls {
  background: #5b5b5b;
  color: #fff;
  text-transform: uppercase;
}
.n-calendar-week {
  border-bottom: 1px solid #0ab4b1;
}
.n-calendar-month__week {
  width: 17rem !important;
}
.n-calendar-month {
  .n-calendar-month__week.is-other {
    left: 17rem;
  }
}
.n-calendar-week__date {
  border-radius: 0 !important;
  border-right: 1px solid #0ab4b1;
  height: 2.4rem !important;
  width: 2.4rem !important;
}
.n-calendar-week__date.is-in-other-month {
  visibility: visible !important;
  background: #f9f9f9;
}

.n-calendar__header-details {
  display: none !important;
}

.n-calendar__header-year {
  margin-bottom: 0 !important;
  text-align: center;
  font-size: 1rem;
}

.n-calendar__header {
  padding: 0.6rem 0 !important;
  background-color: #292f2f !important;
}

.n-calendar--color-primary .n-calendar__year:hover,
body[modality="keyboard"] .n-calendar--color-primary .n-calendar__year:focus {
  color: $form-color-active !important;
}
.n-calendar--color-primary .n-calendar__year.is-selected {
  color: $form-color-active !important;
}
.n-calendar--color-primary .n-calendar-week__date.is-today {
  font-weight: 600 !important;
}
.n-calendar--color-primary .n-calendar-week__date.is-selected,
body[modality="keyboard"]
  .n-calendar--color-primary
  .n-calendar-week__date.is-selected {
  background-color: $form-color-active !important;
  color: #fff;
}

.n-datepicker {
  align-items: flex-start;
  display: flex;
  
  margin-bottom: $ui-input-margin-bottom;
  outline: none;
  position: relative;

  &:hover:not(.is-disabled) {
    .n-datepicker__label-text {
      color: $ui-input-label-color--hover;
    }

    .n-datepicker__display {
      border-bottom-color: $ui-input-border-color--hover;
    }

    .n-datepicker__dropdown-button {
      color: $ui-input-button-color--hover;
    }
  }

  &.is-active:not(.is-disabled) {
    .n-datepicker__label-text,
    .n-datepicker__icon-wrapper .ui-icon {
      color: $ui-input-label-color--active;
    }

    .n-datepicker__display {
      border-bottom-color: $ui-input-border-color--active;
      border-bottom-width: $ui-input-border-width--active;
    }
  }

  &.has-floating-label {
    .n-datepicker__label-text {
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
    .n-datepicker__icon-wrapper {
      padding-top: $ui-input-icon-margin-top--with-label;
    }

    .n-datepicker__dropdown-button {
      top: $ui-input-button-margin-top--with-label;
    }
  }

  &.is-invalid:not(.is-disabled) {
    .n-datepicker__label-text,
    .n-datepicker__icon-wrapper .ui-icon {
      color: $ui-input-label-color--invalid;
    }

    .n-datepicker__display {
      border-bottom-color: $ui-input-border-color--invalid;
    }

    .n-datepicker__feedback {
      color: $ui-input-feedback-color--invalid;
    }
  }

  &.is-disabled {
    .n-datepicker__display {
      border-bottom-style: $ui-input-border-style--disabled;
      border-bottom-width: $ui-input-border-width--active;
      color: $ui-input-text-color--disabled;
      cursor: default;
    }

    .n-datepicker__dropdown-button,
    .n-datepicker__display-value.is-placeholder {
      color: $ui-input-text-color--disabled;
      opacity: $ui-input-button-opacity--disabled;
    }

    .n-datepicker__icon-wrapper .ui-icon {
      opacity: $ui-input-icon-opacity--disabled;
    }

    .n-datepicker__feedback {
      opacity: $ui-input-feedback-opacity--disabled;
    }
  }

  .ui-modal:not(.has-footer) .ui-modal__body {
    padding: 0;

    .n-calendar__body {
      height: rem(348px);
    }
  }

  .ui-modal__container {
    width: rem(268px);
  }
}

.n-datepicker__label {
  display: block;
  margin: 0;
  outline: none;
  padding: 0;
  position: relative;
  width: 100%;
}

.n-datepicker__icon-wrapper {
  flex-shrink: 0;
  margin-right: $ui-input-icon-margin-right;
  padding-top: $ui-input-icon-margin-top;

  .ui-icon {
    color: $ui-input-icon-color;
  }
}

.n-datepicker__content {
  flex-grow: 1;
}

.n-datepicker__label-text {
  color: $ui-input-label-color;
  cursor: default;
  font-size: $ui-input-label-font-size;
  line-height: $ui-input-label-line-height;
  margin-bottom: $ui-input-label-margin-bottom;
  transform-origin: left;
  transition: color 0.1s ease, transform 0.2s ease;
}

.n-datepicker__display {
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
  height: $ui-input-height;
  line-height: 1;
  padding: 0;
  transition: border 0.1s ease;
  user-select: none;
  width: 100%;
}

.n-datepicker__display-value {
  flex-grow: 1;

  &.is-placeholder {
    color: $hint-text-color;
  }
}

.n-datepicker__dropdown-button {
  color: $ui-input-button-color;
  font-size: $ui-input-button-size;
  margin-left: auto;
  margin-right: rem(-4px);
}

.n-datepicker__feedback {
  color: $ui-input-feedback-color;
  font-size: $ui-input-feedback-font-size;
  line-height: $ui-input-feedback-line-height;
  margin: 0;
  padding-top: $ui-input-feedback-padding-top;
  position: relative;
}

.n-datepicker__modal-buttons {
  display: flex;
  justify-content: flex-end;

  .ui-button {
    min-width: rem(64px);
  }
}

// ================================================
// Icon Positions
// ================================================

.n-datepicker--icon-position-right {
  .n-datepicker__icon-wrapper {
    margin-left: rem(8px);
    margin-right: 0;
    order: 1;
  }
}

// ================================================
// Orientations
// ================================================

.n-datepicker--orientation-landscape {
  .ui-modal__container {
    width: rem(396px);
  }
}

.n-datepicker .n-textbox.is-disabled .n-textbox__input,
.n-datepicker .n-textbox.is-disabled .n-textbox__textarea {
  border-bottom-style: solid;
  color: #231f20;
  &:focus {
    border-color: red;
  }
}
</style>
