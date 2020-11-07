import { mount } from "@vue/test-utils";

import NButton from "./NButton.vue";

describe("NButton.vue", () => {
  it("renders NButton.vue", () => {
    const wrapper = mount(NButton);
    expect(wrapper.find(".n-button").exists()).toBe(true);
  });
});