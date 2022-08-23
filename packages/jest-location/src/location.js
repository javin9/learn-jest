const origin = global.location
const cleared = Symbol('clear-location')
let fake = null
Object.defineProperty(global, 'location', {
  get: function get () {
    return fake === cleared ? origin : fake || ''
  }
})
export const clearLocation = () => {
  fake = cleared
}
export const fakeLocation = (opt) => {
  fake = Object.assign({}, origin, opt)
}
