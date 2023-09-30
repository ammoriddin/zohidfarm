import React from 'react'
import check from '../assets/check.svg'

export default function BizningAfzalliklarimiz() {
  return (
    <div className='hero relative py-10'>
        <div className='absolute top-0 left-0 bg-black w-full h-full opacity-[0.6]'></div>
        <div className='container relative'>
            <h1 className='text-white text-[60px] font-bold text-center'>Bizning Afzalliklarimiz</h1>
            <ul className='flex text-white mt-[50px] flex-wrap justify-around text-center'>
                <li className='w-[200px] flex flex-wrap items-center justify-center'>
                    <img src={check} alt="" />
                    <p className='text-[20px] font-[600]'>Экологически чистая продукция</p>
                </li>
                <li className='w-[200px] flex flex-wrap items-center justify-center'>
                    <img src={check} alt="" />
                    <p className='text-[20px] font-[600]'>Импортируем нашу продукцию в первозданном виде</p>
                </li>
                <li className='w-[200px] flex flex-wrap items-center justify-center'>
                    <img src={check} alt="" />
                    <p className='text-[20px] font-[600]'>Лучшие специалисты в области сельского хозяйства</p>
                </li>
                <li className='w-[200px] flex flex-wrap items-center justify-center'>
                    <img src={check} alt="" />
                    <p className='text-[20px] font-[600]'>Система скидок для оптовых клиентов</p>
                </li>
            </ul>
            <p className='text-white text-[600] text-center w-[60%] block mx-auto mt-14'>Мы обеспечиваем своих клиентов самой лучшей продукцией и стремимся создать долгосрочные отношения с каждым из них. Мы убеждены, что местные фрукты и овощи не только оказывают благотворное влияние на здоровье, но и способствуют развитию местной экономики.</p>
        </div>
    </div>
  )
}