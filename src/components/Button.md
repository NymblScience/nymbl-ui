```vue
<template>
  <div>
    <div class="styleguide-buttons">
   <h2>Default buttons</h2>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
    </div>
    <!-- <div class="styleguide-buttons">
      <Button type="outline">Outline Primary</Button>
      <Button type="outline">Outline Secondary</Button>
      <Button type="outline">Outline Danger</Button>
    </div>-->
    <div class="styleguide-buttons">
      <h2>Button sizes</h2>
      <Button size="lg">Large</Button>
      <Button>Medium</Button>
      <Button size="sm">Small</Button>
    </div>
    <div class="styleguide-buttons">
      <h2>Text Buttons</h2>
      <Button variant="transparent" type="text">Learn More</Button>
      <Button type="text" variant="primary">Accept</Button>
      <Button type="text" variant="secondary">Cancel</Button>
      <Button type="text" variant="danger">Delete</Button>
    </div>
    <div class="styleguide-buttons">
      <h2>Icon Buttons</h2>
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
.styleguide-buttons {
  margin: 20px 0;
}
.btn {
  margin-right: 10px;
}
.styleguide-buttons h2 {
  font-size: 10px;
  display:block;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
}
</style>
```
