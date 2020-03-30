<template>
  <div class="n-pagination">
    <div class="n-pagination_container">
      <n-button-icon
        v-if="pages !== 2 && pages !== 1"
        :disabled="active === 1 || pages === 1"
        class="n-pagination_first"
        @click="first"
        ><ChevronDoubleLeft title="First"
      /></n-button-icon>
      <n-button-icon
        :disabled="active === 1 || pages === 1"
        class="n-pagination_prev"
        @click="previous"
        ><ChevronLeft title="Previous"
      /></n-button-icon>
      <div class="n-pagination_pages" :class="classes">
        <div
          v-for="page in pageList"
          :key="page"
          :class="{ active: active == page, disabled: pages === 1 }"
          class="n-pagination_pages-page"
          @click="setPage(page)"
        >
          <span>{{ page }}</span>
        </div>

        <span v-if="pages > 16" style="padding: 0 5px; padding-top: 3px">
          ...
        </span>
        <div
          v-if="pages > 16"
          :class="{ active: active == page }"
          class="n-pagination_pages-page"
          @click="setPage(page)"
        >
          <span>{{ pages }}</span>
        </div>
      </div>
      <n-button-icon
        :disabled="active === pages || pages === 1"
        class="n-pagination_next"
        @click="next"
        ><ChevronRight title="Next"
      /></n-button-icon>
      <n-button-icon
        v-if="pages !== 2 && pages !== 1"
        :disabled="active === pages || pages === 1"
        class="n-pagination_last"
        @click="last"
        ><ChevronDoubleRight title="Last"
      /></n-button-icon>
    </div>
    <div class="n-pagination_footer">
      <div v-if="pageSizeSwitch && pages > 1" class="n-pagination_go">
        <n-textbox
          v-model="goTo"
          label="Go To"
          type="tel"
          class="n-pagination_page-switch"
        />
        <n-button
          size="sm"
          :disabled="
            goTo.length === 0 || isNaN(goTo) || goTo > pages || goTo === 0
          "
          @click="setPage(goTo)"
          >Go</n-button
        >
      </div>
      <div>
        <n-select
          v-if="pageSizeSwitch"
          v-model="pageSizeValue"
          label="Page Size"
          class="n-pagination_page-size-switch"
          :options="pageSizes"
          @change="setPageSize(pageSizeValue)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";
import ChevronDoubleRight from "vue-material-design-icons/ChevronDoubleRight.vue";
import ChevronDoubleLeft from "vue-material-design-icons/ChevronDoubleLeft.vue";

export default {
  name: "NPagination",
  components: {
    ChevronRight,
    ChevronLeft,
    ChevronDoubleRight,
    ChevronDoubleLeft
  },
  props: {
    /**
     * Page count
     */
    pages: {
      default: 1,
      type: Number
    },
    /**
     * Page count
     */
    pageSize: {
      default: "25",
      type: String
    },
    /**
     * Page Size Switcher Enabled
     */
    pageSizeSwitch: {
      default: false,
      type: Boolean
    },
    /**
     * Page Size options
     */
    pageSizes: {
      default: () => ["25", "50", "100", "250"],
      type: Array
    },
    /**
     * Enable/Disable url Queries. Needs Vue $router included.
     */
    urlQueries: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      active: 1,
      goTo: "",
      pageSizeValue: this.pageSize
    };
  },
  computed: {
    pageList() {
      if (this.pages > 16) {
        return 10;
      }
      return this.pages;
    },
    classes() {
      return [{ "is-transparent": this.isTransparent }];
    },
    pageSizeQuery() {
      return this.$route.query.pageSize;
    },
    pageQuery() {
      return this.$route.query.page;
    }
  },

  watch: {
    pageSizeQuery(newPageSize) {
      if (newPageSize !== this.pageSize) {
        this.setPageSize(newPageSize);
      }
    },
    pageQuery(newPage) {
      if (newPage !== this.page) {
        this.setPage(newPage);
      }
    }
  },
  mounted() {
    // Get values from the url.
    if (this.urlQueries) {
      const pageSize = this.$route.query.pageSize;
      const page = this.$route.query.page;
      if (pageSize) {
        this.pageSizeValue = pageSize;
        this.$emit("pageSizeChange", pageSize);
      } else {
        this.$router.push({
          query: { ...this.$route.query, page: this.active }
        });
        this.$router.push({
          query: { ...this.$route.query, pageSize: this.pageSize }
        });
      }
      if (page) {
        this.setPage(page);
      }
    }
  },
  methods: {
    first() {
      this.setPage(1);
    },
    last() {
      this.setPage(this.pages);
    },
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
      if (this.urlQueries) {
        if (this.urlQueries) {
          this.$router.push({ query: { ...this.$route.query, page: page } });
        }
      }
      this.$emit("change", page);
      this.active = page;
    },
    setPageSize(pageSize) {
      if (this.urlQueries) {
        this.$router.push({
          query: { ...this.$route.query, pageSize: pageSize }
        });
        // Remove page query
        this.$router.push({
          query: { ...this.$route.query, page: 1 }
        });
      }
      this.pageSizeValue = pageSize;
      this.$emit("pageSizeChange", pageSize);
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/sass/config.scss";
@import "@/assets/sass/animations.scss";

.n-pagination {
  height: 100%;
  &_footer {
    display: flex;
    justify-content: center;
  }
  &_go {
    display: flex;
    align-items: baseline;
    width: 150px;

    margin-right: 40px;
    .n-button {
      margin-left: 10px;
      transform: translate(0, -2px);
    }
  }
  &_first {
    margin-right: 5px;
  }
  &_last {
    margin-left: 5px;
  }
  &_page-size-switch,
  &_page-switch {
    max-width: 100px;
    margin: 0 auto;
  }
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
