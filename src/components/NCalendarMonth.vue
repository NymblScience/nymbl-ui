<template>
  <table class="n-calendar-month">
    <thead class="n-calendar-month__header">
      <tr>
        <th v-for="(day, index) in daysOfWeek" :key="day + index">{{ day }}</th>
      </tr>
    </thead>

    <tbody class="n-calendar-month__body">
      <tr
        is="n-calendar-week"
        v-for="date in currentWeekStartDates"
        :key="date.toString()"
        :color="color"
        :date-filter="dateFilter"
        :max-date="maxDate"
        :min-date="minDate"
        :month="currentWeekStartDates[1].getMonth()"
        :selected="selected"
        :square-cells="squareCells"
        :week-start="date"
        @date-select="onDateSelect"
      >
        <template v-if="$scopedSlots.date" slot-scope="props">
          <slot name="date" :date="props.date"></slot>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script>
import NCalendarWeek from './NCalendarWeek.vue';

import { clone, moveToDayOfWeek } from '../helpers/date';

export default {
  name: 'NCalendarMonth',

  components: {
    NCalendarWeek,
  },

  props: {
    lang: Object,
    dateFilter: Function,
    dateInView: Date,
    selected: Date,
    maxDate: Date,
    minDate: Date,
    startOfWeek: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: 'primary', // 'primary' or 'accent'
    },
    squareCells: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    daysOfWeek() {
      // Get the days from the start day to the end of the array
      const days = this.lang.days.initials.slice(this.startOfWeek);

      if (days.length === 7) {
        return days;
      }

      // Add the remaining days from the start of the array
      return days.concat(this.lang.days.initials.slice(0, this.startOfWeek));
    },

    currentWeekStartDates() {
      return this.getWeekStartDates(this.dateInView);
    },
  },

  methods: {
    getWeekStartDates(dateInWeek) {
      let date = clone(dateInWeek);

      date.setDate(1); // Jump to the start of the month
      date = moveToDayOfWeek(date, this.startOfWeek); // Jump to the start of the week

      const current = clone(date);
      current.setDate(current.getDate() + 7);

      const starts = [date];
      const month = current.getMonth();

      while (current.getMonth() === month) {
        starts.push(clone(current));
        current.setDate(current.getDate() + 7);
      }

      return starts;
    },

    goToDate(date) {
      this.$emit('change', clone(date));
    },

    onDateSelect(date) {
      this.$emit('date-select', date);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/imports.scss";

.n-calendar-month {
  table-layout: fixed;
  width: 100%;
}

.n-calendar-month__header {
  width: 100%;
  th {
    color: $secondary-text-color;
    font-size: rem(14px);
    font-weight: 600;
    color: #fff;
    height: $n-calendar-month-header-height;
    text-align: center;
    text-transform: uppercase;
    vertical-align: middle;
    width: (100% / 7);
  }
}

.n-calendar-month__body {
  width: 100%;
}
</style>
