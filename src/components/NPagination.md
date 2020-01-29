```vue
<template>
  <n-pagination pageSize="100"  :pages="10" page-size-switch @change="handleChange" />

</template>

<script>
export default {

  methods: {
    handleChange(page) {
        console.log('page:', page);
    }
  },
};
</script>
```
