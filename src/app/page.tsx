'use client'
import Image from 'next/image'
import { Header, Main, Navbar, Footer } from './components'
import { AiFillInstagram, AiFillLinkedin, AiFillFacebook,  } from 'react-icons/ai'
import { BsTiktok } from 'react-icons/bs'
import Navlogo from './assets/navLogo.png'
// const sectionList = document.querySelectorAll('section');
// sectionList.forEach(section => section.style.scrollBehavior = 'smooth');

export default function Home() {

  return (
    <div className='flex w-full flex-wrap h-screen'>
      <nav id='navbar' className='header_navbar fixed top-0 z-10 flex justify-around items-center bg-red py-4 md:py-2 w-full'>
                      <Image src={Navlogo} alt='navlogo' className='invert h-[70px] w-[360px] hidden md:block '/>
                      <Navbar />
      </nav>

            <header className='header flex flex-col justify-center min-h-[970px] w-full mt-14 drop-shadow-lg'>
    
                <Header />
             
            </header>

            <main className="header flex flex-col justify-center  min-h-[1220px] w-full bg-[#d1d1d1]">

              <Main />
             
            </main>
            

            <footer className='footer w-full min-h-[580px] flex justify-center items-center flex-wrap pb-8'>
               <Footer />
            </footer>
    </div>
   
  )
}
