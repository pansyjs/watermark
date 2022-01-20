import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { Watermark } from '@pansy/react-watermark';
import Content from '../../../../docs/components/content';

export default () => {
  const [visible, setVisible] = useState<boolean>();

  const handleShow = () => {
    setVisible(true);
  }

  const handleHide = () => {
    setVisible(false);
  }

  return (
    <>
      <Space>
        <Button onClick={handleShow}>显示</Button>
        <Button onClick={handleHide}>隐藏</Button>
      </Space>

      <Watermark visible={visible} text="测试水印">
        <Content />
      </Watermark>
    </>
  )
}
