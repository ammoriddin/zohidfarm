import React from 'react'
import Slider from 'react-slick';
import { useTranslation } from "react-i18next"
import video from "../assets/video.mp4"
import autoprefixer from 'autoprefixer';

export default function Video() {
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
        breakpoint: 1070,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='py-16' id='videos'>
      <div className='max-w-[1300px] px-auto mx-auto'>
        <h1 className='text-center text-[55px] text-[#1a1a1a] mb-[40px]'>{t("videos.h1")}</h1>
        <div className='flex justify-center'>
          <video width="300" height="240" src={video}  controls />
        </div>
      </div>
    </div>
  )
}
