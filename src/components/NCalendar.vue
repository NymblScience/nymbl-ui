<template>
  <div class="ui-calendar" :class="classes">
    <div v-if="!isStatic" class="ui-calendar__header">
      <div
        class="ui-calendar__header-year"
        tabindex="0"
        :class="{ 'is-active': showYearPicker }"
        @click="showYearPicker = true"
        @keydown.enter="showYearPicker = true"
      >
        {{ headerYear }}
      </div>
    </div>

    <div class="ui-calendar__body">
      <ul v-show="showYearPicker" ref="years" class="ui-calendar__years">
        <!-- eslint-disable -->
        <li
          v-for="year in yearRange"
          v-if="!isYearOutOfRange(year)"
          class="ui-calendar__year"
          tabindex="0"
          :class="getYearClasses(year)"
          @click="selectYear(year)"
          @keydown.enter="selectYear(year)"
        >
          {{ year }}
        </li>
          <!-- eslint-enable -->
      </ul>

      <div v-show="!showYearPicker">
        <n-calendar-controls
          ref="controls"
          :is-static="isStatic"
          :date-in-view="dateInView"
          :lang="lang"
          :max-date="maxDate"
          :min-date="minDate"
          @go-to-date="onGoToDate"
        ></n-calendar-controls>

        <n-calendar-month
          ref="month"
          :date-filter="dateFilter"
          :date-in-view="dateInView"
          :lang="lang"
          :max-date="maxDate"
          :min-date="minDate"
          :selected="value"
          :start-of-week="startOfWeek"
          @change="onMonthChange"
          @date-select="onDateSelect"
        ></n-calendar-month>
      </div>

      <div v-if="$slots.footer" class="ui-calendar__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import NCalendarControls from "./NCalendarControls.vue";
import NCalendarMonth from "./NCalendarMonth.vue";

import dateUtils from "../helpers/date";
import { scrollIntoView } from "../helpers/element-scroll";

