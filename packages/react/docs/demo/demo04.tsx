import React from 'react';
import { Watermark } from '@pansy/react-watermark';
import Content from '../../../../docs/components/content';

export default () => {
  const options = {
    gapX: 200,
    gapY: 200,
    width: 120,
    height: 32,
    opacity: 1,
    image: 'https://gw.alipayobjects.com/zos/bmw-prod/59a18171-ae17-4fc5-93a0-2645f64a3aca.svg',
  }

  return (
    <Watermark {...options}>
      <Content />
    </Watermark>
  )
}



