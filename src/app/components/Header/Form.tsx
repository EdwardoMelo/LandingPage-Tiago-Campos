'use client'
import React from 'react'
import { useState } from 'react'
const Form = () => {

 const [Name, setName] = useState('');
 const [Number, setNumber] = useState('');
 const [Email, setEmail] = useState('');
 const [Message, setMessage] = useState('');
 const [IsMissingField, setIsMissingField] = useState(false);

 const [IsformSubmited, setIsformSubmited] = useState(false)


  return (
    <>
    { IsformSubmited ? <h1 className='text-white text-2xl'>Obrigado Por entrar em contato, responderemos o mais rápido possível!</h1> : 
    <form className="w-full h-full mx-auto  rounded-xl px-8 py-6 flex flex-col gap-8"
     action="https://formsubmit.co/tiagocamposmkt@gmail.com"
     method="POST"
    >
    <div className="mb-4 shadow-sm drop-shadow-md">
      
      <input onChange={(e) => setName(e.target.value)}
      type="text" id="nome" name="nome" className="bg-transparent border p-2 rounded-lg border-gray-light w-full text-white placeholder-white focus:outline-none" placeholder='Nome' />
    </div>

    <div className="mb-4 shadow-sm drop-shadow-md">
      
      <input onChange={(e) => setNumber(e.target.value)}
      type="number" id="celphone" name="celphone" className="bg-transparent border p-2 rounded-lg text-white border-gray-light  placeholder-white  focus:outline-none w-full" placeholder='Contato' />
    </div>
  
    <div className="mb-4 shadow-sm drop-shadow-md">
      <input  onChange={(e) => setEmail(e.target.value)}
       type="email" id="email" name="email" className="bg-transparent border p-2 rounded-lg text-white border-gray-light placeholder-white focus:outline-none w-full" placeholder='Email' />
    </div>
    <div className="mb-4 shadow-sm drop-shadow-md">

      <textarea onChange={(e) => setMessage(e.target.value)}
      id="mensagem" name="mensagem" className="bg-transparent border p-2 rounded-lg text-white border-gray-light  placeholder-white focus:outline-none w-full" placeholder='Mensagem...' />
    </div>
     { IsMissingField && <span className='text-red bg-white drop-shadow-md rounded-md p-2'>Preencha Todos os Campos!</span>} 
    <div className="flex justify-center drop-shadow-md">
      <button type="submit" className="form-button drop-shadow-md hover:bg-red-700 w-full text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:text-black transition-all ease-in duration-400">Enviar mensagem</button>
    </div>
    
    <input type="hidden" name="_next" value="http://localhost:3000/" />
  </form> }
    
    </>
    

  )
}

export default Form