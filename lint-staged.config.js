/*
 * @Description:
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2021-01-20 17:04:04
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-20 17:32:18
 */
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.vue': ['prettier --write', 'stylelint --fix'],
  '*.{scss,less,styl,css,html}': ['stylelint --fix', 'prettier --write'],
  '*.md': ['prettier --write'],
};
