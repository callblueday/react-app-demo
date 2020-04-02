react+redux+router+typescript demo
=======

基于 `create-react-app` 项目。本项目主要探索 “一个基于react项目的完整工程化该如何做”，包含：
- 目录结构组织
- 启动
- 编译
- 编辑器配置
    - vscode editor config
- Git hook
    - 代码编写规范检查（lint、格式化）
    - git commit 提交规范（commitlint）
    - Git auto changeLog
- 开发过程
    - 接入后台 api 规范
- 测试 
    - 单元测试
    - 测试覆盖率
- 持续集成触发
- 项目部署

## Install and start

```
yarn
yarn start
```

## Build

```
yarn build
```

## Includes
- 编辑器配置
    - .prettierrc
    - eslint vscode 插件安装，lint 检查
    - prettier vscode 扩展安装，格式化
- 开发过程
    - [x] react
    - [x] react-router
    - [x] typescript
    - [x] es6
    - [x] babel
    - [x] sass
    - [] redux
    - [x] envirments varialbles
- Git hook
    - [x] 代码编写规范
        - husky: hook工具
        - lint-staged: 对 staged files 可以执行检测脚本
        - prettier: commit 前执行格式化
    - [x] git commit 提交规范
        - [x] commitlint
    - [] auto-change-log
- 测试
    - [x] react-scripts
        - [x] 集成了webpack
    - [x] react-test-library
        - [x] jsdom
        - [x] jest
- 持续集成
    - [x] travis ci
        - .travis.yml: for ci servers

## 代码编写规范


## Git Hook

### 代码格式 hook
基于 `lint-staged` 和 `prettier`， commit 前执行格式化。

### git commit 提交规范
基于 [commitlint](https://github.com/conventional-changelog/commitlint). 

需要增加 `commitlint.config.js` 到项目根目录

commit 提交前缀包含：
- build
- ci
- chore
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

### auto ChangeLog
基于 [AutoChangeLog](https://github.com/CookPete/auto-changelog)。
可以创建在根目录创建 `changelog-template.hbs` 文件用来定义 changeLog 模板。
然后运行时指定模板

```
auto-changelog --template changelog-template.hbs
```

## 单元测试

基于 [react-test-library](https://testing-library.com/docs/react-testing-library/intro)`

### 测试书写规范
测试, 会执行下列文件：
1. 位于 `__tests__` 文件夹下的 `.js` 文件,
2. `.test.js` 后缀文件,
3. `.spec.js` 后缀文件

这里我们选择第规则 1 的形式。

```
# 执行测试
yarn test

# 得到测试覆盖率
npm test -- --coverage
```

### 全局配置
`src/setupTests.ts` 是全局配置文件，这里可以设置全局变量。用法待确认。

## 持续化集成
（1）所做的事

监听代码变更 - 自动运行构建和测试 - 反馈运行结果 - 将新代码"集成"到主干

持续化集成，本质上就是监听触发条件，然后相关执行脚本。例如：推送代码到服务器，`推送`是监听条件，触发后，就会执行代码中定义好的构建或者测试脚本。

（2）从哪里读取这些脚本？

有一些现成的工具，来帮我组织这些脚本，[Travis CI](http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html) 就是其中一个。它约定了一个叫 `.travis.yml` 的配置文件（[yml](https://www.ruanyifeng.com/blog/2016/07/yaml.html) 是一种用来写配置文件的语言），里面定义 Travis 的行为，一旦代码仓库有新的 Commit，Travis 就会去找这个文件，执行里面的命令，例如 node 项目的配置文件示例：

```
language: node_js
node_js:
  - 12
cache:
  directories:
    - node_modules
script:
  - npm run build
  - npm test
```

（3）运行流程

Travis 的运行流程很简单，任何项目都会经过两个阶段。
```
install 阶段：安装依赖
script 阶段：运行脚本
```
install字段用来指定安装脚本。script字段用来指定构建或测试脚本。Node 项目的install 和 script 阶段都有默认脚本，可以省略。

```
install默认值：npm install
script默认值：npm test
```

(4) 部署

script阶段结束以后，还可以设置通知步骤（notification）和部署步骤（deployment），它们不是必须的。

部署的脚本可以在script阶段执行，也可以使用 Travis 为几十种常见服务提供的快捷部署功能。比如，要部署到 Github Pages，可以写成下面这样。

```
deploy:
  provider: pages
  skip_cleanup: true
  github_token: $GITHUB_TOKEN # Set in travis-ci.org dashboard
  on:
    branch: master
```

其他部署方式，请看 [官方文档](https://docs.travis-ci.com/user/deployment/)。

### 基于 jenkins 的持续集成


### 基于 gitlab 的持续集成并部署到阿里云的方案
gitlab 依赖的是 pipeline.（暂略）
