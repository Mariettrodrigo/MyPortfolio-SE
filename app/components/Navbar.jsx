import { assets } from '@/src/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const [isScroll, setIsScroll] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const sideMenuRef = useRef();

    const openMenu = ()=> {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = ()=> {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=> {
        const handleScroll = ()=> {
            if(window.scrollY > 50){
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
        {/* Background image for light mode */}
        <div className={`${isDarkMode ? 'hidden' : 'block'} fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]`}>
            <Image src={assets.header_bg_color} alt='' className='w-full'/>
        </div>

        {/* Navbar */}
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
            ${isScroll 
                ? isDarkMode 
                    ? "bg-darkTheme/95 shadow-sm shadow-white/20 backdrop-blur-sm"   // dark mode scrolled
                    : "bg-white/50 backdrop-blur-lg shadow-sm"       // light mode scrolled
                : isDarkMode 
                    ? "bg-darkTheme/100 shadow-white/20 backdrop-blur-sm"           // dark mode not scrolled
                    : "bg-white/75 bg-opacity-50"}                 
        `}>
            <a href='#top'>
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-35 cursor-pointer mr-14'/>
            </a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
                ${isScroll ? "" : isDarkMode ? "border border-white/50 bg-darkTheme/90" : "bg-white/75 shadow-sm bg-opacity-50"} 
            `}>
                <li><a className='font-Ovo' href='#top'>Home</a></li>
                <li><a className='font-Ovo' href='#about'>About me</a></li>
                <li><a className='font-Ovo' href='#projects'>Projects</a></li>
                <li><a className='font-Ovo' href='#volunteering'>Volunteering</a></li>
                <li><a className='font-Ovo' href='#achievements'>Achievements</a></li>
                <li><a className='font-Ovo' href='#contact'>Contact me</a></li>
                
            </ul>

            <div className='flex items-center gap-4'>
                <button
                    onClick={() => {
                        console.log('Toggle dark mode button clicked');
                        setIsDarkMode(prev => !prev);
                    }}
                >
                    <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' style={{ height: "auto" }} />
                </button>

                {/*<a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
                    Contact 
                    <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-3'/>
                </a>*/}

                <ul className='items-center justify-center sm:mt-0 lg:flex hidden gap-5 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>
            <li><a target='_blank' href='https://github.com/Mariettrodrigo'> 
            <Image src={isDarkMode ? assets.github_dark : assets.github2} alt='' className='w-6'/></a></li>
            <li><a target='_blank' href='https://linkedin.com/in/mariyeta-rodrigo-38a49b299'>
            <Image src={isDarkMode ? assets.linkedin_dark : assets.linkedin2} alt='' className='w-6'/></a></li>
            {/*<li><a target='_blank' href=''>Github</a></li>*/}
            </ul>

                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
                </button>
            </div>

            {/* Mobile menu */}
            <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition-transform duration-500 dark:bg-darkHover dark:text-white
                ${isDarkMode ? "bg-darkHover text-white" : "bg-purple-100 text-black"}`}
            >
                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-3 cursor-pointer'/>
                </div>

                <li><a className='font-Ovo' onClick={closeMenu} href='#top'>Home</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href='#about'>About me</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href='#projects'>Projects</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href='#vplunteering'>Volunteering</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href='#achievements'>Achievements</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href='#contact'>Contact me</a></li>
                
            </ul>
        </nav>
        </>
    )
}

export default Navbar
