import { assets } from '@/src/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = ({isDarkMode}) => {
  return (
    <div className='w-11/12 max-w-2xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div
      initial={{scale:0 }}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type:'spring', stiffness:100}}
      >
        <Image src={assets.profile_img} alt='' className='w-24 rounded-full' />
      </motion.div>
      <motion.h3 
      initial={{y: -20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration: 0.6, delay:0.3}}
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>Hi! I'm Mariyeta Rodrigo</motion.h3>
      <motion.h1 
      initial={{y: -30, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration: 0.8, delay:0.5}}
      className='text-3xl sm:text-6xl lg:text-[53px] font-ovo'>IT Project Management & Business Analysis Enthusiast</motion.h1>
      {/*<h2 className='text-3xl sm:text-4xl md:text-[30px] font-Ovo'>with Technical Background</h2>*/}
      
      <motion.p 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration: 0.6, delay:0.7}}
      className='max-w-2xl mx-auto font-ovo leading-tight'>
        A motivated and organized individual with a strong interest in project management, business analysis, and bridging technology with real-world needs.
      </motion.p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        
        <motion.a 
        initial={{y: 30, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration: 0.6, delay:1}}
        href='#contact'
        className={`px-6 py-2 border border-white rounded-full bg-black text-white flex items-center gap-2 ${isDarkMode ? "bg-transparent border-white text-white" : "bg-black text-white border-black"}`}
        >contact me <Image src={ assets.right_arrow_white} alt='' className='w-4' /></motion.a>
        
        <motion.a 
        initial={{y: 30, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration: 0.6, delay:1.2}}
        href='/my-resume.pdf' download="my-resume.pdf"
        className={`px-6 py-2 border rounded-full border-gray-500 flex items-center gap-2 ${isDarkMode ? "bg-white !text-black" : "border-gray-500 text-black"}`}>my resume 
        <Image src={assets.download_icon} alt='' className='w-4'
        />
        </motion.a>
      </div>
    </div>
  )
}

export default Header
