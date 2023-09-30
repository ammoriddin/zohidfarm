import React, { useState } from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
    const [burgerbutton, setBurger] = useState('block')
    const [xbutton, setX] = useState('hidden')
    const [navbarp, setNavbarp] = useState('-40rem')

    function burgermenu() {
        setBurger('hidden')
        setX('block')
        setNavbarp('0')
    }
    function xmenu() {
        setBurger('block')
        setX('hidden')
        setNavbarp('-40rem')
    }

    return (
        <>
            <nav className='w-full bg-[#f5f5f5] py-4 xl:py-0'>
                <div className='container py-5 relative'>
                    <div className={`bottom-0 left-0 fixed bg-black w-full h-[100vh] z-20 opacity-[0.6] ${xbutton}`}></div>
                    <button onClick={burgermenu} className={`${burgerbutton} ml-auto block xl:hidden`}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 18h16M4 12h16M4 6h16" stroke="#000" stroke-width="2" stroke-linecap="round"/></svg>
                    </button>
                    <ul className={`gap-5 fixed z-[1000] bottom-0 h-[100vh] right-[${navbarp}] xl:right-0 transition-all xl:h-[100%] xl:relative p-6 xl:p-0 text-[18px] font-[600] bg-[#fff]  xl:bg-transparent w-[70%] md:w-[50%] xl:w-[100%] xl:flex`}>
                        <div className='w-[10px] relative right-10 top-6  xl:translate-x-0 z-[9999999999999999] ml-auto block xl:hidden'>
                            <button onClick={xmenu} className={`${xbutton} w-full`}>
                                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20" height="20" viewBox="0 0 460.775 460.775"><path d="M285.08 230.397 456.218 59.27c6.076-6.077 6.076-15.911 0-21.986L423.511 4.565a15.55 15.55 0 0 0-21.985 0l-171.138 171.14L59.25 4.565a15.551 15.551 0 0 0-21.985 0L4.558 37.284c-6.077 6.075-6.077 15.909 0 21.986l171.138 171.128L4.575 401.505c-6.074 6.077-6.074 15.911 0 21.986l32.709 32.719a15.555 15.555 0 0 0 21.986 0l171.117-171.12 171.118 171.12a15.551 15.551 0 0 0 21.985 0l32.709-32.719c6.074-6.075 6.074-15.909 0-21.986L285.08 230.397z"/></svg>
                            </button>
                        </div>
                        <li className='hover:text-[#000] mt-10 xl:mt-[0] text-[#2f2f2fb8] transition-colors'><a href="">Bizning Mahsulotlar</a></li>
                        <li className='hover:text-[#000] text-[#2f2f2fb8] transition-colors my-5 xl:my-0'><a href="">Omma Bob Mahsulotlar</a></li>
                        <li className='hover:text-[#000] text-[#2f2f2fb8] transition-colors my-5 xl:my-0'><a href="">Bizning Afzalliklarimiz</a></li>
                        <li className='hover:text-[#000] text-[#2f2f2fb8] transition-colors my-5 xl:my-0'><a href="">Suratlar</a></li>
                        <li className='hover:text-[#000] text-[#2f2f2fb8] transition-colors my-5 xl:my-0'><a href="">Videolar</a></li>
                        <li className='hover:text-[#000] text-[#2f2f2fb8] transition-colors my-5 xl:my-0'><a href="">Biz Haqimizda</a></li>
                        <li className='hover:text-[#000] text-[#2f2f2fb8] transition-colors'><a href="">Biz Bilan Bog'laning</a></li>
                        </ul>
                </div>
            </nav>

            <div className='py-5'>
                <div className='container'>
                    <div className='flex items-center justify-center flex-wrap'>
                        <div className='flex justify-center flex-wrap items-center gap-4'>
                            <div className='w-[5rem] logo'>
                                <img className='w-full' src={logo} alt="logo" />
                            </div>
                            <div>
                                <h1 className='text-[25px] font-[600]'>"BAHODIR SHOHRUKBEK"</h1>
                                <p className='ml-[12px] font-[600]'>Dehqonchilik</p>
                            </div>
                        </div>
                        <div className='flex justify-center flex-wrap items-center gap-4'>
                            <div className='bg-[#f5f5f5] flex items-center justify-center w-[3.5rem] h-[3.5rem] p-5 rounded-[50%]'>
                                <i class="fa-solid fa-phone-volume scale-[1.4] text-[]"></i>
                            </div>
                            <p className='text-[25px] font-[600]'>
                                +998-91-9640274
                            </p>
                            <button className='bg-[#84cc16] text-white py-3 px-7 rounded-[10px]'>
                                Qo'ng'iroq qilmoq
                            </button>
                            <div className='languages flex gap-4 font-[600] text-[18px]'>
                                <button>ru</button>
                                <button>uz</button>
                                <button>eng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
