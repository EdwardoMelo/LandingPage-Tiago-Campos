"use client"
import { Link } from 'react-scroll'
import { AiOutlineMenu } from "react-icons/ai"
import { useDeprecatedAnimatedState } from 'framer-motion';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiX } from 'react-icons/hi'


const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const NavItems = ['HOME', 'SOBRE', 'SERVIÇOS', 'RESULTADOS', 'REDES'];
  

  return (
    <>
      <ul id='links' className='navbar_links  h-[90%] w-1/2 hidden md:flex justify-between font-semibold tracking-wide text-white '>
        { NavItems.map(( item, index ) => (
          <li key={index}>
            <Link spy={true} to={item} smooth={true} offset={0} duration={500} className="cursor-pointer">{item}</Link>
          </li>
          
        ))}
      </ul>
      
          <AiOutlineMenu className="text-2xl text-black md:hidden" onClick={() => setToggle(true)}/>
          { toggle && 
            <motion.div className='w-[80%] bg-red drop-shadow-lg shadow-lg rounded-bl-2xl h-[50vh] z-10 absolute top-0 right-0 p-6' 
            initial={{y:-300}}
            animate={{y: 0}}
            exit={{y: -300}}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            >
                <HiX style={{fontSize: '38px'} } clasName="text-black " onClick={() => setToggle(false)}/>
          <ul className='h-full w-full items-left flex flex-col justify-evenly'>
            {NavItems.map((item, index) => (
              <li key={index}>
                <Link spy={true} to={item} smooth={true} offset={0} duration={500} className="cursor-pointer text-white">{item}</Link>
              </li>
  
            ))}
          </ul>
            </motion.div>}
        
    </>
    
  )
}

export default Navbar