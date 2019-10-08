<template>
  <n-modal
    ref="modal"
    class="n-confirm"
    role="alertdialog"
    :dismiss-on="dismissOn"
    :dismissible="!loading"
    :title="title"
    :transition="transition"
    :size="size"
    @close="onModalClose"
    @hide="onModalHide"
    @open="onModalOpen"
    @reveal="onModalReveal"
  >
    <div class="n-confirm__message">
      <slot></slot>
    </div>

    <div slot="footer" class="n-confirm__footer">
      <n-button
        ref="denyButton"
        :disabled="loading"
        :icon="denyButtonIcon"
        button-type="text"
        variant="danger"
        @click="deny"
        >{{ denyButtonText }}</n-button
      >

      <n-button
        ref="confirmButton"
        button-type="text"
        :icon="confirmButtonIcon"
        :loading="loading"
        @click="confirm"
        >{{ confirmButtonText }}</n-button
      >
    </div>
  </n-modal>
</template>

<script>
import NButton from "./NButton.vue";
import NModal from "./NModal.vue";

import classlist from "../helpers/classlist";

export default {
  name: "NConfirm",

  components: {
    NButton,
    NModal
  },

  props: {
    title: {
      type: String,
      default: "NConfirm"
    },
    type: {
      type: String,
      default: "primary" // any of the color prop values of NButton
    },
    size: String,
    confirmButtonText: {
      type: String,
      default: "OK"
    },

    confirmButtonIcon: String,
    denyButtonText: {
      type: String,
      default: "Cancel"
    },
    denyButtonIcon: String,
    autofocus: {
      type: String,
      default: "none" // 'confirm-button', 'deny-button' or 'none'
    },
    closeOnConfirm: {
      type: Boolean,
      default: true
    },
    dismissOn: String,
    transition: String,
    loading: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    open() {
      this.$refs.modal.open();
    },

    close() {
      this.$refs.modal.close();
    },

    confirm() {
      this.$emit("confirm");

      if (this.closeOnConfirm) {
        this.$refs.modal.close();
      }
    },

    deny() {
      this.$refs.modal.close();
      this.$emit("deny");
    },

    onModalOpen() {
      let button;

      if (this.autofocus === "confirm-button") {
        button = this.$refs.confirmButton.$el;
      } else if (this.autofocus === "deny-button") {
        button = this.$refs.denyButton.$el;
      }

      if (button) {
        classlist.add(button, "has-focus-ring");
        button.addEventListener("blur", this.removeAutoFocus);
        button.focus();
      }

      this.$emit("open");
    },

    onModalReveal() {
      this.$emit("reveal");
    },

    onModalClose() {
      this.$emit("close");
    },

    onModalHide() {
      this.$emit("hide");
    },

    removeAutoFocus() {
      let button;

      if (this.autofocus === "confirm-button") {
        button = this.$refs.confirmButton.$el;
      } else if (this.autofocus === "deny-button") {
        button = this.$refs.denyButton.$el;
      }

      if (button) {
        classlist.remove(button, "has-focus-ring");

        // This listener should run only once
        button.removeEventListener("blur", this.removeAutoFocus);
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/imports.scss";

.n-confirm__message {
  font-size: rem(15px);
}

.n-confirm__footer {
  display: flex;
}
</style>
