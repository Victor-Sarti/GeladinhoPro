import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'
import Estoque from './components/Estoque/Estoque'
import { Registro } from './components/Registros/Registro'
import Relatorio from './components/Relatorio/Relatorio'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
   <> 
   <Navbar/>
   <Hero/>  
   <Section/>
   <Estoque/>
   <Registro/>
   <Relatorio/>
   <Footer/>
   </>
  )
}
