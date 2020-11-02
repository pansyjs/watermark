export interface StyleConfig {
  /**
   * 单个水印区域宽度
   */
  width: number;
  /**
   * 单个水印区域高度
   */
  height: number;
  /**
   * 透明度，取值: 0~1
   */
  opacity: number;
  /**
   * 旋转的角度，取值: -360~360
   */
  rotate: number;
  /**
   * 设置字体大小
   */
  fontSize: number;
  /**
   * 设置字体粗细
   */
  fontWeight: string | number;
  /**
   * 设置字体颜色
   */
  fontColor: string;
  /**
   * 规定字体系列
   */
  fontFamily: string;
}

export interface WatermarkOptions extends StyleConfig {
  /**
   * 是否开启监视模式
   */
  monitor?: boolean;
  /**
   * 水印文本
   */
  text: string | string[];
   /**
   * 样式层级
   */
  zIndex?: number;
  /**
   * 水印挂载的容器
   * @default body
   */
  container?: HTMLElement | undefined;
  useContainer?: boolean;
}
