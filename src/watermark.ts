import { WatermarkOptions } from './types/interface';
import { getMutationObserver, getDrawPattern, getStyleStr, genRandomId }  from './utils';

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
  zIndex: 9999,
  textAlign: 'center'
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
  private shadowRoot: ShadowRoot | HTMLElement | undefined;
  private watermarkParentDom: HTMLDivElement | undefined;
  private container: HTMLElement | undefined;
  private watermarkDom: HTMLElement | undefined;
  private watermarkParentId: string;
  private watermarkId: string;
  private mutationObserver: any;
  private style: {
    [key: string]: any;
  }

  constructor() {
    this.options = defaultOptions as WatermarkOptions;
    this.style = {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
      backgroundColor: 'transparent',
      backgroundRepeat: 'repeat'
    }
    this.style.zIndex = this.options.zIndex;
    this.watermarkId = genRandomId('watermark');
    this.watermarkParentId = genRandomId('watermark');
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

  getWatermarkDom = (height: number) => {
    if (!this.watermarkDom) {
      this.watermarkDom = document.createElement('div');
      this.watermarkDom.setAttribute('data-1', this.watermarkId)
    }

    this.watermarkDom.setAttribute('style', getStyleStr({
      ...this.style,
      height: height > 0 ? `${height}px` : undefined,
      backgroundImage: `url("${this.getCanvasUrl()}")`
    }));

    return this.watermarkDom;
  }

  /**
   * 绘制水印
   */
  render() {
    this.container = this.options.container || document.body;
    const MutationObserver = getMutationObserver();

    this.mutationObserver?.disconnect();

    // 解决滚动区域无水印问题
    let height = 0;

    if (this.options.container) {
      if (this.container.parentNode) {
        height = Math.max(this.container.parentNode?.['scrollHeight'], this.container.parentNode?.['clientHeight'])
      }
    } else {
      height = Math.max(this.container.scrollHeight, this.container.clientHeight);
    }

    // 获取水印DOM
    const watermaskDom = this.getWatermarkDom(height);

    // 删除已有水印
    if (this.watermarkParentDom) {
      const childs = this.watermarkParentDom.childNodes || [];

      for(let i = childs.length - 1; i >= 0; i--) {
        this.watermarkParentDom.removeChild(childs[i]);
      }
    }

    if (!this.watermarkParentDom) {
      // 水印父节点
      this.watermarkParentDom = document.createElement('div');
      this.watermarkParentDom.setAttribute('data-1', this.watermarkId)
      this.watermarkParentDom.setAttribute('style', getStyleStr({
        pointerEvents: 'none'
      }));

      // 判断是否支持 Shadow DOM
      if (typeof this.watermarkParentDom.attachShadow === 'function') {
        this.shadowRoot = this.watermarkParentDom.attachShadow({
          mode: 'open'
        });
      } else {
        this.shadowRoot = this.watermarkParentDom;
      }
    } else if (this.watermarkParentDom.shadowRoot){
      this.shadowRoot =this.watermarkParentDom.shadowRoot;
    }

    this.container.appendChild(this.watermarkParentDom);
    this.shadowRoot?.append(watermaskDom);

    if (MutationObserver && this.options.monitor) {
      // 直接删除容器节点，无法重新生成
      this.mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          // 修改样式则重新生成
          if (
            mutation.type === 'attributes' &&
            [this.watermarkId, this.watermarkParentId].indexOf(this.getNodeRandomId(mutation.target))) {
            this.render();
            return;
          }

          if (
            mutation.removedNodes.length &&
            [this.watermarkId, this.watermarkParentId].indexOf((this.getNodeRandomId(mutation.removedNodes[0]))) >= 0) {
            this.render();
            return;
          }
        })
      });
      this.mutationObserver.observe(this.container, observeOptions);
      this.watermarkParentDom.shadowRoot && this.mutationObserver.observe(this.watermarkParentDom.shadowRoot, observeOptions);
    }
  }

  getNodeRandomId = (node: Node) => {
    return node?.['dataset']?.['1'];
  }

  /**
   * 销毁水印
   */
  destroy() {
    this.container = undefined;

    this.watermarkDom?.remove();
    this.watermarkParentDom?.remove();
    this.mutationObserver?.disconnect();
    this.mutationObserver = undefined;
  }
}

export default Watermark;
