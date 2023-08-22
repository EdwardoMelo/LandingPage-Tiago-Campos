import Image from 'next/image'
import { Header, Main, Navbar } from './components'

export default function Home() {
  return (
    <div className='flex w-full flex-wrap h-screen '>
      <nav id='navbar' className='header_navbar fixed top-0 z-10 flex justify-center items-center bg-red min-h-[60px] w-full'>
                     <Navbar />
                 </nav>

            <header className='header flex flex-col justify-center min-h-[970px] w-full mt-14 drop-shadow-lg'>
    
                <Header />
             
            </header>

            <main className="header flex flex-col justify-center gap-2 min-h-[1220px] w-full bg-[#d1d1d1]">

              <Main />
              MAIN
            </main>
            

            <footer className='bg-slate-400 w-full'>
            Footer
            </footer>
    </div>
   
  )
}
