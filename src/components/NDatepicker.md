```vue
<template>
    <n-datepicker placeholder="Pick a Date" :default-date="new Date('3003/2/10')" :label="'Label'" v-model="value">
    </n-datepicker>
</template>

<script>

export default {
  name: "NDatepickerExample",
  data() {
    return {
      value: new Date()
    };
  }
};
</script>
```