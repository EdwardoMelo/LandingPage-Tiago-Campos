
"use client"
import { isValidElement } from 'react';
import About from './About';
import Services from './Services';
import Results from './Results';
import Redes from './Redes';
import Image from 'next/image';
import './css/results.css';
import './css/services.css';  
import './css/redes.css';


const Main = () => {
  return (
    <>
              <About />
              <Services />
              <Results />
              <Redes />
      </>
    )
}

export default Main