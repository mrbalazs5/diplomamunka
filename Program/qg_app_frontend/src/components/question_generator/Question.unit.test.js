import { shallowMount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import Question from "@/components/question_generator/Question.vue";
test('mount component', () => {
    const wrapper = shallowMount(Question, {
        props: {
            value: 'test',
        },
        global: {
            stubs: ['a-select', 'a-select-option'],
        },
    });
    expect(wrapper.html()).toMatchSnapshot();
});
