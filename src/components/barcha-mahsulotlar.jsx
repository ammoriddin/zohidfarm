import React from 'react'
import Card from './card';
import Slider from 'react-slick';

export default function MaslahatBeramiz() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 815,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='bg-[#e1e1e18a] py-16'>
      <div className='max-w-[1300px] px-auto mx-auto'>
        <h1 className='text-center text-[55px] text-[#1a1a1a] mb-[40px]'>Barcha Mahsulotlar</h1>
        <Slider {...settings} className='justify-between'>
          <Card img='https://www.ex-t.com/wp-content/uploads/2019/03/600x400.png' title={'go\'sht'} price={'86000'} />
          <Card img='https://www.ex-t.com/wp-content/uploads/2019/03/600x400.png' title={'go\'sht'} price={'86000'} />
          <Card img='https://www.ex-t.com/wp-content/uploads/2019/03/600x400.png' title={'go\'sht'} price={'86000'} />
          <Card img='https://www.ex-t.com/wp-content/uploads/2019/03/600x400.png' title={'go\'sht'} price={'86000'} />
          <Card img='https://www.ex-t.com/wp-content/uploads/2019/03/600x400.png' title={'go\'sht'} price={'86000'} />
          <Card img='https://www.ex-t.com/wp-content/uploads/2019/03/600x400.png' title={'go\'sht'} price={'86000'} />
          <Card img='https://www.ex-t.com/wp-content/uploads/2019/03/600x400.png' title={'go\'sht'} price={'86000'} />
          <Card img='https://www.ex-t.com/wp-content/uploads/2019/03/600x400.png' title={'go\'sht'} price={'86000'} />
          <Card img='https://www.ex-t.com/wp-content/uploads/2019/03/600x400.png' title={'go\'sht'} price={'86000'} />
          <Card img='https://www.ex-t.com/wp-content/uploads/2019/03/600x400.png' title={'go\'sht'} price={'86000'} />
          <Card img='https://www.ex-t.com/wp-content/uploads/2019/03/600x400.png' title={'go\'sht'} price={'86000'} />
        </Slider>
      </div>
    </div>
  )
}
