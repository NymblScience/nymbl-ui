<template>
  <div v-if="isMounted" :class="classes" class="n-message">
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
        is-transparent
        :size="16"
        @click="close"
      />
    </div>
  </div>
</template>

<script>
import CloseIcon from '../icons/Close.vue';

export default {
  data() {
    return {
      isMounted: true,
    };
  },
  components: {
    CloseIcon,
  },
  props: {
    message: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'default',
    },
    duration: {
      type: Number,
      default: 0,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    button: {
      type: [Object, Boolean],
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'is-success': this.type === 'success',
        'is-error': this.type === 'error',
      };
    },
  },
  methods: {
    close() {
      const that = this;
      this.$emit('close');
      setTimeout(() => {
        that.isMounted = false;
      }, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/imports.scss";

.n-message {
  transition: all 400ms;
  border-radius: 0;
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
  background: $blue-1;
  padding: 10px 10px;
  color: $gray-1;
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: #f9f9f9;
  padding-right: 30px;
  position: relative;
  @media (min-width: 440px) {
    border-radius: 3px;
  }
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
    right: 8px;
    top: 8px;
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
    background: $red-1;
  }
}
</style>
