```vue
<template>
  <div>
    <div class="styleguide-section">
      <n-button style="margin-right: 20px" @click.native="enabled = true">Show Modal</n-button>
      <n-button @click.native="confirm = true">Confirm</n-button>
    </div>
    <n-modal style="text-align:center" @close="enabled = false"  title="An example title of the dialog." :show="enabled">

      <img style="max-width: 200px;" :src="exampleImg" />
      <img style="max-width: 200px;" :src="exampleImg" />

      <div slot="modal-footer" class="w-100">
        <n-button buttonType="text" size="sm" variant="danger" @click.native="enabled = false">Close</n-button>
        <n-button buttonType="text" size="sm" variant="primary" @click.native="enabled = false">Save</n-button>
      </div>
    </n-modal>

    <n-modal :size="10" type="confirm" centered @close="confirm = false" :show="confirm">
      Are you sure?
      <div slot="modal-footer" class="w-100">
        <n-button buttonType="text" size="sm" variant="danger" @click.native="confirm = false">No</n-button>
        <n-button buttonType="text" size="sm" variant="primary" @click.native="confirm = false">Yes</n-button>
      </div>
    </n-modal>
  </div>
</template>

<script>
const img = require("../assets/img/nymbl-pain-front.png");
export default {
  data() {
    return {
      enabled: false,
      confirm: false,
      exampleImg: img
    };
  },
};
</script>
<style lang="scss">
</style>
```