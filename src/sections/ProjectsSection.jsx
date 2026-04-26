import React from 'react'
import ProjectCard from '../components/ProjectCard'

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Sitecore to Umbraco Migration Tool',
      description:
        'A specialized data extraction and migration engine built in .NET to automate the transfer of content and media, significantly reducing manual overhead for enterprise clients.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA-vi4nCKXanyhmdaY3QF7_6oSsLm0y5Ow_Njb2DFatpp6NIg_Pd5aoc1lmdwoJWhz-1saOigre1Ys-dU-tKRIbg9b3lU0u83jW5i6pXyE0iGZwC9ATTeA5WRB_PZzHfb0TSRwzFOpr1zyNBrJ7Yla0HDLVDzXdU2HJ2wrYBzOMySxn3ILtvxcSfxh1yew_o7SXB4wa4rY6QwIu9LpIeKvEAMmcysqeVCOYMrplebElYEZC7yP5sWbYumKmlsPL_DOXBB-Ps-XXbGg',
      tags: ['.NET', 'C#', 'Umbraco'],
      colSpan: 'md:col-span-8',
      rowSpan: '',
      aspectRatio: 'aspect-video',
      caseStudyLink: '#',
    },
    {
      id: 2,
      title: 'Car Damage Analytics',
      description:
        "Bachelor's project focusing on a machine learning model designed for autonomous vehicle damage detection and assessment.",
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBKiluNUZrwFbnsz4RnRq-u1bepl6qxA_oL3580Z4dapvPfANJ1b8xnp_UUgid0eaUHHgBYQ57WofO4MlV9j5a7jNyte2EqUhTMm--13bpkNCWNkenYz4PbZ23J5JrT2_r8cOSi5qGemc-eRit9lspZEAcoAt2WAi9IBUk72gFqpbQji8Pzi0kZtYieYR1PIx4T6Zt_c6UWwELZp_CY6PV4udFZYAYjOVB-2HmO8WWP-nfNOjQ5gUYA7JuyQn6R_3MCzfdS7I-DbkQ',
      tags: ['Python', 'ML'],
      colSpan: 'md:col-span-4',
      rowSpan: '',
      aspectRatio: 'aspect-square',
      caseStudyLink: '#',
    },
    {
      id: 3,
      title: 'DevShare Extension',
      description:
        'A collaborative Chrome extension enabling developers to instantly share and discover useful technical resources within teams.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBAi_WKyA67Vy0lzlrKsGutIsWpyxsUlsyLoRFgNqMLIKsVdmCp5DoteJ1ZAerrdc-Td963q6WBfTBKGAwPymF6SBewbaUZqTmxA7LB6rflAhWHDQEu45dS2CUXEX3c2MKhVMLHLBQFHtX16xB4aHx1_cBv7TJir_wv5c90zC-toJhovsapAbOc1rW_mgGlC8nJ4mxgi7_86HG-TQo34KHNNxeccSZkyv9jyl579y9vvWXWApAHTF2t2DVHR0S5SwNnvfd3c_7V-Qw',
      tags: ['Javascript'],
      colSpan: 'md:col-span-4',
      rowSpan: '',
      aspectRatio: 'aspect-square',
      caseStudyLink: '#',
    },
    {
      id: 4,
      title: 'Semantic Chatbot & Search',
      description:
        'Developed AI-integrated applications utilizing Typesense for semantic search and conversational chatbots to enhance user data interaction.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCVOsdcJzABlJ0Pqlg7T67cXfKYQq5fqtLzqp0k9BdlQu0mcvsWrCj4prJMqBPJVLI8MGh0oo0QXdE3kOKLkRllKojmqiqbsKFc4Dq9RnfaFgokX2D_GKGI8yKcmST-tRLZlKMb22_dfPyZP2D3o75aCYzb6FxDAa_WIY9oPsz5Dn2zOSAZf9C_gcTze8ZMRvD7n8VI4hMABATv3VxgTVOIRt_r5Z9GLCJ2YAKWe5T_MKoSw6Lr_U8Dgmz_yp4Uxe4-U5k9Hi-vH7Q',
      tags: ['Typesense', 'Nuxt.js'],
      colSpan: 'md:col-span-8',
      rowSpan: '',
      aspectRatio: 'aspect-video',
      caseStudyLink: '#',
    },
  ]

  return (
    <section className="py-20 px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-glow">
            Selected <span className="text-primary italic">Works</span>
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
