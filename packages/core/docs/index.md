---
nav:
  title: 示例
  path: /example
group:
  title: 核心
  path: /core
---

# watermark

## 代码示例

### 基本示例

<code src="./demo/demo01.tsx" />

### 多行水印

<code src="./demo/demo02.tsx" />

### 显示隐藏

<code src="./demo/demo03.tsx" />

### 图片水印

<code src="./demo/demo04.tsx" />

### 整个页面

<code src="./demo/demo05.tsx" />

## API

### 基本参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| container | 水印挂载节点 | `HTMLElement` \| `string` | - |
| image | 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印 | `string` | - |
| text | 水印文本, 为数组时表示多行水印 | `string` \| `string[]` | - |
| zIndex | 水印层级 | `number` | `9999` |
| width | 单个水印宽度 | `number` | `120` |
| height | 单个水印高度 | `number` | `64` |
| opacity | 水印透明度 | `number` | `0.15` |
| rotate | 旋转的角度 | `number` | `-22` |
| fontSize | 设置字体大小 | `number` | `16` |
| fontWeight | 设置字体粗细 | `number` \| `string` | `normal` |
| fontStyle | 规定字体样式 | `string` | `normal` |
| fontVariant | 规定字体变体 | `string` | `normal` |
| fontColor | 设置字体颜色 | `string` | `#000` |
| fontFamily | 设置水印文字的字体 | `string` | `sans-serif` |
| blindText | 盲水印文本 | `string` | - |
| blindOpacity | 盲水印透明度 | `number` | `0.005` |

### 高级参数

| 参数       | 说明                                 | 类型      | 默认值     |
| ---------- | ------------------------------------ | --------- | ---------- |
| monitor    | 是否开启保护模式                     | `boolean` | `true`     |
| mode       | 展示模式，interval 表示错行展示      | `string`  | `interval` |
| gapX       | 水印之间的水平间距                   | `number`  | `100`      |
| gapY       | 水印之间的垂直间距                   | `number`  | `100`      |
| offsetLeft | 水印在 canvas 画布上绘制的水平偏移量 | `number`  | `0`        |
| offsetTop  | 水印在 canvas 画布上绘制的垂直偏移量 | `number`  | `0`        |
| pack       | 是否使用水印组件包裹内容             | `boolean` | `true`     |

### 方法

| 名称    | 说明                     | 类型                      |
| ------- | ------------------------ | ------------------------- |
| update  | 更新水印配置，并重新渲染 | `(opts: Options) => void` |
| show    | 显示水印                 | `() => void`              |
| hide    | 隐藏水印                 | `() => void`              |
| destroy | 销毁水印                 | `() => void`              |
