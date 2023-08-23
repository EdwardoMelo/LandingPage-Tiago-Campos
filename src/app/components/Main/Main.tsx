
"use client"
import { isValidElement } from 'react';
import { Services } from '../../assets';
import Image from 'next/image';
import Eagle from '../assets/eagle.png'
import {  AiOutlineDoubleRight, AiOutlineDoubleLeft, AiFillLike } from 'react-icons/ai'
import results from './constants';
import './css/results.css'
import './css/services.css'
const Main = () => {
  return (
    <>

       <section className='services flex flex-col items-center lg:justify-center lg:flex-row gap-2  lg:p-4 min-h-[920px] '>
                    <div className='main_services-container flex flex-col gap-2 lg:flex-row flex-wrap justify-between items-center h-[80%] w-full lg:w-[85%] '>
                          {Services.map((item, index) => (
                                <div className='flex service-card h-[290px] items-center justify-between flex-col shadow-xl  gap-4 text-sm w-[90%] lg:w-[380px] bg-white p-4 rounded-sm' key={index}>
                                      <h1 className='text-2xl text-center text-red font-bold drop-shadow-sm'>{item.title}
                                      </h1>
                                       <Image src={item.image} height={100} width={100}/>   
                                      <div className='flex flex-wrap gap-1 rounded-sm p-2 drop-shadow-md'>
                                            {item.content.map((item, index) => (
                                                  <p className="text-[12px] font-semibold text-black" key={index}>- {item}</p>
                                            ))}
                                      </div>

                                </div>
                          ))}
                    </div>

       </section>
            <section className='results lg:min-h-[680px] w-full flex justify-center items-center flex-row gap-1'>

                    <div className='lg:h-[85%] z-10 w-3/4  flex flex-col justify-center items-center'>
                          <div className='lg:h-[80%] w-[85%] flex flex-col items-left lg:self-end justify-around  gap-4'>
                                <div className='h-1/3 lg:w-1/2 '>
                                      <h1 className='ml-11 text-white drop-shadow-lg text-7xl text-left font-bold tracking-tight leading-snug'>
                                            <span className='overline decoration-slate-200'>NOSS</span>OS RESULTADOS</h1>
                                </div>
                                <div className='lg:h-1/2 w-full rounded-sm flex items-center gap-2 '>
                                      <AiOutlineDoubleLeft style={{ fontSize: '48px', color: 'white' }} />
                                      {results.map((item, index) => (
                                            <div key={index} className='result-card lg:w-1/3 h-3/5 text-white drop-shadow-lg p-2 bg-gray flex flex-col items-center justify-around'>
                                                  <h1 className='drop-shadow-md text-xl'>{item.title}</h1>
                                                  {< item.icon style={{ fontSize: '36px' }} />}
                                            </div>
                                      ))}
                                      < AiOutlineDoubleRight style={{ fontSize: '48px', color: 'white' }} />
                                </div>
                          </div>

                    </div>
                    <div className='lg:w-1/3 hidden h-[85%] '>

                    </div>
              </section>
      </>
    )
}

export default Main