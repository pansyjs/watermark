<h1 align="center">@pansy/watermark</h1>

## ✨ 特性

- 🚀 小巧，不到 5K 大小，Gzip 压缩后不到 2K
- 🌴 支持一个页面添加多处不同水印
- 🐠 支持自定义水印样式，开箱即用
- 🌈 安全防御 - 防止他人删除水印dom或修改样式属性
- 💻 使用 TypeScript 编写，提供完善的类型定义
- 📦 提供cjs、es、umd三种格式

## 🏗 安装

```
// npm
npm install @pansy/watermark --save

// yarn
yarn add @pansy/watermark
```

## 🚄 示例

[Demo](https://react-components-vert.vercel.app/components/basic/watermark)

## 🚗 框架封装

- React [@pansy/react-watermark](https://github.com/pansyjs/react-components/tree/master/packages/watermark)

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
| mode        | 水印是重复排异还是间隔排列      | `repeat` \| `interval`     | `repeat`     |   `1.2.0` |
| monitor      | 监听水印元素是否被篡改，被修改或者删除等操作，则重新渲染水印 | `boolean`  | `true` | --   |
| container        | 水印挂载的容器      | `HTMLElement`     | `body`     |    |
| text         | 水印文本        | `string` \| `string[]` |  --   | --   |
| zIndex        | 水印层级      | `number`     | `9999`     |    |
| width        | 单个水印区域宽度  | `number`           | `160`    | --   |
| height      | 单个水印区域高度   | `number`           | `80` | --   |
| opacity      | 透明度          | `number`           |  `0.2`   | --   |
| rotate      | 旋转的角度        | `number`           | `20`     | --   |
| fontSize      | 字体大小          | `number`           |  `14`   | --   |
| fontWeight    | 字体粗细        | --           | `normal`   | --   |
| fontColor      | 字体颜色        | `string`      |  `#727071`   | --   |
| fontFamily    | 规定字体系列      | `string`      | `sans-serif`    | --   |
| textAlign    | 文本对齐设置      | `string`      | `center`    | --   |

## ❤️ 感谢

- [watermark-dom](https://github.com/saucxs/watermark-dom)


## 🌟 社区互助

| Github Issue                                                 | 钉钉群                                                                                     | 微信群                                                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| [issues](https://github.com/pansyjs/watermark/issues) | <img src="https://github.com/alitajs/alita/blob/master/public/dingding.png" width="100" /> | <img src="https://github.com/alitajs/alita/blob/master/public/wechat.png" width="100" /> |
