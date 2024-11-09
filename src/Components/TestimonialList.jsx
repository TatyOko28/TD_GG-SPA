import React from 'react';
import Testimonial from './Testimonial';
import './TestimonialList.scss';
import image1 from './aa.jpeg'
import image2 from './bb.jpeg'; // Update the path to your images
import image3 from './cc.jpeg';

const testimonials = [
  {
    title: '法国 西班牙',
    subtitle: '何女士',
    text: '侑悦会定制的法国西班牙深度游，每个景点时间合理，风景大赞，非常符合我们想要的人文之旅主题。葡萄酒酒店做得奇庄主…',
    image: image1
  },
  {
    title: '纳米比亚 南非 博茨瓦纳',
    subtitle: '黄女士',
    text: '个人感觉超极好的一家定制旅行公司。我一直都有关注侑悦会的微信公众号，基本每周的推送都会看，也想感受下定制旅行。…',
    image: image2
  },
  {
    title: '美国',
    subtitle: '杨女士',
    text: '定制旅游省心很多，全程不操一点心。我和先生一早就打算让孩子暑假去美国游学，顺便自己也可以在这边玩一下。侑悦会给…',
    image: image3
  }
];

const TestimonialList = () => {
  return (
    <div className="testimonial-list">
      {testimonials.map((testimonial, index) => (
        <Testimonial
          key={index}
          title={testimonial.title}
          subtitle={testimonial.subtitle}
          text={testimonial.text}
          image={testimonial.image}
        />
      ))}
    </div>
  );
};

export default TestimonialList;