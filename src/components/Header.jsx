import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'; 
export default function Header({ activeSection, setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSectionClick = (section) => {
    setActiveSection(section)
    setIsMenuOpen(false)
  }

  const navItems = ['home', 'eligibility', 'faqs']

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="PMSSS Logo" className="h-10 w-auto mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">PMSSS</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => handleSectionClick(section)}
                className={`text-gray-600 hover:text-gray-900 ${
                  activeSection === section ? 'font-semibold text-blue-600' : ''
                }`}
              >
                {section === 'faqs' ? 'FAQs' : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => handleSectionClick(section)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === section
                    ? 'text-white bg-blue-600'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                } w-full text-left`}
              >
                {section === 'faqs' ? 'FAQs' : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}