import { fetchData } from './src';

// {
// "name": "冰箱太凉"
// }

test('fetchData then', async () => {
  const response = await fetchData();
  expect(response.data).toEqual({ name: '冰箱太凉' });
});

// test('fetchData then', async () => {
//   fetchData().then((response) => {
//     expect(response.data).toEqual({ name: '冰箱太凉' });
//   });
// });

// 测试catch
// NOTE：正确的请求 不会走catch,也会显示通过测试
// test('fetchData catch', async () => {
//   fetchData().catch((error) => {
//     expect(error.toString().indexOf('404')).toBe(true);
//   });
// });

// catch的情况 通过断言，要求后面必须执行一个 expect的语法
// test('fetchData catch', async () => {
//   expect.assertions(1);
//   fetchData().catch((error) => {
//     expect(error.toString().indexOf('404')).toBe(true);
//   });
// });

// 通过resolves方法
// test('fetchData resolve', () => {
//   return expect(fetchData()).resolves.toMatchObject({
//     data: { name: '冰箱太凉' },
//   });
// });

// 通过rejects方法
// test('fetchData resolve', () => {
//   // 错误的时候去抛出一个异常
//   return expect(fetchData()).rejects.toThrow();
// });

// 通过 await resolves方法
// test('fetchData resolve', async() => {
//   await expect(fetchData()).resolves.toMatchObject({
//     data: { name: '冰箱太凉' },
//   });
// });

// 通过 await rejects方法
// test('fetchData rejects', async() => {
//   // 错误的时候去抛出一个异常
//   await expect(fetchData()).rejects.toThrow();
// });
