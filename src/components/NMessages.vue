<template>
  <transition-group id="n-messages" name="toasts" tag="div">
    <n-message
      v-for="message in messages"
      :key="message.id"
      :message="message.message"
      :title="message.title"
      :type="message.type"
      :duration="message.duration"
      :button="message.button"
      :show-close="message.showClose"
      @close="close(message)"
    />
  </transition-group>
</template>

<script>

import { v4 as uuid } from 'uuid';
import NMessage from './NMessage.vue';

export default {
  components: {
    NMessage,
  },

  data() {
    return {
      messages: [],
    };
  },

  methods: {
    add(options) {
      this.$nextTick(() => {
        const optionsComputed = options;
        optionsComputed.id = uuid;
        this.messages.push(optionsComputed);
      });
    },
    close(msgToClose) {
      this.messages = [...this.messages.filter((msg) => msg !== msgToClose)];
    },
    closeAll() {
      this.messages = [];
    },
  },
};
</script>
<style >
.toasts-enter,
.toasts-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.toasts-leave-active {
  position: absolute;
  z-index: -1;
}
</style>

<style lang="scss" >
#n-messages {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  @media (min-width: 440px) {
    left: calc(50% - 200px);
    top: 20px;
    width: 400px;
  }
}
</style>
