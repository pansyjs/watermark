import { WatermarkOptions } from '../types/interface';

function getDrawPatternByCanvas(
  {
    text,
    width,
    height,
    rotate,
    opacity,
    fontSize,
    fontWeight,
    fontFamily,
    fontColor
  }: WatermarkOptions
) {
  const canvas = document.createElement('canvas');

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  // 绘制之前清除画布
  ctx.clearRect(0, 0, width, height);
  // 设置透明度
  ctx.globalAlpha = opacity;
  // 设置字体
  ctx.font = `normal ${fontWeight} ${fontSize}px '${fontFamily}'`;

  ctx.textAlign = 'center';

  // 设置旋转角度
  ctx.translate(parseFloat(`${width}`) / 2, parseFloat(`${height}`) / 2);
  ctx.rotate(rotate * (Math.PI / 180));
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

  return ctx.canvas.toDataURL();
}

export default getDrawPatternByCanvas;
