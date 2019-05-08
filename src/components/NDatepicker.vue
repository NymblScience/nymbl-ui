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
}

.ui-calendar__header {
  display: none;
}

.ui-calendar-controls {
  background: #5b5b5b;
  color: #fff;
  text-transform: uppercase;
}
.ui-calendar-week {
  border-bottom: 1px solid black;
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
  border-right: 1px solid black;
  height: 2.4rem !important;
  width: 2.4rem !important;
}
.ui-calendar-week__date.is-in-other-month {
  visibility: visible !important;
  background: #f1f1f1;
}
</style>
