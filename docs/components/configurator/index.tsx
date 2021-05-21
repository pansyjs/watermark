import React, { useState, useMemo } from 'react';
import ProCard from '@ant-design/pro-card';
import {
  Button,
  message,
  Form,
  Input,
  Radio,
  InputNumber,
  Select,
  Switch,
  Row,
  Col,
  Slider,
  Divider
} from 'antd';
import { WatermarkConfig } from '@pansy/watermark';
import { ProFormColorPicker } from '@ant-design/pro-form';
import { useClipboard } from "use-clipboard-hook";
import Watermark from '@pansy/react-watermark';
import WatermarkContent from '../content';
import { defaultConfig } from '../../../src/config';
// @ts-ignore
import styles from './index.less';

const { TextArea } = Input;

export default () => {
  const [config, setConfig] = useState<WatermarkConfig>({
    ...defaultConfig,
    text: '测试水印'
  })
  const { copy } = useClipboard();
  const [form] = Form.useForm();

  const handleCopy = () => {
    const copyText = Object.keys(config).reduce(
      (prev, cur, index, list) => {
        const val = typeof config[cur] === 'string' ? `'${config[cur]}'` : config[cur];
        return prev + `  ${cur}: ${val},\n` + (index + 1  === list.length ? '}' : '')
      },
      'const watermarkConfig = {\n'
    );
    copy(copyText);
    message.success('拷贝成功');
  }

  const watermark = useMemo(
    () => {
      return (
        <Watermark {...config}>
          <WatermarkContent />
        </Watermark>
      )
    },
    [config]
  );

  return (
    <div className={styles.main}>
      <ProCard split="vertical" headerBordered bordered>
        <ProCard colSpan="70%">
          {watermark}
        </ProCard>
        <ProCard
          title="配置面板"
          extra={<Button type="link" size="small" onClick={handleCopy}>拷贝配置</Button>}
        >
          <div style={{ overflow: 'scroll', height: 600 }}>
            <Form
              layout="vertical"
              initialValues={{
                ...defaultConfig,
                text: '测试水印'
              }}
              form={form}
              onValuesChange={(_, allValues) => {
                setConfig({
                  ...allValues,
                  text: allValues.text.split('\n')
                });
              }}
            >
              <Divider dashed>高级设置</Divider>

              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item name="mode" label="渲染模式">
                    <Radio.Group
                      name="mode"
                      options={[
                        {
                          label: '重复展示',
                          value: 'repeat',
                        },
                        {
                          label: '错行展示',
                          value: 'interval',
                        }
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="monitor" valuePropName="checked" label="开启保护模式" >
                    <Switch />
                  </Form.Item>
                </Col>
              </Row>

              <Divider dashed>水印内容</Divider>

              <Form.Item
                name="text"
                label="水印文案"
              >
                <TextArea placeholder="请输入" />
              </Form.Item>

              <Form.Item name="image" label="水印图片" help="设置此项，则优先使用图片作为水印">
                <Input placeholder="请输入" />
              </Form.Item>

              <Divider dashed>水印样式</Divider>

              <Form.Item name="opacity" label="透明度">
                <Slider step={0.05} min={0} max={1} />
              </Form.Item>

              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item name="width" label="水印宽度">
                    <InputNumber />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="height" label="水印高度">
                    <InputNumber />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="offsetLeft" label="水平偏移量">
                    <InputNumber />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="offsetTop" label="垂直偏移量">
                    <InputNumber />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="gapX" label="水印水平间距">
                    <InputNumber />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="gapY" label="水印垂直间距">
                    <InputNumber />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="zIndex" label="zIndex">
                    <InputNumber />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="rotate" label="旋转角度">
                    <InputNumber />
                  </Form.Item>
                </Col>
              </Row>

              <Divider dashed>文本样式</Divider>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item name="fontSize" label="字体大小">
                    <InputNumber />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="textAlign" label="对齐方式">
                    <Select
                      options={[
                        { value: 'center', label: 'center' },
                        { value: 'left', label: 'left' },
                        { value: 'right', label: 'right' },
                        { value: 'start', label: 'start' },
                        { value: 'end', label: 'end' },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="fontStyle" label="字体样式">
                    <Select
                      options={[
                        { value: 'normal', label: '正常' },
                        { value: 'italic', label: '斜体' }
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <ProFormColorPicker name="fontColor" label="字体颜色" />
                </Col>
              </Row>

              <Form.Item name="fontFamily" label="字体">
                <Input placeholder="请输入"/>
              </Form.Item>

              <Form.Item name="fontWeight" label="字体粗细">
                <Input placeholder="请输入"/>
              </Form.Item>
            </Form>
          </div>
        </ProCard>
      </ProCard>
    </div>
  )
}
