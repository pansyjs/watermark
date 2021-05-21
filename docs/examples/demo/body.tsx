import { useEffect, useRef } from 'react';
import Watermark from '@pansy/watermark';

export default () => {
  const watermark = useRef<Watermark>();

  useEffect(
    () => {
      watermark.current = new Watermark({
        text: '测试测试',
      });

      return () => {
        watermark.current && watermark.current.destroy();
      }
    },
    []
  );

  return null;
}
