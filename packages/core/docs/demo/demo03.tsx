import { useEffect, useRef } from 'react';
import { Button, Space } from 'antd';
import WatermarkContent from '../../../../docs/components/content';
import { Watermark } from '@pansy/watermark';

export default () => {
  const watermark = useRef<Watermark>();

  useEffect(
    () => {
      watermark.current = new Watermark({
        text: '测试水印',
        container: 'watermark-03'
      });

      return () => {
        watermark.current && watermark.current.destroy();
      }
    },
    []
  );

  const handleShow = () => {
    watermark.current && watermark.current.show();
  }

  const handleHide = () => {
    watermark.current && watermark.current.hide();
  }

  return (
    <>
      <Space>
        <Button onClick={handleShow}>显示</Button>
        <Button onClick={handleHide}>隐藏</Button>
      </Space>

      <div id="watermark-03">
        <WatermarkContent />
      </div>
    </>

  )
}
