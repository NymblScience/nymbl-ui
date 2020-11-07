<template>
  <div id="home" >
    <colors />

    <div class="my-10 w-100" v-for="example in examples" :key="example.name " :class="example.name">
      <a :id="example.name" class="anchor"></a>
      <hr>
      <h3 class="text-4xl my-10 "  >{{ example.title ? example.title : example.name }}</h3>
      <component :is="example" />
    </div>
  </div>
</template>

<script>

import Colors from '@/Colors.vue';
import examples from '@/examples';

export default {
  components: {
    Colors,
  },
  name: 'Home',
  data: () => ({
    examples: examples.Components,
  }),

};
</script>
<style>
.anchor {
    display: block;
    position: relative;
    top: -100px;
    visibility: hidden;
}
</style>
