// FetchData.spec.ts
import { mount } from '@vue/test-utils'
import FetchData from '@/components/FetchData.vue'

describe('FetchData.vue', () => {
  it('在created生命周期中调用方法', () => {
    const getUser = jest.spyOn(FetchData.methods, 'getUser')
    mount(FetchData)
    expect(getUser).toBeCalled()
  })

})
