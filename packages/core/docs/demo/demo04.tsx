import { useEffect, useRef, useState } from 'react';
import WatermarkContent from '../../../../docs/components/content';
import { processData, Watermark } from '@pansy/watermark';
import { Button } from 'antd';
import html2canvas from 'html2canvas';

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
  const [image, setImage] = useState('');
  return (
    <>
      <div id="watermark-04">
        <WatermarkContent />
      </div>
      <Button
        type="primary"
        onClick={async () => {
          const canvas = await html2canvas(document.querySelector('#watermark-04') as any, {
            useCORS: true,
          });
          const ctx = canvas.getContext('2d');
          if (ctx) {
            const originalData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
            processData(ctx, originalData);
            setImage(canvas.toDataURL());
          }
        }}
      >
        解密
      </Button>
      {image && <img height="100%" width="100%" src={image} />}
    </>
  );
};
