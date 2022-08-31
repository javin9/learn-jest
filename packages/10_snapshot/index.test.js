import { getConfig, getCommonConfig, getRandomConfig } from './src/index';

// test('测试getConfig配置文件', () => {
//   expect(getConfig()).toEqual({
//     server: 'https://localhost',
//     port: 8080,
//   });
// });

// -----------------------------------
// 和快照匹配
// 第一次调用的时候，会把getConfig的结果 自动生成一个快照
// 第二次 再次生成一个快照，和之前的进行匹配 ,只要改了配置文件，就会报错
// 如何覆盖快照 w+u
test('测试getConfig 和快照匹配', () => {
  expect(getConfig()).toMatchSnapshot();
});

// // -----------------------------------
// // 两个快照如何测试
// // w+i 交互式 ，只提示一个
// test('测试getCommonConfig 和快照匹配', () => {
//   expect(getCommonConfig()).toMatchSnapshot();
// });

// -----------------------------------
// 快照里面time 只要是个Date类型都的任何时间都可以
// test('变化的配置', () => {
//   expect(getRandomConfig()).toMatchSnapshot({ time: expect.any(Date) });
// });

// ----------------------------
// test('行内快照', () => {
//   expect(getConfig()).toMatchInlineSnapshot();
// });
