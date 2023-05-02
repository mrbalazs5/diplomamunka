import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import QuestionGenerator from "@/components/question_generator/QuestionGenerator.vue";

test("mount component", () => {
  const wrapper = mount(QuestionGenerator);

  expect(wrapper.text()).toContain("Give me some context");
});
