import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import AboutPage from "@/pages/AboutPage.vue";

test("About page renders", () => {
  const wrapper = mount(AboutPage);

  expect(wrapper.text()).toContain("About the application");
  expect(wrapper.text()).toContain(
    "This application generates questions based on a given context."
  );
});
