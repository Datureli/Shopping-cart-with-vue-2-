import { shallowMount } from "@vue/test-utils";
import Products from "@/components/Products";

describe("login button test", () => {
  it("renders message when component is created", () => {
    // render the component
    const wrapper = shallowMount(Products, {
      propsData: {

      },
    });
    expect(wrapper.vm.$options.name).toMatch("Products");


  });
});
