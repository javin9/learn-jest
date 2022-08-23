const {isCurrentHost} = require('../src/index');

describe('isCurrentHost', () => {
  it('location: www.baidu.com to be true' , () => {
    jsdom.reconfigure({
       url: "https://www.baidu.com/",
     });
    expect(isCurrentHost('www.baidu.com')).toBe(true);
  })
  
  it('location: www.test.com to be true' , () => {
    jsdom.reconfigure({
       url: "https://www.test.com/",
     });
    expect(isCurrentHost('www.test.com')).toBe(true);
  })
})