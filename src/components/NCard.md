```vue
<template>
    <n-card
      :size="10"
      type="confirm"
      centered
      :show="confirm"
      @close="confirm = false"
    >

    </n-card>

</template>

<script>
const img = require("../assets/img/nymbl-pain-front.png");
export default {
  data() {
    return {
      enabled: false,
      confirm: false,
      exampleImg: img
    };
  }
};
</script>
<style lang="scss"></style>
```
