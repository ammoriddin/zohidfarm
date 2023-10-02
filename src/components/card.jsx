import { useContext } from 'react'
import { UserContext } from '../context/user-context'

export default function Card({img, title, price}) {

    const obj = useContext(UserContext)
    return (
        <>
            <div onClick={obj.overlayClick} className={`bottom-0 ${obj.overlayDisplay} left-0 fixed bg-[#0000003a] w-full h-[100vh] z-20 `}></div>
            <div className={`hover:shadow-xl transition-all p-0 shadow max-w-[24rem] bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700`}>
                <div className='w-[24rem] h-[16rem]'>
                    <img className="rounded-t-lg w-full h-full object-cover" src={img} alt="" />
                </div>
                <div className="p-5">
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <button onClick={obj.modalClick} className="inline-flex items-center px-3 py-2 text-[20px] font-medium text-center text-white bg-[#84cc16] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors">
                        Buyurtma qilmoq
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}
