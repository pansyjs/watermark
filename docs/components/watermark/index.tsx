import React, { useRef, useEffect } from 'react';
import Watermark, { WatermarkOptions } from '@pansy/watermark';

interface WatermarkProps extends WatermarkOptions {
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

  useEffect(() => {
    if (!watermark.current) {
      // @ts-ignore
      watermark.current = new Watermark({
        ...rest,
        container: !isBody ? container.current : undefined
      });
    } else {
      watermark.current.update(rest);
    }

    return () => {
      watermark.current?.destroy();
    }
  }, [rest]);

  return (
    <div ref={container} className={className} style={style}>
      {children}
    </div>
  )
}

export default WatermarkPro;
