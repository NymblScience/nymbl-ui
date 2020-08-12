<template>
  <transition
    :name="disableTransition ? null : 'n-loading-circle--transition-fade'"
  >
    <div
      class="n-loading-circle"
      :class="classes"
      :style="{ width: size + 'px', height: size + 'px' }"
    >
      <!-- Alternative circle rendering to explore: http://jsfiddle.net/6e3QJ/29/ -->
      <svg
        v-if="type === 'determinate'"
        class="n-loading-circle__determinate"
        role="progressbar"
        :aria-valuemax="100"
        :aria-valuemin="0"
        :aria-valuenow="progress"
        :height="size"
        :width="size"
      >
        <circle
          class="n-loading-circle__determinate-path"
          fill="transparent"
          stroke-dashoffset="0"
          :cx="size / 2"
          :cy="size / 2"
          :r="radius"
          :stroke-dasharray="strokeDashArray"
          :style="{
            'stroke-dashoffset': strokeDashOffset,
            'stroke-width': calculatedStroke
          }"
        ></circle>
      </svg>

      <svg
        v-else
        class="n-loading-circle__indeterminate"
        role="progressbar"
        viewBox="25 25 50 50"
        :aria-valuemax="100"
        :aria-valuemin="0"
      >
        <circle
          class="n-loading-circle__indeterminate-path"
          cx="50"
          cy="50"
          fill="none"
          r="20"
          stroke-miterlimit="10"
          :stroke-width="calculatedStroke"
        ></circle>
      </svg>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'NLoadingCircle',

  props: {
    type: {
      type: String,
      default: 'indeterminate', // 'indeterminate' or 'determinate'
    },
    color: {
      type: String,
      default: 'primary', // 'primary', 'accent', multi-color', 'black', or 'white'
    },
    progress: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 32,
    },
    stroke: Number,
    autoStroke: {
      type: Boolean,
      default: true,
    },
    disableTransition: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return [
        `n-loading-circle--color-${this.color}`,
        `n-loading-circle--type-${this.type}`,
      ];
    },

    strokeDashArray() {
      const circumference = 2 * Math.PI * this.radius;

      // Use first 3 decimal places, rounded as appropriate
      return Math.round(circumference * 1000) / 1000;
    },

    strokeDashOffset() {
      const progress = this.moderateProgress(this.progress);
      const circumference = 2 * Math.PI * this.radius;

      return ((100 - progress) / 100) * circumference;
    },

    radius() {
      const stroke = this.stroke ? this.stroke : 4;
      return (this.size - stroke) / 2;
    },

    calculatedStroke() {
      if (this.stroke) {
        return this.stroke;
      }

      if (this.autoStroke) {
        return parseInt(this.size / 8, 10);
      }

      return 4;
    },
  },

  methods: {
    moderateProgress(progress) {
      if (Number.isNaN(progress) || progress < 0) {
        return 0;
      }

      if (progress > 100) {
        return 100;
      }

      return progress;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/imports.scss";

$n-loading-indeterminate-rotation-duration: 0.7s !default;
$n-loading-indeterminate-color-duration: 6s !default;
$n-loading-determinate-transition-duration: 0.3s !default;

.n-loading-circle {
  position: relative;
}

.n-loading-circle__determinate {
  transform: rotate(270deg);
}

.n-loading-circle__determinate-path {
  stroke-dashoffset: 0;
  transition: stroke-dashoffset $n-loading-determinate-transition-duration;
}

.n-loading-circle__indeterminate {
  animation: n-loading-circle-rotate $n-loading-indeterminate-rotation-duration
    linear infinite;
  bottom: 0;
  height: 100%;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center center;
  width: 100%;
}

.n-loading-circle__indeterminate-path {
  stroke-dasharray: 89, 200;
  stroke-dashoffset: -35px;
  stroke-linecap: round;
}

// ================================================
// Colors
// ================================================

.n-loading-circle--color-multi-color {
  .n-loading-circle__determinate-path {
    stroke: $brand-primary-color;
  }

  .n-loading-circle__indeterminate-path {
    animation: n-loading-circle-color $n-loading-indeterminate-color-duration
      ease-in-out infinite;
  }
}

.n-loading-circle--color-primary {
  .n-loading-circle__determinate-path,
  .n-loading-circle__indeterminate-path {
    stroke: $brand-primary-color;
  }
}

.n-loading-circle--color-accent {
  .n-loading-circle__determinate-path,
  .n-loading-circle__indeterminate-path {
    stroke: $brand-accent-color;
  }
}

.n-loading-circle--color-black {
  .n-loading-circle__determinate-path,
  .n-loading-circle__indeterminate-path {
    stroke: $md-grey-900;
  }
}

.n-loading-circle--color-white {
  .n-loading-circle__determinate-path,
  .n-loading-circle__indeterminate-path {
    stroke: white;
  }
}

// ================================================
// Toggle transition
// ================================================

.n-loading-circle--transition-fade-enter-active,
.n-loading-circle--transition-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.n-loading-circle--transition-fade-enter,
.n-loading-circle--transition-fade-leave-active {
  opacity: 0;
  transform: scale(0);
}

// ================================================
// Animations
// ================================================

@keyframes n-loading-circle-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes n-loading-circle-color {
  0%,
  100% {
    stroke: $md-red;
  }

  40% {
    stroke: $md-blue;
  }

  66% {
    stroke: $md-green;
  }

  80%,
  90% {
    stroke: $md-orange;
  }
}
</style>
