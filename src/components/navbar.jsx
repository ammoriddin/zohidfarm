import React, { useState, useRef } from 'react'
import logo from '../assets/logo.svg'
import { useTranslation } from "react-i18next"
import { Link } from 'react-scroll'

export default function Navbar() {
    const [t, i18n] = useTranslation("global")

    function handleChangeLanguage(lng) {
        i18n.changeLanguage(lng)
    }

    const [burgerbutton, setBurger] = useState('block')
    const [xbutton, setX] = useState('hidden')
    const navref = useRef('')

    function burgermenu() {
        setBurger('hidden')
        setX('block')
        navref.current.classList.add('right-[0]')
    }
    
    function xmenu() {
        setBurger('block')
        setX('hidden')
        navref.current.classList.add('right-[-40rem]')
        navref.current.classList.remove('right-[0]')
    }

    return (
        <>
            <nav className='w-full bg-[#f5f5f5]'>
                <div className='container py-5 relative'>
                    <div className={`bottom-0 left-0 fixed bg-black w-full h-[100vh] z-20 opacity-[0.6] ${xbutton}`}></div>
                    <button onClick={burgermenu} className={`${burgerbutton} ml-auto block xl:hidden`}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 18h16M4 12h16M4 6h16" stroke="#000" strokeWidth="2" strokeLinecap="round"/></svg>
                    </button>
                    <ul ref={navref} className={`gap-5 justify-between right-[-40rem] fixed z-[999000] bottom-0 h-[100vh] xl:right-0 transition-all xl:h-[100%] xl:relative p-6 xl:p-0 text-[18px] font-[600] bg-[#fff]  xl:bg-transparent w-[70%] flex-col md:w-[50%] xl:w-[100%] xl:flex`}>
                        <div className='w-[10px] relative right-10 top-6  xl:translate-x-0 z-[9999999999999999] ml-auto block xl:hidden'>
                            <button onClick={xmenu} className={`${xbutton} w-full`}>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="20" height="20" viewBox="0 0 460.775 460.775"><path d="M285.08 230.397 456.218 59.27c6.076-6.077 6.076-15.911 0-21.986L423.511 4.565a15.55 15.55 0 0 0-21.985 0l-171.138 171.14L59.25 4.565a15.551 15.551 0 0 0-21.985 0L4.558 37.284c-6.077 6.075-6.077 15.909 0 21.986l171.138 171.128L4.575 401.505c-6.074 6.077-6.074 15.911 0 21.986l32.709 32.719a15.555 15.555 0 0 0 21.986 0l171.117-171.12 171.118 171.12a15.551 15.551 0 0 0 21.985 0l32.709-32.719c6.074-6.075 6.074-15.909 0-21.986L285.08 230.397z"/></svg>
                            </button>
                        </div>
                        <div className='flex justify-between  flex-col xl:flex-row'>
                            <Link onClick={() => {xmenu()}} to="popular-products" spy={true} smooth={true} offset={50} duration={500} className='hover:text-[#000] text-[#2f2f2fb8] transition-colors my-5 xl:my-0'><a href="">{t('navbar.popularproducts')}</a></Link>
                            <Link onClick={() => {xmenu()}} to="our-products" spy={true} smooth={true} offset={50} duration={500} className='hover:text-[#000] mt-10 xl:mt-[0] text-[#2f2f2fb8] transition-colors'><a href="">{t('navbar.ourproducts')}</a></Link>
                            <Link onClick={() => {xmenu()}} to="our-advantages" spy={true} smooth={true} offset={50} duration={500} className='hover:text-[#000] text-[#2f2f2fb8] transition-colors my-5 xl:my-0'><a href="">{t('navbar.ouradvantages')}</a></Link>
                            <Link onClick={() => {xmenu()}} to="photos" spy={true} smooth={true} offset={50} duration={500} className='hover:text-[#000] text-[#2f2f2fb8] transition-colors my-5 xl:my-0'><a href="">{t('navbar.photos')}</a></Link>
                            <Link onClick={() => {xmenu()}} to="videos" spy={true} smooth={true} offset={50} duration={500} className='hover:text-[#000] text-[#2f2f2fb8] transition-colors my-5 xl:my-0'><a href="">{t('navbar.videos')}</a></Link>
                            <Link onClick={() => {xmenu()}} to="about-we" spy={true} smooth={true} offset={50} duration={500} className='hover:text-[#000] text-[#2f2f2fb8] transition-colors my-5 xl:my-0'><a href="">{t('navbar.aboutwe')}</a></Link>
                            <Link onClick={() => {xmenu()}} to="contact" spy={true} smooth={true} offset={50} duration={500} className='hover:text-[#000] text-[#2f2f2fb8] transition-colors'><a href="">{t('contact')}</a></Link>
                        </div>
                    </ul>
                </div>  
            </nav>

            <div className='py-5'>
                <div className='container'>
                    <div className='flex items-center justify-between flex-wrap'>
                        <div className='flex justify-center flex-wrap items-center gap-4 text-center'>
                            <div className='w-[10rem] logo'>
                                <img className='w-full' src={logo} alt="logo" />
                            </div>
                            <div>
                                <h1 className='text-[25px] font-[600]'>"ZOHIDFARM"</h1>
                                <p className='ml-[12px] font-[600]'>{t('bottomnavbar.farming')}</p>
                            </div>
                        </div>
                        <div className='flex justify-center flex-wrap items-center gap-4'>
                            <div className='bg-[#f5f5f5] flex items-center justify-center w-[3.5rem] h-[3.5rem] p-5 rounded-[50%]'>
                                <i className="fa-solid fa-phone-volume scale-[1.4] text-[]"></i>
                            </div>
                            <a href='tel:+998-97-314-99-23' className='text-[25px] font-[600]'>
                                +998-97-314-99-23
                            </a>
                            <button className='bg-[#84cc16] text-white py-3 px-7 rounded-[10px]'>
                                {t("bottomnavbar.call")}
                            </button>
                            <div className='languages flex gap-4 font-[600] text-[18px]'>
                                <button onClick={() => {handleChangeLanguage('uz')}}>uz</button>
                                <button onClick={() => {handleChangeLanguage('ru')}}>ru</button>
                                <button onClick={() => {handleChangeLanguage('en')}}>en</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
