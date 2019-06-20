```vue
<template>
    <n-datepicker placeholder="Pick a Date" :default-date="'3003/2/10'" :label="'Label'" v-model="value"   >
    </n-datepicker>
</template>

<script>

export default {

  data() {
    return {
      value: null

    };
  }
};
</script>
```