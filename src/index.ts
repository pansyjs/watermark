import { WatermarkOptions } from './types/interface';
import { getMutationObserver, getDrawPattern, getStyleStr, genRandomId }  from './utils';
import { AnyObj } from './types/interface';

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
  textAlign: 'center',
  mode: 'repeat'
}

const attributeName = 'data-watermark';
const observeOptions = {
  childList: true,
  subtree: true,
  attributeFilter: ['style', attributeName]
}
const MutationObserver = getMutationObserver();

class Watermark {
  private options: WatermarkOptions;
  private shadowRoot: ShadowRoot | HTMLElement | undefined;
  private watermarkParentDom: HTMLDivElement | undefined;
  private containerParentNode: HTMLElement | null;
  private container: HTMLElement | undefined;
  private watermarkDom: HTMLElement | undefined;
  private watermarkId: string;
  private mutationObserver: MutationObserver | null;
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
    this.mutationObserver = null;
    this.containerParentNode = null;
  }

  /**
   * 重新设置配置
   * @param options
   */
  update(options: Partial<WatermarkOptions>) {
    this.options = Object.assign({}, this.options, options);
    this.style.zIndex = this.options.zIndex;

    if (!this.options.monitor) {
      this._destroyMutationObserver();
    }
  }

  /**
   * 绘制水印
   */
  render() {
    const { container } = this.options;
    this.container = this._getContainer(container);
    // TODO: 水印包裹展示内容是否更好
    if (!this.containerParentNode) {
      this.containerParentNode = this.container.parentNode as HTMLElement;
    }
    if (!this.container.parentNode && this.containerParentNode) {
      this.containerParentNode.append(this.container);
    }

    this._destroyMutationObserver();

    // 解决滚动区域无水印问题
    let height = this._getWatermarkHeight();
    // 获取水印DOM
    const watermaskDom = this._getWatermarkDom(height);
    watermaskDom.setAttribute(attributeName, this.watermarkId)


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
    } else if (this.watermarkParentDom.shadowRoot) {
      this.shadowRoot =this.watermarkParentDom.shadowRoot;
    }
    this.watermarkParentDom.setAttribute(attributeName, this.watermarkId)

    this.container.appendChild(this.watermarkParentDom);
    this.shadowRoot?.append(watermaskDom);

    if (MutationObserver && this.options.monitor) {
      this.mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (this._isAgainRender(mutation)) {
            this.render();
            return;
          }
        })
      });
      this.mutationObserver.observe(this.container, observeOptions);
      this.watermarkParentDom.shadowRoot && this.mutationObserver.observe(this.watermarkParentDom.shadowRoot, observeOptions);
    }
  }

  /**
   * 销毁水印
   */
  destroy() {
    this.container = undefined;

    this.watermarkDom?.remove();
    this.watermarkParentDom?.remove();
    this._destroyMutationObserver();
  }

  /**
   * 判断是否发起重新生成水印
   * @param mutation
   */
  _isAgainRender = (mutation: MutationRecord) => {
    if (mutation.type === 'attributes') {
      if (mutation.attributeName === 'data-watermark') {
        return true;
      }
      if (this.watermarkId === this.getNodeRandomId(mutation.target)) {
        return true;
      }
    }

    if (mutation.removedNodes.length) {
      if (this.watermarkId === (this.getNodeRandomId(mutation.removedNodes[0]))) {
        return true;
      }
    }

    return false;
  }

  getNodeRandomId = (node: Node) => {
    return node?.['dataset']?.['watermark'];
  }

  /**
   * 销毁MutationObserver
   */
  _destroyMutationObserver = () => {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
      this.mutationObserver = null;
    }
  }

  /**
   * 获取水印挂载节点
   * @param container
   */
  _getContainer = (container: WatermarkOptions['container']): HTMLElement  => {
    let dom: HTMLElement | undefined;

    if (typeof container === 'string') {
      dom = document.getElementById(container) as HTMLElement;
      !dom && new Error(`水印挂载节点未找到，请检查#${container}是否存在`);
      return dom;
    } else {
      container?.setAttribute(attributeName, this.watermarkId)
    }

    return container || document.body
  }

  /**
   * 获取水印节点
   * @param height
   */
  _getWatermarkDom = (height: number) => {
    if (!this.watermarkDom) {
      this.watermarkDom = document.createElement('div');
    }

    const styles: AnyObj = {
      ...this.style
    };

    if (typeof height === 'number' && height) {
      styles.height = `${height}px`;
    }

    const background = getDrawPattern(this.options);

    if (this.options.mode === 'repeat') {
      styles.backgroundImage = `url(${background})`
    } else {
      styles.backgroundImage = `url(${background}), url(${background})`;
      styles.backgroundRepeat = 'repeat, repeat';
      styles.backgroundPosition = `${this.options.width / 2}px ${this.options.height / 2}px, 0 0`;
    }
    // 直接挂载在到body
    if (!this.options.container) {
      styles.position = 'fixed';
      styles.height = undefined;
    }
    this.watermarkDom.setAttribute('style', getStyleStr(styles));

    return this.watermarkDom;
  }

  _getWatermarkHeight = () => {
    if (!this.container) return 0;
    // 解决滚动区域无水印问题
    let height = 0;

    const { scrollHeight = 0, clientHeight = 0 }: HTMLElement = this.options.container
      ? this.container.parentNode as HTMLElement
      : this.container

    if (scrollHeight > clientHeight) {
      height = Math.max(scrollHeight, clientHeight);
    }

    return height;
  }
}

export default Watermark;
export * from './types/interface';
