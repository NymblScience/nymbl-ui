<template>
  <div class="n-card" :class="classes">
    <div v-if="title.length > 0" class="n-card__header">
      <div class="n-card__title">
        {{ title }}
      </div>
      <div class="n-card__header-buttons">
        <slot name="header-buttons" />
        <ChevronRight v-if="isCollapsible" @click.native="collapse()" />
      </div>
    </div>

    <div :class="{ 'title-hidden': isTitle }" class="n-card__body">
      <transition-expand>
        <div v-if="!isCollapsedLocal">
          <slot />
        </div>
      </transition-expand>
    </div>
  </div>
</template>

<script>
import { TransitionExpand } from "vue-transition-expand";
import "vue-transition-expand/dist/vue-transition-expand.css";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";
export default {
  name: "NCard",
  components: {
    TransitionExpand,
    ChevronRight
  },
  props: {
    title: {
      default: "",
      type: String
    },
    /**
     * Whether card is collapsible
     */
    isCollapsible: {
      default: false,
      type: Boolean
    },
    /**
     * Whether card is collapsed by default
     */
    isCollapsed: {
      default: false,
      type: Boolean
    },
    /**
     * Whether card is transparent
     */
    isTransparent: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      isCollapsedLocal: false
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
      return [{ "is-transparent": this.isTransparent }];
    }
  },
  created() {
    this.isCollapsedLocal = this.isCollapsed;
    // if (this.isCollapsible) {
    //   console.log(this.$children);
    // }
  },
  methods: {
    collapse() {
      this.isCollapsedLocal = !this.isCollapsedLocal;
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/sass/config.scss";
@import "@/assets/sass/animations.scss";

.n-card {
  background: #fff;
  height: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.35rem;
  &__header {
    padding: 1rem 1.5rem;
    width: 100%;
    font-size: 1.24rem;
    color: #292f2f;
    font-weight: 400;
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
  &__body {
    padding: 0 1.5rem 1rem;
  }
  &.is-transparent {
    .n-card__body {
      padding: 0 0 1rem;
    }
    .title-hidden {
      padding-top: 1rem;
    }
    box-shadow: none;
    background: transparent;
  }
}

.title-hidden {
  padding-top: 1rem;
}

.n-card__header-buttons {
  .n-button {
    display: inline-block;
    margin-left: 0.35rem;
  }
}
</style>
