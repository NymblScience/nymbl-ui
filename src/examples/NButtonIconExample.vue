<template>
  <div>
    <n-button-icon>
          <close> </close>
    </n-button-icon>
    <br />
        <n-button-icon disabled>
          <close> </close>
    </n-button-icon>
    <br />
    <n-button-icon variant="danger" is-raised>
          <close> </close>
    </n-button-icon>
  </div>
</template>

<script>
const Close = require('../../node_modules/vue-material-design-icons/Close.vue').default;

export default {
  name: 'NButtonIconExample',
  title: 'Button Icon',
  components: {
    Close,
  },
  data() {
    return {
      enabled: false,
    };
  },
};
</script>
