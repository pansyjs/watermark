import React, { useRef, useEffect } from 'react';
import { Watermark as BaseWatermark, WatermarkOptions } from '@pansy/watermark';

export interface WatermarkProps extends WatermarkOptions {
  className?: string;
  style?: React.CSSProperties;
  visable?: boolean;
  isBody?: boolean;
}

export const Watermark: React.FC<WatermarkProps> = ({
  className,
  style,
  isBody,
  visable = true,
  children,
  ...rest
}) => {
  const container = useRef<HTMLDivElement>(null);
  const watermark = useRef<BaseWatermark>();

  useEffect(
    () => {
      return () => {
        watermark.current?.destroy();
      }
    },
    []
  );

  useEffect(
    () => {
      if (visable) {
        watermark.current?.show();
      } else {
        watermark.current?.hide();
      }
    },
    [visable]
  );

  useEffect(() => {
    if (!watermark.current) {
      watermark.current = new BaseWatermark({
        ...rest,
        container: !isBody ? container.current : undefined
      });
    } else {
      watermark.current.update(rest);
    }
  }, [rest]);

  if (isBody) return null;

  return (
    <div ref={container} className={className} style={style}>
      {children}
    </div>
  )
}

export default Watermark;
