<template>
  <div class="n-calendar" :class="classes">
    <div v-if="!isStatic && hasYear" class="n-calendar__header">
      <div
        class="n-calendar__header-year"
        tabindex="0"
        :class="{ 'is-active': showYearPicker }"
        @click="showYearPicker = true"
        @keydown.enter="showYearPicker = true"
      >
        {{ headerYear }}
      </div>
    </div>

    <div class="n-calendar__body">
      <ul v-show="showYearPicker" ref="years" class="n-calendar__years">
        <!-- eslint-disable -->
        <li
          v-for="year in yearRange"
          v-if="!isYearOutOfRange(year)"
          class="n-calendar__year font-bold text-gray-150 text-lg py-4"
          tabindex="0"
          :class="getYearClasses(year)"
          @click="selectYear(year)"
          @keydown.enter="selectYear(year)"
          :key="year"
        >
            {{ year }}
        </li>
          <!-- eslint-enable -->
      </ul>

      <div v-show="!showYearPicker">
        <n-calendar-controls
          ref="controls"
          :is-static="isStatic"
          :has-year="hasYear"
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

      <div v-if="$slots.footer" class="n-calendar__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import NCalendarControls from './NCalendarControls.vue';
import NCalendarMonth from './NCalendarMonth.vue';

import {
  defaultLang, getDayAbbreviated, getMonthAbbreviated, getDayOfMonth, clone,
} from '../helpers/date';
import { scrollIntoView } from '../helpers/element-scroll';

export default {
  name: 'NCalendar',

  components: {
    NCalendarControls,
    NCalendarMonth,
  },

  props: {
    value: Date,
    minDate: Date,
    maxDate: Date,
    isStatic: {
      type: Boolean,
      default: false,
    },
    hasYear: {
      type: Boolean,
      default: true,
    },
    controls: {
      type: Boolean,
      default: true,
    },
    startOfWeek: {
      type: Number,
      default: 0,
    },
    lang: {
      type: Object,
      default() {
        return defaultLang;
      },
    },
    yearRange: {
      type: Array,
      default() {
        const thisYear = new Date().getFullYear();
        /* eslint-disable  */
        // Generates a range of 200 years
        // (100 years into the past and 100 years into the future, including the current year)
        return Array.apply(null, Array(200)).map((item, index) => thisYear - 100 + index);
        /* eslint-enable  */
      },
    },
    dateFilter: Function,
    color: {
      type: String,
      default: 'primary', // 'primary' or 'accent'
    },
    orientation: {
      type: String,
      default: 'portrait', // 'portrait' or 'landscape'
    },
  },

  data() {
    return {
      today: new Date(),
      dateInView: this.getDateInRange(this.value, new Date()),
      showYearPicker: false,
    };
  },

  computed: {
    classes() {
      return [
        `n-calendar--color-${this.color}`,
        `n-calendar--orientation-${this.orientation}`,
      ];
    },

    headerYear() {
      return this.dateInView
        ? this.dateInView.getFullYear()
        : this.today.getFullYear();
    },

    headerDay() {
      return this.value
        ? getDayAbbreviated(this.value, this.lang)
        : getDayAbbreviated(this.today, this.lang);
    },

    headerDate() {
      const date = this.value ? this.value : this.today;

      return (
        `${getMonthAbbreviated(date, this.lang)
        } ${
          getDayOfMonth(date, this.lang)}`
      );
    },
  },

  watch: {
    value() {
      if (this.value) {
        this.dateInView = clone(this.value);
      }
    },

    showYearPicker() {
      if (this.showYearPicker) {
        this.$nextTick(() => {
          const el = this.$refs.years.querySelector('.is-selected')
            || this.$refs.years.querySelector('.is-current-year');

          scrollIntoView(el, { marginTop: 126 });
        });
      }
    },
  },

  methods: {
    selectYear(year) {
      const newDate = clone(this.dateInView);
      newDate.setFullYear(year);

      this.dateInView = this.getDateInRange(newDate);
      this.showYearPicker = false;
    },

    getDateInRange(date, fallback) {
      const dateComputed = date || fallback;

      if (this.minDate && dateComputed.getTime() < this.minDate.getTime()) {
        return this.minDate;
      }

      if (this.maxDate && dateComputed.getTime() > this.maxDate.getTime()) {
        return this.maxDate;
      }

      return dateComputed;
    },

    getYearClasses(year) {
      return {
        'is-current-year': this.isYearCurrent(year),
        'is-selected': this.isYearSelected(year),
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
      this.$emit('input', date);
      this.$emit('date-select', date);
    },

    onGoToDate(date, options = { isForward: true }) {
      this.$refs.month.goToDate(date, options);
    },

    onMonthChange(newDate) {
      this.dateInView = newDate;
      this.$emit('month-change', newDate);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/imports.scss";

$n-calendar-padding: rem(8px) !default;

.n-calendar {
  color: $primary-text-color;

}

.n-calendar__header {
  color: white;
  line-height: 1;
  padding: rem(16px);
}

.n-calendar__header-year,
.n-calendar__header-details {
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

.n-calendar__header-year {
  font-size: rem(15px);
  font-weight: 600;
  margin-bottom: rem(8px);
}

.n-calendar__header-details {
  font-size: rem(22px);
}

.n-calendar__body {
  height: 19.4rem;
  overflow: hidden;
  padding: $n-calendar-padding;
  position: relative;
  width: ($n-calendar-cell-size * 7) + ($n-calendar-padding * 2);
}

.n-calendar__years {
  height: rem(312px);
  list-style: none;
  margin: -$n-calendar-padding;
  overflow-y: auto;
  padding: rem(8px 0);
}

.n-calendar__year {
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

.n-calendar--orientation-landscape {
  display: flex;

  .n-calendar__header {
    min-width: rem(128px);
  }

  .n-calendar__header-date {
    margin-bottom: rem(12px);
  }

  .n-calendar__header-date {
    display: block;
    padding-top: rem(4px);
  }
}

// ================================================
// Colors
// ================================================

.n-calendar--color-primary {
  .n-calendar__header {
    background-color: $brand-primary-color;
  }

  .n-calendar__year {
    &:hover,
    body[modality="keyboard"] &:focus {
      color: $brand-primary-color;
    }

    &.is-selected {
      color: $brand-primary-color;
    }
  }

  .n-calendar-week__date {
    &.is-today {
      color: $brand-primary-color;
    }

    &.is-selected,
    body[modality="keyboard"] &.is-selected {
      background-color: $brand-primary-color;
    }
  }
}

.n-calendar--color-accent {
  .n-calendar__header {
    background-color: $brand-accent-color;
  }

  .n-calendar__year {
    &:hover,
    body[modality="keyboard"] &:focus {
      color: $brand-accent-color;
    }

    &.is-selected {
      color: $brand-accent-color;
    }
  }

  .n-calendar-week__date {
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
