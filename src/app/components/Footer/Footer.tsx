import React from 'react'
import { AiFillInstagram, AiFillLinkedin, AiFillFacebook,  } from 'react-icons/ai'
import { BsTiktok } from 'react-icons/bs'
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import Logo from '../../assets/logo.png'
import Image from 'next/image'


const Footer = () => {
  return (
    <>
    <div className='w-[90%] h-[80%]  flex flex-col justify-center lg:flex-row p-2'>
    <div className='w-full lg:w-1/2 h-[90%] flex justify-center items-start lg:border-r lg:border-rose-100  
    '>
        <div className='w-full lg:w-4/5 h-full  flex flex-col items-start gap-4 '>
   
                          <Image src={Logo} alt='logo' className=''/>
           
              <span className='text-xl'></span>
              <ul className='text-black gap-8  w-full  flex flex-col'>
                <li className='text-white flex gap-4 p-2 rounded-md text-xl'><AiOutlinePhone />51 98448-0821</li>
                <li className='text-white flex gap-4 p-2 rounded-md text-xl'><AiOutlineMail />tiagocampos.pro@gmail.com</li>
                <li></li>
              </ul>
              
        </div>
       
    </div>
   

    <div className='flex lg:items-centerjustify-start items-start w-full lg:w-1/2 h-[90%] p-4 '>
          <ul className='space-y-6 rounded-lg  p-2 w-full h-[90%] flex flex-col lg:items-center justify-around text-white'>
            <li  className='p-2  drop-shadow-sm md:w-1/2'>
              <a href="https://www.instagram.com/seumarketing_tiago/" target='blank' className='hover:text-red flex flex-row gap-2'>
                <AiFillInstagram className="text-2xl"/>@seumarketing_tiago
              </a>
            </li>

            <li className='p-2 drop-shadow-sm md:w-1/2'>
              <a href="https://www.facebook.com/SeuMarketing.comTiago/" target='blank' className='hover:text-red flex flex-row gap-2'><AiFillFacebook className=" text-2xl "/>Seu MarkeT.I.ng
              </a>
            </li>

            <li className='p-2 drop-shadow-sm md:w-1/2'>
              <a href="https://www.linkedin.com/in/tiago-campos-2a67a3150/" target='blank' className='hover:text-red flex flex-row gap-2'><AiFillLinkedin className=" text-2xl"/>Tiago Campos
              </a>
            </li>

            <li className='p-2 drop-shadow-sm md:w-1/2'>
              <a href="https://www.tiktok.com/@tiagocamposmkt" target='blank' className='hover:text-red flex flex-row gap-2'><BsTiktok className="text-2xl" />tiagocamposmkt
              </a>
            </li>
          </ul>
    </div>   

</div>
<div className='w-[90%] p-2  flex flex-wrap  justify-between border-t-2 border-rose-100 text-white'>
    <h1>@2023 Tiago Campos, Todos os direitos reservados</h1>
    <ul className='flex gap-4 '>
      <li><a href="" className='underline'>Termos de serviço</a></li>
      <li><a href="" className='underline'>Politicas de privacidade</a></li>
    </ul>
</div>
    </>
   
  )
}

export default Footer