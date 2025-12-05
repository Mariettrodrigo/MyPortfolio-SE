import { assets } from '@/src/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'motion/react'

const Contact = ({isDarkMode}) => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c1cb7219-8cd0-493a-86fe-079d8fc77617");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='contact' className={`w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] ${isDarkMode ? "bg-none" : ""}`}>
      
      <motion.h4 
      initial={{y:-20, opacity: 0}}
      whileInView={{y:0, opacity: 1}}
      transition={{delay: 0.3, duration: 0.5}}
      className='text-center mb-2 text-lg font-ovo'>Connect with me</motion.h4>
      
      <motion.h2 
      initial={{y:-20, opacity: 0}}
      whileInView={{y:0, opacity: 1}}
      transition={{delay: 0.5, duration: 0.7}}
      className='text-center mb-10 text-5xl font-ovo'>Get in touch</motion.h2>

      <motion.h2 
      initial={{y:-20, opacity: 0}}
      whileInView={{y:0, opacity: 1}}
      transition={{delay: 0.6, duration: 0.5}}
      className='w-max flex items-center gap-2 mx-auto mb-1'>
        <Image src={isDarkMode ? assets.location_dark : assets.location_icon} alt='' className='w-6'/>Marawila, Sri Lanka</motion.h2>
      
      
      <motion.h2 
      initial={{y:-20, opacity: 0}}
      whileInView={{y:0, opacity: 1}}
      transition={{delay: 0.65, duration: 0.5}}
      className='w-max flex items-center gap-2 mx-auto mb-1'>
        <Image src={isDarkMode ? assets.phone_icon_dark : assets.phone_icon} alt='' className='w-6'/>+94 774554065</motion.h2>

       <motion.div 
       initial={{y:-20, opacity: 0}}
       whileInView={{y:0, opacity: 1}}
       transition={{delay: 0.7, duration: 0.5}}
       className='w-max flex items-center gap-2 mx-auto mb-2'>
                  <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
                  mariyetavishanthi11@gmail.com
        </motion.div>

      <motion.ul 
      initial={{y:-20, opacity: 0}}
      whileInView={{y:0, opacity: 1}}
      transition={{delay: 0.75, duration: 0.5}}
      className='flex items-center gap-10 justify-center sm:mt-0'>
            <li><a target='_blank' href='https://github.com/Mariettrodrigo'> 
            <Image src={isDarkMode ? assets.github_dark : assets.github_icon} alt='' className='w-6'/></a></li>
            <li><a target='_blank' href='https://linkedin.com/in/mariyeta-rodrigo-38a49b299'>
            <Image src={isDarkMode ? assets.linkedin_dark : assets.linkedin_icon} alt='' className='w-6'/></a></li>
            {/*<li><a target='_blank' href=''>Github</a></li>*/}
        </motion.ul>

      {/*<motion.p 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay:0.7, duration: 0.5}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>I'd love to hear from ypu! If you have an questions, comments, or feedback, please use the form below.</motion.p>

      <motion.form 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay:0.9, duration: 0.5}}
      onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
            
            <motion.input 
            initial={{x:-50, opacity: 0}}
            whileInView={{x:0, opacity: 1}}
            transition={{delay: 1.1, duration: 0.6}}
            type='text' placeholder='Enter your name' required
            className={`flex-1 p-3 outline-none border-[0.5px]  rounded-md ${isDarkMode ? "" : "bg-white border-gray-400"}`} name='name'/>

            <motion.input 
            initial={{x:50, opacity: 0}}
            whileInView={{x:0, opacity: 1}}
            transition={{delay: 1.2, duration: 0.6}}
            type='email' placeholder='Enter your email' required
            className={`flex-1 p-3 outline-none border-[0.5px]  rounded-md  ${isDarkMode ? "" : "bg-white border-gray-400"}`} name='email'/>
        </div>

        <motion.textarea 
        initial={{y:100, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{delay: 1.3, duration: 0.6}}
        rows='6' placeholder='Enter your message' required
        className={`w-full p-4 outline-none border-[0.5px]  rounded-md  mb-6 ${isDarkMode ? "" : "bg-white border-gray-400"}`} name='message'></motion.textarea>

        <motion.button 
        whileHover={{scale: 1.05}}
        transition={{duration:0.3}}
        type='submit' className={`py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto  duration-500 ${isDarkMode ? "bg-transparent border border-white text-white" : "bg-black/80 text-white border-black hover:bg-black"}`}>Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.button>

        <p className='mt-4'>{result}</p>
      </motion.form>*/}
    </motion.div>
  )
}

export default Contact
