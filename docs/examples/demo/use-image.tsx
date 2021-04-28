import { Watermark, WatermarkContent } from '../../components';

export default () => {
  return (
    <Watermark
      gapX={100}
      gapY={100}
      height={32}
      width={120}
      opacity={1}
      image="https://gw.alipayobjects.com/zos/bmw-prod/59a18171-ae17-4fc5-93a0-2645f64a3aca.svg"
    >
      <WatermarkContent />
    </Watermark>
  )
}
