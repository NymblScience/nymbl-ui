<template>
  <b-modal
    v-model="show"
    :centered="centered"
    v-bind="$attrs"
    hide-header-close
    v-on="$listeners"
  >
    <div slot="modal-header">
      {{ title }}
      <Button
        round
        type="icon"
        variant="transparent"
        class="modal-close"
      >
        <close-icon :size="18" />
      </Button>
    </div>

    <slot />
    <div
      slot="modal-footer"
      class="w-100"
    >
      <slot name="modal-footer" />
    </div>
  </b-modal>
</template>
<script>
import BModal from 'bootstrap-vue/es/components/modal/modal';
import CloseIcon from 'vue-material-design-icons/Close.vue';

export default {
  name: 'Modal',
  components: {
    BModal,
    CloseIcon,
  },
  props: {
    show: {
      default: false,
      type: Boolean,
    },
    /**
     * Vertically center your modal in the viewport.
     */
    centered: {
      default: false,
      type: Boolean,
    },
    title: {
      default: 'null',
      type: String,
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/sass/colors.scss";
.modal-content {
  margin-top: 15vh;
  padding: 1rem 1rem
}
.modal-footer {
  border-top: none;
  text-align: right;
}
.modal-header {
  border-bottom: none;
  padding-right: 3rem;
}

.modal-close {
position: absolute;
top: 1.6rem;
right: 2rem;
}

.modal-title {
  color: #303133;
  font-weight: 400;
  font-size: 1.1rem;
}
@media only screen and (max-width: 600px) {
  .modal-dialog {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    transition: all 1s;
  }

  .modal-content {
    transition: all 1s;
    margin: 0;
    height: auto;
    min-height: 100%;
    border-radius: 0;
  }
}
</style>
