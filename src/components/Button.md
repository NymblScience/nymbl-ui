```vue
<template>
  <div>
    <div class="styleguide-section">
      <h3>Default</h3>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
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
      <Button round type="icon" variant="transparent">
        <star-icon size="24"></star-icon>
      </Button>
      <Button round type="icon" variant="primary">
        <star-icon size="24"></star-icon>
      </Button>
      <Button round type="icon" variant="secondary">
        <menu-icon size="24"></menu-icon>
      </Button>
      <Button round type="icon" variant="danger">
        <delete-icon size="24"></delete-icon>
      </Button>
    </div>
  </div>
</template>

<script>
const StarIcon = require("../assets/icons/Star.vue").default;
const MenuIcon = require("../assets/icons/Menu.vue").default;
const CloseIcon = require("../assets/icons/Close.vue").default;
const DeleteIcon = require("../assets/icons/Delete.vue").default;

export default {
  components: {
    StarIcon,
    MenuIcon,
    DeleteIcon,
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
