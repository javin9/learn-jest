const events = require('../src/events')
const fetch = require('../src/fetch')

// mock整个fetch.js模块
jest.mock('../src/fetch.js');
test('mock 整个 fetch.js模块', async () => {
  expect.assertions(2);
  await events.getPostList();
  expect(fetch.fetchPostsList).toHaveBeenCalled();
  expect(fetch.fetchPostsList).toHaveBeenCalledTimes(1);
});
