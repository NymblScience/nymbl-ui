<template>
  <div class="n-pagination">
    <div class="n-pagination_container">
      <n-button-icon
        :disabled="active === 1 || pages === 1"
        class="n-pagination_prev"
        @click="previous"
        ><ChevronLeft
      /></n-button-icon>
      <div class="n-pagination_pages" :class="classes">
        <div
          v-for="page in pages"
          :key="page"
          :class="{ active: active == page, disabled: pages === 1 }"
          class="n-pagination_pages-page"
          @click="setPage(page)"
        >
          <span>{{ page }}</span>
        </div>
      </div>
      <n-button-icon
        :disabled="active === pages || pages === 1"
        class="n-pagination_next"
        @click="next"
        ><ChevronRight
      /></n-button-icon>
    </div>
  </div>
</template>

<script>
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";
export default {
  name: "NPagination",
  components: {
    ChevronRight,
    ChevronLeft
  },
  props: {
    /**
     * Page count
     */
    pages: {
      default: 1,
      type: Number
    }
  },
  data() {
    return {
      active: 1
    };
  },
  computed: {
    classes() {
      return [{ "is-transparent": this.isTransparent }];
    }
  },

  methods: {
    previous() {
      let page = 1;
      if (this.active == 1) {
        this.setPage(1);
        return;
      }
      page = this.active - 1;
      this.setPage(page);
    },
    next() {
      let page = 1;
      if (this.active === this.pages.length + 1) {
        this.setPage(1);
        return;
      }
      page = this.active + 1;
      this.setPage(page);
    },
    setPage(page) {
      if (this.active === page) {
        return;
      }
      /**
       * Hmdle
       */
      this.$emit("change", page);
      this.active = page;
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/sass/config.scss";
@import "@/assets/sass/animations.scss";

.n-pagination {
  height: 100%;

  padding: 5px 10px;
  &_container {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  &_pages {
    margin: 20px;
    background: #fff;
    padding: 5px 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    font-size: 1.1rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-around;
    &-page.active {
      background: $green-2;
      color: #fff;
      cursor: default;
    }
    &-page.disabled {
      background: #fff;
      color: $gray-1;
      cursor: default;
      &:hover {
        cursor: default;
        background: #fff;
        color: $gray-1;
      }
    }
    &-page {
      user-select: none;
      cursor: pointer;

      width: 30px;
      display: flex;
      margin-right: 8px;
      align-items: center;
      justify-content: center;
      height: 30px;
      border-radius: 50%;
      transition: all 400ms;
      &:hover {
        background: $green-2;
        color: #fff;
      }
    }
    &-page:last-child {
      margin-right: 0;
    }
  }
}
</style>
