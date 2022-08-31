import { runCallback, runCallbackParams, createNewObject } from './src/index';

// test('runCallback 自定义函数', () => {
//   const fn = () => {};
//   runCallback(fn); //执行
//   expect(fn).toBeCalled(); //如果被执行了，就代表测试通过
// });

// -----------------------------
test('runCallback jest.fn生成函数', () => {
  // jest生成一个mock函数，捕获函数的调用 追溯
  const fn = jest.fn();
  // const fn = () => {};
  runCallback(fn); //执行
  expect(fn).toBeCalled(); //如果被执行了，就代表测试通过
  console.log(fn.mock);
  // {
  //   calls: [ [] ], //调用次数&参数
  //   contexts: [ undefined ],
  //   instances: [ undefined ], //每次fn运行的时候，this的指向
  //   invocationCallOrder: [ 1 ],// 调用顺序
  //   results: [ { type: 'return', value: undefined } ],
  //   lastCall: []
  // }
});

// -----------------------------
// test('runCallback 调用次数 测试', () => {
//   const fn = jest.fn();
//   runCallbackParams(fn); //执行 1次
//   runCallbackParams(fn); //执行 2次
//   expect(fn.mock.calls.length).toBe(2); //如果被执行了，就代表测试通过
//   // console.log(fn.mock);
// });

// -----------------------------
// test('runCallback 调用参数 测试', () => {
//   const fn = jest.fn();
//   runCallbackParams(fn);
//   expect(fn.mock.calls[0][0]).toBe('冰箱太凉');
//   console.log(fn.mock);
// });

// -----------------------------
// 可以自由的设置返回结果
// test('runCallback 调用返回值', () => {
//   const fn = jest.fn();
//   fn.mockReturnValueOnce('地球人1');

//   runCallbackParams(fn);
//   console.log(fn.mock);
// });

// -----------------------------
// 可以自由的设置返回结果
// test('runCallback 调用返回值', () => {
//   const fn = jest.fn();
//   fn.mockReturnValueOnce('地球人1');
//   fn.mockReturnValueOnce('地球人2');
//   fn.mockReturnValueOnce('地球人3');

//   runCallbackParams(fn);
//   runCallbackParams(fn);
//   runCallbackParams(fn);
//   console.log(fn.mock);
// });

// -----------------------------
// 可以自由的设置返回结果 mockImplementation
test('runCallback 调用返回值', () => {
  const fn = jest.fn();
  fn.mockImplementation(() => {
    // 此处写很多逻辑
    return '地球人1';
  });

  runCallbackParams(fn);
  console.log(fn.mock);
});

// -----------------------------
// 测试this指向
// test('测试 createNewObject', () => {
//   const fn = jest.fn();
//   createNewObject(fn);
//   console.log(fn.mock);
// });
