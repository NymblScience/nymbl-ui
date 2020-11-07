import { mount } from "@vue/test-utils";

import NCheckbox from "./NCheckbox.vue";

describe("NCheckbox.vue", () => {
  it("renders NCheckbox.vue", () => {
    const wrapper = mount(NCheckbox);
    expect(wrapper.find(".n-checkbox").exists()).toBe(true);

  });

});