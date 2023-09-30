import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slide1 from '../assets/slider1.jpg'
import slide2 from '../assets/slider2.jpg'
import slide3 from '../assets/slider3.jpg'
import slide4 from '../assets/slider4.jpg'
import Carousel from './carousel.jsx'


const slides = [
    slide2,
    slide1,
    slide3,
    slide4,
];
export default function Hero() {

    return (
        <div className='hero relative py-[40px]'>
            <div className='absolute top-0 left-0 bg-black w-full h-full opacity-[0.6]'></div>
            <div className='container relative'>
                <div className='flex items-center flex-wrap justify-between text-center'>
                    <div className='w-[100%] lg:w-[42%] mb-4'>
                        <h1 className='text-[20px] sm:text-[30px] md:text-[40px] lg:text-[30px] xl:text-[40px] mb-4 text-white'>
                            Biz iste'molchilarimizga eng sog'lom va eng mazali mahsulotlarni taqdim etish uchun faqat tabiiy o'stirish usullaridan foydalanamiz.
                        </h1>
                        <button className='bg-[#84cc16] text-white text-[17px] py-3 px-7 rounded-[10px] font-bold'>
                            Biz bilan bog'lanish
                        </button>
                    </div>

                    <Carousel>
                        {slides.map((s) => (
                            <img className='rounded-[30px] object-cover h-[100%]' src={s} />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}