<p align="center">
  <a href="https://ant.design">
    <img width="200" src="https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/20210427184129.svg">
  </a>
</p>

<h1 align="center">@pansy/vue-watermark</h1>

## 🏗 安装

```sh
# npm install
$ npm install @pansy/vue-watermark --save

# yarn install
$ yarn add @pansy/vue-watermark
```

## 🔨 使用

```html
<template>
  <Watermark :options="options">
    <!-- your code -->
  </Watermark>
</template>

<script>
import { Watermark } from '@pansy/vue-watermark';
export default {
  components: {
    Watermark,
  },
  data() {
   return {
     options: {
       text: '测试水印',
     }
   }
  }
};
</script>
```
