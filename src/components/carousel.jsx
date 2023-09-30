import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

export default function Carousel({children: slides}) {
  const [curr,setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
  return (
    <div className='relative w-[100%] lg:w-[50%] h-[28rem] md:h-[39rem] rounded-[30px]'>
      <div className='overflow-hidden'>
        <div className='transition-transform ease-out duration-500 flex w-[100%] h-[28rem] md:h-[39rem]' style={{transform: `translateX(-${curr * 100}%)`}}>
          {slides}
        </div>
        <div className='absolute inset-0 flex items-center justify-between'>
          <button onClick={prev} className='bg-[#84cc16] flex items-center justify-center p-2 rounded-[15px] translate-x-[-20px]'>
            <ChevronLeft className='text-white' size={40} />
          </button>
          <button onClick={next} className='bg-[#84cc16] flex items-center justify-center p-2 rounded-[15px] translate-x-[20px]'>
            <ChevronRight className='text-white' size={40} />
          </button>
        </div>
      </div>
    </div>
  )
}