import {shallowMount} from '@vue/test-utils'
import Message from '@/components/IMessage.vue'

describe('mock: Vue中prototype中的$message', () => {
  it('add mocks', () => {
    const message = {
      success: jest.fn(),
      warning: jest.fn(),
      error: jest.fn(),
      info: jest.fn()
    }
    const wrapper = shallowMount(Message, {
      mocks: {
        $message: message
      }
    })
    const successBtn = wrapper.find('#success')
    const warningBtn = wrapper.find('#warning')
    const errorBtn = wrapper.find('#error')
    const infoBtn = wrapper.find('#info')

    successBtn.trigger('click')
    expect(message.success).toHaveBeenCalledTimes(1)

    warningBtn.trigger('click')
    expect(message.warning).toHaveBeenCalledTimes(1)

    errorBtn.trigger('click')
    expect(message.error).toHaveBeenCalledTimes(1)

    infoBtn.trigger('click')
    expect(message.info).toHaveBeenCalledTimes(1)
  })
})