import { useState } from 'react'
import Modal from './components/Modal/Modal'
import './App.css'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AboutMe from './components/AboutMe/AboutMe'
import Particles from 'react-tsparticles';

function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>
      <div className='flex w-full justify-center sticky top-10 z-10'>
        <Header />
      </div>
      <Hero id="Hero" />
      <button onClick={() => setIsOpen(true)} className='font-lato font-bold border-0 py-2 px-16 justify-center bg-gradient-to-r from-[#FE8DC6] to-[#ff7db7e1]'>
        BOOM
        <Particles
          canvasClassName='flex'
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#ffffff',
              },
              links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </button>
      <AboutMe id="About" />
      <Modal isOpen={isOpen} closeModal={closeModal} />
      <Footer />
    </>
  )
}

export default App
