import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import AboutPage from "@/pages/AboutPage.vue";

test("About page renders", () => {
  const wrapper = mount(AboutPage);

  expect(wrapper.text()).toContain("About");
  expect(wrapper.text()).toContain(
    "Generate question based on a given context."
  );
});
