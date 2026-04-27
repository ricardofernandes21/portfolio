import React from 'react'
import TimelineItem from '../components/TimelineItem'

export default function ExperienceSection() {
  const timeline = [
    {
      id: 1,
      year: '2025',
      endDate: 'Present',
      title: 'Junior Software Engineer',
      company: 'Kruso A/S',
      description:
        'Built and optimized .NET solutions for enterprise CMS environments, specializing in data migration and systems integration. Created and improved custom NuGet packages, and migrated hosting from Windows to Linux.',
      tags: ['.NET', 'Umbraco', 'C#','Linux','SQL','Git'],
    },
    {
      id: 2,
      year: '2025',
      endDate: 'Sep 2025 - Dec 2025',
      title: 'Student Software Engineer - Bachelor\'s Project',
      company: 'Main AI',
      description:
        'Developed a Python-based machine learning model for autonomous vehicle damage detection, utilizing computer vision and stochastic modeling techniques.',
      tags: ['Python', 'Machine Learning', 'Computer Vision'],
    },
    {
      id: 3,
      year: '2024',
      endDate: 'Aug 2024 - Jan 2025',
      title: 'Backend Engineering Intern',
      company: 'Kruso A/S',
      description:
        'Built a .NET data extraction tool to migrate website content into a new platform, significantly reducing manual migration work. Developed AI-powered applications with Typesense, including semantic search and a chatbot, and helped deliver Kruso\'s ESG report presentation using Umbraco and Nuxt.js with Azure and GitHub CI/CD pipelines.',
      tags: ['.NET', 'Typesense', 'Umbraco', 'SQL', 'Nuxt.js', 'Azure', 'CI/CD'],
    },
    {
      id: 4,
      year: '2022',
      endDate: 'Aug 2022 - Jan 2026',
      title: 'Bachelor\'s in Software Engineering',
      company: 'Via University College',
      description:
        'Built a strong software engineering foundation through coursework and projects in backend development, data structures, distributed systems, and software architecture, while applying .NET, Java, SQL, and DevOps practices in a project based learning environment.',
      tags: ['.NET', 'Java', 'Systems Design', 'Data Structures', 'Distributed Systems','Spring Boot','DevOps','Docker','Git','Relational Databases','SQL','Design Patterns','Web Development','Azure','CI/CD','Agile Methodologies','Testing'],
    },
  ]

  return (
    <section className="py-18 px-8" id="experience">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-20">
           <span className="text-secondary">Skills</span>
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
              Experience in .NET and Java Spring Boot for building robust server-side applications, paired with Docker
              and Azure for modern deployment pipelines.
            </p>
            <div className="flex flex-wrap gap-3">
              {['.NET', 'Java Spring Boot', 'Azure','Docker','Git','CI/CD','SQL'].map((tech) => (
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
            <h3 className="font-headline text-2xl font-bold mb-4">AI, Machine Learning & Frontend Development</h3>
            <p className="text-on-surface-variant mb-6">
              Knowledge in Machine Learning, AI Agents and Frontend Development.
            </p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mt-1">
                  <span className="font-label text-[10px] text-on-surface-variant">ML PROFICIENCY</span>
                  <span className="font-label text-[10px] text-secondary">70%</span>
                </div>
                <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden mt-1">
                  <div className="h-full bg-secondary w-[70%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mt-1">
                  <span className="font-label text-[10px] text-on-surface-variant">AI AGENTS</span>
                  <span className="font-label text-[10px] text-secondary">60%</span>
                </div>
                <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden mt-1">
                  <div className="h-full bg-secondary w-[60%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mt-1">
                  <span className="font-label text-[10px] text-on-surface-variant">FRONTEND DEVELOPMENT</span>
                  <span className="font-label text-[10px] text-secondary">50%</span>
                </div>
                <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden mt-1">
                  <div className="h-full bg-secondary w-[50%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 lg:col-span-4 bg-gradient-to-tr from-surface-container to-surface-container-low p-8 rounded-xl border border-outline-variant/10 hover:border-secondary/20 transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-headline text-xl font-bold">Languages</h3>
              <span className="material-symbols-outlined text-secondary">translate</span>
            </div>
            <div className="space-y-2">
              {[
                { language: 'Portuguese', level: 'Fluent', width: 'w-full' },
                { language: 'English', level: 'Expert', width: 'w-3/4' },
                { language: 'Spanish', level: 'Intermediate', width: 'w-1/2' },
                { language: 'Danish', level: 'Beginner', width: 'w-1/3' },
              ].map(({ language, level, width }) => (
                <div key={language}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-label text-xs uppercase tracking-wider">{language}</span>
                    <span className="px-2 py-1 bg-surface-container-highest text-[10px] font-bold uppercase rounded">
                      {level}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className={`h-full bg-secondary ${width}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-4 lg:col-span-4 bg-gradient-to-tr from-surface-container to-surface-container-low p-8 rounded-xl border border-outline-variant/10 hover:border-secondary/20 transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-headline text-xl font-bold">Soft Skills</h3>
              <span className="material-symbols-outlined text-secondary">groups</span>
            </div>
            <p className="text-on-surface-variant text-sm mb-4">
              Collaboration-focused mindset with strong ownership, communication, and problem-solving in team environments.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Problem Solving', 'Teamwork', 'Attention to detail', 'Time Management', 'Communication','Adaptability','Creativity'].map((skill) => (
                <span key={skill} className="px-2 py-1 bg-surface-container-highest text-[10px] font-bold uppercase rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Timeline */}
        <h2 className="font-headline text-5xl font-bold mb-12">CHRONOLOGY</h2>
        <div className="space-y-0">
          {timeline.map((item) => (
            <TimelineItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
