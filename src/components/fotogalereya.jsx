import React from 'react'

export default function FotoGalereya() {
  return (
    <div className='py-10'>
        <div className='container'>
            <h1 className='text-[22px] sm:text-[25px] md:text-[30px] lg:text-[45px] mb-10 font-[600] text-center text-[#121212] w-[60%] block mx-auto'>Фотогалерея нашего фермерского хозяйства</h1>
            <div className='flex flex-wrap gap-4 w-full'>
                <div className='w-[100%] flex flex-wrap md:w-[32%] gap-4'>
                    <img className='object-cover max-w-[47.5%] sm:max-w-[48%] md:max-w-[100%] rounded-xl' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/2048px-Solid_black.svg.png" alt="" />
                    <img className='object-cover max-w-[47.5%] sm:max-w-[48%] md:max-w-[100%] rounded-xl' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/2048px-Solid_black.svg.png" alt="" />
                </div>
                <div className='w-[100%] md:w-[32%] flex-shrink-[5]'>
                    <img className='h-[100%] w-[100%] object-cover rounded-xl' src="https://s8.stc.all.kpcdn.net/family/wp-content/uploads/2022/08/top-limon-dlya-immuniteta-960x540-1-960x540.jpg" alt="" />
                </div>
                <div className='w-[100%] flex flex-wrap md:w-[32%] gap-4'>
                    <img className='object-cover max-w-[47.5%] sm:max-w-[48%] md:max-w-[100%] rounded-xl' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/2048px-Solid_black.svg.png" alt="" />
                    <img className='object-cover max-w-[47.5%] sm:max-w-[48%] md:max-w-[100%] rounded-xl' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/2048px-Solid_black.svg.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
