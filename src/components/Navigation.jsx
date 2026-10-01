import React from 'react'

export default function Navigation({ activeTab, onTabChange, theme, onToggleTheme }) {
  const tabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0_0_40px] shadow-primary/[0.06]">
      <div className="flex justify-between items-center px-8 h-20 max-w-7xl mx-auto font-['Space_Grotesk'] tracking-tight">
        <button
          onClick={() => onTabChange('home')}
          className="text-2xl font-bold tracking-tighter text-primary hover:opacity-90 transition-opacity"
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
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors"
        >
          <span className="material-symbols-outlined">
            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
      </div>
    </nav>
  )
}
