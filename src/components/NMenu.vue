<template>
  <n-focus-container
    ref="focusContainer"
    class="n-menu"
    role="menu"
    tag="ul"
    lazy
    :class="classes"
    :contain-focus="containFocus"
  >
    <n-menu-option
      v-for="(option, index) in options"
      :key="index"
      :disable-ripple="disableRipple"
      :disabled="option[keys.disabled]"
      :href="option[keys.href]"
      :icon-props="iconProps || option[keys.iconProps]"
      :icon="hasIcons ? option[keys.icon] : null"
      :label="
        option[keys.type] === 'divider' ? null : option[keys.label] || option
      "
      :secondary-text="hasSecondaryText ? option[keys.secondaryText] : null"
      :target="option[keys.target]"
      :type="option[keys.type]"
      @click.native="selectOption(option)"
      @keydown.enter.native="selectOption(option)"
      @keydown.esc.native.esc="closeMenu"
    >
      <slot name="option" :option="option"></slot>
    </n-menu-option>
  </n-focus-container>
</template>

<script>
import NFocusContainer from './NFocusContainer.vue';
import NMenuOption from './NMenuOption.vue';

export default {
  name: 'NMenu',

  components: {
    NFocusContainer,
    NMenuOption,
  },

  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    hasIcons: {
      type: Boolean,
      default: false,
    },
    iconProps: Object,
    hasSecondaryText: {
      type: Boolean,
      default: false,
    },
    containFocus: {
      type: Boolean,
      default: false,
    },
    keys: {
      type: Object,
      default() {
        return {
          icon: 'icon',
          type: 'type',
          label: 'label',
          secondaryText: 'secondaryText',
          iconProps: 'iconProps',
          disabled: 'disabled',
          href: 'href',
          target: 'target',
        };
      },
    },
    disableRipple: {
      type: Boolean,
      default: false,
    },
    raised: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        'is-raised': this.raised,
        'has-icons': this.hasIcons,
        'has-secondary-text': this.hasSecondaryText,
      };
    },
  },

  methods: {
    selectOption(option) {
      if (option.disabled || option.type === 'divider') {
        return;
      }

      this.$emit('select', option);
      this.closeMenu();
    },

    closeMenu() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/imports.scss";

.n-menu {
  background-color: white;
  border: rem(1px) solid rgba(black, 0.08);
  
  list-style: none;
  margin: 0;
  max-height: 100vh;
  max-width: rem(272px);
  min-width: rem(168px);
  outline: none;
  overflow-x: hidden;
  overflow-y: auto;
  padding: rem(4px 0);

  &.is-raised {
    border: none;
    box-shadow: 0 2px 4px -1px rgba(black, 0.2), 0 4px 5px 0 rgba(black, 0.14),
      0 1px 10px 0 rgba(black, 0.12);
  }

  &.has-secondary-text {
    min-width: rem(240px);
    max-width: rem(304px);
  }
}
</style>
