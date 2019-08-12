<template>
  <div class="n-calendar-controls" :class="classes">
    <n-icon-button
      v-if="!isStatic"
      class="n-calendar-controls__nav-button"
      icon="keyboard_arrow_left"
      type="secondary"
      :color="color === 'default' ? 'default' : 'white'"
      :disabled="previousMonthDisabled"
      @click="goToPreviousMonth"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"
        />
      </svg>
    </n-icon-button>

    <div class="n-calendar-controls__month-and-year">{{ monthAndYear }}</div>

    <n-icon-button
      v-if="!isStatic"
      class="n-calendar-controls__nav-button"
      icon="keyboard_arrow_right"
      type="secondary"
      :color="color === 'default' ? 'default' : 'white'"
      :disabled="nextMonthDisabled"
      @click="goToNextMonth"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M8.578 16.36l4.594-4.595L8.578 7.17l1.406-1.405 6 6-6 6z" />
      </svg>
    </n-icon-button>
  </div>
</template>

<script>
// import NIcon from "./NIcon.vue";
// import NIconButton from "./UiIconButton.vue";

import dateUtils from "../helpers/date";

export default {
  name: "NCalendarControls",

  // components: {
  //   NIcon,
  //   NIconButton
  // },

  props: {
    isStatic: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "default" // 'default', 'primary' or 'accent'
    },
    lang: Object,
    dateInView: Date,
    minDate: Date,
    maxDate: Date
  },

  computed: {
    classes() {
      let classes = [];
      classes.push(`n-calendar-controls--color-${this.color}`);

      if (this.isStatic) {
        classes.push("n-calendar-static");
      }
      return classes;
    },

    monthAndYear() {
      return (
        dateUtils.getMonthFull(this.dateInView, this.lang) +
        " " +
        this.dateInView.getFullYear()
      );
    },

    previousMonthDisabled() {
      if (!this.minDate) {
        return false;
      }

      const lastDayOfPreviousMonth = dateUtils.clone(this.dateInView);

      // Setting the date to zero goes to the last day in previous month
      lastDayOfPreviousMonth.setDate(0);

      return this.minDate.getTime() > lastDayOfPreviousMonth.getTime();
    },

    nextMonthDisabled() {
      if (!this.maxDate) {
        return false;
      }

      const firstDayOfNextMonth = dateUtils.clone(this.dateInView);

      // Set the month ot next month, and the day to the first day
      // If the month overflows, it increments the year
      firstDayOfNextMonth.setMonth(this.dateInView.getMonth() + 1, 1);

      return this.maxDate.getTime() < firstDayOfNextMonth.getTime();
    }
  },

  methods: {
    goToPreviousMonth() {
      const date = dateUtils.clone(this.dateInView);

      // Set to first of the month, since the current date may not be available in the previous month. See #434.
      date.setDate(1);
      date.setMonth(date.getMonth() - 1);

      this.goToDate(date);
    },

    goToNextMonth() {
      const date = dateUtils.clone(this.dateInView);

      // Set to first of the month, since the current date may not be available in the next month. See #434.
      date.setDate(1);
      date.setMonth(date.getMonth() + 1);

      this.goToDate(date);
    },

    goToDate(date) {
      this.$emit("go-to-date", date);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/imports.scss";

.n-calendar-controls {
  align-items: center;
  display: flex;
  height: 1.8rem;
  letter-spacing: 0.08rem;
  justify-content: space-between;
  padding: 0.1rem;
}

.n-calendar-controls__month-and-year {
  font-size: rem(15px);
  font-weight: 600;
}

// ================================================
// Colors
// ================================================

.n-calendar-controls--color-default {
  background-color: #eee;
}

.n-calendar-controls--color-primary {
  background-color: $brand-primary-color;
  color: white;
}

.n-calendar-controls--color-accent {
  background-color: $brand-accent-color;
  color: white;
}

.n-calendar-static {
  justify-content: center;
}
</style>
