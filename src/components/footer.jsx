import React from 'react'
import telegram from '../assets/telegram.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'

export default function Footer() {
  return (
    <footer className='hero relative'>
        <div className='absolute top-0 left-0 bg-black w-full h-full opacity-[0.6]'></div>
        <div className='container py-10 relative'>
            <h1 className='text-center mb-10 font-[600] text-[45px] my-10 text-white'>Aloqa</h1>

            <div className='text-center flex flex-col'>
                <a href='tel:+998-91-9640274' className='text-white text-[20px] font-[600] mb-4'>+998-91-9640274</a>
                <a href='mailto:info@bahodirshohfarm.uz' className='text-white text-[22px] font-[600]'>info@bahodirshohfarm.uz</a>
                <a href='' className='text-white text-[22px] font-[600] mb-10'>Республика Узбекистан, Кашкадарьинская область</a>
            </div>
            <ul className='flex gap-4 item-center justify-center'>
              <li className='w-[40px]'>
                <a className='w-full' href="#" target='_blank'><img src={telegram} alt="" /></a>
              </li>
              <li className='w-[40px]'>
                <a className='w-full' href="#" target='_blank'><img src={instagram} alt="" /></a>
              </li>
              <li className='w-[40px]'>
                <a className='w-full' href="#" target='_blank'><img src={facebook} alt="" /></a>
              </li>
            </ul>
        </div>
    </footer>
  )
}