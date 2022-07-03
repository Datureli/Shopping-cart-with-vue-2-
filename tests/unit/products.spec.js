import { shallowMount } from "@vue/test-utils";
import Products from "@/components/Products";

describe("addToCart is emitted", () => {
  it("renders message when component is created",async () => {
    const wrapper = shallowMount(Products)

    wrapper.vm.$emit('product')

    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().product).toBeTruthy()


    expect(shallowMount(Products).element).toMatchSnapshot();
  });
});
