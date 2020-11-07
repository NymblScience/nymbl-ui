<template>
  <div>
    <n-section title="Default">
      <n-button variant="primary">Primary</n-button>
      <n-button variant="secondary">Secondary</n-button>
      <n-button variant="danger">Danger</n-button>
      <n-button disabled variant="primary">Disabled</n-button>
    </n-section>

    <n-section title="Sizes">
      <n-button size="lg">Large</n-button>
      <n-button>Medium</n-button>
      <n-button size="sm">Small</n-button>
    </n-section>
    <n-section title="Loading">
      <n-button @click="toggleLoading" :loading="loading">Loading</n-button>
      <n-button @click="toggleLoading" :loading="!loading">Loading</n-button>
    </n-section>
    <n-section title="Text">
      <n-button buttonType="text" variant="primary">Accept</n-button>
      <n-button buttonType="text" variant="secondary">Cancel</n-button>
      <n-button buttonType="text" variant="danger">Delete</n-button>
    </n-section>
  </div>
</template>

<script>

export default {
  name: 'ButtonExample',
  title: 'Buttons',
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading;
    },
  },
};
</script>
<style lang="scss">
.n-button {
  margin-right: 1rem;
}
</style>
