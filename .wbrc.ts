import { Config } from '@walrus/build-types';

const config: Config = {
  banner: true,
  typeExtractor: {
    files: ['index.d.ts']
  }
}

export default config;
