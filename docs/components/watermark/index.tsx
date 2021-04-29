import React, { useRef, useEffect } from 'react';
import Watermark, { WatermarkConfig } from '@pansy/watermark';

interface WatermarkProps extends WatermarkConfig {
  className?: string;
  style?: React.CSSProperties;
  isBody?: boolean;
}

const WatermarkPro: React.FC<WatermarkProps> = ({
  className,
  style,
  isBody,
  children,
  ...rest
}) => {
  const container = useRef<HTMLDivElement>(null);
  const watermark = useRef<Watermark>();

  useEffect(
    () => {
      return () => {
        watermark.current?.destroy();
      }
    },
    []
  );

  useEffect(() => {
    if (!watermark.current) {
      watermark.current = new Watermark({
        ...rest,
        container: !isBody ? container.current : undefined
      });
    } else {
      watermark.current.update(rest);
    }
  }, [JSON.stringify(rest)]);

  return (
    <div ref={container} className={className} style={style}>
      {children}
    </div>
  )
}

export default WatermarkPro;
