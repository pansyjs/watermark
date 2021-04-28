import ProCard from '@ant-design/pro-card';
import { Button, message } from 'antd';
import isNaN from 'lodash/isNaN';
import ProForm, {
  ProFormDependency,
  ProFormColorPicker,
  ProFormSlider,
  ProFormText,
  ProFormSwitch,
  ProFormTextArea,
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
          text: '示例水印',
          fontColor: '#000',
          fontSize: 16,
          zIndex: 9,
          rotate: -22,
          opacity: 0.15,
          width: 120,
          height: 64,
          monitor: true,
          mode: 'interval',
          fontWeight: 300,
          gapX: 100,
          gapY: 100
        }}
        form={form}
        submitter={false}
      >
        <ProCard split="vertical" headerBordered bordered>
          <ProCard colSpan="70%">
            <ProFormDependency
              name={[
                'rotate',
                'text',
                'fontColor',
                'fontSize',
                'zIndex',
                'opacity',
                'mode',
                'width',
                'height',
                'image',
                'gapX',
                'gapY',
                'fontWeight'
              ]}
            >
              {(config) => {
                console.log(config);
                const text = config.text.split('\n');
                return (
                  // @ts-ignore
                  <Watermark
                    {...config}
                    text={text}
                    height={+config.height}
                    width={+config.width}
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
            <div style={{ overflow: 'scroll', height: 600 }}>
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
              <ProFormSwitch name="monitor" label="开启保护模式" />
              <ProFormTextArea label="水印文案" name="text" placeholder="请输入水印文案，换行表示多行，建议不要超过两行" />
              <ProFormText label="水印图片" name="image" placeholder="请输入图片链接" />
              <ProForm.Group>
                <ProFormText width="xs" label="水印宽度" name="width" />
                <ProFormText width="xs" label="水印高度" name="height" />
              </ProForm.Group>
              <ProForm.Group>
                <ProFormText width="xs" label="水印水平间距" name="gapX" />
                <ProFormText width="xs" label="水印垂直间距" name="gapY" />
              </ProForm.Group>
              <ProFormText label="字体粗细" name="fontWeight" />
              <ProFormColorPicker label="字体颜色" name="fontColor" />
              <ProFormSlider label="透明度" name="opacity" step={0.05} min={0} max={1} />
              <ProFormSlider label="字体大小" name="fontSize" />
              <ProFormSlider label="zIndex" name="zIndex" min={0} max={100} />
              <ProFormSlider label="旋转角度" name="rotate" min={-90} max={90} />
            </div>
          </ProCard>
        </ProCard>
      </ProForm>
    </div>
  )
}
