<p align="center">
  <a href="https://ant.design">
    <img width="200" src="https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/20210427184129.svg">
  </a>
</p>

<h1 align="center">@pansy/watermark</h1>

## 🏗 安装

```sh
# npm install
$ npm install @pansy/watermark --save

# yarn install
$ yarn add @pansy/watermark
```

## 🔨 使用

```
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
