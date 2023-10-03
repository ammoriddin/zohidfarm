import React from 'react'
import Slider from 'react-slick'
import carousel1 from "../assets/crousel1.jpg"
import carousel2 from "../assets/carousel2.jpg"
import carousel3 from "../assets/carousel3.jpg"
import carousel4 from "../assets/carousel4.jpg"
import { useTranslation } from "react-i18next"

export default function CarouselSection() {
    const [t, i18n] = useTranslation("global")

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='py-10 slider-section' id='about-we'>
            <div className='container'>
                <div className=''>
                    <h1 className='text-center text-[55px] mb-36 text-[#1a1a1a]'>{t("self")} "Zohidfarm"</h1>
                    <Slider {...settings} >
                    <div >
                        <div className=''>
                            <div className='flex items-center justify-around flex-wrap'>
                                <div className='w-[40rem]'>
                                    <p className='font-[600] text-center'>{t("zohidfarm.description1")}</p>
                                </div>

                                <div className='w-[20rem]'>
                                    <img className='w-full rounded-xl h-[200px] object-cover' src={carousel1} alt="" />
                                </div>
                            </div>

                            <button className='block mx-auto mt-4 bg-[#84cc16] text-white text-[20px] py-3 px-7 rounded-[10px]'>
                                {t('bottomnavbar.call')}
                            </button>
                        </div>
                    </div>

                    <div >
                        <div className=''>
                            <div className='flex items-center justify-around flex-wrap'>
                                <div className='w-[40rem]'>
                                    <p className='font-[600] text-center'>{t("zohidfarm.description2")}</p>
                                </div>

                                <div className='w-[20rem]'>
                                    <img className='w-full rounded-xl h-[200px] object-cover' src={carousel2} alt="" />
                                </div>
                            </div>

                            <button className='block mx-auto mt-4 bg-[#84cc16] text-white text-[20px] py-3 px-7 rounded-[10px]'>
                                {t('bottomnavbar.call')}
                            </button>
                        </div>
                    </div>

                    <div >
                        <div className=''>
                            <div className='flex items-center justify-around flex-wrap'>
                                <div className='w-[40rem]'>
                                    <p className='font-[600] text-center'>{t("zohidfarm.description3")}</p>
                                </div>

                                <div className='w-[20rem]'>
                                    <img className='w-full rounded-xl h-[200px] object-cover' src={carousel3} alt="" />
                                </div>
                            </div>

                            <button className='block mx-auto mt-4 bg-[#84cc16] text-white text-[20px] py-3 px-7 rounded-[10px]'>
                                {t('bottomnavbar.call')}
                            </button>
                        </div>
                    </div>

                    <div >
                        <div className=''>
                            <div className='flex items-center justify-around flex-wrap'>
                                <div className='w-[40rem]'>
                                    <p className='font-[600] text-center'>{t("zohidfarm.description4")}</p>
                                </div>

                                <div className='w-[20rem]'>
                                    <img className='w-full rounded-xl h-[200px] object-cover' src={carousel4} alt="" />
                                </div>
                            </div>

                            <button className='block mx-auto mt-4 bg-[#84cc16] text-white text-[20px] py-3 px-7 rounded-[10px]'>
                                {t('bottomnavbar.call')}
                            </button>
                        </div>
                    </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}