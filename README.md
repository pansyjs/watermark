<p align="center">
  <a href="https://ant.design">
    <img width="200" src="https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/20210427184129.svg">
  </a>
</p>

<h1 align="center">Pansy Watermark</h1>

<div align="center">
  强大的水印组件，助你快速的给网页添加水印。

  <br />

  [![npm version][npm-v-image]][npm-url] 
  [![stars-image][stars-image]][stars-url] 
  [![forks-image][forks-image]][forks-url] 
  [![packagephobia][packagephobia-image]][packagephobia-url] 
</div>

## ✨ 特性

- 🌴 支持一个页面添加多处不同水印
- 🌵 支持使用图片、单行文本、多行文本作为水印
- 🐠 支持自定义水印样式，开箱即用
- 🌈 安全防御 - 防止他人删除水印dom或修改样式属性
- 💻 使用 TypeScript 编写，提供完善的类型定义

## 🏗 安装

```
// npm
npm install @pansy/watermark --save

// yarn
yarn add @pansy/watermark
```

## 🚄 示例

[Demo](https://watermark-eosin.vercel.app/)

## 🚗 框架封装

- React [@pansy/react-watermark](https://github.com/pansyjs/react-components/tree/master/packages/watermark)

## 🔨 使用
```ts
import { Watermark } from '@pansy/watermark';

const watermark = new Watermark({ ... });

// 如果需要修改水印参数，请调用
watermark.update({ ... });

// 隐藏水印
watermark.hide();

// 显示水印
watermark.hide();

// 销毁水印
watermark.destroy();
```

## ❤️ 感谢

- [watermark-dom](https://github.com/saucxs/watermark-dom)

## 🌟 社区互助

| Github Issue                                                 | 钉钉群                                                                                     | 微信群                                                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| [issues](https://github.com/pansyjs/watermark/issues) | <img src="https://github.com/alitajs/alita/blob/master/public/dingding.png" width="100" /> | <img src="https://github.com/alitajs/alita/blob/master/public/wechat.png" width="100" /> |


[npm-v-image]: https://img.shields.io/npm/v/@pansy/watermark.svg
[forks-image]: https://img.shields.io/github/forks/pansyjs/watermark.svg
[stars-image]: https://img.shields.io/github/stars/pansyjs/watermark.svg
[packagephobia-image]: https://packagephobia.com/badge?p=@pansy/watermark
[npm-url]: http://npmjs.org/package/@pansy/watermark
[github-url]: https://github.com/pansyjs/watermark
[stars-url]: https://github.com/pansyjs/watermark/stargazers
[forks-url]: https://github.com/pansyjs/watermark/network/members
[packagephobia-url]: https://packagephobia.com/result?p=@pansy/watermark
