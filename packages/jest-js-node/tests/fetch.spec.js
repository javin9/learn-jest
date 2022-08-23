const fetch = require('../src/fetch.js')

// jest.useRealTimers(); // timeout

afterEach(() => {
  jest.useRealTimers();
});

test.skip('fetchPostsList中的回调函数应该能够被调用', async () => {
    jest.useFakeTimers('legacy');
    // expect.assertions(1);
    try {
      let mockFn = jest.fn();
      await fetch.fetchPostsList(mockFn);
      // 断言mockFn被调用
      expect(mockFn).toBeCalled();
    } catch (error) {
      console.log(error);
    }
})
