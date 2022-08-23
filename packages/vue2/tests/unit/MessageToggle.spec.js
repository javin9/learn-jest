import { shallowMount, mount } from '@vue/test-utils'
import MessageToggle from '@/components/MessageToggle.vue'

describe('MessageToggle.vue', () => {
  it('toggles msg passed to Message when button is clicked', () => {
    const wrapper = shallowMount(MessageToggle)
    const button = wrapper.find('#toggle-message')
    button.trigger('click')
    expect(wrapper.vm.msg).toBe('message')
    button.trigger('click')
    expect(wrapper.vm.msg).toBe('toggled message')
  })
})