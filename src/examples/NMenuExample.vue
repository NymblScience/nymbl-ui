<template>
  <div>
    <n-menu :options="menuOptions" raised></n-menu>
    <br />
    <br />

    <br />
    <br />

    <n-button-icon has-dropdown icon="add" ref="dropdownButton" size="24">
      <close> </close>
      <n-menu
        contain-focus
        has-icons
        slot="dropdown"
        :options="menuOptions"
        @close="$refs.dropdownButton.closeDropdown()"
      ></n-menu>
    </n-button-icon>
  </div>
</template>

<script>
const Close = require('../../node_modules/vue-material-design-icons/Close.vue').default;

export default {
  name: 'NMenuExample',
  title: 'Menu',
  components: {
    Close,
  },
  data() {
    return {
      menuOptions: [
        {
          id: 'edit',
          label: 'Edit',
          icon: 'edit',
          secondaryText: 'Ctrl+E',
        },
        {
          id: 'duplicate',
          label: 'Duplicate',
          icon: 'content_copy',
          secondaryText: 'Ctrl+D',
        },
        {
          id: 'share',
          label: 'Share',
          icon: 'share',
          secondaryText: 'Ctrl+Shift+S',
          disabled: true,
        },
        {
          type: 'divider',
        },
        {
          id: 'delete',
          label: 'Delete',
          icon: 'delete',
          secondaryText: 'Del',
        },
      ],
    };
  },
};
</script>
