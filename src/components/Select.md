```vue

<template>
  <div>
    <Select v-model="selected" :options="options"></Select>
    <Select v-model="selected" :options="options" size="sm" class="mt-3"></Select>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>

const Select = require("./Select.vue").default;

export default {
  components: {
    Select,
  },

    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
      }
    }
  }
</script>
```