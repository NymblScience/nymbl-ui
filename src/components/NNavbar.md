```vue
<template>
  <n-navbar :drawer="true">
    <template v-slot:logo>
      <img class="navbar__logo" :src="logo" />
    </template>
    <template v-slot:nav-items-drawer>
      <n-nav-item :active="true">Item One</n-nav-item>
      <n-nav-item>Item Two</n-nav-item>
      <n-nav-item>Item Three</n-nav-item>
      <n-nav-item disabled>Disabled</n-nav-item>
    </template>

  </n-navbar>
</template>

<script>
const logo = require("../assets/img/nymblscience-logo.svg");
const NNavItem = require("./NNavItem.vue").default;
const NNavDropdown = require("./NNavDropdown.vue").default;
const NDropdownItem = require("./NDropdownItem.vue").default;
const StarIcon = require("../assets/icons/Star.vue").default;
export default {
  components: {
    NNavItem,
    NNavDropdown,
    NDropdownItem,
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