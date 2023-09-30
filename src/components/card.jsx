import React from 'react'

export default function Card({img, title, price}) {
  return (
        <div class={`hover:shadow-xl transition-all p-4 shadow max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700`}>
            <div className='w-full h-[16rem]'>
                <img class="rounded-t-lg h-full object-cover" src={img} alt="" />
            </div>
            <div class="p-5">
                <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Narxi: {price}</p>
                <button class="inline-flex items-center px-3 py-2 text-[20px] font-medium text-center text-white bg-[#84cc16] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors">
                    Buyurtma qilmoq
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>
            </div>
        </div>

  )
}
