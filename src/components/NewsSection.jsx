import React from 'react'
import { Link } from 'react-router-dom'
import { Bell } from 'lucide-react'

const newsItems = [
  {
    id: 1,
    title: "PMSSS Application Window for 2023-24 Now Open",
    date: "2023-06-01",
    isNew: true,
    isImportant: true,
  },
  {
    id: 2,
    title: "Increased Scholarship Amount for Engineering Students",
    date: "2023-05-15",
    isNew: true,
    isImportant: false,
  },
  {
    id: 3,
    title: "New Partner Institutions Added to PMSSS Network",
    date: "2023-05-01",
    isNew: false,
    isImportant: false,
  },
  {
    id: 4,
    title: "Important: Document Verification Process Updated",
    date: "2023-04-20",
    isNew: false,
    isImportant: true,
  },
]

export default function NewsSection() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-50 border-b border-blue-100 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Bell className="h-5 w-5 text-blue-600 mr-2" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-blue-900">Latest Updates</h2>
          </div>
          <Link
            to="/news"
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            View All
          </Link>
        </div>
      </div>
      <ul className="divide-y divide-gray-200">
        {newsItems.map((item) => (
          <li key={item.id} className="p-4 hover:bg-gray-50">
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
              <div className="flex space-x-2">
                {item.isNew && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    New
                  </span>
                )}
                {item.isImportant && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Important
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}