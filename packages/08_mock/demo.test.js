// 模拟模块 改变函数的内部实现
// 不希望 真的通过axios请求，只是希望能测试 成功的调用fetchData就可以了
import { fetchData } from './src/demo';

// 为测试该方法而不实际调用 API (使测试缓慢与脆弱)，我们可以用 jest.mock(...) 函数自动模拟 axios 模块
import axios from 'axios';
jest.mock('axios');

test('should fetch users', async () => {
  const users = [{ name: 'Bob' }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))
  const result = await fetchData();
  expect(result).toEqual(resp);
});
