<template>
  <div>
    <n-section title="Navigation Bar">
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
    </n-section>
    <n-section title="Dropdown Menu">
      <n-card class="mt-6 p-2 max-w-sm">
        <n-button-icon ref="dropdownButton" has-dropdown>
          <DotsVertical />
          <n-menu
            slot="dropdown"
            contain-focus
            @select="message"
            :options="['Coach', 'Account Admin', 'Content Admin']"
            @close="$refs.dropdownButton.closeDropdown()"
          ></n-menu>
        </n-button-icon>
      </n-card>
    </n-section>
  </div>
</template>

<script>
import logo from '@/assets/img/nymblscience-logo.svg';
import NNavItem from '@/components/NNavItem.vue';
import DotsVertical from 'vue-material-design-icons/DotsVertical.vue';

export default {
  name: 'NavExample',
  title: 'Navigation',
  components: {
    NNavItem,
    DotsVertical,
  },
  data() {
    return {
      logo,
    };
  },
  methods: {
    message(text, type = 'success') {
      this.$nMessage({
        message: text,
        type,
        duration: 3000,
      });
    },
  },
};
</script>
