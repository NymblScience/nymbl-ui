<template>
  <div class="n-pagination">
    <n-button-icon
      :disabled="active === 1"
      class="n-pagination_prev"
      @click="previous"
      >Previos</n-button-icon
    >
    <div class="n-pagination_pages" :class="classes">
      <div
        v-for="page in pages"
        :key="page"
        :class="{ active: active == page }"
        class="n-pagination_pages-page"
        @click="setPage(page)"
      >
        {{ page }}
      </div>
    </div>
    <n-button-icon
      :disabled="active === this.pages"
      class="n-pagination_next"
      @click="next"
      >Next</n-button-icon
    >
  </div>
</template>

<script>
export default {
  name: "NPagination",
  props: {
    pages: {
      default: 1,
      type: Number
    }
  },
  data() {
    return {
      active: 2
    };
  },
  computed: {
    classes() {
      return [{ "is-transparent": this.isTransparent }];
    }
  },

  methods: {
    previous() {
      console.log("set");
      let page = 1;
      if (this.active == 1) {
        this.setPage(1);
        return;
      }
      page = this.active - 1;
      this.setPage(page);
    },
    next() {
      console.log("set");
      let page = 1;
      if (this.active === this.pages.length + 1) {
        this.setPage(1);
        return;
      }
      page = this.active + 1;
      this.setPage(page);
    },
    collapse() {
      this.isCollapsedLocal = !this.isCollapsedLocal;
    },
    setPage(page) {
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

  display: flex;
  justify-content: space-around;
  padding: 5px 10px;
  &_pages {
    background: #fff;
    padding: 5px 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.35rem;
    display: flex;
    justify-content: space-around;
    &-page.active {
      background: $green-2;
      color: #fff;
    }
    &-page {
      user-select: none;
      cursor: pointer;
      text-align: center;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      transition: all 400ms;
      &:hover {
        background: $green-2;
        color: #fff;
      }
    }
  }
}
</style>
