import { mount, shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import App from "@/App.vue";

describe("shallowMount HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("mount App.vue Tests", () => {
  it("message passed from App -> Hello World should be rendered", () => {
    const msg = "Hello World";
    const wrapper = mount(App, {
      data() {
        return {
          msg: msg
        };
      }
    });
    expect(wrapper.find("div.hello > h1").text()).toBe(msg);
  });
});

it.skip("message passed from App -> Hello World will not be rendered", () => {
  const msg = "Hello World";
  const wrapper = shallowMount(App, {
    data() {
      return {
        msg: msg
      };
    }
  });
  expect(wrapper.find("div.hello > h1").text()).toBe(msg);
});