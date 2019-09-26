```vue
<template>
    <n-textbox v-model="value" label="Email" :floatingLabel="false">
    </n-textbox>

    <n-textbox v-model="value" label="Email" :floatingLabel="false" clearable>
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