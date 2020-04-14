<template>
  <div :class="classes" class="n-message">
    {{ title ? title : null }}
    {{ message }}
    <n-button-icon
      v-if="showClose"
      is-raised
      variant="danger"
      class="n-message-close"
      title="Close"
      @click="close"
    >
      <close-icon :size="20" />
    </n-button-icon>
  </div>
</template>

<script>
import CloseIcon from "../icons/Close.vue";
import NButtonIcon from "./NButtonIcon.vue";

export default {
  components: {
    CloseIcon,
    NButtonIcon
  },
  props: {
    message: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "default"
    },
    duration: {
      type: Number,
      default: 5000
    },
    showClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes() {
      return {
        "is-success": this.type === "success",
        "is-error": this.type === "error"
      };
    }
  },
  created() {
    const that = this;
    if (this.duration) {
      setTimeout(() => {
        that.close();
      }, this.duration);
    }
  },
  methods: {
    close() {
      this.$emit("close");
      this.$destroy();
      this.$el.remove();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/imports.scss";

.n-message {
  transition: all 200ms;
  border-radius: 3px;
  width: 100%;
  box-shadow: 0 1px 2px rgba(57, 63, 72, 0.3);
  border-left: solid 2px $blue-2;
  padding: 10px;
  margin-bottom: 15px;
  background: #fff;
  display: flex;
  align-items: center;
  &-close {
    order: 2;
    cursor: pointer;
    margin-left: auto;
  }
  &.is-success {
    border-left: solid 2px $green-2;
  }
  &.is-error {
    border-left: solid 2px $red-2;
  }
}
</style>
