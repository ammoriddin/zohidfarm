import React from 'react'
import Card from './card'
import mahsulot1 from '../assets/mahsulot1.jpg'
import mahsulot2 from '../assets/mahsulot2.jpg'
import mahsulot3 from '../assets/mahsulot3.webp'
import mahsulot4 from '../assets/mahsulot4.png'
import mahsulot5 from '../assets/mahsulot5.png'
import mahsulot6 from '../assets/mahsulot6.jpg'
import { useTranslation } from "react-i18next"

export default function MaslahatBeramiz() {
  const [t, i18n] = useTranslation("global")

  return (
    <div className='bg-[#f5f5f5] py-10' id='popular-products'>
        <div className='w-full max-w-[1300px] px-[20px] mx-auto'>
            <h1 className='text-center text-[40px] font-[600] text-[#141414] mb-10'>{t('weoffer.text')}</h1>

            <div className='card-wrapper flex items-center flex-wrap justify-around gap-8'>
                <Card width='100%' img={mahsulot1} title={t("weoffer.wheat")} />
                <Card width='100%' img={mahsulot2} title={t("weoffer.flour")} />
                <Card width='100%' img={mahsulot3} title={t("weoffer.compoundfeed")} />
                <Card width='100%' img={mahsulot4} title={t("weoffer.meat")} />
                <Card width='100%' img={mahsulot5} title={t("weoffer.vgtandfrt")} />
                <Card width='100%' img={mahsulot6} title={t("weoffer.dairyproducts")} />
            </div>
        </div>
    </div>
  )
}
