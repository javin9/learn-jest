## 测试工具包

用于模拟Location, 核心是利用`Object.defineProperty`实现属性代理，实现参考自[jest-useragent-mock](https://github.com/ariesjia/jest-useragent-mock)

## Demo

- 配置：`jest.config.js`

```js
module.exports = {
  //...
  setupFiles: ['jest-location'],
}
```

- 测试文件：`location.spec.js`

```js
import { clearLocation, fakeLocation } from 'jest-location'

describe('Test fakeLocation', () => {
  afterEach(() => {
    clearLocation()
  })

  it('mock location host: www.example.com', () => {
    const opt = { host: 'www.example.com' }
    fakeLocation(opt)
    expect(window.location.host).toEqual('www.example.com')
  })
})
```

## 发布说明

- 1.使用[standard-version](https://github.com/conventional-changelog/standard-version)控制发布版本

```json
// package.json
"scripts": {
  "publish:release": "standard-version",
  "publish:minor": "standard-version --release-as minor",
  "publish:major": "standard-version --release-as major",
  "publish:beta": "standard-version --prerelease beta"
}
```

- 2.推送`tag`与`commit`到远程仓库

```bash
git push --follow-tags origin master
```

- 3.npm发布包

```bash
# 使用nvm切换源
https://registry.npmjs.org/

# 登录
npm login

# 发布对应的版本: https://docs.npmjs.com/cli/v8/commands/npm-publish
npm publish [--tag <beta|latest|...>]
```

## 本地调试

- 方式一：<推荐> 使用 `yalc`: https://github.com/wclr/yalc

- 方式二：`npm link`