```vue
<template>
  <div>
    <div class="styleguide-section">
      <n-button style="margin-right: 20px" @click.native="openModal('example-modal')">Show Modal</n-button>
      <n-button @click.native="openModal('confirm-modal')">Confirm</n-button>
    </div>

    <n-modal   ref="example-modal" style="text-align:center" title="An example title of the dialog..">
      <img style="max-width: 200px;" :src="exampleImg" />
      <img style="max-width: 200px;" :src="exampleImg" />

      <template #footer>
        <n-button buttonType="text" size="sm" variant="danger" @click.native="closeModal('example-modal')">Close</n-button>
        <n-button buttonType="text" size="sm" variant="primary" @click.native="closeModal('example-modal')">Save</n-button>
        <n-button buttonType="text" size="sm" variant="primary" @click.native="closeModal('example-modal')">Save</n-button>

      </template>
    </n-modal>

    <n-modal ref="confirm-modal" type="confirm" centered @close="confirm = false" :show="confirm">
      Are you sure?
        <template #footer>
        <n-button buttonType="text" size="sm" variant="danger" @click.native="closeModal('confirm-modal')">No</n-button>
        <n-button buttonType="text" size="sm" variant="primary" @click.native="closeModal('confirm-modal')">Yes</n-button>
      </template>
    </n-modal>
  </div>
</template>

<script>
const img = require("../assets/img/nymbl-pain-front.png");
export default {
  name: "NModalExample",
  data() {
    return {
      enabled: false,
      confirm: false,
      exampleImg: img
    };
  },
  methods: {
    openModal(ref) {
      this.$refs[ref].open();
    },
    closeModal(ref) {
      this.$refs[ref].close();
    }
  }
};
</script>
<style lang="scss">
</style>
```