import { assets, volunteeringData } from '@/src/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Volunteering = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='volunteering'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-ovo'
      >
        Volunteering
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'
      >
        Here are the volunteer activities I've contributed to. 
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 ${
          isDarkMode ? 'text-black' : ''
        }`}
      >
        {volunteeringData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className='aspect-square rounded-lg relative cursor-pointer group overflow-hidden'
          >
            {/* Use Next.js Image for background */}
            <Image
              src={project.bgImage}
              alt={project.title}
              fill
              className='object-cover rounded-lg'
              priority={index === 0} // optional: prioritize first project for LCP
            />

            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between transition-all duration-500 group-hover:bottom-7'>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
              </div>
             {/*} <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-gray-200 transition'>
                <Image src={assets.send_icon} alt='send icon' width={20} height={20} />
              </div>*/}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/*<motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href=''
        className={`w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 ${
          isDarkMode ? 'border-white hover:bg-darkHover' : ''
        }`}
      >
        Show more{' '}
        <Image
          src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold}
          alt='Right arrow'
          width={16}
          height={16}
        />
      </motion.a>*/}
    </motion.div>
  )
}

export default Volunteering