
import Form from './Form'
import Image from 'next/image'
import Contato from '../../assets/contato.png'
import './Header.css'




const Header = () => {
  return (
    <section id='HOME' className='hero flex flex-col items-center lg:flex-row  gap-2  h-full lg:p-2 top-10 '>

      <div className='h-full w-[90%] lg:w-1/2 flex justify-center lg:justify-end items-center  p-4 '>
        <div className='lg:h-3/4  w-full lg:w-[90%]  flex flex-col items-center justify-center lg:items-end  gap-4 '>
          <div className='flex flex-col gap-3 items-center lg:items-start'>
            <h1 className='hero-title uppercase  tracking-normal text-5xl lg:text-6xl w-[100%] font-normal text-white'>Conectando empresas aos seus<br /><span className='hero-span'>clientes ideais</span></h1>
            <p className='hero-content text-white lg:w-[90%] tracking-normal text-md lg:text-[22px] text-left  mb-8'>Marketing e vendas andam juntos, e nada mais importante do que encontrar os clientes ideais para alcançar resultados expressivos.</p>
            <a href='https://api.whatsapp.com/send?phone=555198448082&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20como%20alavancar%20meus%20neg%C3%B3cios!%20' target='blank' className='hero-button  rounded-sm px-4 py-3 w-[90%] tracking-normal font-semibold text-xl text-white text-center border-2 hover:bg-zinc-400 hover:text-black transition duration-700 uppercase drop-shadow-md '>Entre em contato agora mesmo</a>
          </div>

        </div>
      </div>

      <div className='hero_title flex items-center justify-center w-full lg:w-1/2 h-full  p-4'>
        <div className='form lg:h-[60%] w-[90%] lg:w-1/2  flex flex-col items-center justify-center gap-4 p-4 rounded-lg   drop-shadow-lg'>
          <Form />
        </div>


      </div>

    </section>
  )
}

export default Header