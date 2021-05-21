import React from 'react';

export default () => {
  return (
    <>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam aliquid
          perferendis, adipisci dolorum officia odio natus facere cumque iusto libero
          repellendus praesentium ipsa cupiditate iure autem eos repudiandae delectus
          totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium,
          aperiam numquam voluptatibus asperiores odio? Doloribus saepe, eligendi facere
          inventore culpa, exercitationem explicabo earum laborum deleniti reiciendis
          deserunt accusantium ullam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptas
          numquam impedit architecto facilis aliquam at assumenda, nostrum explicabo
          accusantium ipsam error provident voluptate molestias magnam quisquam
          excepturi illum sit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusantium
          quo corporis fugit possimus quaerat ad consequatur veniam voluptatum ut cumque
          illo beatae. Magni assumenda eligendi itaque eum voluptate non!
        </p>
      </div>
      <h4>
        下面是一张zIndex 为 10 的 position 为 relative 图片，
        <br /> 如果要在图片中展示水印尝试调大右侧的 zIndex 滑块试试。
      </h4>
      <img
        src="https://gw.alipayobjects.com/zos/bmw-prod/d283f09a-64d6-4d59-bfc7-37b49ea0da2b.svg"
        alt="示例图片"
        width={600}
        style={{ zIndex: 10, maxWidth: '100%', position: 'relative' }}
      />
    </>
  )
}
