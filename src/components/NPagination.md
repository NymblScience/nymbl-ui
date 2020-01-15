```vue
<template>
  <n-pagination :pageSize="3" :data="data" :pages="10" @change="handleChange" />
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },  
  methods: {
    handleChange(page) {
        console.log('page:', page);
    }
  },
};
</script>
```
