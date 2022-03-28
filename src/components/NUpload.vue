<template>
  <label class="n-fileupload" :class="classes">
    <input
      class="n-fileupload__input"
      ref="input"
      type="file"
      :accept="accept"
      :disabled="disabled"
      :multiple="multiple"
      :name="name"
      :required="required"
      :tabindex="tabindex"
      @blur="onBlur"
      @input="onInput"
      @change="onChange"
      @focus="onFocus"
      v-if="renderInput"
    />

    <div>
      <slot />
    </div>

    <div class="n-fileupload__focus-ring"></div>
  </label>
</template>

<script>
export default {
  name: 'NUpload',
  props: {
    name: {
      type: String,
      required: true,
    },
    label: String,
    tabindex: [String, Number],
    accept: String,
    multiple: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'primary', // 'primary' or 'secondary'
    },
    color: {
      type: String,
      default: 'default', // 'default', 'primary', 'accent'
    },
    size: {
      type: String,
      default: 'normal', // 'small', 'normal', 'large'
    },
    raised: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: 'left', // 'left' or 'right'
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isActive: false,
      renderInput: true,
      hasSelection: false,
      hasMultiple: false,
      displayText: '',
    };
  },

  computed: {
    classes() {
      return [
        `n-fileupload--type-${this.type}`,
        `n-fileupload--color-${this.color}`,
        `n-fileupload--icon-position-${this.iconPosition}`,
        `n-fileupload--size-${this.size}`,
        { 'is-active': this.isActive },
        { 'is-multiple': this.hasMultiple },
        { 'is-raised': this.raised },
        { 'is-disabled': this.disabled },
      ];
    },

    placeholder() {
      if (this.label) {
        return this.label;
      }

      return this.multiple ? 'Choose files' : 'Choose a file';
    },
  },

  methods: {
    onFocus(e) {
      this.isActive = true;
      this.$emit('focus', e);
    },

    onBlur(e) {
      this.isActive = false;
      this.$emit('blur', e);
    },

    onInput(e) {
      this.$emit('input', this.$refs.input.files, e);
    },

    onChange(e) {
      this.updateDisplayText(e);
      this.$emit('change', this.$refs.input.files, e);
    },

    updateDisplayText(e) {
      let displayText;
      const { input } = this.$refs;

      if (input.files && input.files.length > 1) {
        displayText = `${input.files.length} files selected`;
      } else {
        displayText = e.target.value.split('\\').pop();
      }

      if (displayText) {
        this.hasSelection = true;
        this.displayText = displayText;
        this.hasMultiple = input.files.length > 1;
      }
    },

    focus() {
      this.$refs.input.focus();
    },

    openPicker() {
      this.$refs.input.click();
    },

    clear() {
      this.hasSelection = false;

      // Clear the file input by removing the element and re-rendering (via v-if)
      this.renderInput = false;

      this.$nextTick(() => {
        this.renderInput = true;
      });
    },
  },

};
</script>

<style lang="scss">
@import "@/assets/sass/imports.scss";

.n-fileupload {
  align-items: center;
  border-radius: default-border-radius;
  cursor: pointer;
  display: inline-flex;

  font-size: button-font-size;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.02em;
  line-height: 1;
  min-width: rem(80px);
  overflow: hidden;
  padding: 0;
  padding-left: rem(16px);
  padding-right: rem(16px);
  position: relative;
  text-transform: uppercase;

  &.has-focus-ring.is-active,
  body[modality="keyboard"] &.is-active {
    .n-fileupload__focus-ring::before {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  &:not(.is-multiple) {
    .n-fileupload__display-text {
      text-transform: none;
    }
  }

  &.is-raised {
    box-shadow: 0 0 2px rgba(black, 0.12), 0 2px 2px rgba(black, 0.2);
    transition: box-shadow 0.1s;

    &.has-focus-ring.is-active,
    body[modality="keyboard"] &.is-active {
      box-shadow: 0 0 5px rgba(black, 0.22), 0 3px 6px rgba(black, 0.3);
    }
  }

  &.is-disabled {
    cursor: default;
    opacity: 0.6;
  }
}

.n-fileupload__input {
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  width: 0.1px;
}

.n-fileupload__content {
  align-items: center;
  display: flex;
  justify-content: center;
  transition: opacity 0.3s ease;
  z-index: 1;
}

</style>
