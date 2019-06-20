<template>
  <div class="ui-calendar" :class="classes">
    <n-calendar-controls
      ref="controls"
      class="ui-calendar__header"
      :color="color"
      :date-in-view="dateInView"
      :lang="lang"
      @go-to-date="goToDate"
    ></n-calendar-controls>

    <div class="ui-calendar__body">
      <n-calendar-month
        ref="month"
        :color="color"
        :date-in-view="dateInView"
        :lang="lang"
        :selected="value"
        :start-of-week="startOfWeek"
        :square-cells="squareCells"
        @change="onMonthChange"
        @date-select="onDateSelect"
      >
        <template slot="date" slot-scope="props">
          <slot v-if="$scopedSlots.date" name="date" :date="props.date"></slot>
          <template v-else>{{ props.date.getDate() }}</template>
        </template>
      </n-calendar-month>
    </div>
  </div>
</template>

<script>
import NCalendarControls from "./NCalendarControls.vue";
import NCalendarMonth from "./NCalendarMonth.vue";

import dateUtils from "../helpers/date";

export default {
  name: "UiCalendar",

  components: {
    NCalendarControls,
    NCalendarMonth
  },

  props: {
    color: {
      type: String,
      default: "default" // 'default', 'primary' or 'accent'
    },
    dateFilter: Function,
    lang: {
      type: Object,
      default() {
        return dateUtils.defaultLang;
      }
    },
    maxDate: Date,
    minDate: Date,
    raised: {
      type: Boolean,
      default: false
    },
    startOfWeek: {
      type: Number,
      default: 0
    },
    squareCells: {
      type: Boolean,
      default: false
    },
    value: Date,
    yearRange: {
      type: Array,
      default() {
        const thisYear = new Date().getFullYear();

        // Generates a range of 200 years
        // (100 years into the past and 100 years into the future, including the current year)
        return Array.apply(null, Array(200)).map((item, index) => {
          return thisYear - 100 + index;
        });
      }
    }
  },

  data() {
    return {
      today: new Date(),
      dateInView: this.value || new Date()
    };
  },

  computed: {
    classes() {
      return [`ui-calendar--color-${this.color}`, { "is-raised": this.raised }];
    }
  },

  watch: {
    value() {
      if (this.value) {
        this.dateInView = dateUtils.clone(this.value);
      }
    }
  },

  methods: {
    onDateSelect(date) {
      this.$emit("input", date);
      this.$emit("date-select", date);
    },

    onMonthChange(newDate) {
      this.dateInView = newDate;
      this.$emit("month-change", newDate);
    },

    goToDate(date) {
      this.$refs.month.goToDate(date);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/imports.scss";

$ui-calendar-padding: rem(8px) !default;

.ui-calendar {
  border-radius: 3px;
  color: $primary-text-color;
  font-family: $font-stack;
  overflow: hidden;

  &.is-raised {
    box-shadow: 0 0 2px rgba(black, 0.12), 0 2px 2px rgba(black, 0.2);

    .ui-calendar__body {
      border: none;
    }
  }

  .ui-calendar__header {
    height: $ui-calendar-controls-height + rem(8px);
    padding-left: rem(8px);
    padding-right: rem(8px);
  }
}

.ui-calendar__body {
  border-radius: 0 0 3px 3px;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: rem(8px);
  padding-top: rem(4px);
  border: 1px solid #eee;
  border-top: 0;
}
</style>
