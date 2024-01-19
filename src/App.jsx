import { useState } from 'react'
import Modal from './components/Modal/Modal'
import './App.css'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AboutMe from './components/AboutMe/AboutMe'
import { PlayParticles } from './components/PlayParticles/PlayParticles';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <PlayParticles />
      <div className='flex w-full justify-center sticky top-4 z-10'>
        <Header />
      </div>
      <Hero id="Hero" />
      <button onClick={() => setIsOpen(true)} className='font-lato font-bold border-0 py-2 px-16 justify-center bg-gradient-to-r from-[#FE8DC6] to-[#ff7db7e1]'>
        BOOM
      </button>
      <AboutMe id="About" />
      <Modal isOpen={isOpen} closeModal={closeModal} />
      <Footer />
    </>
  )
}

export default App
