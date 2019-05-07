```vue
<template>
  <n-radio-group name="group1" :options="options" v-model="value">Favourite Flanders</n-radio-group>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      options: ["Red", "Blue", "Green"]
    };
  }
};
</script>
```