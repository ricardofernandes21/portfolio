import React from 'react'

export default function ProjectCard({ 
  image, 
  title, 
  description, 
  tags, 
  caseStudyLink, 
  colSpan = 'md:col-span-4',
  rowSpan = '',
  aspectRatio = 'aspect-square' 
}) {
  return (
    <article className={`${colSpan} ${rowSpan} bg-surface-container rounded-xl overflow-hidden group flex flex-col`}>
      <div className={`${aspectRatio} overflow-hidden`}>
        <img
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src={image}
        />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex gap-2 mb-4 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-surface-container-low text-secondary font-label text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full flex items-center"
            >
              <span className="w-1 h-1 bg-secondary rounded-full mr-1.5"></span>
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-headline text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="font-body text-on-surface-variant text-sm mb-6 flex-grow">
          {description}
        </p>
        {caseStudyLink && (
          <a
            href={caseStudyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-label text-[10px] font-bold tracking-widest uppercase text-primary-dim hover:text-primary transition-colors"
          >
            View Project
            <span className="material-symbols-outlined text-sm ml-1">
              {'description'}
            </span>
          </a>
        )}
      </div>
    </article>
  )
}
