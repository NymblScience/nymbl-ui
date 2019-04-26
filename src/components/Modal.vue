<template>
  <b-modal
    ref="modal"
    v-model="show"
    :centered="centered"
    v-bind="$attrs"
    hide-header-close
    no-fade
    :hide-header="isHeaderHidden"
    :style="{ 'max-width': size + 'rem' }"
    :content-class="contentClass"
    @hide="close"
    v-on="$listeners"
  >
    <div v-if="type !== 'confirm'" slot="modal-header">
      {{ title }}
      <Button
        round
        type="icon"
        variant="danger"
        class="modal-close"
        title="Close"
        @click.native="close()"
      >
        <close-icon :size="28" />
      </Button>
    </div>

    <slot />
    <div slot="modal-footer" class="w-100">
      <slot name="modal-footer" />
    </div>
  </b-modal>
</template>
<script>
import BModal from "bootstrap-vue/es/components/modal/modal";
import CloseIcon from "../icons/Close.vue";
// const CloseIcon = require("./icons/Close.vue").default;
export default {
  name: "Modal",
  components: {
    BModal,
    CloseIcon
  },
  props: {
    show: {
      default: false,
      type: Boolean
    },
    /**
     * Vertically center your modal in the viewport.
     */
    centered: {
      default: false,
      type: Boolean
    },
    title: {
      default: "null",
      type: String
    },

    size: {
      default: 40,
      type: Number
    },
    /**
     * Make dialog fullscreen in responsive breakpoints.
     */
    type: {
      default: "default",
      type: String
    },
    /**
     * Make dialog fullscreen in responsive breakpoints.
     */
    fullscreen: {
      default: "no",
      type: String
    }
  },
  computed: {
    isHeaderHidden() {
      if (this.type === "confirm") {
        return true;
      }
      return false;
    },
    contentClass() {
      if (this.type === "confirm") {
        return "modal-confirm";
      }
      return "";
    }
  },
  methods: {
    close() {
      // this.$refs["modal"].hide();
      this.$emit("close");
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/sass/colors.scss";
@import "@/assets/sass/animations.scss";
.modal-content {
  margin-top: 15vh;
  padding: 1rem 1rem;
  animation: fadeIn 300ms;
  box-shadow: 0 2.5px 4px rgba(25, 25, 26, 0.7);
}

.modal-footer {
  border-top: none;
  text-align: right;
  .btn {
    margin-left: 0.3rem;
  }
}
.modal-header {
  border-bottom: none;
  padding-right: 3rem;
}

.modal-confirm {
  max-width: 20rem;
  margin-right: auto;
  margin-left: auto;
  margin: 0 auto;
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
