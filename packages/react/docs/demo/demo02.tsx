import React from 'react';
import { Watermark } from '@pansy/react-watermark';
import Content from '../../../../docs/components/content';

export default () => {
  const options = {
    text: ['示例水印', '17766666666'],
    width: 120,
    height :64,
    gapX: 150,
    gapY: 150,
  }

  return (
    <Watermark {...options}>
      <Content />
    </Watermark>
  )
}

