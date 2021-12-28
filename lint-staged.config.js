/*
 * @Author: zhangjie
 * @Date: 2021-12-28 18:33:37
 * @LastEditors: zhangjie
 * @LastEditTime: 2021-12-28 18:33:37
 * @FilePath: \vue2_cli4_init\lint-staged.config.js
 */
module.exports = {
  'src/**/*.{js,vue}': ['eslint --fix', 'git add'],
  'src/**/*.{vue,html,css,scss,sass}': ['stylelint --fix', 'git add'],
  'src/**/*.{js,vue,html,css,scss,sass}': [
    'prettier-eslint --write',
    'git add'
  ]
}
