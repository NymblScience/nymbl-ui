<template>
  <ui-datepicker
    class="n-datepicker"
    :disabled="disabled"
    :label="label"
    :placeholder="placeholder"
    v-bind="$attrs"
    :floating-label="floatingLabel"
    :help="help"
    :error="error"
    :invalid="invalid"
    :custom-format="customFormat"
    v-on="$listeners"
  >
    <slot />
  </ui-datepicker>
</template>
<script>
import "keen-ui/src/bootstrap"; // Required when using standalone components, should be imported only once in your project
import UiDatepicker from "keen-ui/lib/UiDatepicker";
export default {
  name: "NDatepicker",
  components: {
    UiDatepicker
  },
  props: {
    /**
     * Select Options
     */
    /**
     * The size of the button
     * `small, normal, large`
     */
    placeholder: {
      default: "",
      type: String
    },
    /**
     * `Custom Format date
     */
    customFormat: {
      default: () => {},
      type: Function
    },
    label: {
      default: "",
      type: String
    },
    help: {
      default: "",
      type: String
    },
    error: {
      default: "",
      type: String
    },
    floatingLabel: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    },
    invalid: {
      default: false,
      type: Boolean
    }
  }
};
</script>
<style lang="scss">
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
  height: 20rem !important;
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
  height: 18rem !important;
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
}
</style>
