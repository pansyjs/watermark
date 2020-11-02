export { default as getDrawPattern } from './get-draw-pattern';

/**
 * 获取 MutationObserver 对象
 */
export function getMutationObserver(): typeof MutationObserver  {
  // @ts-ignore
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

export const genRandomId = (prefix = '') => {
  return `${encrypt(prefix)}-${(new Date()).getTime()}-${Math.floor(Math.random() * Math.pow(10, 8))}`
}

