const fetch = require('./fetch')

module.exports = {
  async getPostList() {
    return fetch.fetchPostsList(data => {
      console.log('fetchPostsList be called!');  // not console called
      // do something
    });
  }
}
