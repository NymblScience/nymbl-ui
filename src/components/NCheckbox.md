```vue
<template>
<div style="max-width: 150px">
  <div class="styleguide-section">
    <h3>Basic Usage</h3>
    <n-checkbox v-model="value" label="Checked" />
    <n-checkbox v-model="value2" label="Unchecked" />
    <n-checkbox v-model="value3" label="Disabled" disabled />
    <n-checkbox v-model="value4" label="Right" box-position="right" />
  </div>
   </div>
</template>

<script>
export default {
  name: "NButtonExample",
  data() {
    return {
      value: true,
      value2: false,
      value3: true,
      value4: false
    };
  }
};
</script>
```
