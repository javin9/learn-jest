const sum = require('../src/sum');

describe('tests: sum commonjs', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
})

