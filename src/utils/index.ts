/// <reference path="../types/global.d.ts" />

import { attributeName } from '../config';
import type { WatermarkConfig } from '../types'

export { default as getDrawPattern } from './get-draw-pattern';

/**
 * 获取 MutationObserver 对象
 */
export function getMutationObserver(): typeof MutationObserver  {
  return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
}

/**
 * 将样式对象转换为字符串
 * @param style
 */
export const getStyleStr = (style: object): string => {
  let str = '';

  Object.keys(style).forEach(item => {
    const key = item.replace(/([A-Z])/g, '-$1').toLowerCase();
    str += `${key}:${style[item]};`
  })

  return str;
}

const encrypt = (str: string): string => {
  return window.btoa(decodeURI(encodeURIComponent(str)))
}

/**
 * 获取任意的ID
 * @param prefix
 * @returns
 */
export const getRandomId = (prefix = '') => {
  return `${encrypt(prefix)}-${(new Date()).getTime()}-${Math.floor(Math.random() * Math.pow(10, 8))}`
}

/**
 * 获取水印挂载节点
 * @param container
 * @param watermarkId
 * @returns
 */
export const getContainer = (
  container: WatermarkConfig['container'],
  watermarkId: string
): HTMLElement  => {
  let dom: HTMLElement | null;

  if (typeof container === 'string') {
    dom = document.getElementById(container);
    if (!dom) {
      throw new Error(`水印挂载节点未找到，请检查#${container}是否存在`);
    }
  } else {
    dom = container ?? document.body;
  }

  dom.setAttribute(attributeName, watermarkId);
  dom.setAttribute('style', getStyleStr({
    position: 'relative',
    // width: '100%',
    // height: '100%',
  }));

  return dom;
}

export const getContent = () => {
  const dom = document.createElement('div');
  dom.setAttribute('style', getStyleStr({
    pointerEvents: 'none'
  }));

  return dom;
}


/**
 * 返回当前显示设备的物理像素分辨率与CSS像素分辨率之比
 */
 export const getPixelRatio = (context: any) => {
  if (!context) {
    return 1;
  }
  const backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;
  return (window.devicePixelRatio || 1) / backingStore;
};
