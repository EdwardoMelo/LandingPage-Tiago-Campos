import React from 'react'
import './css/about.css'
import Image from 'next/image';
import AboutImg from '../../assets/aboutimg.png'
import Smoke from '../../assets/greeSmoke.png';

const AboutContent = () => {
  return(
    <div className='w-full bg-red h-1/2 lg:w-1/2 lg:h-[100%]   md:hidden flex flex-col items-center lg:items-end '>
        <div className='p-4  lg:w-[90%] lg:h-4/5 flex flex-col items-center gap-6'>
          <div className=' flex p-4 flex-col items-center lg:justify-start gap-8 w-full lg:w-[90%] lg:px-6'>
            <span className='pub-span self-center bg-red text-white  
            lg:w-[40%] 
            text-left text-xl 
             tracking-normal p-4 
             lg:self-end 
             lg:translate-x-[-10px] 
             translate-x-[0rem]
             translate-y-[-5rem]
             rounded-xl'
             >
               Especialista em
              <br/> Marketing digital</span>
            <div>
              <p className='text-white'>Atuo na área de negócios ajudando empresas a alcançarem seus objetivos comerciais através de inteligência de mercado. Atuando com ferramentas e metodologias consolidadas no mundo dos negócios, tenho gerado grandes resultados aos clientes que contam com meus serviços.</p>
            </div>
            <button className='bg-black p-4 w-[90%] text-white rounded-lg lg:rounded-sm'>
              <a href="https://api.whatsapp.com/send?phone=555198448082&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20como%20alavancar%20meus%20neg%C3%B3cios!%20" target='blank'>
                FALE COMIGO
              </a>
            </button>
          </div>
        </div>
     </div>
  )
}

const About = () => {
  return (
    <section id="SOBRE" className='about h-[900px] bg-red lg:gap-0 md:gap-4 lg:h-screen w-screen flex flex-col justify-between items-center  lg:flex-row lg:justify-between lg:items-start '>

      <div className='about-content bg-red w-full h-1/2 lg:w-1/2 lg:h-full hidden md:flex flex-col items-center lg:items-end '>
      
        <div className='p-4 rounded-lg lg:w-[90%] lg:h-full flex flex-col md:items-center lg:items-start gap-6 '>

            <span className='d lg:w-1/2 md:text-4xl  font-bold text-[#06D59E]  p-4'>Olá 👋 eu sou </span>

            <h1 className='title  xl:text-8xl lg:text-6xl  md:text-5xl rounded-bl-lg lg:self-end  text-[#06D59E] text-left font-semibold tracking-normal drop-shadow-md px-4 p-4 '>
              Tiago Campos
            </h1>

            <span className='pub-span self-center text-black font-normal  lg:w-[40%] text-left md:text-lg  xl:text-xl  tracking-normal p-2 lg:self-end lg:translate-x-[-60px] translate-y-[-10px] text-white'>Especialista em<br/> Marketing digital</span>

            <div className='lg:text-[14px] xl:text-md w-full '>
              <p className='text-white'>Atuo na área de negócios ajudando empresas a alcançarem seus objetivos comerciais através de inteligência de mercado. Atuando com ferramentas e metodologias consolidadas no mundo dos negócios, tenho gerado grandes resultados aos clientes que contam com meus serviços.</p>
            </div>
            
            <button className='bg-black p-4 text-white rounded-lg self-center lg:rounded-sm'>
              <a href="https://api.whatsapp.com/send?phone=555198448082&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20como%20alavancar%20meus%20neg%C3%B3cios!%20" target='blank'>
                FALE COMIGO
              </a>
            </button>

          </div>
      </div>


        <div className='about-img self-end bg-red  w-[95%] h-[50%]  lg:w-1/2 lg:h-[100%] '>
              <h2 className='translate-y-[50px] text-[22px] font-semibold text-gray-dark md:hidden'>
                Olá!<br/> Eu Sou <br/><span className='text-black text-4xl'>
                  Tiago<br/> Campos</span></h2>
        </div>

        <AboutContent/>
        
       
    </section>
  )
}

export default About