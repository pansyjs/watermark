<h1 align="center">@pansy/watermark</h1>

## ✨ 特性

- 🚀 零依赖
- 🌴 支持一个页面添加多处不同水印
- 🐠 支持自定义水印样式，开箱即用
- 🌈 安全防御 - 防止他人删除水印dom或修改样式属性

## 📦 安装

```
// npm
npm install @pansy/watermark --save

// yarn
yarn add @pansy/watermark
```

## 🚗 框架实现

- [@pansy/react-watermark](https://github.com/pansyjs/react-components/blob/feat/watermark/packages/watermark/src/index.tsx)

## 🔨 使用
```ts
import WaterMark from '@pansy/watermark';

const waterMark = new WaterMark();

// 修改水印配置
waterMark.update({ ... });

// 渲染水印
waterMark.render();
```

## 🐚 API

### update(options);

修改水印配置

### render()

渲染水印

**水印配置参数**

| 参数          | 说明          | 类型                 | 默认值 | 版本 |
| ------------ | --------------| ------------------- | ------ | ---- |
| zIndex        | 水印层级      | `number`     | `9999`     |    |
| monitor      | 监听水印元素是否被篡改，被修改或者删除等操作，则重新渲染水印 | `boolean`  | `true` | --   |
| container        | 水印挂载的容器      | `HTMLElement`     | `body`     |    |
| text         | 水印文本        | `string` \| `string[]` |  --   | --   |
| width        | 单个水印区域宽度  | `number`           | `160`    | --   |
| height      | 单个水印区域高度   | `number`           | `80` | --   |
| opacity      | 透明度          | `number`           |  `0.2`   | --   |
| rotate      | 旋转的角度        | `number`           | `20`     | --   |
| fontSize      | 字体大小          | `number`           |  `14`   | --   |
| fontWeight    | 字体粗细        | --           | `normal`   | --   |
| fontColor      | 字体颜色        | `string`      |  `#727071`   | --   |
| fontFamily    | 规定字体系列      | `string`      | `sans-serif`    | --   |
| textAlign    | 文本对齐设置      | `string`      | `center`    | --   |
