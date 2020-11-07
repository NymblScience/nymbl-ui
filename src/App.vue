<template>
  <div id="app">
    <n-navbar containerWidth="1600px" fixed="top">
      <template v-slot:logo>
        <div class="flex justify-center items-center">
          <img style="max-width:7rem" class="navbar__logo mr-5" src="@/assets/img/nymblscience-logo.svg" />
          <span class="text-gray-200">{{'Version ' + version }}</span>
        </div>
      </template>
      <template #nav-items>
        <n-nav-item :active="isActive('Colors')" :href="`#colors`">
          Colors
        </n-nav-item>
        <n-nav-item
          :active="isActive(example.name)"
          v-for="example in examples"
          :key="example.title ? example.title : example.name"
          :href="`#${example.name}`"
        >
          {{ example.title ? example.title : example.name }}
        </n-nav-item>
      </template>
    </n-navbar>
    <div class="container mx-auto mt-24 max-w-4xl ">
      <router-view />
      <footer class="pt-20 pb-10">
        <hr class="border-gray-150 mb-10" />
        © {{ new Date().getFullYear() }} Nymbl Science, Inc.
      </footer>
    </div>
  </div>
</template>

<script>
import examples from '@/examples';
import { version } from '../package.json';

export default {
  data: () => ({
    examples: examples.Components,
    active: 'Colors',
    version,
  }),
  mounted() {
    this.sections.forEach((section) => this.observeSections(section));
  },
  computed: {
    sections() {
      if (!this.examples) {
        return [];
      }
      const sections = Object.keys(this.examples);
      sections.push('Colors');
      return sections;
    },
  },
  methods: {
    isActive(section) {
      return this.active === section;
    },
    observeSections(section) {
      const target = document.getElementsByClassName(section)[0];
      const onIntersection = (entries, opts) => entries.forEach((entry) => {
        const visible = entry.intersectionRatio >= opts.thresholds[0];

        if (visible) {
          this.active = section;
        }
      });
      // configure the intersection observer instance
      const intersectionObserverOptions = {
        root: null,
        threshold: 0.5,
      };

      const observer = new IntersectionObserver(onIntersection, intersectionObserverOptions);

      observer.observe(target);
    },
  },
};
</script>
