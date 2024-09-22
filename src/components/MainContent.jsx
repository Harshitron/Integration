import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight, User, Building, Briefcase } from 'lucide-react'

const userTypes = [
  { id: 'student', label: 'Student', icon: User, url: 'https://student-pmsss.vercel.app/' },
  { id: 'sag', label: 'SAG Bureau', icon: Building, url: 'https://sag-bureau.vercel.app/' },
  { id: 'finance', label: 'Finance Bureau', icon: Briefcase, url: 'https://financebureau.vercel.app/' },
]

const faqs = [
  {
    question: "What is PMSSS?",
    answer: "PMSSS (Prime Minister's Special Scholarship Scheme) is an initiative to provide opportunities for higher education to students from Jammu & Kashmir and Ladakh."
  },
  {
    question: "Who is eligible for PMSSS?",
    answer: "Students who have completed 12th standard or equivalent from J&K and Ladakh, and whose family income is below a certain threshold are eligible. Please check the Eligibility section for detailed criteria."
  },
  {
    question: "How can I apply for PMSSS?",
    answer: "Applications are typically opened annually. Eligible students can apply online through the official PMSSS portal when the application window is open."
  },
]

export default function MainContent({ activeSection }) {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const renderContent = () => {
    switch (activeSection) {
      case 'eligibility':
        return (
          <section id="eligibility" className="mb-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
            <ul className="space-y-2 text-gray-600">
              {[
                "Must be a domicile of J&K or Ladakh",
                "Should have passed 12th standard or equivalent from J&K or Ladakh",
                "Family income should be below ₹8 lakh per annum",
                "Age should be below 30 years as of 31st July of the application year",
                "Should have secured minimum 60% marks in 12th standard"
              ].map((criterion, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
          </section>
        )
      case 'faqs':
        return (
          <section id="faqs" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full text-left p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                    <ChevronDown className={`h-5 w-5 text-gray-500 transform transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="p-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </section>
        )
      default:
        return (
          <>
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-md p-8 mb-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Welcome to Prime Minister's Special Scholarship Scheme</h2>
              <p className="text-xl mb-8">Empowering students from J&K and Ladakh with opportunities for higher education</p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
                {userTypes.map((type) => (
                  <Link
                    key={type.id}
                    to={type.url}
                    className="flex items-center justify-center px-4 py-3 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition duration-150 ease-in-out"
                  >
                    <type.icon className="h-5 w-5 mr-2" />
                    {type.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section id="about" className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About PMSSS</h2>
                <p className="text-gray-600 mb-4">
                  The Prime Minister's Special Scholarship Scheme (PMSSS) is an initiative to provide opportunities for higher education to students from Jammu & Kashmir and Ladakh. This scheme aims to build the capacities of the youth in these regions by providing access to quality education.
                </p>
              </section>
              <section id="contact" className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-2">
                  For any queries regarding the PMSSS, please contact:
                </p>
                <p className="text-gray-800 font-medium">
                  Email: pmsss@example.com<br />
                  Phone: +91 1234567890
                </p>
              </section>
            </div>
          </>
        )
    }
  }

  return (
    <div className="lg:w-2/3">
      {renderContent()}
    </div>
  )
}