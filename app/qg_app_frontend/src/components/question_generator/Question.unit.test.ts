import { shallowMount } from "@vue/test-utils";
import { expect, test } from "vitest";
import Question from "@/components/question_generator/Question.vue";

test("mount component", () => {
  const mockText = "test";

  const wrapper = shallowMount(Question, {
    props: {
      text: mockText,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
  expect(wrapper.text()).toContain(mockText);
});
