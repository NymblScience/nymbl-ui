```vue
<template>
    <n-radio v-model="value"  :trueValue="value" :options="options" label="Colors" :floatingLabel="true">
    </n-radio>
</template>

<script>

export default {

  data() {
    return {
        value: "",
      options: ['Red', 'Blue', 'Green']
    };
  }
};
</script>
```