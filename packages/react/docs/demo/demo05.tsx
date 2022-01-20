import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { Watermark } from '@pansy/react-watermark';

export default () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleShow = () => {
    setVisible(true);
  }

  const handleHide = () => {
    setVisible(false);
  }

  return (
    <div>
      <Space>
        <Button onClick={handleShow}>显示</Button>
        <Button onClick={handleHide}>隐藏</Button>
      </Space>
      <Watermark isBody visible={visible} text="测试水印" />
    </div>
  );
}
