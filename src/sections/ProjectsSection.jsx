import React from 'react'
import ProjectCard from '../components/ProjectCard'

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Web application for content migration',
      description:
        'A specialized data extraction and migration engine built in .NET to automate the transfer of content and media, significantly reducing manual effort and ensuring data integrity during the migration process.',
      image:
        'http://images.ctfassets.net/5ghvb2a59mwf/nZcn3m7mFQWj36V5j9qix/389a2999238169cbf2dc881188698fae/1.png?w=1400&h=700&q=90&fm=webp',
      tags: ['.NET', 'C#', 'Umbraco', 'SQL'],
      colSpan: 'md:col-span-8',
      rowSpan: '',
      aspectRatio: 'aspect-video',
      caseStudyLink: 'https://kruso.dk/en/cases/danmarks-frie-forskningsfond',
    },
    {
      id: 2,
      title: 'Car Damage Detection',
      description:
        "Bachelor's project focusing on a machine learning model designed for car damage detection and assessment.",
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBKiluNUZrwFbnsz4RnRq-u1bepl6qxA_oL3580Z4dapvPfANJ1b8xnp_UUgid0eaUHHgBYQ57WofO4MlV9j5a7jNyte2EqUhTMm--13bpkNCWNkenYz4PbZ23J5JrT2_r8cOSi5qGemc-eRit9lspZEAcoAt2WAi9IBUk72gFqpbQji8Pzi0kZtYieYR1PIx4T6Zt_c6UWwELZp_CY6PV4udFZYAYjOVB-2HmO8WWP-nfNOjQ5gUYA7JuyQn6R_3MCzfdS7I-DbkQ',
      tags: ['Python', 'ML'],
      colSpan: 'md:col-span-4',
      rowSpan: '',
      aspectRatio: 'aspect-square',
      caseStudyLink: 'https://github.com/orgs/BACHELOR-NRD/repositories',
    },
    {
      id: 3,
      title: 'TaskIt - Task Management CLI',
      description:
        'A command-line interface (CLI) tool for managing tasks, built with .NET and C#. Features include task creation, listing,  and time tracking.',
      image:
        'https://images.unsplash.com/photo-1762242298589-582f5f6c3fb1?w=1400&h=700&q=85&fit=crop',
      tags: ['.NET', 'C#', 'JSON', 'Spectre.Console'],
      colSpan: 'md:col-span-4',
      rowSpan: '',
      aspectRatio: 'aspect-square',
      caseStudyLink: 'https://github.com/ricardofernandes21/Taskit',
    },
    {
      id: 4,
      title: 'Games & Gamers Directory',
      description:
        'A REST API built with Spring Boot for managing a directory of gamers, the games they play, their geography, and skill levels. Features search and filtering, global error handling, input validation, Swagger documentation, and full Docker support.',
      image:
        'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1400&h=700&q=85&fit=crop',
      tags: ['Java', 'Spring Boot', 'Spring Data JPA', 'H2', 'Swagger', 'Docker', 'JUnit', 'Mockito'],
      colSpan: 'md:col-span-8',
      rowSpan: '',
      aspectRatio: 'aspect-video',
      caseStudyLink: 'https://github.com/ricardofernandes21/GamesDirectory',
    },
    {
      id: 5,
      title: 'Markethub - Example Project',
      description:
        'Microservices based e-commerce backend system example.',
      image:
        'markethub.jpg',
      tags: ['.NET', 'C#', 'PostgreSQL', 'Docker', 'Swagger', 'Entity Framework', 'Unit Testing', 'RabbitMQ'],
      colSpan: 'md:col-span-12',
      rowSpan: '',
      aspectRatio: 'aspect-video',
      caseStudyLink: 'https://github.com/ricardofernandes21/markethubexample',
    },
  ]

  return (
    <section className="py-20 px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-glow">
            <span className="text-primary">PROJECTS</span>
          </h1>
          <p className="font-body text-on-surface-variant text-xl max-w-2xl leading-relaxed">
            A showcase of technical engineering, automated migrations, and AI-driven solutions
            developed during my journey as a software engineer.
          </p>
        </header>

        {/* Bento Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
