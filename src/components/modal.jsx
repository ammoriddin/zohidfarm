import React, { useContext } from 'react'
import slider1 from '../assets/slider1.jpg'
import { UserContext } from '../context/user-context'
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from "react-i18next"


export default function Modal() {
  const [state, handleSubmit] = useForm("mrgwokrd");
  const [t, i18n] = useTranslation("global")

  const obj = useContext(UserContext);

  return (
      <div className={`fixed ${obj.modalDisplay} h-[90vh] top-[50%] rounded-xl left-[50%] overflow-auto translate-x-[-50%] translate-y-[-50%] bg-white z-[100] `}>
        <div className='w-[300px] sm:w-[500px] md:w-[600px]'>
          <img className='w-full rounded-t-xl' src={slider1} alt="" />
        </div>
        <div className='container'>
          <div className='text-center my-7'>
            <h1 className='text-[30px] sm:text-[40px] font-[600] text-[#1e1e1e]'>{t("bottomnavbar.call")}</h1>
            <p className='text-[15px] sm:text-[20px] font-[400] text-[#1e1e1e]'>{t("modal.data")}</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("modal.name")}</label>
              <input type="text" id="name" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
            <div className="mb-6">
            <label htmlFor="tel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("modal.phone")}</label>
            <input type="tel" id="tel" name='tel' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <ValidationError 
              prefix="tel" 
              field="tel"
              errors={state.errors}
            />
            <div className="flex items-center mb-6">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t("modal.agree")}</label>
            </div>
            <button disabled={state.submitting} type='submit' className='mb-0 sm:mb-5 mx-auto block items-center px-3 py-2 text-  [20px] font-medium text-center text-white bg-[#84cc16] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors'>Jo'natish</button>
            </form>
        </div>
      </div>
  )
}