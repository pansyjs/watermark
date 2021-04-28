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
      title: 'GitHub',
      path: 'https://github.com/pansyjs/watermark',
    },
  ],
  alias: {
    '@pansy/watermark': join(__dirname, 'src'),
  },
  resolve: {
    includes: [
      'docs'
    ]
  },
  hash: true,
  dynamicImport: {}
};
