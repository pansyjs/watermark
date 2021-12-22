import {
  getDrawPattern,
  getStyleStr,
  getRandomId,
  getContainer,
  getContent,
  getMutationObserver,
}  from './utils';
import { defaultOptions, attributeName, observeOptions } from './config';
import { WatermarkOptions } from './types';

const MutationObserver = getMutationObserver();

export class Watermark {
  /** 水印配置 */
  private options: WatermarkOptions;
  /** 水印挂载容器 */
  private container: HTMLElement | undefined;
  /** 水印样式 */
  private style: Record<string, any>;
  private shadowRoot: ShadowRoot | HTMLElement | undefined;
  private watermarkContent: HTMLElement | undefined;
  private watermarkDom: HTMLElement | undefined;
  private watermarkId: string;
  private mutationObserver: MutationObserver | null;

  constructor(options: WatermarkOptions = {}) {
    this.options = Object.assign({}, defaultOptions, options);
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
    this.watermarkId = getRandomId('watermark');
    this.mutationObserver = null;

    this._render();
  }

  /**
   * 更新水印配置，并重新渲染
   * @param options
   */
  update(options: WatermarkOptions = {}) {
    this.options = {
      ...this.options,
      ...options
    };
    this.style.zIndex = this.options.zIndex;

    if (!this.options.monitor) {
      this._destroyMutationObserver();
    }
    this._render();
  }

  /**
   * 显示水印
   */
  show() {
    if (this.watermarkDom) {
      this.style.display = 'block';
      this.watermarkDom.setAttribute('style', getStyleStr(this.style));
    }
  }

  /**
   * 隐藏水印
   */
  hide() {
    if (this.watermarkDom) {
      this.style.display = 'none';
      this.watermarkDom.setAttribute('style', getStyleStr(this.style));
    }
  }

  /**
   * 销毁水印
   */
  destroy() {
    this.shadowRoot = undefined;
    this.watermarkContent?.remove();
    this.watermarkDom?.remove();

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
      if (this.watermarkId === this._getNodeRandomId(mutation.target)) {
        return true;
      }
    }

    if (mutation.removedNodes.length) {
      if (this.watermarkId === (this._getNodeRandomId(mutation.removedNodes[0]))) {
        return true;
      }
    }

    return false;
  }

  _getNodeRandomId = (node: Node) => {
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
   * 获取水印节点
   * @param height
   */
  _getWatermarkDom = async (watermarkHeight: number) => {
    if (!this.watermarkDom) {
      this.watermarkDom = document.createElement('div');
    }

    if (typeof watermarkHeight === 'number' && watermarkHeight) {
      this.style.height = `${watermarkHeight}px`;
    }

    const backgroundConfig = await getDrawPattern(this.options);

    if (backgroundConfig?.url) {
      const background = backgroundConfig.url;

      if (this.options.mode === 'repeat') {
        this.style.backgroundImage = `url(${background})`;
      } else {
        this.style.backgroundImage = `url(${background}), url(${background})`;
        this.style.backgroundRepeat = 'repeat, repeat';
        this.style.backgroundPosition = `${backgroundConfig.width / 2}px ${backgroundConfig.height / 2}px, 0 0`;
      }
      // 直接挂载在到body
      if (!this.options.container) {
        this.style.position = 'fixed';
        this.style.height = undefined;
      }
      this.watermarkDom.setAttribute('style', getStyleStr(this.style));
    }

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

  async _render() {
    // 获取水印挂载节点
    this.container = getContainer(this.options.container, this.watermarkId);
    // 获取水印父节点
    if (!this.watermarkContent) {
      this.watermarkContent = getContent();
      this.container.append(this.watermarkContent);
    }

    this._destroyMutationObserver();

    // 解决滚动区域无水印问题
    const height = this._getWatermarkHeight();
    // 获取水印DOM
    const watermaskDom = await this._getWatermarkDom(height);
    watermaskDom.setAttribute(attributeName, this.watermarkId)

    // 删除已有水印
    if (this.watermarkContent) {
      const childs = this.watermarkContent.childNodes || [];

      for (let i = 0; i < childs.length; i++) {
        this.watermarkContent.removeChild(childs[i]);
      }
    }

    // 判断是否支持 Shadow DOM
    if (typeof this.watermarkContent.attachShadow === 'function') {
      if (!this.shadowRoot) {
        this.shadowRoot = this.watermarkContent.attachShadow({
          mode: 'open'
        });
      }
    } else {
      this.shadowRoot = this.watermarkContent;
    }

    this.shadowRoot.append(watermaskDom);

    if (MutationObserver && this.options.monitor) {
      this.mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (this._isAgainRender(mutation)) {
            this._render();
            return;
          }
        })
      });
      this.mutationObserver.observe(this.container, observeOptions);
      this.shadowRoot && this.mutationObserver.observe(this.shadowRoot, observeOptions);
    }
  }
}

export { WatermarkOptions } from './types';
export { defaultOptions } from './config';
