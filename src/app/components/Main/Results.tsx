
import React from 'react';  
import results from './constants';
import Image from 'next/image';


const Results = () => {
  return (
    <section id="RESULTADOS" className='results lg:min-h-[980px] w-full flex justify-left items-center flex-row gap-1'>
    <div className='w-full h-full flex flex-col justify-around items-center '>
          <h1 className='results-title text-5xl  text-white tracking-tight text-center lg:text-7xl lg:text-left font-semibold m-4 py-6'>Nossos resultados</h1>    
          <div className='results-container  p-4  lg:w-[90%]'>
                { results.map((item, index) => (
                      <div key={index} className='result-card h-[550px]  '>
                            <div className='result-card-image h-1/2 w-full self-start'>
                                  <Image src={item.image} alt='result-card_image' className='result-card_image object-cover mix-blend-dark h-[300px]'/>
                            </div>

                            <div className='flex flex-col items-center gap-8 py-8'>
                                  <h1 className='result-card-title text-cyan-50 text-xl md:text-2xl text-center uppercase font-semibold'>{item.title}</h1>
                                  <p className='text-white'></p>
                                  {< item.icon style={{fontSize: '48px', color: 'white'}}/>}
                            </div>
                            
                      </div>
                ))
                }
                
          </div>     
    </div>           
    </section>
)
}

export default Results