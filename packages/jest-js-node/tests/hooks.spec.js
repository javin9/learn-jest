// tests hooks

beforeAll(() => console.log('1 - beforeAll'));   // 1
afterAll(() => console.log('1 - afterAll'));  // 12

beforeEach(() => console.log('1 - beforeEach'));  // 2 , 6
afterEach(() => console.log('1 - afterEach')); // 4 , 10

test('', () => console.log('1 - test'));  // 3

describe('Scoped / Nested block', () => {

  beforeAll(() => console.log('2 - beforeAll')); // 5
  afterAll(() => console.log('2 - afterAll')); // 11

  beforeEach(() => console.log('2 - beforeEach')); // 7
  afterEach(() => console.log('2 - afterEach')); // 9

  test('', () => console.log('2 - test')); // 8
});


// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll