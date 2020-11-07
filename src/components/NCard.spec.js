import { mount } from "@vue/test-utils";

import NCard from "./NCard.vue";

describe("NCard.vue", () => {
  it("renders NCard.vue", () => {
    const wrapper = mount(NCard);
    expect(wrapper.find(".n-card").exists()).toBe(true);

  });

});