<template>
  <div id="home" class="bg-green">
    <h2 class="text-6xl my-10">Style</h2>
    Colors
    <h2 class="text-6xl my-10">Components</h2>
    <div class="my-10 w-100" v-for="example in examples" :key="example.name">
      <h3 class="text-4xl my-10">{{ example.title ? example.title : example.name }}</h3>
      <component :is="example" />

      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import hello from '@/examples';

export default {
  name: 'Home',
  data: () => ({
    examples: hello.Components,
  }),
  created() {
    console.log(hello);
  },
};
</script>