export default {
  name: "UiCalendar",

  components: {
    NCalendarControls,
    NCalendarMonth
  },

  props: {
    value: Date,
    minDate: Date,
    maxDate: Date,
    isStatic: {
      type: Boolean,
      default: false
    },
    controls: {
      type: Boolean,
      default: true
    },
    startOfWeek: {
      type: Number,
      default: 0
    },
    lang: {
      type: Object,
      default() {
        return dateUtils.defaultLang;
      }
    },
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
    },
    dateFilter: Function,
    color: {
      type: String,
      default: "primary" // 'primary' or 'accent'
    },
    orientation: {
      type: String,
      default: "portrait" // 'portrait' or 'landscape'
    }
  },

  data() {
    return {
      today: new Date(),
      dateInView: this.getDateInRange(this.value, new Date()),
      showYearPicker: false
    };
  },

  computed: {
    classes() {
      return [
        `ui-calendar--color-${this.color}`,
        `ui-calendar--orientation-${this.orientation}`
      ];
    },

    headerYear() {
      return this.dateInView
        ? this.dateInView.getFullYear()
        : this.today.getFullYear();
    },

    headerDay() {
      return this.value
        ? dateUtils.getDayAbbreviated(this.value, this.lang)
        : dateUtils.getDayAbbreviated(this.today, this.lang);
    },

    headerDate() {
      const date = this.value ? this.value : this.today;

      return (
        dateUtils.getMonthAbbreviated(date, this.lang) +
        " " +
        dateUtils.getDayOfMonth(date, this.lang)
      );
    }
  },

  watch: {
    value() {
      if (this.value) {
        this.dateInView = dateUtils.clone(this.value);
      }
    },

    showYearPicker() {
      if (this.showYearPicker) {
        this.$nextTick(() => {
          const el =
            this.$refs.years.querySelector(".is-selected") ||
            this.$refs.years.querySelector(".is-current-year");

          scrollIntoView(el, { marginTop: 126 });
        });
      }
    }
  },

  methods: {
    selectYear(year) {
      const newDate = dateUtils.clone(this.dateInView);
      newDate.setFullYear(year);

      this.dateInView = this.getDateInRange(newDate);
      this.showYearPicker = false;
    },

    getDateInRange(date, fallback) {
      date = date || fallback;

      if (this.minDate && date.getTime() < this.minDate.getTime()) {
        return this.minDate;
      }

      if (this.maxDate && date.getTime() > this.maxDate.getTime()) {
        return this.maxDate;
      }

      return date;
    },

    getYearClasses(year) {
      return {
        "is-current-year": this.isYearCurrent(year),
        "is-selected": this.isYearSelected(year)
      };
    },

    isYearCurrent(year) {
      return year === this.today.getFullYear();
    },

    isYearSelected(year) {
      return this.dateInView && year === this.dateInView.getFullYear();
    },

    isYearOutOfRange(year) {
      if (this.minDate && year < this.minDate.getFullYear()) {
        return true;
      }

      if (this.maxDate && year > this.maxDate.getFullYear()) {
        return true;
      }

      return false;
    },

    onDateSelect(date) {
      this.$emit("input", date);
      this.$emit("date-select", date);
    },

    onGoToDate(date, options = { isForward: true }) {
      this.$refs.month.goToDate(date, options);
    },

    onMonthChange(newDate) {
      this.dateInView = newDate;
      this.$emit("month-change", newDate);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/imports.scss";

$ui-calendar-padding: rem(8px) !default;

.ui-calendar {
  color: $primary-text-color;
  font-family: $font-stack;
}

.ui-calendar__header {
  color: white;
  line-height: 1;
  padding: rem(16px);
}

.ui-calendar__header-year,
.ui-calendar__header-details {
  cursor: pointer;
  opacity: 0.75;
  transition: opacity 0.2s ease;

  &:hover,
  body[modality="keyboard"] &:focus,
  &.is-active {
    opacity: 1;
  }

  body[modality="keyboard"] &:focus {
    outline: 1px dotted white;
    outline-offset: 1px;
  }
}

.ui-calendar__header-year {
  font-size: rem(15px);
  font-weight: 600;
  margin-bottom: rem(8px);
}

.ui-calendar__header-details {
  font-size: rem(22px);
}

.ui-calendar__body {
  height: ($ui-calendar-cell-size * 6) + $ui-calendar-controls-height +
    $ui-calendar-month-header-height + ($ui-calendar-padding * 2);
  overflow: hidden;
  padding: $ui-calendar-padding;
  position: relative;
  width: ($ui-calendar-cell-size * 7) + ($ui-calendar-padding * 2);
}

.ui-calendar__years {
  height: rem(312px);
  list-style: none;
  margin: -$ui-calendar-padding;
  overflow-y: auto;
  padding: rem(8px 0);
}

.ui-calendar__year {
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: rem(16px);
  height: rem(36px);
  justify-content: center;
  outline: none;

  &.is-selected {
    font-size: rem(24px);
    font-weight: 600;
    height: rem(40px);
  }
}

// ================================================
// Orientations
// ================================================

.ui-calendar--orientation-landscape {
  display: flex;

  .ui-calendar__header {
    min-width: rem(128px);
  }

  .ui-calendar__header-date {
    margin-bottom: rem(12px);
  }

  .ui-calendar__header-date {
    display: block;
    padding-top: rem(4px);
  }
}

// ================================================
// Colors
// ================================================

.ui-calendar--color-primary {
  .ui-calendar__header {
    background-color: $brand-primary-color;
  }

  .ui-calendar__year {
    &:hover,
    body[modality="keyboard"] &:focus {
      color: $brand-primary-color;
    }

    &.is-selected {
      color: $brand-primary-color;
    }
  }

  .ui-calendar-week__date {
    &.is-today {
      color: $brand-primary-color;
    }

    &.is-selected,
    body[modality="keyboard"] &.is-selected {
      background-color: $brand-primary-color;
    }
  }
}

.ui-calendar--color-accent {
  .ui-calendar__header {
    background-color: $brand-accent-color;
  }

  .ui-calendar__year {
    &:hover,
    body[modality="keyboard"] &:focus {
      color: $brand-accent-color;
    }

    &.is-selected {
      color: $brand-accent-color;
    }
  }

  .ui-calendar-week__date {
    &.is-today {
      color: $brand-accent-color;
    }

    &.is-selected,
    body[modality="keyboard"] &.is-selected {
      background-color: $brand-accent-color;
    }
  }
}
</style>