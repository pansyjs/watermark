import React from 'react';
import { Watermark, WatermarkContent } from '../../components';

export default () => {
  const config = {
    text: ['示例水印', '17766666666'],
    width: 120,
    height :64,
    gapX: 150,
    gapY: 150
  };

  return (
    <Watermark {...config}>
      <WatermarkContent />
    </Watermark>
  )
}
