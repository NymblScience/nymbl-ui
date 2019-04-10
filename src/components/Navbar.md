```vue
<template>
  <Navbar>
    <template v-slot:logo>
      <img class="navbar__logo" :src="logo" />
    </template>
    <template v-slot:nav-items-drawer>
      <nav-item :active="true">Item One</nav-item>
      <nav-item>Item Two</nav-item>
      <nav-item>Item Three</nav-item>
      <nav-item disabled>Disabled</nav-item>
    </template>
    <template v-slot:nav-items>
      <Button round type="icon" variant="transparent">
        <star-icon></star-icon>
      </Button>
    </template>
  </Navbar>
</template>

<script>
const logo = require("../assets/img/nymblscience-logo.svg");
const NavItem = require("./NavItem.vue").default;
const NavDropdown = require("./NavDropdown.vue").default;
const DropdownItem = require("./DropdownItem.vue").default;
const StarIcon = require("../assets/icons/Star.vue").default;
export default {
  components: {
    NavItem,
    NavDropdown,
    DropdownItem,
    StarIcon
  },
  data() {
    return {
      logo: logo
    };
  }
};
</script>
```