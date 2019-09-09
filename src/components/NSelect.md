```vue
<template>
  <n-select v-model="value"   :options="options" label="Colors" :floatingLabel="false">
    </n-select>
</template>

<script>

export default {
name: "NSelectExample",
  data() {
    return {
        value: "Red",
      options: ['Red', 'Blue', 'Green']
    };
  }
};
</script>
```