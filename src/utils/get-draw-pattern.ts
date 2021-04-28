import type { WatermarkConfig } from '../types';
import { getPixelRatio } from './index';

function getDrawPatternByCanvas(
  {
    text,
    gapX = 50,
    gapY = 50,
    offsetTop,
    offsetLeft,
    width = 120,
    height = 64,
    rotate = -22,
    opacity = 1,
    fontSize = 16,
    fontWeight,
    fontFamily,
    fontColor = 'rgba(0,0,0,.15)',
    textAlign = 'center',
  }: WatermarkConfig
) {
  const canvas = document.createElement('canvas');

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  const ratio = getPixelRatio(ctx);

  const canvasWidth = (gapX + width) * ratio;
  const canvasHeight = (gapY + height) * ratio;
  const canvasOffsetLeft = offsetLeft || gapX / 2;
  const canvasOffsetTop = offsetTop || gapY / 2;

  canvas.setAttribute('width', `${canvasWidth}px`);
  canvas.setAttribute('height', `${canvasHeight}px`);

  if (ctx) {
    // 绘制之前清除画布
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

    return {
      url: ctx.canvas.toDataURL(),
      width: canvasWidth,
      height: canvasHeight,
    };
  }

  return { };
}

export default getDrawPatternByCanvas;
