<!--
 * @Author: zhangjie
 * @Date: 2021-12-28 17:05:11
 * @LastEditors: zhangjie
 * @LastEditTime: 2021-12-28 19:53:40
 * @FilePath: \vue2_cli4_init\README.md
-->
# vue2_cli4_init

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### #代码检查+格式化+提交检查（eslint + prettier + Husky）

See [团队协作规范 - Eslint+Prettier+Husky配置](https://zhuanlan.zhihu.com/p/359972210).

### #husky + lint-staged 配置 （commit 前进行校验）

- husky: 在项目中添加git钩子，在 git 各个生命周期（姑且这样称呼吧）中执行一些自定义操作。我们这里主要是用在 git提交之前执行 linter 操作，不通过则提交无效。
- lint-staged: 简而言之，就是只针对 git 提交的文件进行一些操作，而非整个项目的所有文件。我们这里主要是用在 git 提交之前进行 linter 时只针对提交的文件，以进行渐进式的重构。

注意：husky7.0.4版本有问题，commit时无法触发husky校验，使用4.3.8版本就好了[husky无法工作 commit 提交代码时husky不生效解决方法](https://blog.csdn.net/qq_41614928/article/details/117254099)
```
yarn remove husky
yarn add husky@4.3.8 -D
```