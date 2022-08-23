import { clearUserAgent, fakeUserAgent } from 'jest-location'

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
