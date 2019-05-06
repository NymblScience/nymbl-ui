```vue
<template>
    <NymCheckbox v-model="value"   :options="options" label="Colors" :floatingLabel="true">
    </NymCheckbox>
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