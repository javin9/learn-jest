export const runCallback = (callback) => {
  callback();
};

export const runCallbackParams = (callback) => {
  callback('冰箱太凉');
};

export const createNewObject = (ClassName) => {
  return new ClassName();
};
