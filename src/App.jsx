import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AboutMe from './components/AboutMe/AboutMe'
import { PlayParticles } from './components/PlayParticles/PlayParticles';
import Quicklink from './components/Quicklink/Quicklink'
import Modal from "./components/Modal/Modal"

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <PlayParticles />
      <div className='flex w-full justify-center sticky top-4 z-10'>
        <Header />
      </div>
      <Hero id="Hero" />
      <button
        onClick={() => setIsOpen(true)}
        className='font-lato font-bold border-0 py-2 px-16 justify-center bg-gradient-to-r from-[#FE8DC6] to-[#ff7db7e1]'>
        BOOM
      </button>
      <AboutMe id="About" openModal={openModal} closeModal={closeModal} />
      <Modal isOpen={isOpen} closeModal={closeModal} cssClass="tablet:min-w-[45rem] h-[90vh]" >
        <iframe title="PDF Viewer" src="/portfolio/static/docs/resume.pdf" width="100%" height="100%" />
      </Modal>
      <Quicklink />
      <Footer />
    </>
  )
}

export default App
