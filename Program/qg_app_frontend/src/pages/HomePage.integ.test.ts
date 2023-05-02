import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import HomePage from "@/pages/HomePage.vue";

test("Home page renders", () => {
  const wrapper = mount(HomePage);

  expect(wrapper.text()).toContain("Question Generator");
  expect(wrapper.text()).toContain("Give me some context");
  expect(wrapper.text()).toContain("Your questions");
});




