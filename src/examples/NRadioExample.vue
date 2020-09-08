<template>
  <!-- eslint-disable max-len -->

    <n-radio v-model="value"  :trueValue="value" :options="options" label="Colors" :floatingLabel="true">
    </n-radio>
</template>

<script>

export default {
  name: 'NRadioExample',
  title: 'Radio',
  data() {
    return {
      value: '',
      options: ['Red', 'Blue', 'Green'],
    };
  },
};
</script>
