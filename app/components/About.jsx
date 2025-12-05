import { assets, infoList, toolsData } from '@/src/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y:0}}
      transition={{duration: 0.5, delay:0.5}}
      className='text-center text-5xl font-ovo mb-20'>About me</motion.h2>

      {/* Main Layout: Image Left, Content Right */}
      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.8}}
      className='flex flex-col lg:flex-row items-start gap-10'>
        
        {/* Profile Image - Left Side */}
        <motion.div 
        initial={{opacity: 0, scale:0.9}}
        whileInView={{opacity: 1, scale:1}}
        transition={{duration: 0.6}}
        className='w-64 sm:w-80 rounded-3xl flex-shrink-0'>
            <Image src={assets.user_image} alt='user' width={300} height={300} className='w-full rounded-3xl'/>
        </motion.div>

        {/* Right Side Content: Paragraph, Cards, Tools */}
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay:0.8}}
        className='flex-1'>
            {/* About Paragraph */}
            <p className='font-ovo mb-10'>
               I'm a versatile developer with hands-on experience in front-end development, software development, and UI/UX design. I work with technologies such as ReactJS, Next.js, JavaScript, HTML, CSS, TailwindCSS, and I enjoy building clean, responsive, and user-focused interfaces. I've contributed to several projects where I collaborated in developing functional features, improving usability, and ensuring smooth workflows across the development process.
<br/><br/> I'm passionate about blending design and development to create meaningful digital experiences. I value continuous learning, clean code, and thoughtful UI/UX that enhances how users interact with technology. My goal is to grow as a developer while contributing to impactful, well-designed software solutions.</p>

            {/* Info Cards */}
            <motion.ul 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay:1}}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10'>
                {infoList.map(({icon, iconDark, title, description}, index)=>(
                    
                    <motion.li 
                    whileHover={{scale:1.05}}
                    className={`border-[0.5px] rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 ${isDarkMode ? "border-white hover:shadow-white" : "border-gray-400 hover:shadow-black"}`} key={index}>
                        <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                        <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                        <div className={`text-gray-600 text-sm ${isDarkMode ? "text-white/70" : ""}`}>{description}</div>
                    </motion.li>
                ))}
            </motion.ul>

            {/* Tools Section */}
            <motion.h4 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 0.5, delay:1.3}}
            className={`my-6 text-gray-700 font-ovo ${isDarkMode ? "text-white" : ""}`}>Tools I use</motion.h4>

            <motion.ul 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay:1.5}}
            className='flex flex-wrap items-center gap-3 sm:gap-5'>
              {toolsData.map((tool, index)=>(
                
                <motion.li 
                whileHover={{scale:1.1}}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                key={index}>
                  <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                </motion.li>
              ))}
            </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
