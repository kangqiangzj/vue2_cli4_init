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