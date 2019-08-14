```vue
<template>
  <div>
    <n-button-icon>
      <Close />
    </n-button-icon>
    <br />
    <n-button-icon variant="danger" is-raised>
      <Close />
    </n-button-icon>
  </div>
</template>

<script>
const Close = require("../../node_modules/vue-material-design-icons/Close.vue").default;

export default {
  name: "NButtonIconExample",
  components: {
    Close
  },
  data() {
    return {
      enabled: false
    };
  }
};
</script>
<style lang="scss"></style>
```
