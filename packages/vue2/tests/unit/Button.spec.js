import { shallowMount, createLocalVue } from '@vue/test-utils'
import Button from '@/components/Button.vue'
import ElementUI from 'element-ui' 

const localVue = createLocalVue() 
localVue.use(ElementUI)

describe('shallowMount Button.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Button, {
      propsData: { msg },
      localVue
    })
    expect(wrapper.exists()).toBe(true)

    expect(wrapper.text()).toMatch(msg)
  })
})