import React, { useState } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import ExperienceSection from './sections/ExperienceSection'
import ContactSection from './sections/ContactSection'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    // Smooth scroll to section
    const sectionId = tabId === 'home' ? '#' : `#${tabId}`
    if (tabId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div>
      <Navigation
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
