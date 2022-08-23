const events = require('../src/events')
const fetch = require('../src/fetch')


jest.useRealTimers()

describe('tests: spyOn', () => {

  test.skip('使用jest.spyOn()监控fetch.fetchPostsList被正常调用', async() => {
    expect.assertions(2);
    const spyFn = jest.spyOn(fetch, 'fetchPostsList');
    await events.getPostList();
    expect(spyFn).toHaveBeenCalled();
    expect(spyFn).toHaveBeenCalledTimes(1);
  })

})