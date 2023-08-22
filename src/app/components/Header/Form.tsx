import React from 'react'

const Form = () => {
  return (
    <form className="w-full h-full mx-auto  rounded-xl px-8 py-6 flex flex-col gap-10" action="https://formsubmit.co/contato@lorenzatopneus.com.br" method="POST">
    <div className="mb-4 shadow-sm drop-shadow-md">
      
      <input type="text" id="nome" name="nome" className="bg-transparent border p-2 rounded-lg border-gray-light w-full text-white placeholder-white::placeholder focus:outline-none" placeholder='Nome' />
    </div>

    <div className="mb-4 shadow-sm drop-shadow-md">
      
      <input type="text" id="celphone" name="celphone" className="bg-transparent border p-2 rounded-lg border-gray-light  placeholder-white::placeholder  focus:outline-none w-full" placeholder='Contato' />
    </div>
  
    <div className="mb-4 shadow-sm drop-shadow-md">
      <input   type="email" id="email" name="email" className="bg-transparent border p-2 rounded-lg border-gray-light placeholder-white::placeholder focus:outline-none w-full" placeholder='Email' />
    </div>
    <div className="mb-4 shadow-sm drop-shadow-md">

      <textarea id="mensagem" name="mensagem" className="bg-transparent border p-2 rounded-lg border-gray-light placeholder-white::placeholder focus:outline-none w-full" placeholder='Mensagem...' />
    </div>
    <div className="flex justify-center drop-shadow-md">
      <button type="submit" className="form-button drop-shadow-md hover:bg-red-700 w-full text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:text-black transition-all ease-in duration-400">Enviar mensagem</button>
    </div>
    <input type="hidden" name="_next" value="https://lorenzatopneus.com.br/" />
  </form>

  )
}

export default Form