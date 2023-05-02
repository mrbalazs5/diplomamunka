import { shallowMount } from "@vue/test-utils";
import { expect, test } from "vitest";
import Tooltip from "@/components/tooltip/Tooltip.vue";

test("mount component", () => {
    const mockText = "test";

    const wrapper = shallowMount(Tooltip, {
        props: {
            text: mockText,
        },
    });

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.text()).toContain(mockText);
});
