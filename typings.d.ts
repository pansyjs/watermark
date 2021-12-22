declare module '*.less';

interface Window {
  WebKitMutationObserver: MutationObserver;
  MozMutationObserver: MutationObserver;
}
