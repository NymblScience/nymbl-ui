```vue
<template>
    <n-checkbox v-model="value"   :options="options" label="Colors" :floatingLabel="true">
    </n-checkbox>
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