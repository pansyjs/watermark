import { Watermark, WatermarkContent } from '../../components';

export default () => {
  const config = {
    text: '测试水印'
  };

  return (
    <Watermark {...config}>
      <WatermarkContent />
    </Watermark>
  )
}
