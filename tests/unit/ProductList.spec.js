import { shallowMount } from "@vue/test-utils";
import ProductList from "@/components/ProductList.vue";

describe("ProductList", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ProductList);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("should add Products on click of add Button", () => {
    wrapper.find(".button-add").trigger("click");
    expect(wrapper.vm.addProduct()).toBe();
  });

  it("should add Products on click of add Button", () => {
    wrapper.find(".form-input input").trigger("keypress");
    expect(wrapper.vm.showOptions).toBe(true);
  });

  it("has the expected HTML structure", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
