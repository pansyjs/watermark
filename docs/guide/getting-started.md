---
title: 快速开始
order: 1
---

## 安装依赖


```sh
// npm
npm install @pansy/watermark --save

// yarn
yarn add @pansy/watermark

// pnpm
pnpm install --dev @pansy/watermark
```

## 使用

```ts
import { Watermark } from '@pansy/watermark';

const watermark = new Watermark({ ... });

// 如果需要修改水印参数，请调用
watermark.update({ ... });

// 隐藏水印
watermark.hide();

// 显示水印
watermark.show();

// 销毁水印
watermark.destroy();
```
