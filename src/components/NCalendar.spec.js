import { mount } from "@vue/test-utils";

import NCalendar from "./NCalendar.vue";

describe("NCalendar.vue", () => {
  it("renders NCalendar.vue", () => {
    const wrapper = mount(NCalendar);
    expect(wrapper.find(".n-calendar").exists()).toBe(true);
  });
});