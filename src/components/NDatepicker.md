```vue
<template>
  <div>
    <n-datepicker
      placeholder="Pick a Date"
      :default-date="new Date('3003/2/10')"
      :label="'Label'"
      v-model="value"
      :has-year="false"
    ></n-datepicker>

    <n-datepicker
      placeholder="Pick a Date"
      :default-date="new Date('3003/2/10')"
      :label="'Label'"
      v-model="value2"
    ></n-datepicker>
  </div>
</template>

<script>
export default {
  name: "NDatepickerExample",
  data() {
    return {
      value: "1977-07-11T00:00:00",
      value2: null
    };
  }
};
</script>
```