import { useEffect, useRef, useState } from 'react';
import { Button, Divider, Empty, Space, Upload } from 'antd';
import { RcFile } from 'antd/es/upload/interface';
import styles from './index.less';
import html2canvas from 'html2canvas';
import { blindDecryption } from '@pansy/watermark';

function getBase64(file: RcFile): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
}

export default () => {
  const [image, setImage] = useState('');
  const [decryptionImage, setDecryptionImage] = useState('');
  useEffect(() => {
    // 为了解决第一次转 canvas CORS 时间过长，需要初始化执行一次
    if (containerRef.current) {
      html2canvas(containerRef.current, { useCORS: true });
    }
  }, []);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.main}>
      <Space>
        <Upload
          accept="image/*"
          showUploadList={false}
          onChange={async ({ file }) => {
            if (file.originFileObj) {
              const base64 = await getBase64(file.originFileObj);
              setImage(base64);
            }
          }}
        >
          <Button type="primary">上传图片</Button>
        </Upload>
        {image && (
          <>
            {decryptionImage ? (
              <Button onClick={() => setDecryptionImage('')}>恢复</Button>
            ) : (
              <Button
                type="primary"
                onClick={async () => {
                  if (containerRef.current) {
                    const canvas = await html2canvas(containerRef.current, {
                      useCORS: true,
                    });
                    const ctx = canvas.getContext('2d');
                    if (ctx) {
                      blindDecryption(ctx);
                      setDecryptionImage(canvas.toDataURL());
                    }
                  }
                }}
              >
                解密
              </Button>
            )}
          </>
        )}
      </Space>
      <Divider dashed />
      <div ref={containerRef}>
        {image ? (
          <img height="100%" width="100%" src={decryptionImage || image} />
        ) : (
          <Empty description="请上传图片" />
        )}
      </div>
    </div>
  );
};
