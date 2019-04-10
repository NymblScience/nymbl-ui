```vue
<template>
  <div>
    <Button @click.native="enabled = true">Show Modal</Button>
    <Modal style="text-align:center" @hidden="enabled = false" title="An example title of the dialog." :show="enabled" id="myModal">

      <img style="max-width: 200px;" :src="exampleImg" />
      <img style="max-width: 200px;" :src="exampleImg" />

      <div slot="modal-footer" class="w-100">
        <Button type="text" variant="danger" @click.native="enabled = false">Close</Button>
        <Button type="text" variant="primary" @click.native="enabled = true">Save</Button>
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
      exampleImg: img
    };
  }
};
</script>
<style lang="scss">
</style>
```