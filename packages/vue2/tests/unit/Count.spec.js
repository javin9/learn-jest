import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Count from '@/components/Count.vue'
import IButton from '@/components/IButton.vue'
const localVue = createLocalVue()
localVue.component('i-button', IButton)

describe('tests Count.vue', () => {
  it('call increment & decrement', () => {
    const wrapper = shallowMount(Count)
    expect(wrapper.vm.count).toBe(0)
    wrapper.vm.increment()
    expect(wrapper.vm.count).toBe(1)
    wrapper.vm.decrement()
    expect(wrapper.vm.count).toBe(0)
  })
})


describe('Count.vue', () => {
  it('默认prop值为10', () => {
    const wrapper = mount(Count)
    expect(wrapper.props().counter).toBe(10)
  })

  it('设置propData.counter值为11', () => {
    const wrapper = mount(Count, { propsData: { counter: 11 } })
    expect(wrapper.props('counter')).toBe(11)
  })

  it('修改props.count值为12', async () => {
    const wrapper = mount(Count)
    await wrapper.setProps({ counter: 12 })
    expect(wrapper.vm.counter).toBe(12)
  })

  it('连续点击，update方法被调用2次', () => {
    const wrapper = mount(Count, { localVue })
    const update = jest.fn()
    wrapper.vm.$on('update', update)
    // 第一次点击
    wrapper.findComponent(IButton).vm.$emit('click')
    expect(update).toBeCalledTimes(1)
    // 第二次点击
    wrapper.findComponent(IButton).vm.$emit('click')
    expect(update).toBeCalledTimes(2)
  })
})
