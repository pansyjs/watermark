import { WatermarkOptions } from './types/interface';
import { getMutationObserver, getDrawPattern, getStyleStr }  from './utils';

const defaultOptions: Partial<WatermarkOptions> = {
  width: 160,
  height: 80,
  opacity: 0.2,
  rotate: 20,
  fontColor: '#727071',
  fontWeight: 'normal',
  fontFamily: 'sans-serif',
  fontSize: 14,
  monitor: true,
  zIndex: 9999
}

const observeOptions = {
  childList: true,
  attributes: true,
  subtree: true,
  attributeFilter: ['style'],
  attributeOldValue: true
}

class Watermark {
  private options: WatermarkOptions;
  private container: HTMLElement | undefined;
  private watermarkDom: HTMLElement | undefined;
  private mutationObserver: any;
  private style: {
    [key: string]: any;
  }

  constructor() {
    this.options = defaultOptions as WatermarkOptions;
    this.style = {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      opacity: 1,
      pointerEvents: 'none',
      overflow: 'hidden',
      backgroundColor: 'transparent',
      backgroundRepeat: 'repeat'
    }
    this.style.zIndex = this.options.zIndex;
  }

  /**
   * 重新设置配置
   * @param options
   */
  update(options: Partial<WatermarkOptions>) {
    this.options = Object.assign({}, this.options, options);
    this.style.zIndex = this.options.zIndex;

    if (!this.options.monitor) {
      this.mutationObserver?.disconnect();
      this.mutationObserver = undefined;
    }
  }

  /**
   * 获取水印背景图
   */
  getCanvasUrl = () => {
    return getDrawPattern(this.options)
  }

  /**
   * 绘制水印
   */
  render() {
    this.container = this.options.container || document.body;
    const MutationObserver = getMutationObserver();

    if (this.options.useContainer && this.container) {
      this.watermarkDom = this.container;
    } else {
      this.watermarkDom = document.createElement('div');
    }

    const waterMarkStyle = getStyleStr({
      ...this.style,
      backgroundImage: `url("${this.getCanvasUrl()}")`
    });

    this.watermarkDom.setAttribute('style', waterMarkStyle);

    if (!this.options.useContainer) {
      this.watermarkDom?.remove();
      this.container.append(this.watermarkDom);
    }

    if (MutationObserver && this.options.monitor) {
      //直接删除组件节点，无法重新生成
      this.mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          // 修改样式则重新生成
          if (mutation.type === 'attributes') {
            this.render();
            return;
          }
          if (mutation.removedNodes.length) {
            this.render();
            return;
          }
        })
      });
      this.mutationObserver.observe(this.watermarkDom, observeOptions);
      this.mutationObserver.observe(this.container, observeOptions);
    }
  }

  /**
   * 销毁水印
   */
  destroy() {
    this.container = undefined;
    this.mutationObserver = undefined;

    this.watermarkDom?.remove();
    this.mutationObserver?.disconnect();
    this.mutationObserver = undefined;
  }
}

export default Watermark;
