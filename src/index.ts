import {
  getDrawPattern,
  getStyleStr,
  getRandomId,
  getContainer,
  getContent,
  getMutationObserver,
}  from './utils';
import { defaultOptions, attributeName, observeOptions } from './config';
import type { WatermarkConfig } from './types';

const MutationObserver = getMutationObserver();

class Watermark {
  private options: WatermarkConfig;
  private shadowRoot: ShadowRoot | HTMLElement | undefined;
  private container: HTMLElement | undefined;
  private watermarkContent: HTMLElement | undefined;
  private watermarkDom: HTMLElement | undefined;
  private watermarkId: string;
  private mutationObserver: MutationObserver | null;
  private style: Record<string, any>

  constructor(options: WatermarkConfig) {
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

    this.render();
  }

  /**
   * 重新设置配置
   * @param options
   */
  update(options: WatermarkConfig) {
    this.options = Object.assign({}, this.options, options);
    this.style.zIndex = this.options.zIndex;

    if (!this.options.monitor) {
      this._destroyMutationObserver();
    }
    this.render();
  }

  async render() {
    // 获取水印挂载节点
    this.container = getContainer(this.options.container, this.watermarkId);
    console.log(this.watermarkContent);
    // 获取水印父节点
    if (!this.watermarkContent) {
      this.watermarkContent = getContent();
      this.container.append(this.watermarkContent);
    }

    this._destroyMutationObserver();

    // 解决滚动区域无水印问题
    let height = this._getWatermarkHeight();
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
            this.render();
            return;
          }
        })
      });
      this.mutationObserver.observe(this.container, observeOptions);
      this.shadowRoot && this.mutationObserver.observe(this.shadowRoot, observeOptions);
    }
  }

  /**
   * 销毁水印
   */
  destroy() {
    this.container = undefined;
    this.watermarkContent = undefined;

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
   * 获取水印节点
   * @param height
   */
  _getWatermarkDom = async (height: number) => {
    if (!this.watermarkDom) {
      this.watermarkDom = document.createElement('div');
    }

    const styles = {
      ...this.style
    };

    if (typeof height === 'number' && height) {
      styles.height = `${height}px`;
    }

    const backgroundConfig = await getDrawPattern(this.options);

    if (backgroundConfig?.url) {
      const background = backgroundConfig.url;

      if (this.options.mode === 'repeat') {
        styles.backgroundImage = `url(${background})`
      } else {
        styles.backgroundImage = `url(${background}), url(${background})`;
        styles.backgroundRepeat = 'repeat, repeat';
        styles.backgroundPosition = `${backgroundConfig.width / 2}px ${backgroundConfig.height / 2}px, 0 0`;
      }
      // 直接挂载在到body
      if (!this.options.container) {
        styles.position = 'fixed';
        styles.height = undefined;
      }
      this.watermarkDom.setAttribute('style', getStyleStr(styles));
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
}

export default Watermark;
export type { WatermarkConfig } from './types';
