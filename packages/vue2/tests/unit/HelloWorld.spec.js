import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe('shallowMount HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.exists()).toBe(true);

    expect(wrapper.text()).toMatch(msg);
  });
  it('test attribute and class', () => {
    const wrapper = shallowMount(HelloWorld)
    // 查找第一个span标签
    const dom = wrapper.find('span')
    expect(dom.classes()).toContain('item')
    expect(dom.attributes().id).toBeFalsy()
  })

  it('test trigger click', async () => {
    const wrapper = shallowMount(HelloWorld)
    const dom = wrapper.find('#testClick')
    expect(wrapper.vm.btnText).toBe(1)
    dom.trigger('click')
    expect(wrapper.vm.btnText).toBe(2)
    // await dom update
    await wrapper.vm.$nextTick()
    expect(dom.text()).toBe('2')
  })
})


describe('tests: HelloWorld.vue 的 emit / props', () => {
  it('test props', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        name: 'keng',
        age: '100'
      }
    })
    expect(wrapper.props().name).toBe('keng')
    expect(wrapper.props('age')).toBe('100')
  })
  it('test emit', () => {
    const wrapper = shallowMount(HelloWorld)
    const ageDom = wrapper.find('#age')
    ageDom.trigger('click')
    //console.log(wrapper.emitted())
    expect((wrapper.emitted('change-age')[0])).toEqual([1])
  })
})

