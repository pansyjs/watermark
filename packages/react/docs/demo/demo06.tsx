import React, { useState } from 'react';
import { Button, Space } from 'antd';
import Content from '../../../../docs/components/content';
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
    <>
      <Watermark text="测试水印">
        <>
          <Space>
            <Button onClick={handleShow}>显示</Button>
            <Button onClick={handleHide}>隐藏</Button>
          </Space>
          <Content />
          {visible && <p>动态内容</p>}
        </>
      </Watermark>
    </>
  );
}
