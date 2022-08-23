describe('tests: only', () => {
  test.only('this will be the only test that runs', () => {
    expect(1+1).toBe(2);
  });

  test('this test will not run', () => {
    expect('A').toBe('A');
  });
  
  test('this test will not run too', () => {
    expect(1+2).toBe(3);
  });
})