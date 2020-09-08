<template>
  <n-navbar :drawer="true">
    <template v-slot:logo>
      <img style="max-width:7rem" class="navbar__logo" :src="logo" />
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
import logo from '@/assets/img/nymblscience-logo.svg';
import NNavItem from '@/components/NNavItem.vue';

export default {
  name: 'NNavbarExample',
  title: 'Navigation Bar',
  components: {
    NNavItem,
  },
  data() {
    return {
      logo,
    };
  },
};
</script>
