import { Counter } from './src/index';
beforeAll(() => {
  console.log('[ 外部，beforeAll ] >');
});

console.log('外部 describe');

// 分组 作用域
// only 一个文件的唯一一个，对单个测试用例进行测试
// 准备形的代码，放到钩子函数里面
describe('加法', () => {
  console.log('加法 describe');
  let counter = null;
  beforeAll(() => {
    console.log('加法 beforeAll');
    counter = new Counter();
  });

  test('加法', () => {
    counter.add();
    expect(counter.num).toBe(2);
  });

  // test.only('加法', () => {
  //   console.log('[加法  ] >');
  //   counter.add();
  //   expect(counter.num).toBe(2);
  // });

  test('加法 Two', () => {
    counter.addTwo();
    expect(counter.num).toBe(4);
  });
});

describe('减法', () => {
  console.log('减法 describe');
  let counter = null;
  beforeAll(() => {
    console.log('减法 beforeAll');
    counter = new Counter();
  });
  test('减法', () => {
    counter.minus();
    expect(counter.num).toBe(0);
  });

  test('减法', () => {
    counter.minusTwo();
    expect(counter.num).toBe(-2);
  });
});
