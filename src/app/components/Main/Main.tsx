
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
                                <div className='flex service-card min-h-[270px] items-left justify-between flex-col shadow-xl  gap-4 text-sm w-[90%] lg:w-[380px] p-4 rounded-sm' key={index}>
                                      <h1 className='text-2xl text-left text-white font-bold drop-shadow-sm'>{item.title}
                                      </h1>

                                      <div className='flex flex-wrap gap-1 bg-secondary-black rounded-sm p-2 drop-shadow-md'>
                                            {item.content.map((item, index) => (
                                                  <p className="text-[12px] text-white " key={index}>- {item}</p>
                                            ))}
                                      </div>

                                </div>
                          ))}
                    </div>

      </section>

      <section className='results lg:min-h-[680px] w-full flex justify-center items-center flex-row gap-1'>

                    <div className='results-content lg:h-[85%] w-full  flex flex-col justify-center items-center '>
                          <div className='h-1/3 lg:w-1/2'>
                                <h1 className='text-white text-7xl text-left font-normal tracking-tight leading-snug'>
                                      <span className='overline'>NOSS</span>OS RESULTADOS</h1>
                          </div>
                          <div className='results-container lg:h-1/3 lg:w-[80%] rounded-sm flex items-center px-6'>
                                <AiOutlineDoubleLeft style={{ fontSize: '48px', color: 'white' }} />
                                {results.map((item, index) => (
                                      <div key={index} className='lg:w-1/4 text-white drop-shadow-sm flex flex-col items-center gap-2'>
                                            <h1>{item.title}</h1>
                                            {< item.icon style={{ fontSize: '36px' }} />}
                                      </div>
                                ))}

                          </div>

                    </div>
      </section>
      </>
    )
}

export default Main