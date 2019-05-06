```vue
<template>
    <n-select v-model="value"   :options="options" label="Colors" :floatingLabel="false">
    </n-select>
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