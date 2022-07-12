import { shallowMount } from "@vue/test-utils";
import Products from "@/components/Products";
import App from "@/App"

describe("addToCart Component", () => {
  it("Check if product is emitted corectlly", async () => {
    const wrapper = shallowMount(Products);

    wrapper.vm.$emit("product");

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().product).toBeTruthy();

    expect(shallowMount(Products).element).toMatchSnapshot();
  })
  it("add item to cart", () => {
    const wrapper = shallowMount(App);
  })
});
