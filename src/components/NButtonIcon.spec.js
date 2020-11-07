import { mount } from "@vue/test-utils";

import NButtonIcon from "./NButtonIcon.vue";

describe("NButtonIcon.vue", () => {
  it("renders NButtonIcon.vue", () => {
    const wrapper = mount(NButtonIcon);
    expect(wrapper.find(".n-button-icon").exists()).toBe(true);
  });
});