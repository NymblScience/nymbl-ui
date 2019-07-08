<template>
  <div tabindex="-1" class="ui-datepicker n-datepicker" :class="classes">
    <!-- <div v-if="icon || $slots.icon" class="ui-datepicker__icon-wrapper">
      <slot name="icon">
        <ui-icon :icon="icon"></ui-icon>
      </slot>
    </div> -->

    <div class="ui-datepicker__content">
      <div
        class="ui-datepicker__display-value"
        :class="{ 'is-placeholder': !hasDisplayText }"
      >
        <n-textbox
          ref="textbox"
          v-model="inputDate"
          :label="label"
          :error="error"
          :help="help"
          :name="name"
          :placeholder="placeholder"
          @focus="onFocus"
          @click.native="onClick"
          @keydown.tab="onBlur"
          @keydown.enter.prevent="openPicker"
          @keydown.space.prevent="openPicker"
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
          :ignore-on-click="'red'"
          @close="onPickerClose"
          @open="onPickerOpen"
        >
          <n-calendar
            :color="color"
            :date-filter="dateFilter"
            :lang="lang"
            :max-date="maxDate"
            :min-date="minDate"
            :orientation="orientation"
            :value="date"
            :start-of-week="startOfWeek"
            @date-select="onDateSelect"
          ></n-calendar>
        </n-popover>
      </div>
      <!-- 
      <div v-if="hasFeedback" class="ui-datepicker__feedback">
        <div v-if="showError" class="ui-datepicker__feedback-text">
          <slot name="error">{{ error }}</slot>
        </div>

        <div v-else-if="showHelp" class="ui-datepicker__feedback-text">
          <slot name="help">{{ help }}</slot>
        </div>
      </div> -->
    </div>

    <!-- <ui-modal
      v-if="usesModal && !disabled"
      ref="modal"
      remove-header
      @close="onPickerClose"
      @open="onPickerOpen"
    >
      <ui-calendar
        :color="color"
        :date-filter="dateFilter"
        :lang="lang"
        :max-date="maxDate"
        :min-date="minDate"
        :orientation="orientation"
        :value="date"
        :start-of-week="startOfWeek"
        @date-select="onDateSelect"
      >
        <div slot="footer" class="ui-datepicker__modal-buttons">
          <ui-button
            type="secondary"
            :color="color"
            @click="$refs.modal.close()"
            >{{ okButtonText }}</ui-button
          >

          <ui-button type="secondary" :color="color" @click="onPickerCancel">{{
            cancelButtonText
          }}</ui-button>
        </div>
      </ui-calendar>
    </ui-modal> -->
  </div>
</template>

<script>
// import UiButton from "./UiButton.vue";
import NCalendar from "./NCalendar.vue";
// import UiIcon from "./UiIcon.vue";
// import UiModal from "./UiModal.vue";
import NPopover from "./NPopover.vue";
import NTextbox from "./NTextbox.vue";
import dateUtils from "../helpers/date";

