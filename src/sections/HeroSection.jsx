import React from 'react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 hero-gradient animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] animate-float-delayed"></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
          style={{
            backgroundImage: 'radial-gradient(#484847 0.5px, transparent 0.5px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low rounded-full border border-outline-variant/15 mb-8">
            <span className="w-2 h-2 bg-secondary rounded-full"></span>
            <span className="font-label text-[10px] uppercase tracking-widest text-secondary">
              Junior Software Engineer
            </span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
            SCALABLE <br />
            <span className="text-primary italic">BACKEND SYSTEMS</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed">
            Building robust backend architectures with .NET and Java. Passionate about scalable system design, cloud infrastructure, and cutting-edge technologies.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-bold rounded-md flex items-center gap-3 transition-transform hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(129,236,255,0.3)]"
            >
              Explore Work
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-outline-variant/30 text-secondary font-bold rounded-md hover:bg-secondary/5 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative hidden lg:block">
          {/* Tech Stack Orbiter */}
          <div className="relative w-full aspect-square flex items-center justify-center">
            <div className="absolute inset-0 border border-outline-variant/10 rounded-full animate-float"></div>
            <div className="absolute inset-12 border border-outline-variant/10 rounded-full animate-float-delayed"></div>

            {/* Skill Chips */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 glass-card p-4 rounded-xl border border-outline-variant/10 flex items-center gap-3 shadow-xl">
              <span className="w-3 h-3 bg-secondary rounded-full"></span>
              <span className="font-label text-sm font-bold uppercase tracking-wider">.NET / Java</span>
            </div>
            <div className="absolute bottom-1/4 -left-4 glass-card p-4 rounded-xl border border-outline-variant/10 flex items-center gap-3 shadow-xl">
              <span className="w-3 h-3 bg-secondary rounded-full"></span>
              <span className="font-label text-sm font-bold uppercase tracking-wider">Docker</span>
            </div>
            <div className="absolute top-1/3 -right-10 glass-card p-4 rounded-xl border border-outline-variant/10 flex items-center gap-3 shadow-xl">
              <span className="w-3 h-3 bg-secondary rounded-full"></span>
              <span className="font-label text-sm font-bold uppercase tracking-wider">SQL</span>
            </div>
            <div className="absolute bottom-0 right-1/4 glass-card p-4 rounded-xl border border-outline-variant/10 flex items-center gap-3 shadow-xl">
              <span className="w-3 h-3 bg-secondary rounded-full"></span>
              <span className="font-label text-sm font-bold uppercase tracking-wider">Azure CI/CD</span>
            </div>

            {/* Central Profile Image */}
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-surface-container-highest shadow-2xl z-10">
              <img
                alt="Ricardo Fernandes"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                src="https://media.licdn.com/dms/image/v2/D4E03AQFQ48_Fkw2_xg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1690142844725?e=1778716800&v=beta&t=0BAgaK1K5mYA_yN0hKPc8yBMjuWsH0LSlo05elo33oc"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
