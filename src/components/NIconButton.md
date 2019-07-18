```vue
<template>
<n-icon-button ><Close></n-icon-button>
</template>

<script>
const Close = require("../../node_modules/vue-material-design-icons/Close.vue").default;

export default {
  components: {
    Close,
  },
  data() {
    return {
      enabled: false,
    };
  }
};
</script>
<style lang="scss"></style>
```
