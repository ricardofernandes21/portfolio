import React from 'react'

export default function Navigation({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0_0_40px_rgba(129,236,255,0.06)]">
      <div className="flex justify-between items-center px-8 h-20 max-w-7xl mx-auto font-['Space_Grotesk'] tracking-tight">
        <button
          onClick={() => onTabChange('home')}
          className="text-2xl font-bold tracking-tighter text-[#81ecff] hover:opacity-90 transition-opacity"
        >
          RICARDO_FERNANDES
        </button>
        <div className="hidden md:flex items-center gap-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`font-medium transition-colors duration-300 ${
                activeTab === tab.id
                  ? 'text-[#81ecff] border-b-2 border-[#81ecff] pb-1'
                  : 'text-gray-400 hover:text-[#81ecff]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

      </div>
    </nav>
  )
}
