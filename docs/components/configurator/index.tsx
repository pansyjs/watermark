import ProCard from '@ant-design/pro-card';
import { Button, message } from 'antd';
import isNaN from 'lodash/isNaN';
import ProForm, {
  ProFormDependency,
  ProFormColorPicker,
  ProFormSlider,
  ProFormText,
  ProFormRadio,
} from '@ant-design/pro-form';
import { useClipboard } from "use-clipboard-hook";
import { Watermark, WatermarkContent } from '../';
// @ts-ignore
import styles from './index.less';

export default () => {
  const { copy } = useClipboard();

  const [form] = ProForm.useForm();
  const handleCopy = () => {
    form.validateFields()
      .then((values) => {
        const config = Object.keys(values)
          .reduce((prev, current, index, list) => {
            const val = isNaN(+values[current]) ? `'${values[current]}'` : +values[current];
            if (list.length - 1 === index) {
              return prev + `  ${current}: ${val}\n}`;
            }
            return prev + `  ${current}: ${val}\n`;
          }, '{\n')
        copy(config);
        message.success('拷贝成功');
      })
  }

  return (
    <div className={styles.main}>
      <ProForm
        initialValues={{
          content: '示例水印',
          fontColor: 'rgba(0,0,0,.15)',
          fontSize: '16',
          zIndex: '9',
          rotate: '-22',
          opacity: 1,
          mode: 'interval'
        }}
        form={form}
        submitter={false}
      >
        <ProCard split="vertical" title="水印自定义配置器" headerBordered bordered>
          <ProCard colSpan="70%">
            <ProFormDependency
              name={['rotate', 'content', 'fontColor', 'fontSize', 'zIndex', 'opacity', 'mode']}
            >
              {({ rotate, content, fontColor, fontSize, zIndex, opacity, mode }) => {
                return (
                  // @ts-ignore
                  <Watermark
                    text={content}
                    rotate={rotate}
                    fontColor={fontColor}
                    fontSize={fontSize}
                    zIndex={zIndex}
                    opacity={opacity}
                    mode={mode}
                  >
                    <WatermarkContent />
                  </Watermark>
                );
              }}
            </ProFormDependency>
          </ProCard>
          <ProCard
            title="配置面板"
            extra={<Button type="link" size="small" onClick={handleCopy}>拷贝配置</Button>}
          >
            <ProFormText label="水印文字" name="content" />
            <ProFormColorPicker label="字体颜色" name="fontColor" />
            <ProFormSlider label="字体大小" name="fontSize" />
            <ProFormRadio.Group
              name="mode"
              label="渲染模式"
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
            <ProFormSlider label="zIndex" name="zIndex" min={0} max={100} />
            <ProFormSlider label="透明度" name="opacity" step={0.1} min={0} max={1} />
            <ProFormSlider label="旋转角度" name="rotate" min={-90} max={90} />
          </ProCard>
        </ProCard>
      </ProForm>
    </div>
  )
}
