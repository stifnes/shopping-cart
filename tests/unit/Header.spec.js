import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header", () => {

  let wrapper;
  
  beforeEach(() =>{
    wrapper = shallowMount(Header);
  });

  afterEach(() =>{
    wrapper.destroy();
  });

  it("should delete products on click", async() => {
    await wrapper.find('.button-del').trigger('click');
    expect(wrapper.vm.deleteProducts).$emit;
  })

  it("has the expected HTML structure", () =>{
    expect(wrapper.element).toMatchSnapshot();
  });
});
