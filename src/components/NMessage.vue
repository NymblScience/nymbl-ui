<template>
  <div :class="classes" class="n-message">
    <div v-if="title" class="n-message-title">{{ title }}</div>
    {{ message }}
    <n-button
      v-if="button"
      :size="button.size ? button.size : sm"
      @click="button.click"
    >
      {{ button.text ? button.text : "" }}</n-button
    >
    <n-button-icon
      v-if="showClose"
      class="n-message-close"
      title="Close"
      is-transperent
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
    },
    button: {
      type: [Object, Boolean],
      default: false
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
  background: $blue-2;
  padding: 5px 10px;
  color: $gray-1;
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: #fff;
  &-title {
    font-weight: 600;
    width: 100%;
  }
  display: flex;
  align-items: center;
  &-close {
    order: 2;
    cursor: pointer;
    margin-left: auto;
  }
  &.is-success {
    background: $green-2;
  }
  &.is-error {
    background: $red-2;
  }
}
</style>
