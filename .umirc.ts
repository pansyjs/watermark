import { join } from 'path';

const logo = 'https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/20210427184129.svg';

export default {
  title: 'Watermark',
  logo,
  favicon: logo,
  mode: 'site',
  navs: [
    null,
    {
      title: '友情链接',
      children: [
        { title: 'AMap', path: 'https://amap.xingkang.wang' },
        { title: 'Hooks', path: 'https://hooks.xingkang.wang' },
        { title: '证件加水印', path: 'https://watermark-pro.vercel.app' },
      ]
    },
    {
      title: 'GitHub',
      path: 'https://github.com/pansyjs/watermark',
    },
  ],
  alias: {
    '@pansy/watermark': join(__dirname, 'packages/core/src'),
  },
  resolve: {
    includes: [
      'docs',
      'packages/core/docs',
      'packages/react/docs'
    ]
  },
  hash: true,
  dynamicImport: {}
};
