import { attributeName } from './config';
import { WatermarkOptions, DrawPatternResult } from './types'

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
  container: WatermarkOptions['container'],
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
    position: 'relative'
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

export function getDrawPattern(config: WatermarkOptions): Promise<DrawPatternResult> {
  const {
    text,
    gapX,
    gapY,
    offsetTop,
    offsetLeft,
    width,
    height,
    rotate,
    opacity,
    fontSize,
    fontStyle,
    fontVariant,
    fontWeight,
    fontFamily,
    fontColor,
    textAlign,
    image,
  } = config as Required<WatermarkOptions>;
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');

    const ctx = canvas.getContext('2d');
    const ratio = 1;

    const canvasWidth = (Number(gapX) + Number(width)) * ratio;
    const canvasHeight = (Number(gapY) + Number(height)) * ratio;
    const canvasOffsetLeft = Number(offsetLeft) || Number(gapX) / 2;
    const canvasOffsetTop = Number(offsetTop) || Number(gapY) / 2;

    canvas.setAttribute('width', `${canvasWidth}px`);
    canvas.setAttribute('height', `${canvasHeight}px`);

    if (ctx) {
      const markWidth = width * ratio;
      const markHeight = height * ratio;

      // 设置透明度
      ctx.globalAlpha = opacity;

      ctx.translate(canvasOffsetLeft * ratio, canvasOffsetTop * ratio);
      ctx.rotate((Math.PI / 180) * Number(rotate));

      // 优先使用图片
      if (image) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.referrerPolicy = 'no-referrer';
        img.src = image;
        img.onload = () => {
          ctx.drawImage(img, 0, 0, markWidth, markHeight);
          resolve({
            url: ctx.canvas.toDataURL(),
            width: canvasWidth,
            height: canvasHeight,
          });
        };
        return;
      }

      // 获取文本的最大宽度
      const texts = Array.isArray(text) ? text : [text];
      const widths = texts.map(item => ctx.measureText(item).width);
      const maxWidth = Math.max(...widths);

      const markSize = Number(fontSize) * ratio;

      // 设置文本对齐方式
      ctx.textAlign = textAlign;
      // 设置字体颜色
      ctx.fillStyle = fontColor;
      // 设置字体
      ctx.font = getFont(`${markSize}px`);

      // 文案宽度大于画板宽度
      if (maxWidth > width) {
        ctx.font = getFont(`${markSize / 2}px`);
      }

      // 获取行高
      const lineHeight = markSize + 5;

      // 计算水印在y轴上的初始位置
      let initY = (markHeight - (fontSize * texts.length + (texts.length - 1) * 5)) / 2;
      initY = initY < 0 ? 0 : initY;

      for (let i = 0; i < texts.length; i ++) {
        ctx.fillText(texts[i], markWidth / 2, initY + (lineHeight * i));
      }

      resolve({
        url: ctx.canvas.toDataURL(),
        width: canvasWidth,
        height: canvasHeight,
      });
    }

    function getFont(fontSize: string) {
      return `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize} ${fontFamily}`
    }

    return reject();
  });
}
