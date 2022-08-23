const axios = require('axios');
module.exports =  {
  fetchPostsList(callback) {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      console.log('called');
       callback(res.data);
    });
  }
}
