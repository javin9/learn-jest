function throwErrorCode() {
  throw new Error('you are using the wrong JDK');
}

class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MyError';
  }
}

function throwNewError() {
  throw new MyError('this is Custom Error JDK');
}


describe('tests toThrow api', () => {
  test('throwErrorCode', () => {
    expect(() => throwErrorCode()).toThrow();
    expect(() => throwErrorCode()).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(() => throwErrorCode()).toThrow('you are using the wrong JDK');
    expect(() => throwErrorCode()).toThrow(/JDK/);
  });
})

describe.only('tests custom Error api', () => {
  test('throwNewError', () => {
    expect(() => throwNewError()).toThrow();
    expect(() => throwNewError()).toThrow(MyError);

    // You can also use the exact error message or a regexp
    expect(() => throwNewError()).toThrow('this is Custom Error JDK');
    expect(() => throwNewError()).toThrow(/JDK/);
  });
})
