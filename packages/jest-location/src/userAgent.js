// forked from https://github.com/ariesjia/jest-useragent-mock

const origin = global.navigator.userAgent
const cleared = Symbol('clear-user-agent')
let fake = null

Object.defineProperty(global.navigator, 'userAgent', {
  get () {
    return fake === cleared ? origin : (fake || '')
  }
})

export const clearUserAgent = () => {
  fake = cleared
}

export const fakeUserAgent = (agent) => {
  fake = agent
}
