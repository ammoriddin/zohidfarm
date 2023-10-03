import React from 'react'
import check from '../assets/check.svg'
import { useTranslation } from "react-i18next"

export default function BizningAfzalliklarimiz() {
  const [t, i18n] = useTranslation("global")

  return (
    <div className='hero relative py-10' id='our-advantages'>
        <div className='absolute top-0 left-0 bg-black w-full h-full opacity-[0.6]'></div>
        <div className='container relative'>
            <h1 className='text-white text-[42px] font-bold text-center'>{t('ouradvices.h1')}</h1>
            <ul className='flex text-white mt-[50px] flex-wrap justify-around text-center'>
                <li className='w-[200px] flex flex-wrap items-center justify-center'>
                    <img src={check} alt="" />
                    <p className='text-[20px] font-[600]'>{t('ouradvices.advice1')}</p>
                </li>
                <li className='w-[200px] flex flex-wrap items-center justify-center'>
                    <img src={check} alt="" />
                    <p className='text-[20px] font-[600]'>{t('ouradvices.advice2')}</p>
                </li>
                <li className='w-[200px] flex flex-wrap items-center justify-center'>
                    <img src={check} alt="" />
                    <p className='text-[20px] font-[600]'>{t('ouradvices.advice3')}</p>
                </li>
                <li className='w-[200px] flex flex-wrap items-center justify-center'>
                    <img src={check} alt="" />
                    <p className='text-[20px] font-[600]'>{t('ouradvices.advice4')}</p>
                </li>
            </ul>
            <p className='text-white text-[600] text-center w-[60%] block mx-auto mt-14'>{t('ouradvices.description')}</p>
        </div>
    </div>
  )
}