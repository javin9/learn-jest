const { add, minus, multiply } = require('./src/index');

test('测试 add  ', () => {
  const result = add(1, 2);
  expect(result).toBe(2);
});

test('测试 minus  ', () => {
  expect(minus(5, 2)).toBe(3);
});

test('测试 multiply  ', () => {
  expect(multiply(1, 2)).toBe(2);
});
