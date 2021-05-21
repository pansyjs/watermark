import React, { useEffect, useRef } from 'react';
import WatermarkContent from '../../components/content';
import Watermark from '@pansy/watermark';

export default () => {
  const watermark = useRef<Watermark>();

  useEffect(
    () => {
      watermark.current = new Watermark({
        text: ['示例水印', '17766666666'],
        width: 120,
        height :64,
        gapX: 150,
        gapY: 150,
        container: 'watermark-03'
      });

      return () => {
        watermark.current && watermark.current.destroy();
      }
    },
    []
  );

  return (
    <div id="watermark-03">
      <WatermarkContent />
    </div>
  )
}

