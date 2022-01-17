import React from 'react';
import { Watermark } from '@pansy/react-watermark';
import Content from '../../../../docs/components/content';

export default () => {
  return (
    <Watermark text="测试水印" style={{ overflow: 'hidden' }}>
      <Content />
    </Watermark>
  )
}
