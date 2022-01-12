<template>
  <div class="flex">
    <n-button size="sm" variant="secondary" @click="open">Primary</n-button>

    <n-button size="sm" @click="openSuccess">Success</n-button>

    <n-button size="sm" variant="danger" @click="openError">Error</n-button>

    <n-button size="sm" @click="openNoClose">Open</n-button>
    <n-button size="sm" @click="openWithTitle">Title</n-button>
    <n-button size="sm" @click="openWithButton">Button</n-button>
  </div>
</template>

<script>

export default {
  name: 'MessageExample',
  title: 'Messages',
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    open() {
      this.$nMessage({ message: 'Sample message' });
    },
    openSuccess() {
      this.$nMessage({
        type: 'success',
        title: 'Success',
        message: 'Something great.',
      });
    },
    openError() {
      this.$nMessage({
        type: 'error',
        message: 'Oops. Something horrendous happened.',
      });
    },
    openNoClose() {
      this.$nMessage({
        message: 'Oops. Something horrendous happened.',
        showClose: false,
      });
    },
    openPersistant() {
      this.$nMessage({
        message: 'Oops. Something horrendous happened.',
        duration: 0,
      });
    },
    openWithTitle() {
      this.$nMessage({
        title: 'Title',
        message: 'Oops. Something horrendous happened.',
        duration: 0,
      });
    },
    openWithButton() {
      const refreshPage = () => window.location.reload(true);

      this.$nMessage({
        message: 'New version is available.',
        button: {
          click: refreshPage,
          size: 'sm',
          text: 'reload',
        },
        showClose: true,
        duration: 0,
      });
    },
  },
};
</script>
