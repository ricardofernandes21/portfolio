import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] w-full py-12 px-8 border-t border-[#484847]/15">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
        <div className="font-['Manrope'] uppercase tracking-widest text-[10px] text-gray-500">
          © 2024 RICARDO FERNANDES. BUILT FOR PERFORMANCE.
        </div>
        <div className="flex gap-12 font-['Manrope'] uppercase tracking-widest text-[10px]">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#69f6b8] transition-all duration-300 hover:-translate-y-1"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#69f6b8] transition-all duration-300 hover:-translate-y-1"
          >
            LINKEDIN
          </a>
        </div>
      </div>
    </footer>
  )
}
