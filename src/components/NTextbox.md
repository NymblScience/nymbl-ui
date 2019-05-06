```vue
<template>
    <n-textbox v-model="value" label="Email" :floatingLabel="false">
    </n-textbox>
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