import { mount } from "@vue/test-utils";

import NNavbar from "./NNavbar.vue";

describe("NNavbar.vue", () => {
  it("renders NNavbar.vue", () => {
    const wrapper = mount(NNavbar);
    expect(wrapper.find(".n-navbar").exists()).toBe(true);
  });
});