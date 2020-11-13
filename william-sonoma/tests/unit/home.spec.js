import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home.vue' 
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

describe('home.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Home, {
      methods: {fetchData: () => {}}
    })
  })
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  })
  it("check fetchData is a method", () => {
    expect(typeof Home.methods.fetchData).toBe("function");
  });
  it("check setImages is a method", () => {
    expect(typeof Home.methods.setImages).toBe("function");
  });
  it("has data", () => {
    expect(typeof Home.data).toBe("function");
  });
  it("check Header component used", () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });
  it("check Footer component used", () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });
})
