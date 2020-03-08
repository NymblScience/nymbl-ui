```vue
<template>
  <div>
    <div class="styleguide-section">
      <h3>Default</h3>
      <n-button variant="primary">Primary</n-button>
      <n-button variant="secondary">Secondary</n-button>
      <n-button variant="danger">Danger</n-button>
      <n-button disabled variant="primary">Disabled</n-button>
    </div>
    <div class="styleguide-section">
      <h3>Sizes</h3>
      <n-button size="lg">Large</n-button>
      <n-button>Medium</n-button>
      <n-button size="sm">Small</n-button>
    </div>
    <div class="styleguide-section">
      <h3>Loading</h3>
      <n-button @click="toggleLoading" :loading="loading">Loading</n-button>
      <n-button @click="toggleLoading" :loading="!loading">Loading</n-button>
    </div>
    <div class="styleguide-section">
      <h3>Text</h3>
      <n-button buttonType="text" variant="primary">Accept</n-button>
      <n-button buttonType="text" variant="secondary">Cancel</n-button>
      <n-button buttonType="text" variant="danger">Delete</n-button>
    </div>

  </div>
</template>

<script>

export default {
  name: "NButtonExample",
  data() {
    return {
      loading: false
    };
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading;
    }
  }
};
</script>
<style lang="scss">
.n-button {
  margin-right: 1rem;
}
</style>
```
