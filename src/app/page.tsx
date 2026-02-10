'use client'

import Hero3D from '@/components/Hero3D'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      {/* SIMPLE HERO FOR DEBUG */}
      <section
        id='hero'
        className='min-h-[80vh] flex flex-col lg:flex-row items-center justify-center gap-12 px-6 max-w-7xl mx-auto pt-10'
      >
        {/* LEFT: TEXT */}
        <div className='lg:w-1/2 max-w-xl text-left'>
          <h1 className='text-4xl md:text-6xl font-bold text-slate-900'>
            Full-Stack Developer
            <br />
            <span className='text-emerald-600'>Atul Gulia</span>
          </h1>
          <p className='mt-4 text-lg md:text-xl text-slate-600'>
            MCA Final Year @ SGT University · AI/ML · Blockchain · Full-Stack
          </p>

          <div className='mt-6 flex gap-4'>
            <a
              href='#projects'
              className='px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold'
            >
              View Projects
            </a>
            <a
              href='https://github.com/AtulGulia-1'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-3 rounded-xl border border-slate-300 text-slate-800'
            >
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT: 3D OBJECT */}
        <div className='lg:w-1/2 flex justify-center'>
          <div className='w-72 h-72'>
            <Hero3D />
          </div>
        </div>
      </section>

      {/* Rest of the page */}
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  )
}
