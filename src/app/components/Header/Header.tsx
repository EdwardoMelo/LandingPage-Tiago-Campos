
import Form from './Form'
import Image from 'next/image'
import Contato from '../../assets/contato.png'
import './Header.css'


const Header = () => {
  return (
    <div className='hero flex flex-col lg:flex-row items-center gap-2  h-full lg:p-2 top-10 '>

      <div className=' h-full w-full lg:w-1/2 flex justify-center lg:justify-end items-center  p-4 '>
        <div className='lg:h-3/4 w-full lg:w-[90%]  flex flex-col items-end justify-center gap-4 p-4 '>
          <div className='flex flex-col gap-3 '>
            <h1 className='hero-title uppercase  tracking-tight text-6xl w-[90%] font-normal text-white leading-[4rem] '>Conectando empresas aos seus<br /><span className='hero-span'>clientes ideais</span></h1>
            <p className='hero-content text-slate-200 lg:w-[90%] tracking-normal text-2xl text-justify  mb-8'>Marketing e vendas andam juntos, e nada mais importante do que encontrar os clientes ideias para alcançar resultados expressivos..</p>
            <button className='hero-button  rounded-sm px-4 py-3 w-[91%] tracking-normal font-semibold text-xl text-white text-center hover:bg-zinc-400 hover:text-black transition duration-700 uppercase drop-shadow-md border-2'>Entre em contato agora mesmo</button>
          </div>

        </div>
      </div>

      <div className='hero_title flex items-center justify-center w-full lg:w-1/2 h-full  p-4'>
        <div className='form lg:h-[60%] w-full lg:w-1/2  flex flex-col items-center justify-center gap-4 p-4 rounded-lg   drop-shadow-lg'>
          <Form />
        </div>


      </div>

    </div>
  )
}

export default Header