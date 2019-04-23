```vue
<template>
  <div>
    <div class="styleguide-section">
      <h3>Default</h3>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button disabled variant="primary">Disabled</Button>
    </div>
    <div class="styleguide-section">
      <h3>Sizes</h3>
      <Button size="lg">Large</Button>
      <Button>Medium</Button>
      <Button size="sm">Small</Button>
    </div>
    <div class="styleguide-section">
      <h3>Text</h3>
      <Button variant="transparent" type="text">Learn More</Button>
      <Button type="text" variant="primary">Accept</Button>
      <Button type="text" variant="secondary">Cancel</Button>
      <Button type="text" variant="danger">Delete</Button>
    </div>
    <div class="styleguide-section">
      <h3>Icon</h3>
      <Button round type="icon" variant="secondary">
        <menu-icon size="42"></menu-icon>
      </Button>
      <Button round type="icon" variant="danger">
        <close-icon size="42"></close-icon>
      </Button>
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
