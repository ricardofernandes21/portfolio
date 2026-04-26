import React from 'react'

export default function TimelineItem({ 
  year, 
  endDate, 
  title, 
  company, 
  description, 
  tags 
}) {
  return (
    <div className="group relative py-12 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-outline-variant/15 hover:bg-surface-container-low transition-colors duration-500 px-4 -mx-4 rounded-lg">
      <div className="md:col-span-2">
        <span className="font-headline text-lg font-bold text-primary block">
          {year}
        </span>
        <span className="font-label text-xs text-on-surface-variant uppercase tracking-widest">
          {endDate}
        </span>
      </div>
      <div className="md:col-span-6 relative z-10">
        <h3 className="font-headline text-2xl font-bold mb-2">{title}</h3>
        {company && (
          <p className="font-label text-sm text-secondary mb-4">{company}</p>
        )}
        <p className="text-on-surface-variant leading-relaxed">{description}</p>
      </div>
      <div className="md:col-span-4 flex items-center md:justify-end gap-3 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-label text-xs text-primary border border-primary/30 px-3 py-1 rounded uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
