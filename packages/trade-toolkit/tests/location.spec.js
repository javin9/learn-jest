import { clearLocation, fakeLocation } from 'jest-location'

describe('Test fakeLocation', () => {
  afterEach(() => {
    clearLocation()
  })

  it('mock location host: www.example.com', () => {
    const opt = { host: 'www.example.com' }
    fakeLocation(opt)
    expect(window.location.host).toEqual('www.example.com')
  })
})
