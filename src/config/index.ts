import type { WatermarkConfig } from '../types';

/**
 * 水印默认配置
 */
export const defaultOptions: Partial<WatermarkConfig> = {
  fontWeight: 'normal',
  fontFamily: 'sans-serif',
  monitor: true,
  zIndex: 9999,
  mode: 'interval'
}

export const attributeName = 'data-watermark';
export const observeOptions = {
  childList: true,
  subtree: true,
  attributeFilter: ['style', attributeName]
}
