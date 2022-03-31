// 处理 vue-template-compiler 查找 vue 模块错误。
// 猜测原因：可能是因为 pnpm 链接到根目录的原因又同时存在两个 vue 版本。
// 解决方案：修改代码改为相对路径，情况特殊临时处理一下。

const fs = require('fs');
const vtc = './node_modules/vue-template-compiler/index.js';

const str = fs
  .readFileSync(vtc, { encoding: 'utf-8' })
  .replace("require('vue').version", "require('../vue').version");

fs.writeFileSync(vtc, str);
