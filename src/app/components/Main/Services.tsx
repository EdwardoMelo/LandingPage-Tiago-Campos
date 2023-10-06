import React from 'react'
import { ServicesList } from '../../assets'
import Image from 'next/image'


const Services = () => {
  return (
    <section id='SERVIÇOS' className='services flex flex-col lg:items-center p-2 lg:justify-center  gap-8 py-4 lg:p-4 lg:min-h-[920px] bg-secondary-black'>
      <h1 className='text-5xl self-center text-white font-sembibold uppercase'>Serviços</h1>

      <div className='main_services-container flex flex-col gap-8 items-center  lg:flex-row lg:justify-center lg:flex-wrap w-full lg:w-[85%] '>
          {ServicesList.map((item, index) => (
                <div className='flex service-card h-[320px] items-center justify-between flex-col shadow-xl  gap-4 text-sm w-[90%] lg:w-[380px] bg-white p-4 rounded-lg lg:rounded-sm' key={index}>
                      <h1 className='text-2xl text-center text-red font-bold drop-shadow-sm'>{item.title}</h1>
                       <Image alt="card" src={item.image} height={100} width={100}/>   
                      <div className='flex flex-wrap gap-1 rounded-sm p-2 drop-shadow-md'>
                            {item.content.map((item, index) => (
                                  <p className="text-[12px] font-semibold text-black" key={index}>- {item}</p>
                            ))}
                      </div>

                </div>
          ))}
    </div>

</section>
  )
}

export default Services