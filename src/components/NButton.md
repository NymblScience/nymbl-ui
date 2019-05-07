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
      <h3>Text</h3> 
      <n-button buttonType="text" variant="primary">Accept</n-button>
      <n-button buttonType="text" variant="secondary">Cancel</n-button>
      <n-button buttonType="text" variant="danger">Delete</n-button>
    </div>
    <div class="styleguide-section">
      <h3>Icon</h3>
      <n-button round buttonType="icon" variant="primary">
        <menu-icon :size="42"></menu-icon>
      </n-button>
      <n-button round buttonType="icon" variant="danger">
        <close-icon :size="42"></close-icon>
      </n-button>
    </div>
  </div>
</template>

<script>
const MenuIcon = require("../assets/icons/Menu.vue").default;
const CloseIcon = require("../assets/icons/Close.vue").default;

export default {
  components: {
    MenuIcon,
    CloseIcon
  },
  data() {
    return {
      logo: "test"
    };
  }
};
</script>
<style lang="scss">

.btn {
  margin-right: 10px;
}

</style>
```
