// 匹配器
// 精确匹配的方法
// test('2=2=4', () => {
//   expect(2 + 2).toBe(4);
// });

// test('对象', () => {
//   let person = { name: '冰箱太凉' };
//   expect(person).toBe({ name: '冰箱太凉' });
// });

// test('对象', () => {
//   let person = { name: '冰箱太凉' };
//   expect(person).toEqual({ name: '冰箱太凉' });
// });

//指针匹配
// test('真值', () => {
//   const n = null;
//   expect(n).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
// });

// test('zero', () => {
//   const z = 0;
//   expect(z).not.toBeNull();
//   expect(z).toBeDefined();
//   expect(z).not.toBeUndefined();
//   expect(z).not.toBeTruthy();
//   expect(z).toBeFalsy();
// });

// test('数字', () => {
//   const value = 2 + 2;
//   expect(value).toBeGreaterThan(3);
//   expect(value).toBeGreaterThanOrEqual(3.5);
//   expect(value).toBeLessThan(5);
//   expect(value).toBeLessThanOrEqual(4.5);

//   // toBe and toEqual are equivalent for numbers
//   expect(value).toBe(4);
//   expect(value).toEqual(4);
// });

// toMatch 正则表达式的字符串︰
test('字符串1', () => {
  expect('team').not.toMatch(/I/);
});

// test('字符串2', () => {
//   expect('Christoph').toMatch(/stop/);
// });

// https://jestjs.io/zh-Hans/docs/using-matchers

// https://jestjs.io/zh-Hans/docs/expect
