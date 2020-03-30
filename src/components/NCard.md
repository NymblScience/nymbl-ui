```vue
<template>
  <n-card :isCollapsible="true" title="The title of the card">
    <template #header-buttons>
      <n-button size="sm">Action 1</n-button>
      <n-button size="sm">Action 2</n-button>
    </template>

    <template #body>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </template>
  </n-card>
</template>

<script>
export default {
  name: "NCardExample",
  data() {
    return {
      enabled: false,
    };
  }
};
</script>
```
