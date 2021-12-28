/*
 * @Author: zhangjie
 * @Date: 2021-12-28 18:33:16
 * @LastEditors: zhangjie
 * @LastEditTime: 2021-12-28 18:33:17
 * @FilePath: \vue2_cli4_init\.huskyrc.js
 */
module.exports = {
    hooks: {
        // git commit 前的钩子
        "pre-commit": "lint-staged",
        "post-commit": "git update-index --again",
    },
};

