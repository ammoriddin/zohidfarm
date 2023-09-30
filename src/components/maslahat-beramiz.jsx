import React from 'react'
import Card from './card'
import mahsulot1 from '../assets/mahsulot1.jpg'
import mahsulot2 from '../assets/mahsulot2.jpg'

export default function MaslahatBeramiz() {
  return (
    <div className='bg-[#f5f5f5] py-10'>
        <div className='w-full max-w-[1300px] px-[20px] mx-auto'>
            <h1 className='text-center text-[40px] font-[600] text-[#141414] mb-10'>Maslahat Beramiz</h1>

            <div className='card-wrapper flex items-center flex-wrap justify-between gap-8'>
                <Card width='100%' img={mahsulot1} title={'go\'sht'} price={'86000'} />
                <Card width='100%' img={mahsulot2} title={'go\'sht'} price={'86000'} />
                <Card width='100%' img={mahsulot1} title={'go\'sht'} price={'86000'} />
                <Card width='100%' img={mahsulot1} title={'go\'sht'} price={'86000'} />
                <Card width='100%' img={mahsulot1} title={'go\'sht'} price={'86000'} />
                <Card width='100%' img={mahsulot1} title={'go\'sht'} price={'86000'} />
            </div>
        </div>
    </div>
  )
}
