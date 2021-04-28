import type { WatermarkConfig } from '../types';
import { getPixelRatio } from './index';

function getDrawPatternByCanvas(
  {
    text,
    gapX = 50,
    gapY = 50,
    offsetTop = 0,
    offsetLeft = 0,
    width = 120,
    height = 64,
    rotate = -22,
    opacity = 0.15,
    fontSize = 16,
    fontWeight,
    fontFamily,
    fontColor = '#000',
    textAlign = 'center',
    image,
  }: WatermarkConfig
): Promise<{ url: string, width: number, height: number }> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');

    const ctx = canvas.getContext('2d');
    const ratio = getPixelRatio(ctx);

    const canvasWidth = (Number(gapX) + Number(width)) * ratio;
    const canvasHeight = (Number(gapY) + Number(height)) * ratio;
    const canvasOffsetLeft = offsetLeft || Number(gapX) / 2;
    const canvasOffsetTop = offsetTop || Number(gapY) / 2;

    canvas.setAttribute('width', `${canvasWidth}px`);
    canvas.setAttribute('height', `${canvasHeight}px`);

    if (ctx) {
      const markWidth = width * 1;
      const markHeight = height * 1;

      // 设置透明度
      ctx.globalAlpha = opacity;

      if (image) {
        ctx.translate(canvasOffsetLeft * ratio, canvasOffsetTop * ratio);
        ctx.rotate((Math.PI / 180) * Number(rotate));

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

      ctx.translate(canvasOffsetLeft * ratio, canvasOffsetTop * ratio);
      // 设置透明度
      ctx.globalAlpha = opacity;
      // 设置字体
      ctx.font = `normal ${fontWeight} ${fontSize}px '${fontFamily}'`;

      ctx.textAlign = textAlign;

      // 设置旋转角度
      ctx.translate(parseFloat(`${width}`) / 2, parseFloat(`${height}`) / 2);
      ctx.rotate((Math.PI / 180) * Number(rotate));
      ctx.translate(-parseFloat(`${width}`) / 2, -parseFloat(`${height}`) / 2);

      // 设置字体颜色
      ctx.fillStyle = fontColor;

      // 获取文本的最大宽度以及文案
      let maxText = '';
      const textList = Array.isArray(text) ? text : [text];
      const widthList = textList.map(item => ctx.measureText(item).width);
      const maxWidth = Math.max(...widthList);
      const index = widthList.indexOf(maxWidth);

      if (index !== -1) {
        maxText = textList[index];
      }

      // 文案宽度大于画板宽度
      if (maxWidth > width) {
        ctx.font = `normal ${fontWeight} ${width / maxText.length}px '${fontFamily}'`;
      }

      // 获取行号
      const lineHeight = fontSize + 5;

      // 计算水印在y轴上的初始位置
      let initY = (height - (fontSize * textList.length + (textList.length - 1) * 5)) / 2;
      initY = initY < 0 ? 0 : initY;

      for (let i = 0; i < textList.length; i ++) {
        ctx.fillText(textList[i], width / 2, initY + (lineHeight * i));
      }

      resolve({
        url: ctx.canvas.toDataURL(),
        width: canvasWidth,
        height: canvasHeight,
      });
    }

    return reject();
  });
}

export default getDrawPatternByCanvas;
