import React from 'react'
import TimelineItem from '../components/TimelineItem'

export default function ExperienceSection() {
  const timeline = [
    {
      id: 1,
      year: '2025',
      endDate: 'Present',
      title: 'Junior Full-Stack Developer',
      company: 'Kruso A/S',
      description:
        'Developed and optimized .NET applications for enterprise CMS solutions, focusing on data migration and system integration. Responsible for improving performance metrics and ensuring architectural consistency.',
      tags: ['.NET', 'Umbraco', 'C#'],
    },
    {
      id: 2,
      year: '2025',
      endDate: 'Bachelor\'s Project',
      title: 'Machine Learning Researcher',
      company: 'Aarhus University',
      description:
        'Developed a Python-based machine learning model for autonomous vehicle damage detection, utilizing computer vision and stochastic modeling techniques.',
      tags: ['Python', 'Machine Learning', 'Computer Vision'],
    },
    {
      id: 3,
      year: '2024',
      endDate: 'Aug 2024 - Jan 2025',
      title: 'Backend Engineering Intern',
      company: 'Tech Solutions',
      description:
        'Built RESTful APIs using Java Spring Boot, optimized database queries, and participated in Agile sprint planning. Contributed to microservice architecture improvements.',
      tags: ['Java', 'Spring Boot', 'Microservices'],
    },
    {
      id: 4,
      year: '2022',
      endDate: 'Expected 2026',
      title: 'Bachelor\'s in Software Engineering',
      company: 'Aarhus University',
      description:
        'Focused on backend systems, data structures, distributed computing, and software architecture. GPA: 3.8/4.0',
      tags: ['Computer Science', 'Backend', 'Systems Design'],
    },
  ]

  return (
    <section className="py-20 px-8" id="experience">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-20">
          ENGINEERING <span className="text-secondary">INTEGRITY</span>
        </h2>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6 mb-32">
          <div className="md:col-span-2 lg:col-span-8 bg-surface-container p-8 rounded-xl border border-outline-variant/10 hover:border-primary/20 transition-all group">
            <div className="flex justify-between items-start mb-12">
              <span className="material-symbols-outlined text-4xl text-primary">terminal</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Core Tech Stack</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Backend & DevOps</h3>
            <p className="text-on-surface-variant mb-8 max-w-lg">
              Expertise in .NET and Java Spring Boot for building robust server-side applications, paired with Docker
              and Azure for modern deployment pipelines.
            </p>
            <div className="flex flex-wrap gap-3">
              {['.NET', 'Java Spring Boot', 'Azure CI/CD'].map((tech) => (
                <div key={tech} className="px-4 py-2 bg-surface-container-highest rounded-md flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                  <span className="font-label text-xs uppercase tracking-wider">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-4 bg-surface p-8 rounded-xl border border-outline-variant/10 hover:border-secondary/20 transition-all">
            <div className="flex justify-between items-start mb-12">
              <span className="material-symbols-outlined text-4xl text-secondary">psychology</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">AI & Data</h3>
            <p className="text-on-surface-variant mb-6">
              Specialization in data engineering and machine learning, from semantic search to automated image
              detection models.
            </p>
            <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-[85%]"></div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="font-label text-[10px] text-on-surface-variant">ML PROFICIENCY</span>
              <span className="font-label text-[10px] text-secondary">85%</span>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-4 bg-surface-container-highest p-8 rounded-xl border border-outline-variant/10">
            <h3 className="font-headline text-xl font-bold mb-2">Automation</h3>
            <p className="text-on-surface-variant text-sm">
              Building agentic workflows with N8N and custom data extraction tools in .NET.
            </p>
          </div>

          <div className="md:col-span-2 lg:col-span-4 bg-[#000000] p-8 rounded-xl border border-outline-variant/10 flex flex-col justify-between">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">database</span>
              <span className="font-headline font-bold">Data Engineering</span>
            </div>
            <div className="mt-8 flex flex-col gap-2">
              <div className="flex justify-between text-xs font-label opacity-60">
                <span>Relational DBs (SQL)</span>
                <span>100%</span>
              </div>
              <div className="flex justify-between text-xs font-label opacity-60">
                <span>Vector / NoSQL</span>
                <span>80%</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-4 bg-gradient-to-tr from-surface-container to-surface-container-low p-8 rounded-xl border border-outline-variant/10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-headline text-xl font-bold">Soft Skills</h3>
              <span className="material-symbols-outlined text-secondary">groups</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Problem Solving', 'Teamwork', 'Attention to detail', 'Time Management'].map((skill) => (
                <span key={skill} className="px-2 py-1 bg-surface-container-highest text-[10px] font-bold uppercase rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <h2 className="font-headline text-4xl font-bold mb-12">CHRONOLOGY</h2>
        <div className="space-y-0">
          {timeline.map((item) => (
            <TimelineItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
