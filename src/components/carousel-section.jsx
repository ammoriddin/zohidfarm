import React from 'react'
import Slider from 'react-slick'

export default function CarouselSection() {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='py-10 slider-section'>
            <div className='container'>
                <h1 className='text-center text-[55px] mb-36 text-[#1a1a1a]'>ЧП "BAHODIR SHOHRUKBEK"</h1>
                <Slider {...settings} >
                    <div >
                        <div className='flex items-center justify-around flex-wrap'>
                            <div className='w-[40rem]'>
                                <p className='font-[600] text-center'>Наше фермерское хозяйство расположено в Кашкадарьинской области Узбекистана и специализируется на выращивании фруктов и овощей. Мы занимаемся производством высококачественных продуктов и стремимся предложить нашим клиентам только самое лучшее.</p>
                            </div>

                            <div className='w-[20rem]'>
                                <img className='w-full rounded-xl h-[200px] object-cover' src="https://www.ex-t.com/wp-content/uploads/2019/03/600x400.png" alt="" />
                            </div>

                            <button className='block mx-auto mt-4 bg-[#84cc16] text-white text-[20px] py-3 px-7 rounded-[10px]'>
                                Связаться с нами
                            </button>
                        </div>
                    </div>

                    <div >
                        <div className='flex items-center justify-around flex-wrap'>
                            <div className='w-[40rem]'>
                                <p className='font-[600] text-center'>Наше фермерское хозяйство расположено в Кашкадарьинской области Узбекистана и специализируется на выращивании фруктов и овощей. Мы занимаемся производством высококачественных продуктов и стремимся предложить нашим клиентам только самое лучшее.</p>
                            </div>

                            <div className='w-[20rem]'>
                                <img className='w-full rounded-xl h-[200px] object-cover' src="https://www.ex-t.com/wp-content/uploads/2019/03/600x400.png" alt="" />
                            </div>

                            <button className='block mx-auto mt-4 bg-[#84cc16] text-white text-[20px] py-3 px-7 rounded-[10px]'>
                                Связаться с нами
                            </button>
                        </div>
                    </div>

                    <div >
                        <div className='flex items-center justify-around flex-wrap'>
                            <div className='w-[40rem]'>
                                <p className='font-[600] text-center'>Наше фермерское хозяйство расположено в Кашкадарьинской области Узбекистана и специализируется на выращивании фруктов и овощей. Мы занимаемся производством высококачественных продуктов и стремимся предложить нашим клиентам только самое лучшее.</p>
                            </div>

                            <div className='w-[20rem]'>
                                <img className='w-full rounded-xl h-[200px] object-cover' src="https://www.ex-t.com/wp-content/uploads/2019/03/600x400.png" alt="" />
                            </div>

                            <button className='block mx-auto mt-4 bg-[#84cc16] text-white text-[20px] py-3 px-7 rounded-[10px]'>
                                Связаться с нами
                            </button>
                        </div>
                    </div>

                    <div >
                        <div className='flex items-center justify-around flex-wrap'>
                            <div className='w-[40rem]'>
                                <p className='font-[600] text-center'>Наше фермерское хозяйство расположено в Кашкадарьинской области Узбекистана и специализируется на выращивании фруктов и овощей. Мы занимаемся производством высококачественных продуктов и стремимся предложить нашим клиентам только самое лучшее.</p>
                            </div>

                            <div className='w-[20rem]'>
                                <img className='w-full rounded-xl h-[200px] object-cover' src="https://www.ex-t.com/wp-content/uploads/2019/03/600x400.png" alt="" />
                            </div>

                            <button className='block mx-auto mt-4 bg-[#84cc16] text-white text-[20px] py-3 px-7 rounded-[10px]'>
                                Связаться с нами
                            </button>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}