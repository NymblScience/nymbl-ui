<template>
  <div id="home" >
    <div class="my-10 w-100">

      <h3 class="text-4xl my-10">Colors</h3>
      <div class="flex" v-for="color in colors" :key="color">
        <div class="mb-3"  v-for="shade in       getColors(color)" :key="shade">
           <div class="mb-1 mr-1" style="width: 100px; height: 100px" :style="`background: ${shade}`"></div>
           {{ shade }}
        </div>

      </div>
    </div>
    <div class="my-10 w-100" v-for="example in examples" :key="example.name">
      <hr>
      <h3 class="text-4xl my-10">{{ example.title ? example.title : example.name }}</h3>
      <component :is="example" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import examples from '@/examples';
import tailwind from '../../tailwind';

export default {
  name: 'Home',
  data: () => ({
    examples: examples.Components,
  }),
  computed: {
    colors() {
      return tailwind.theme.extend.colors;
    },
  },
  methods: {
    getColors(color) {
      const colors = [];
      Object.keys(color).forEach((key) => colors.push(color[key]));
      return colors;
    },
  },
};
</script>
