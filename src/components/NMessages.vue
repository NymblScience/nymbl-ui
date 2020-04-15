<template>
  <transition-group id="n-messages" name="toasts" tag="div" class="c-toasts">
    <n-message
      v-for="(message, index) in messages"
      :key="index"
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
import NMessage from "./NMessage.vue";

export default {
  components: {
    NMessage
  },

  data() {
    return {
      messages: []
    };
  },
  methods: {
    add(options) {
      this.messages.push(options);
    },
    close(msgToClose) {
      this.messages = this.messages.filter(msg => msg !== msgToClose);
    },
    closeAll() {
      this.messages = [];
    }
  }
};
</script>
<style scoped>
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

<style lang="scss" scoped>
#n-messages {
  position: fixed;
  top: 10px;
  left: calc(50% - 200px);

  z-index: 9999;

  width: 400px;
}
</style>
