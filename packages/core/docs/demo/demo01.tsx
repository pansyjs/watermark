import { useEffect, useRef } from 'react';
import Content from '../../../../docs/components/content';
import { Watermark } from '@pansy/watermark';

export default () => {
  const watermark = useRef<Watermark>();

  useEffect(
    () => {
      watermark.current = new Watermark({
        text: '测试水印',
        container: 'watermark-01'
      });

      return () => {
        watermark.current && watermark.current.destroy();
      }
    },
    []
  );

  return (
    <div id="watermark-01">
      <Content />
    </div>
  )
}