export default {
  name: "NDatepicker",

  components: {
    // UiButton,
    NCalendar,
    // UiIcon,
    // UiModal,
    NTextbox,
    NPopover
  },

  props: {
    name: String,
    value: [Date, String],
    tabindex: [String, Number],
    startOfWeek: {
      type: Number,
      default: 0
    },
    minDate: Date,
    maxDate: Date,
    yearRange: Array,
    lang: {
      type: Object,
      default() {
        return dateUtils.defaultLang;
      }
    },
    customFormatter: Function,
    dateFilter: Function,
    color: {
      type: String,
      default: "primary" // 'primary' or 'accent'
    },
    orientation: {
      type: String,
      default: "portrait" // 'portrait' or 'landscape'
    },
    pickerType: {
      type: String,
      default: "popover" // 'popover' or 'modal'
    },
    okButtonText: {
      type: String,
      default: "OK"
    },
    cancelButtonText: {
      type: String,
      default: "Cancel"
    },
    placeholder: String,
    defaultDate: String,
    icon: String,
    iconPosition: {
      type: String,
      default: "left" // 'left' or 'right'
    },
    label: String,
    floatingLabel: {
      type: Boolean,
      default: false
    },
    invalid: {
      type: Boolean,
      default: false
    },
    help: String,
    error: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isActive: false,
      isTouched: false,
      isTextBox: false,
      valueAtModalOpen: null,
      initialValue: JSON.stringify(this.value),
      inputDate: dateUtils.humanize(this.value)
    };
  },

  computed: {
    date() {
      return typeof this.value === "string" ? new Date(this.value) : this.value;
    },

    classes() {
      return [
        `ui-datepicker--icon-position-${this.iconPosition}`,
        `ui-datepicker--orientation-${this.orientation}`,
        { "is-active": this.isActive },
        { "is-invalid": this.invalid },
        { "is-touched": this.isTouched },
        { "is-disabled": this.disabled },
        { "has-label": this.hasLabel },
        { "has-floating-label": this.hasFloatingLabel }
      ];
    },

    labelClasses() {
      return {
        "is-inline": this.hasFloatingLabel && this.isLabelInline,
        "is-floating": this.hasFloatingLabel && !this.isLabelInline
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
        return "";
      }

      return this.customFormatter
        ? this.customFormatter(this.date, this.lang)
        : dateUtils.humanize(this.date, this.lang);
    },

    hasDisplayText() {
      return Boolean(this.displayText.length);
    },

    submittedValue() {
      return this.date
        ? `${this.date.getFullYear()}-${1 +
            this.date.getMonth()}-${this.date.getDate()}`
        : "";
    },

    usesPopover() {
      return this.pickerType === "popover";
    },

    usesModal() {
      return this.pickerType === "modal";
    }
  },

  mounted() {
    document.addEventListener("click", this.onExternalClick);
  },

  beforeDestroy() {
    document.removeEventListener("click", this.onExternalClick);
  },

  methods: {
    focusTextBox() {
      return;
    },
    onDateSelect(date) {
      this.$emit("input", date);
      this.inputDate = dateUtils.humanize(date);
      this.closePicker();
    },
    onUpdateInput() {
      let date = new Date(this.inputDate);
      if (!isNaN(date.getTime())) {
        this.$emit("input", date);
      }
    },
    openPicker() {
      if (this.disabled) {
        return;
      }
      this.$refs[this.usesModal ? "modal" : "popover"].open();
    },

    closePicker(options = { autoBlur: false }) {
      if (this.usesPopover) {
        this.$refs.popover.close();
      }

      if (options.autoBlur) {
        this.isActive = false;
      } else {
        // this.$refs.textbox.$refs.textbox.focus();
      }
    },

    onClick() {
      // this.$refs.textbox.$refs.textbox.focus();
      // console.log());
      // if (!this.$refs.popover.isOpen()) {
      //   this.isActive = true;
      //   this.openPicker();
      // }
      // if (this.usesModal && !this.disabled) {
      //   this.$refs.modal.open();
      // }
    },

    onFocus() {
      // if (this.usesPopover && !this.$refs.popover.isOpen()) {

      // }
      this.isActive = true;
      this.openPicker();
      // this.$emit("focus", e);
    },

    onBlur(e) {
      this.isActive = false;
      this.$emit("blur", e);
      if (this.usesPopover && this.$refs.popover.isOpen()) {
        this.closePicker({ autoBlur: true });
      }
    },

    onPickerOpen() {
      if (this.usesModal) {
        this.valueAtModalOpen = this.date ? dateUtils.clone(this.date) : null;
      }

      if (!this.value && this.defaultDate) {
        this.$emit("input", this.defaultDate);
      }

      this.isActive = true;
      this.$emit("open");
    },

    onPickerClose() {
      this.$emit("close");

      if (!this.isTouched) {
        this.isTouched = true;
        this.$emit("touch");
      }
    },

    onPickerCancel() {
      this.$emit("input", this.valueAtModalOpen);
      this.$refs.modal.close();
    },

    onExternalClick(e) {
      if (this.disabled) {
        return;
      }

      const clickWasInternal =
        this.$el.contains(e.target) ||
        this.$refs[this.usesPopover ? "popover" : "modal"].$el.contains(
          e.target
        );

      if (clickWasInternal) {
        return;
      }

      if (this.isActive) {
        this.isActive = false;
      }
    },

    clear() {
      this.$emit("input", null);
    },

    reset() {
      this.$emit("input", JSON.parse(this.initialValue));
    },

    resetTouched(options = { touched: false }) {
      this.isTouched = options.touched;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/imports.scss";

@import "@/assets/sass/config.scss";

.n-datepicker .ui-datepicker__label-text {
  @extend .form-label-style;
}

.n-datepicker .ui-datepicker__display {
  color: $form-color;
}

.n-datepicker.ui-datepicker.is-active:not(.is-disabled)
  .ui-datepicker__label-text,
.ui-datepicker.is-active:not(.is-disabled)
  .ui-datepicker__icon-wrapper
  .ui-icon {
  color: $form-color-active;
}

.n-datepicker.ui-datepicker.is-active:not(.is-disabled)
  .ui-datepicker__display {
  border-bottom-color: $form-color-active;
}

.n-datepicker.ui-datepicker.is-invalid:not(.is-disabled)
  .ui-datepicker__label-text,
.n-datepicker.ui-datepicker.is-invalid:not(.is-disabled)
  .ui-datepicker__icon-wrapper
  .ui-icon {
  color: $form-color-invalid;
}
.n-datepicker.ui-datepicker.is-invalid:not(.is-disabled)
  .ui-datepicker__display {
  border-bottom-color: $form-color-invalid;
}
.n-datepicker.ui-datepicker.is-invalid:not(.is-disabled)
  .ui-datepicker__feedback {
  color: $form-color-invalid;
}

.ui-calendar-month__header {
  background: #0ab4b1;
  span {
    color: #fff !important;
    font-weight: 600;
  }
}

.ui-calendar__body {
  padding: 0 !important;
  // height: 16rem !important;
  background: #fff;
}

.ui-calendar-controls {
  background: #5b5b5b;
  color: #fff;
  text-transform: uppercase;
}
.ui-calendar-week {
  border-bottom: 1px solid #0ab4b1;
}
.ui-calendar-month__week {
  width: 17rem !important;
}
.ui-calendar-month {
  .ui-calendar-month__week.is-other {
    left: 17rem;
  }
}
.ui-calendar-week__date {
  border-radius: 0 !important;
  border-right: 1px solid #0ab4b1;
  height: 2.4rem !important;
  width: 2.4rem !important;
}
.ui-calendar-week__date.is-in-other-month {
  visibility: visible !important;
  background: #f9f9f9;
}

.ui-calendar__header-details {
  display: none !important;
}

.ui-calendar__header-year {
  margin-bottom: 0 !important;
  text-align: center;
  font-size: 1rem;
}

.ui-calendar__header {
  padding: 0.6rem 0 !important;
  background-color: #292f2f !important;
}

.ui-calendar--color-primary .ui-calendar__year:hover,
body[modality="keyboard"] .ui-calendar--color-primary .ui-calendar__year:focus {
  color: $form-color-active !important;
}
.ui-calendar--color-primary .ui-calendar__year.is-selected {
  color: $form-color-active !important;
}
.ui-calendar--color-primary .ui-calendar-week__date.is-today {
  color: $form-color-active !important;
}
.ui-calendar--color-primary .ui-calendar-week__date.is-selected,
body[modality="keyboard"]
  .ui-calendar--color-primary
  .ui-calendar-week__date.is-selected {
  background-color: $form-color-active !important;
  color: #fff;
}

.ui-datepicker {
  align-items: flex-start;
  display: flex;
  font-family: $font-stack;
  margin-bottom: $ui-input-margin-bottom;
  outline: none;
  position: relative;

  &:hover:not(.is-disabled) {
    .ui-datepicker__label-text {
      color: $ui-input-label-color--hover;
    }

    .ui-datepicker__display {
      border-bottom-color: $ui-input-border-color--hover;
    }

    .ui-datepicker__dropdown-button {
      color: $ui-input-button-color--hover;
    }
  }

  &.is-active:not(.is-disabled) {
    .ui-datepicker__label-text,
    .ui-datepicker__icon-wrapper .ui-icon {
      color: $ui-input-label-color--active;
    }

    .ui-datepicker__display {
      border-bottom-color: $ui-input-border-color--active;
      border-bottom-width: $ui-input-border-width--active;
    }
  }

  &.has-floating-label {
    .ui-datepicker__label-text {
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
    .ui-datepicker__icon-wrapper {
      padding-top: $ui-input-icon-margin-top--with-label;
    }

    .ui-datepicker__dropdown-button {
      top: $ui-input-button-margin-top--with-label;
    }
  }

  &.is-invalid:not(.is-disabled) {
    .ui-datepicker__label-text,
    .ui-datepicker__icon-wrapper .ui-icon {
      color: $ui-input-label-color--invalid;
    }

    .ui-datepicker__display {
      border-bottom-color: $ui-input-border-color--invalid;
    }

    .ui-datepicker__feedback {
      color: $ui-input-feedback-color--invalid;
    }
  }

  &.is-disabled {
    .ui-datepicker__display {
      border-bottom-style: $ui-input-border-style--disabled;
      border-bottom-width: $ui-input-border-width--active;
      color: $ui-input-text-color--disabled;
      cursor: default;
    }

    .ui-datepicker__dropdown-button,
    .ui-datepicker__display-value.is-placeholder {
      color: $ui-input-text-color--disabled;
      opacity: $ui-input-button-opacity--disabled;
    }

    .ui-datepicker__icon-wrapper .ui-icon {
      opacity: $ui-input-icon-opacity--disabled;
    }

    .ui-datepicker__feedback {
      opacity: $ui-input-feedback-opacity--disabled;
    }
  }

  .ui-modal:not(.has-footer) .ui-modal__body {
    padding: 0;

    .ui-calendar__body {
      height: rem(348px);
    }
  }

  .ui-modal__container {
    width: rem(268px);
  }
}

.ui-datepicker__label {
  display: block;
  margin: 0;
  outline: none;
  padding: 0;
  position: relative;
  width: 100%;
}

.ui-datepicker__icon-wrapper {
  flex-shrink: 0;
  margin-right: $ui-input-icon-margin-right;
  padding-top: $ui-input-icon-margin-top;

  .ui-icon {
    color: $ui-input-icon-color;
  }
}

.ui-datepicker__content {
  flex-grow: 1;
}

.ui-datepicker__label-text {
  color: $ui-input-label-color;
  cursor: default;
  font-size: $ui-input-label-font-size;
  line-height: $ui-input-label-line-height;
  margin-bottom: $ui-input-label-margin-bottom;
  transform-origin: left;
  transition: color 0.1s ease, transform 0.2s ease;
}

.ui-datepicker__display {
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

.ui-datepicker__display-value {
  flex-grow: 1;

  &.is-placeholder {
    color: $hint-text-color;
  }
}

.ui-datepicker__dropdown-button {
  color: $ui-input-button-color;
  font-size: $ui-input-button-size;
  margin-left: auto;
  margin-right: rem(-4px);
}

.ui-datepicker__feedback {
  color: $ui-input-feedback-color;
  font-size: $ui-input-feedback-font-size;
  line-height: $ui-input-feedback-line-height;
  margin: 0;
  padding-top: $ui-input-feedback-padding-top;
  position: relative;
}

.ui-datepicker__modal-buttons {
  display: flex;
  justify-content: flex-end;

  .ui-button {
    min-width: rem(64px);
  }
}

// ================================================
// Icon Positions
// ================================================

.ui-datepicker--icon-position-right {
  .ui-datepicker__icon-wrapper {
    margin-left: rem(8px);
    margin-right: 0;
    order: 1;
  }
}

// ================================================
// Orientations
// ================================================

.ui-datepicker--orientation-landscape {
  .ui-modal__container {
    width: rem(396px);
  }
}
</style>
