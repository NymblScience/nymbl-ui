<template>
  <div>
    <div class="styleguide-section">
      <div class="inline-block">
        <n-button>
          On Hover
        </n-button>
        <n-popover class="my-popover-style" open-on="hover" position="top" animation="fade">
          <div class="px-10 py-5 rounded-lg bg-white"><h2>Content</h2></div>
        </n-popover>
      </div>
            <div class="inline-block ml-2">
        <n-button>
          On Click
        </n-button>
        <n-popover class="my-popover-style" open-on="click" position="top" animation="fade">
          <div class="px-10 py-5 rounded-lg bg-white"><h2>Content</h2></div>
        </n-popover>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopoverExample',
  title: 'Popover',
};
</script>
<style lang="scss"></style>
