<template>
  <div :class="classes" class="n-message">
    <div v-if="title" class="n-message-title">{{ title }}</div>
    <div class="n-message-container">
      {{ message }}
      <n-button
        v-if="button"
        :size="button.size ? button.size : sm"
        @click="button.click"
      >
        {{ button.text ? button.text : "" }}</n-button
      >

      <close-icon
        v-if="showClose"
        class="n-message-close"
        title="Close"
        is-transperent
        :size="10"
        @click="close"
      />
    </div>
  </div>
</template>

<script>
import CloseIcon from "../icons/Close.vue";

export default {
  components: {
    CloseIcon
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
  transition: all 400ms;
  border-radius: 3px;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: $blue-2;
  padding: 10px 10px;
  color: $gray-1;
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: #f1f1f1;

  padding-right: 30px;
  position: relative;
  &-container {
    display: flex;
    align-items: center;
    min-height: 30px;
    .n-button {
      margin-left: auto;
      order: 2;
    }
  }
  &-title {
    font-weight: 600;
    width: 100%;
  }

  &-close {
    position: absolute;
    right: 6px;
    top: 1px;
    cursor: pointer;
    transition: color 300ms;
    &:hover {
      color: $red-3;
    }
  }
  &.is-success {
    background: $green-2;
  }
  &.is-error {
    background: $red-2;
  }
}
</style>
