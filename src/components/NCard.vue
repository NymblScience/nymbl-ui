<template>
  <div class="n-card p-5 shadow-md" :class="classes">
    <div v-if="title.length > 0" class="n-card__header">
      <div class="n-card__title text-lg">
        {{ title }}
      </div>
      <div class="n-card__header-buttons text-gray-400">
        <slot name="header-buttons" />
        <ChevronRight v-if="isCollapsible" @click="collapse()" />
      </div>
    </div>

    <div class="n-card__body py-4" :class="classes">

        <div v-if="!isCollapsedLocal">
          <slot />
        </div>
    </div>
  </div>
</template>

<script>
import ChevronRight from '../icons/vue-material/ChevronRight.vue';

export default {
  name: 'NCard',
  components: {
    ChevronRight,
  },
  props: {
    title: {
      default: '',
      type: String,
    },
    /**
     * Whether card is collapsible
     */
    isCollapsible: {
      default: false,
      type: Boolean,
    },
    /**
     * Whether card is collapsed by default
     */
    isCollapsed: {
      default: false,
      type: Boolean,
    },
    /**
     * Whether card is transparent
     */
    isTransparent: {
      default: false,
      type: Boolean,
    },
    /**
     * Whether card has padding
     */
    noPadding: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      isCollapsedLocal: false,
    };
  },
  computed: {
    isTitle() {
      if (this.title.length > 0) {
        return false;
      }
      return true;
    },
    classes() {
      return [
        {
          'is-transparent': this.isTransparent,
          'no-padding': this.noPadding,
          'title-hidden': this.isTitle,
        },
      ];
    },
  },
  created() {
    this.isCollapsedLocal = this.isCollapsed;
  },
  methods: {
    collapse() {
      this.isCollapsedLocal = !this.isCollapsedLocal;
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/sass/config.scss";
@import "@/assets/sass/animations.scss";

.n-card {
  background: #fff;
  height: 100%;
  border-radius: 0.2rem;
  &__header {
    // padding: 1rem 1.5rem;
    width: 100%;

    // font-weight: 600;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    flex: 1 0 auto;
    margin-bottom: 0.1rem;
    justify-content: space-between;
    @media (min-width: 700px) {
      font-size: 1.35rem;
    }
  }
  .n-navbar {
    margin-top: -0.8rem;
    margin-bottom: 0.3rem;
    background: transparent !important;
    box-shadow: none !important;
    z-index: 1989 !important;
  }

  &.is-transparent {
    box-shadow: none;
    background: transparent;
  }
}

.n-card__header-buttons {
  .n-button {
    display: inline-block;
    margin-left: 0.35rem;
  }
}
</style>
