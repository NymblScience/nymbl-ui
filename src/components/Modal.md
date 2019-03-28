```vue
<template>
  <div>
    <Button @click.native="enabled = true">Show Modal</Button>
    <Modal @hidden="enabled = false" title="Set Training Level for A6 B6B6" :show="enabled" id="myModal">
      <div slot="modal-footer" class="w-100">
        <Button size="sm" class="float-right" @click.native="enabled = false">Close</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enabled: false
    };
  }
};
</script>
```