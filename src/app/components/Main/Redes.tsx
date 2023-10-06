import React from 'react'
import Image from 'next/image';
import { BsInstagram, BsFacebook, BsTiktok, BsLinkedin } from 'react-icons/bs';
import GatilhoMental from '../../assets/gatilho-mental.png';
import { AiFillPlayCircle } from 'react-icons/ai';
import './css/redes.css'


const Redes = () => {


  const handleClick = (e: any) => {
       window.open("https://www.instagram.com/p/CtrQmBZOYTf/?img_index=1", '_blank')
  };


  return (
      <section id="REDES" className='redes min-h-[1300px] w-full flex gap-8 justify-evenly flex-col lg:justify-center items-center '>
          <div className='lg:w-[80%] lg:h-[40%] p-6 flex flex-col gap-4 justify-around items-center  '>
              <div className='lg:w-[70%]  min-h-[180px]  flex flex-col items-center '>
                  <div className=' flex flex-col items-center justify-center gap-4 w-4/5 h-1/2 p-4'>
                      <h1 className='text-5xl text-white uppercase text-center'>Minhas Redes</h1>
                  </div>
              </div>

              <div className='lg:w-[80%] h-full flex flex-col gap-8 lg:flex-wrap lg:flex-row lg:justify-center'>
                 <a href="https://www.instagram.com/seumarketing_tiago/" target='blank'>
                    <BsInstagram  className="text-8xl text-slate-200 hover:text-red cursor-pointer"/>
                </a> 
                 <a href="https://www.facebook.com/SeuMarketing.comTiago/" target='blank'>
                    <BsFacebook  className="text-8xl text-slate-200 hover:text-red cursor-pointer"/>
                 </a> 
                 <a href="https://www.tiktok.com/@tiagocamposmkt" target='blank'>
                    <BsTiktok  className="text-8xl text-slate-200 hover:text-red cursor-pointer"/>
                </a> 
                 <a href="https://www.linkedin.com/in/tiago-campos-2a67a3150/" target='blank'> 
                 <BsLinkedin className="text-8xl text-slate-200 hover:text-red cursor-pointer"/>
                 </a>
              </div>
          </div>
          
          <div className='lg:w-[80%] p-2 lg:h-1/2 flex flex-col gap-4 justify-around'>
              <h1 className='text-3xl lg:text-5xl text-center text-white font-semibold'>Entregando conteúdo de valor </h1>
              <div className='lg:w-full p-4  h-[900px] lg:h-1/2 flex flex-col items-center lg:flex-row gap-4'>
                  <div 
                  className='w-full h-1/3 lg:w-1/3 lg:h-full  bg-sky-100 
                  hover:shadow-cyan-400/40 shadow-lg transition-all cursor-pointer rounded-lg'>
                    <a href="https://www.instagram.com/p/Cu7GZdUOvIJ/" target='blank'>
                        <Image alt='mental-trigger' src={GatilhoMental} className='object-cover h-[100%] rounded-lg'/>
                    </a>
                  </div>
                  <div 
                  className='amazon w-full h-1/3 lg:w-1/3 lg:h-full 
                  flex justify-center items-center  
                  bg-[#f3fadc]
                  hover:shadow-cyan-500/50 shadow-lg transition-all cursor-pointer  rounded-lg'>
                        <a href="https://www.instagram.com/p/CvFZEbWgaqH/" target='blank'>
                            <AiFillPlayCircle className="text-gray-dark text-8xl hover:text-gray" />
                        </a>
                  </div>
                  <div 
                  className='w-full lg:w-1/3 h-1/3 lg:h-full 
                  cac bg-sky-100
                  hover:shadow-cyan-400/40 shadow-lg transition-all cursor-pointer  rounded-lg'
                  onClick={handleClick}>
                  
                  </div>
              </div>

          </div>

      </section>
   
  )
}

export default Redes