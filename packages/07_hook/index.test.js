import { Counter } from './src/index';

// const counter = new Counter();

// test('加法', () => {
//   counter.add();
//   expect(counter.num).toBe(2);
// });

// test('减法', () => {
//   counter.minus();
//   expect(counter.num).toBe(1);
// });

// 缺点：两个测试用例 ，用了同一个counter实例是互相影响，这是有问题的，不是一个好的选择 ，后面再说如何解决，我们先思考一个问题
// 如果我们 在测试用例中用到一些东西，需要提前初始化的时候，jest建议我们用它的一些钩子函数

// let counter = null;
// beforeAll(() => {
//   counter = new Counter();
//   console.log('[ beforeAll ] >', 'beforeAll');
// });

// afterAll(() => {
//   console.log('[ afterAll ] >', 'afterAll');
// });

// test('加法', () => {
//   console.log('[加法  ] >');
//   counter.add();
//   expect(counter.num).toBe(2);
// });

// test('减法', () => {
//   console.log('[减法  ] >');
//   counter.minus();
//   expect(counter.num).toBe(1);
// });

// 解决这个问题，需要引入钩子函数
// let counter = null;
// beforeEach(() => {
//   counter = new Counter();
//   console.log('[ beforeEach ] >', 'beforeEach');
// });

// afterEach(() => {
//   console.log('[ afterEach ] >', 'afterEach');
// });

// test('加法', () => {
//   console.log('[加法  ] >');
//   counter.add();
//   expect(counter.num).toBe(2);
// });

// test('减法', () => {
//   console.log('[减法  ] >');
//   counter.minus();
//   expect(counter.num).toBe(1);
// });
