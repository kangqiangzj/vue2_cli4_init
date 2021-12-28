module.exports = {
  root: true,//停止在父级目录中寻找
  env: {
      browser: true, // 浏览器全局变量
      es6: true, // 启用除模块外的所有ECMAScript 6功能（这会自动将ecmaVersion解析器选项设置为6）
      node: true, // Node.js全局变量和Node.js范围
  },
  // 指定全局变量
    // 1. 将每个全局变量名称设置为等于以true允许覆盖变量或false禁止覆盖
    // 2. 还支持在单独的js文件中通过注释配置全局变量 `/* global var1:false, var2:false */`
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
      ENV: true,
      // "process": true,
      // "__dirname": true
  },
  // 指定解析器 - 可以自定义解析器
  // parser: 'esprima', // 默认情况下，ESLint使用Espree作为其解析器
  // 扩展配置文件，主要用来使用第三方的eslint的完整配置
  // 一般输出的是整个eslint配置，也可以是别的形式
  extends: [
    'plugin:vue/essential',
    // @vue/cli集成ESLint 使用
    /**
     'plugin:vue/essential',
      【ESLint + Airbnb】
      '@vue/airbnb',
      【ESLint + Standard】
      '@vue/standard'
      */
    // 【ESLint + Prettier】
    // '@vue/prettier',
    '@vue/standard',
    //避免与 prettier 冲突 
    // 'plugin:prettier/recommended',
    // 'prettier', // Prettier 是一个代码格式化插件。它并不关心你的语法是否正确，只关心你的代码格式，比如是否使用单引号，语句结尾是否使用分号等等。但是有部分规则和Eslint的冲突。
    // 'airbnb-base', // 包含 ECMAScript 6 + 代码规范。 Airbnb 是其中一个最流行的 JavaScript 代码规范，它差不多包含所有 JavaScript 的角度。校验比较严格。
    // 'eslint:recommended', // eslint官方扩展
    // 'plugin:react/recommended', // 插件类型的扩展，也可以直接在 plugins 属性中进行设置
    // 'eslint-config-standard', // 第三方扩展，eslint-config-*
  ],
   // 配置插件，使用第三方的eslint的rules，命名格式eslint-plugin-*
    // 插件一般输出的是规则
  plugins: [
      'vue',
      // 'plugin1', // eslint-plugin-前缀可以从插件名称被省略。
      // 'eslint-plugin-plugin2',
  ],
   // 禁用一组文件的配置文件中的规则
  // overrides: [
  //     {
  //         files: ['*-test.js', '*.spec.js'],
  //         rules: {
  //             'no-unused-expressions': 'off',
  //         },
  //     },
  // ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 配置规则
    // 1. 可以使用配置注释或配置文件来修改项目使用的规则
    // 2. 每个规则必须是以下的值
    // "off"或者0 关闭规则
    // "warn"或者1 将规则打开为警告（不影响退出代码）
    // "error"或者2 将规则打开为错误（触发时退出代码为1）
    rules: {
      // 'plugin1/rule1': 'error', // 重新定义上面插件中的规则
      // "quotes": [
      //     2,
      //     "single",
      //     {
      //         "avoidEscape": true,
      //         "allowTemplateLiterals": true
      //     }
      //   ],
      // "semi": [
      //     2,
      //     "always"
      // ],
      quotes: ['error', 'single'], // 引号
      // 'no-unused-vars': 'warn', // 定义了变量，未使用。可能有全局变量，别人使用的
      // 'global-require': 'off', // 不能使用require
      // 'comma-dangle': 'warn', // 结尾逗号
      // 'no-unused-expressions': 'off', // 不允许  this.toast.finally && this.toast.finally();形式
      // 'no-prototype-builtins': 'off', // 不能使用prototype操作
      // 'no-restricted-syntax': 'off', // 禁止使用for in
      // 'prefer-const': 'warn', // 如果没改变的话，必须是const
      // 'arrow-parens': 'off', // 箭头函数用小括号括起来
      // 'object-shorthand': 'off', // 强制对象字面量缩写语法、
      // 'guard-for-in': 'off', // for in循环要用if语句过滤
      // 'import/no-dynamic-require': 'off', // 不能使用动态require
      "no-tabs":"off",
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境禁用console
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境禁用debugger
      // 'no-undef': 'error', // 任何对未声明的变量的引用都会导致警告，除非该变量在/*global ...*/注释中明确提到。
      // 'vue/no-unused-vars': 'warn', // 禁止使用v-for指令或范围属性的未使用变量定义
      // 'vue/no-unused-components': 'error', // 禁止注册模板中未使用的组件
      // 'linebreak-style': 'off', // 忽略检测换行风格
      // 'vue/max-attributes-per-line': 'warn', // 关闭强制 html 标签换行
      // 'no-param-reassign': ['error', {props: false}], // 允许修改参数中的属性值
      // 'prefer-destructuring': ['error', {object: true, array: false}], // 允许数组通过下标取值
      // 'max-len': 'off', // 对象选项
      // 'no-use-before-define': 'off', // 允许定义之前使用
      // 'func-names': 'off', // 允许使用匿名函数, 开启会不允许使用 const getList = function() {...}，是个警告
      // 'no-shadow': ['error', {allow: ['state']}], // 允许对其进行阴影处理
      // 'import/prefer-default-export': 'off', // 模块只输出一个变量时，是否需要添加default
      // 'no-plusplus': 'off', // 允许使用一元运算符
      // 'no-dupe-keys': 'error', // 禁止对象字面量中出现重复的 key
      // 'no-duplicate-case': 'error', // 禁止出现重复的 case 标签
      // 'no-empty': ['error', {allowEmptyCatch: true}], // 禁止出现空语句块,允许catch出现空语句
      // 'no-ex-assign': 'error', // 禁止对 catch 子句的参数重新赋值
      // 'no-extra-boolean-cast': 'error', // 禁止不必要的布尔转换
      // 'no-extra-semi': 'error', // 禁止不必要的分号
      // curly: 'error', // 强制所有控制语句使用一致的括号风格
  },
}
