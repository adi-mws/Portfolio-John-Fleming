import { useState } from 'react'
import './App.css'
import './Media.css'
import Navbar from './components/Navbar';
import LandingSection from './components/LandingSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
// import Contact from './components/Contact';
import ServiceSection from './components/ServiceSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
function App() {

  return (
    <>
      <Navbar />
      <LandingSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ServiceSection />
      <ReviewsSection />
      <ContactSection />

      
      {/* <Contact /> */}
    </>
  )
}

export default App
