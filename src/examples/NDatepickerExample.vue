<template>
  <div style="max-width: 300px">
    <n-datepicker
      placeholder="Pick a Date"
      :label="'Basic'"
      v-model="value"
      :has-year="false"
    />

    <n-datepicker
      placeholder="Pick a Date"
      :label="'With Year'"
      v-model="value2"
    />

    <n-datepicker
      placeholder="Pick a Date"
      :default-date="defaultDate"
      :label="'Default Date'"
      v-model="value2"
    />

    <n-datepicker
      placeholder="Pick a Date"
      label="Clearable"
      v-model="value"
      :has-year="false"
      clearable
    />
  </div>
</template>

<script>
export default {
  name: 'NDatepickerExample',
  title: 'Datepicker',
  data() {
    return {
      value: '1977-07-11T00:00:00',
      defaultDate: new Date('2001/2/10'),
      value2: null,
    };
  },
};
</script>
