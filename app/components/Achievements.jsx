import { assets, infoList, toolsData } from '@/src/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

const Achievements = ({isDarkMode}) => {
  return (
    <motion.div id='achievements' className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      viewport={{ once: true, amount: 0.2 }}
    >
      
      <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.5, delay:0.5}}
        className='text-center text-5xl font-ovo'
      >
        Achievements
      </motion.h2>

      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
      >
        
        {/* Image Section */}
        <motion.div 
          initial={{opacity: 0, scale:0.9}}
          whileInView={{opacity: 1, scale:1}}
          transition={{duration: 0.6}}
          className='w-64 sm:w-80 rounded-3xl max-w-none'
        >
          <Image src={assets.Ach1} alt='user' width={300} height={300} className='w-full rounded-3xl'/>
        </motion.div>

        {/* Text Section */}
        <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay:0.8}}
          className='flex-1 text-center lg:text-left mt-4 lg:mt-0'>
            
          <h3 className={`mb-1 text-3xl font-ovo max-w-2xl  ${isDarkMode ? "text-white" : "text-gray-800"}`}>Finalist</h3>
          <p className={`text-lg max-w-2xl ${isDarkMode ? "text-white" : "text-gray-600"}`}>
            Hack Like a Girl 2.0 organized by SLASSCOM
          </p>
          <div className='flex justify-center lg:justify-start items-center mt-5'>
          <a href='https://url-shortener.me/6ITX' className='flex items-center gap-2 text-sm '>
            View on LinkedIn <Image alt='' src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className='w-2'/></a></div>
        </motion.div>

      </motion.div>
    </motion.div>
  )
}

export default Achievements