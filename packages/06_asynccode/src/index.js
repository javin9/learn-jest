import axios from 'axios';

export const fetchData = () => {
  return axios.get('http://yapi.xesv5.com/mock/2530/getuser');
};
