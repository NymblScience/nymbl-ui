```vue
<template>
  <div>
    <n-textbox v-model="value" label="Email" :floatingLabel="false">
    </n-textbox>

    <n-textbox v-model="value2" label="Email" :floatingLabel="false" clearable>
    </n-textbox>
  </div>
</template>

<script>

export default {

  data() {
    return {
      value: "",
      value2: "Clear Me",
      options: ['Red', 'Blue', 'Green']
    };
  }
};
</script>
```