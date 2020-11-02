import { getStyleStr } from './';

describe('getStyleStr', () => {
  it('空对象', () => {
    expect(getStyleStr({})).toEqual('');
  });

  it('简单样式对象', () => {
    const style = {
      width: '100px'
    }
    expect(getStyleStr(style)).toEqual('width:100px;');
  });

  it('带有中划线的样式对象', () => {
    const style = {
      width: '100px',
      zIndex: 10
    }
    expect(getStyleStr(style)).toEqual('width:100px;z-index:10;');
  });
});
