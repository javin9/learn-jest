// 对配置文件测试
export const getConfig = () => {
  return {
    server: 'https://localhost',
    port: 8082,
  };
};

export const getCommonConfig = () => {
  return {
    db: 'mongodb://10.90.73.48:27097/lowcodedb',
  };
};

export const getRandomConfig = () => {
  return {
    name: '冰箱太凉',
    time: new Date(),
  };
};
