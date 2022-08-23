## 项目工具包

## 使用包，需要注意！！!

默认导出的是未编译文件，需要在使用时自行打包构建

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

- 3.npm 发布包

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

## pnpm 安装 workspaces 依赖

```bash
pnpm add jest-location --workspace -D  --filter trade-toolkit
```
