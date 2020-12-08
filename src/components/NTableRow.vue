<template>
  <a @click.exact="handleClick(href, $event)" v-if="href" :href="href" class="n-table-row">
    <slot></slot>
  </a>
  <div v-else class="n-table-row">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'NTableRow',
  props: {
    label: {
      type: String,
      default: '',
    },
    href: String,
  },
  methods: {
    handleClick(to, event) {
      if (event) {
        event.preventDefault();
      }
      this.$router.push(to);
    },
  },
  computed: {
    classes() {
      const classes = [];
      return classes;
    },
  },
  mounted() {
    const that = this;
    this.$nextTick(() => {
      that.$emit('mounted');
    });
  },
};
</script>
<style lang="scss">
@import "@/assets/sass/animations.scss";
@import "@/assets/sass/colors.scss";
@import "@/assets/sass/config.scss";
</style>
