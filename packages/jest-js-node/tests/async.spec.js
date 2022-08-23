
describe('fetchData callback', () => {
  const fetchData = callback => setTimeout(() => callback&&callback('peanut butter'), 1000)
  test('the data is peanut butter', done => {
    expect.assertions(1);     
    function callback(data) {
      try {
        expect(data).toBe('peanut butter');
        done();
      } catch (error) {
        done(error);
      }
    }
    // 异步方法
    fetchData(callback);
  });
})

describe('fetchData Promise', () => {
  const fetchData = () => Promise.resolve('peanut butter')
  test('the data is peanut butter', () => {
    expect.assertions(1);     
    return fetchData().then(data => {
      expect(data).toBe('peanut butter');
    });
  });
})

describe('fetchData Promise Catch', () => {
  const fetchData = () => Promise.reject('catch error')
  test('the fetch fails with an error', () => {
    expect.assertions(1); // 验证一定数量的断言被调用
    return fetchData().catch(e => expect(e).toMatch('error'));
  });
})

describe('fetchData Promise resolves', () => {
  const fetchData = () => Promise.resolve('peanut butter')
  test('the data is peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
  });
})

describe('fetchData Promise rejects', () => {
  const fetchData = () => Promise.reject('catch error')
  test('the fetch fails with an error', () => {
    return expect(fetchData()).rejects.toMatch('error');
  });
})

describe('fetchData Async/Await resolve', () => {
  const fetchData = () => Promise.resolve('peanut butter')
  test('the data is peanut butter', async () => {
    expect.assertions(1); 
    const data = await fetchData();
    expect(data).toBe('peanut butter');
  });
})

describe('fetchData Async/Await reject', () => {
  const fetchData = () => Promise.reject('catch error')
  test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await fetchData();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });
})

describe('fetchData async await 和 .resolves', () => {
  const fetchData = () => Promise.resolve('peanut butter')
  test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
  });
})

describe.only('fetchData async await 和 .rejects', () => {
  const fetchData = () => Promise.reject('catch error')
  test('the fetch fails with an error', async () => {
    await expect(fetchData()).rejects.toMatch('error');
  });
})