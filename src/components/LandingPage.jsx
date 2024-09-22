import React, { useState } from 'react'
import Header from './Header'
import NewsSection from './NewsSection.jsx'
import MainContent from './MainContent.jsx'
import Footer from './Footer'

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <NewsSection />
            </div>
            <MainContent activeSection={activeSection} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}