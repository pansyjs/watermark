import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { Watermark } from '@pansy/react-watermark';

export default () => {
  const [visable, setVisable] = useState<boolean>(false);

  const handleShow = () => {
    setVisable(true);
  }

  const handleHide = () => {
    setVisable(false);
  }

  return (
    <div>
      <Space>
        <Button onClick={handleShow}>显示</Button>
        <Button onClick={handleHide}>隐藏</Button>
      </Space>
      <Watermark isBody visable={visable} text="测试水印" />
    </div>
  );
}
