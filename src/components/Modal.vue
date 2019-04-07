<template>
  <b-modal
    v-model="show"
    :centered="centered"
    :title="title"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
    <div
      slot="modal-footer"
      class="w-100"
    >
      <slot name="modal-footer" />
    </div>
    <div slot="modal-header-close">
      <Button
        round
        type="icon"
        variant="transparent"
      >
        <close-icon :size="18" />
      </Button>
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
      default: '',
      type: String,
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/sass/colors.scss";
.modal-content {
  margin-top: 15vh;
  padding: 10px 10px;
}
.modal-footer {
  border-top: none;
}
.modal-header {
  border-bottom: none;
}
.modal-header .close {
  margin: 0;
  padding: 0;
}
.modal-title {
  color: #303133;
  font-weight: 400;
  font-size: 1.1rem;
}
@media only screen and (max-width: 600px) {
  // .model-content {
  //   margin: 0;
  // }
  // .modal {
  //   padding: 0!important;
  //   bottom: 0;
  //   top: auto;
  // }
  // .modal-dialog {
  //   margin: 0;
  //   height: 100%;
  // }
  // .modal-content {
  //   margin: 0;
  // }
  .modal-dialog {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0; transition: all 1s;
}

.modal-content { transition: all 1s;
  margin: 0;
  height: auto;
  min-height: 100%;
  border-radius: 0;
}
}
</style>
