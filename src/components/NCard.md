```vue
<template>
  <n-card isCollapsible="true" title="The title of the card">
    <template #header-buttons>
      <n-button size="sm">Action 1</n-button>
      <n-button size="sm">Action 2</n-button>
    </template>

    <template #body>
      This is Card body
      These are lines of card
      Card Card Card.
    </template>
  </n-card>
</template>

<script>
export default {
  data() {
    return {
      enabled: false,
    };
  }
};
</script>
<style lang="scss"></style>
```
