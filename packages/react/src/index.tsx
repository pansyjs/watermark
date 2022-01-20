import React, { useRef, useEffect } from 'react';
import { Watermark as BaseWatermark, WatermarkOptions } from '@pansy/watermark';

export interface WatermarkProps extends WatermarkOptions {
  className?: string;
  style?: React.CSSProperties;
  visible?: boolean;
  isBody?: boolean;
}

export const Watermark: React.FC<WatermarkProps> = ({
  className,
  style,
  isBody,
  visible = true,
  children,
  ...rest
}) => {
  const container = useRef<HTMLDivElement>(null);
  const watermark = useRef<BaseWatermark>();

  useEffect(() => {
    if (!watermark.current) {
      watermark.current = new BaseWatermark({
        ...rest,
        containerStyle: style,
        container: !isBody ? container.current : undefined
      });

      if (!visible) {
        watermark.current.hide();
      }
    } else {
      watermark.current.update({
        ...rest,
        containerStyle: style,
      });
    }
  }, [rest]);

  useEffect(
    () => {
      if (visible) {
        watermark.current?.show();
      } else {
        watermark.current?.hide();
      }
    },
    [visible]
  );

  useEffect(
    () => {
      return () => {
        watermark.current?.destroy();
      }
    },
    []
  );

  if (isBody) return null;

  return (
    <div ref={container} className={className} style={style}>
      {children}
    </div>
  )
}

export default Watermark;
