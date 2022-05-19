import { useEffect, useRef } from 'react';
import WatermarkContent from '../../../../docs/components/content';
import { Watermark } from '@pansy/watermark';

export default () => {
  const watermark = useRef<Watermark>();

  useEffect(() => {
    watermark.current = new Watermark({
      gapX: 200,
      gapY: 200,
      width: 120,
      height: 32,
      opacity: 1,
      blindText: '测试盲水印',
      image: 'https://gw.alipayobjects.com/zos/bmw-prod/59a18171-ae17-4fc5-93a0-2645f64a3aca.svg',
      container: 'watermark-04',
    });

    return () => {
      watermark.current && watermark.current.destroy();
    };
  }, []);

  return (
    <div id="watermark-04">
      <WatermarkContent />
    </div>
  );
};
