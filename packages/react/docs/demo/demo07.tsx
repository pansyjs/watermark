import React from 'react';
import Content from '../../../../docs/components/content';
import { Watermark } from '@pansy/react-watermark';

export default () => {
  return (
    <div style={{ position: 'relative' }}>
      <Watermark monitor={false} pack={false} text="测试水印" />
      <Content />
    </div>
  );
}
