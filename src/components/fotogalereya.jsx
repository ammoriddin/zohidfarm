import React from 'react'
import gallery1 from '../assets/gallery-slide-1.jpg'
import gallery2 from '../assets/gallery-slide-2.jpg'
import gallery3 from '../assets/gallery-slide-3.jpg'
import gallery4 from '../assets/gallery-slide-4.jpg'
import gallery5 from '../assets/gallery-slide-5.jpg'
import gallery6 from '../assets/gallery-slide-6.jpg'


export default function FotoGalereya() {
  return (
    <div className='py-10'>
        <div className='container'>
            <h1 className='text-[22px] sm:text-[25px] md:text-[30px] lg:text-[45px] mb-10 font-[600] text-center text-[#121212] w-[60%] block mx-auto'>Фотогалерея нашего фермерского хозяйства</h1>
            <div className='flex flex-wrap gap-2 w-full items-center'>
                <div className='w-[100%] flex flex-wrap md:w-[32%] gap-2'>
                    <div className='w-[100%] h-[350px]'>
                        <img className='h-[100%] rounded-xl w-[100%] object-cover object-top' src={gallery1} />
                    </div>
                    <div className='w-[100%] h-[350px]'>
                        <img className='h-[100%] rounded-xl w-[100%] object-cover object-top' src={gallery2} />
                    </div>
                </div>
                <div className='w-[100%] h-[94vh] md:w-[32%] flex-shrink-[5]'>
                    <img className='w-[100%] h-[100%] object-cover rounded-xl' src={gallery3} />
                </div>
                <div className='w-[100%] flex flex-wrap md:w-[32%] gap-2'>
                    <div className='w-[100%] h-[350px]'>
                        <img className='h-[100%] rounded-xl w-[100%] object-cover object-top' src={gallery4} />
                    </div>
                    <div className='w-[100%] h-[350px]'>
                        <img className='h-[100%] rounded-xl w-[100%] object-cover object-top' src={gallery5} />
                    </div>
                </div>

            </div>
            {/* <div className='flex flex-wrap gap-2 w-full'>
                <div className='w-[100%] h-[300px] flex flex-wrap md:w-[32%] gap-2'>
                    <img className='object-cover max-w-[47.5%] sm:max-w-[48%] md:max-w-[100%] rounded-xl' src={gallery2} alt="" />
                    <img className='object-cover max-w-[47.5%] sm:max-w-[48%] md:max-w-[100%] rounded-xl' src={gallery3} alt="" />
                </div>
                <div className='w-[100%] h-[600px] md:w-[32%] flex-shrink-[5]'>
                    <img className='w-[100%] object-cover rounded-xl' src={gallery1} alt="" />
                </div>
                <div className='w-[100%] h-[300px] flex flex-wrap md:w-[32%] gap-2'>
                    <img className='object-cover max-w-[47.5%] sm:max-w-[48%] md:max-w-[100%] rounded-xl' src={gallery4} alt="" />
                    <img className='object-cover max-w-[47.5%] sm:max-w-[48%] md:max-w-[100%] rounded-xl' src={gallery5} alt="" />
                </div>
            </div> */}
        </div>
    </div>
  )
}
