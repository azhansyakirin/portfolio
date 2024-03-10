import React from 'react'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AboutMe from './components/AboutMe/AboutMe'
import { PlayParticles } from './components/PlayParticles/PlayParticles';
import Quicklink from './components/Quicklink/Quicklink'
import { Carousel } from './components/Carousel'
import { Card } from './components/Card'
import { TechStackArr, TimelineArr, ProjectArr } from './data';
import './App.css'

function App() {
  return (
    <>
      <PlayParticles />
      <div className='flex w-full justify-center sticky top-4 z-10'>
        <Header />
      </div>
      <section id='#'>
        <Hero />
      </section>
      <section id="About">
        <AboutMe />
      </section>
      <section id="Experiences">
        <h1 className="sectionTitle">My Experiences</h1>
        <div className="flex flex-row flex-wrap gap-4 justify-center p-8">
          {TimelineArr.map((x, idx) => (
            <Card item={x} index={idx} />
          ))}
        </div>
      </section>
      <section id="Projects">
        <h1 className="sectionTitle">My Projects</h1>
        <div className="flex flex-wrap gap-4 justify-center w-full p-8">
          {ProjectArr.map((x, idx) => (
            <Card item={x} index={idx} />
          ))}
        </div>
      </section>
      <section id='techstack' className='w-full'>
        <h1 className='sectionTitle'>Tech Stacks</h1>
        <div className='my-16'>
          <Carousel carouselData={TechStackArr} />
        </div>
      </section>
      <section id='Contact' className='w-full'>
        <h1 className='sectionTitle'>Contact Me</h1>
        <div className='p-8'>
          <p className='text-center text-xl'>Interested? Send me 'Hello' at <a href='mailto:azhansyakirin@gmail.com' className='hover:gradient-primary'>azhansyakirin@gmail.com</a></p>
        </div>
      </section>
      <Quicklink />
      <Footer />
    </>
  )
}

export default App
