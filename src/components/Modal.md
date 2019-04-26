```vue
<template>
  <div>
    <div class="styleguide-section">
      <Button style="margin-right: 20px" @click.native="enabled = true">Show Modal</Button>
      <Button @click.native="confirm = true">Confirm</Button>
    </div>
    <Modal style="text-align:center" @close="enabled = false"  title="An example title of the dialog." :show="enabled">

      <img style="max-width: 200px;" :src="exampleImg" />
      <img style="max-width: 200px;" :src="exampleImg" />

      <div slot="modal-footer" class="w-100">
        <Button type="text" size="sm" variant="danger" @click.native="enabled = false">Close</Button>
        <Button type="text" size="sm" variant="primary" @click.native="enabled = false">Save</Button>
      </div>
    </Modal>

    <Modal :size="10" type="confirm" centered @close="confirm = false" :show="confirm">
      Are you sure?
      <div slot="modal-footer" class="w-100">
        <Button type="text" size="sm" variant="danger" @click.native="confirm = false">No</Button>
        <Button type="text" size="sm" variant="primary" @click.native="confirm = false">Yes</Button>
      </div>
    </Modal>
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