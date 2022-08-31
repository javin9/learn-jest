import { timerGame } from './src/index';

//------------------------------
//done已废弃
// test('定时', (done) => {
//   timerGame(() => {
//     expect(1).toBe(1);
//     done;
//   });
// });

//---------------------------
// jest.runAllTimers(); 不同等待，立即执行
// runOnlyPendingTimers只执行等待的那个时间
jest.useFakeTimers();
test('waits 1 second before ending the game', () => {
  const fn = jest.fn();
  timerGame(fn);
  jest.runAllTimers();
  // runOnlyPendingTimers
  expect(fn).toHaveBeenCalledTimes(1); //被调用次数
});

// //---------------------------
jest.useFakeTimers();
test('waits 1 second before ending the game', () => {
  const fn = jest.fn();
  timerGame(fn);
  // 让时间快进1秒
  jest.advanceTimersByTime(1000);
  // runOnlyPendingTimers
  expect(fn).toHaveBeenCalledTimes(1); //被调用次数
});
