<h1 align="center">@pansy/watermark</h1>

<p align="center">
  <a href="https://github.com/pansyjs/watermark/network">
    <img src="https://img.shields.io/github/forks/pansyjs/watermark.svg" alt="Forks">
  </a>
  <a href="https://github.com/pansyjs/watermark/stargazers">
    <img src="https://img.shields.io/github/stars/pansyjs/watermark.svg" alt="Stars">
  </a>
  <a href="https://www.npmjs.com/package/@pansy/watermark">
    <img src="https://img.shields.io/npm/v/@pansy/watermark.svg" alt="npm version">
  </a>
  <a href="https://packagephobia.com/result?p=@pansy/watermark">
    <img src="https://packagephobia.com/badge?p=@pansy/watermark" alt="npm version">
  </a>
</p>

## ✨ 特性

- 🌴 支持一个页面添加多处不同水印
- 🌵 支持使用图片作为水印
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
import WaterMark from '@pansy/watermark';

const waterMark = new WaterMark({ ... });

// 如果需求修改水印参数，请调用
waterMark.update({ ... });
```

## ❤️ 感谢

- [watermark-dom](https://github.com/saucxs/watermark-dom)

## 🌟 社区互助

| Github Issue                                                 | 钉钉群                                                                                     | 微信群                                                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| [issues](https://github.com/pansyjs/watermark/issues) | <img src="https://github.com/alitajs/alita/blob/master/public/dingding.png" width="100" /> | <img src="https://github.com/alitajs/alita/blob/master/public/wechat.png" width="100" /> |
