<template>
  <div>
    <div class="flex mb-6">
      <div class="w-2/3 mr-6 h-40">
        <n-card title="Card with a title">
          <!-- eslint-disable max-len -->
          <template>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type.
          </template>
        </n-card>
      </div>
      <div class="w-1/3 h-40">
        <n-card>
          <!-- eslint-disable max-len -->
          <template>
            Card without a title. Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Printer took a galley of type.
          </template>
        </n-card>
      </div>
    </div>

    <div class="flex mb-6">
      <div class="w-1/3 mr-6 h-50">
        <n-card title="Dropdown">
          <template #header-buttons>
            <n-button-icon ref="dropdownButton" has-dropdown>
              <DotsVertical />
              <template #dropdown>
                <n-menu

                  contain-focus
                  @select="message"
                  :options="['Training Levels', 'Check-Ins']"
                  @close="$refs.dropdownButton.closeDropdown()"
                ></n-menu>
               </template>
            </n-button-icon>
          </template>
          <!-- eslint-disable max-len -->
          <template>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type.
          </template>
        </n-card>
      </div>
      <div class="w-2/3 h-50">
        <n-card title="Action Buttons">
          <template #header-buttons>
            <n-button buttonType="text" @click="message('Action 1')" size="sm">Action 1</n-button>
            <n-button
              buttonType="text"
              variant="danger"
              @click="message('Action 2', 'error')"
              size="sm"
              >Action 2</n-button
            >
          </template>
          <!-- eslint-disable max-len -->
          <template>
            Card without a title. Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Printer took a galley of type been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
          </template>
        </n-card>
      </div>
    </div>
  </div>
</template>

<script>
import DotsVertical from '../icons/vue-material/DotsVertical.vue';

export default {
  components: {
    DotsVertical,
  },
  name: 'CardExample',
  title: 'Cards',
  data() {
    return {
      enabled: false,
    };
  },
  methods: {
    message(text, type = 'success') {
      this.$nMessage({
        message: text,
        type,
        duration: 3000,
      });
    },
  },
};
</script>
