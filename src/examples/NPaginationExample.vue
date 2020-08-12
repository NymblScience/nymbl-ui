<template>
  <!-- eslint-disable max-len -->
  <n-pagination pageSize="100"  :pages="10" page-size-switch @change="handleChange" :urlQueries="false"/>

</template>

<script>
export default {

  methods: {
    handleChange(page) {
      console.log('page:', page);
    },
  },
};
</script>
