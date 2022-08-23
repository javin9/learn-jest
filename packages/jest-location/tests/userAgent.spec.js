import { clearUserAgent, fakeUserAgent } from '@/src'

describe('Test User Agent', () => {
  afterEach(() => {
    clearUserAgent()
  })

  it('userAgent: wechat', () => {
    const mockAgent = 'xxx wechat'
    fakeUserAgent(mockAgent)
    expect(window.navigator.userAgent).toEqual(mockAgent)
  })
})
