import React from 'react'
import Card from './card';
import Slider from 'react-slick';
import un from "../assets/un.jpg"
import tandir from "../assets/tandir.png"
import taruz from "../assets/taruz.jpg"
import olma from "../assets/olma.jpg"
import uzum from "../assets/uzum.jpg"
import { useTranslation } from "react-i18next"

export default function MaslahatBeramiz() {
  
  const [t, i18n] = useTranslation("global")

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
    <div className='bg-[#e1e1e18a] py-16' id='our-products'>
      <div className='max-w-[1300px] px-auto mx-auto'>
        <h1 className='text-center text-[55px] text-[#1a1a1a] mb-[40px] static'>{t("popularproducts.text")}</h1>
        <Slider {...settings} className='flex justify-between'>
          <Card img={un} title={t("popularproducts.flour")} price={'86000'} />
          <Card img={tandir} title={t("popularproducts.tandoor")} price={'86000'} />
          <Card img={taruz} title={t("popularproducts.watermelonandmelon")} price={'86000'} />
          <Card img={olma} title={t("popularproducts.apple")} price={'86000'} />
          <Card img={uzum} title={t("popularproducts.grapes")} price={'86000'} />
        </Slider>
      </div>
    </div>
  )
}
