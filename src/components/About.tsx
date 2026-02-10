'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  const timeline = [
    {
      year: '2024-2026',
      title: 'MCA Final Year - SGT University',
      role: 'Full-Stack Development Focus',
      details: 'Learning AI/ML, Cloud/DevOps. SGPA: 8.9+',
      icon: '🎓',
    },
    {
      year: '2025(3rd Sep- 3rd Dec)',
      title: 'Central Coordination Cell Intern',
      role: 'Tech Intern @ SGT University',
      details:
        'Building internal tools, API integrations, database optimization.',
      icon: '💼',
    },
    {
      year: '2025(1 Month)',
      title: 'Tamizan Skills Internship',
      role: 'Full-Stack Developer (10 Projects)',
      details:
        'Library Management (MySQL), Voting DApp (Solidity), Tomato Disease CNN.',
      icon: '🚀',
    },
    {
      year: 'Ongoing',
      title: 'Open Source & Portfolio',
      role: 'GitHub @AtulGulia-1',
      details: '3D Portfolio (Three.js), Plant Disease ML, Decentralized Apps.',
      icon: '⭐',
    },
  ]

  return (
    <section
      id='about'
      className='py-32 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-24'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-bold bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6'>
            My Journey
          </h2>
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            From MCA coursework to production internships—building real-world AI
            and full-stack solutions.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className='grid lg:grid-cols-12 gap-12 items-start'>
          {/* Professional Photo - Screenshot Optimized */}
          <motion.div
            className='lg:col-span-5 relative group'
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true }}
          >
            <div className='w-full max-w-md mx-auto'>
              {/* Outer glow aura */}
              <div className='absolute -inset-8 lg:-inset-10 bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-emerald-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-1000 opacity-80 group-hover:opacity-100' />

              {/* Glassmorphism frame */}
              <div className='relative bg-gradient-to-b from-white/95 to-slate-50/90 dark:from-slate-900/95 dark:to-slate-800/90 backdrop-blur-2xl rounded-3xl p-10 border-4 border-white/70 dark:border-slate-800/70 shadow-2xl hover:shadow-[0_35px_100px_-15px_rgba(59,130,246,0.4)] hover:border-blue-300/80 transition-all duration-700'>
                <Image
                  src='/IMG_8224.jpg'
                  alt='Atul Gulia - MCA Full-Stack Developer'
                  width={320}
                  height={480}
                  className='w-full h-120 object-contain mx-auto rounded-2xl shadow-2xl drop-shadow-2xl max-w-[320px] brightness-105 contrast-110 saturate-110'
                />
              </div>

              {/* Pro credentials badge */}
              <motion.div
                className='absolute -bottom-20 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500/90 to-blue-600/90 backdrop-blur-xl text-white px-8 py-4 rounded-3xl text-xl font-black shadow-2xl border-4 border-white/90 text-center whitespace-nowrap hover:from-emerald-600 hover:to-blue-700 hover:scale-105 hover:shadow-3xl transition-all duration-300'
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: 'spring', stiffness: 400, delay: 0.4 }}
              >
                MCA 2026 • Full-Stack Engineer
              </motion.div>
            </div>
          </motion.div>

          {/* Timeline Cards */}
          <motion.div
            className='lg:col-span-7 space-y-8'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className='group flex items-start space-x-6 p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl hover:bg-white/90 dark:hover:bg-slate-700/80 border border-white/60 dark:border-slate-700/60 hover:border-blue-300/70 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-4 transition-all duration-700 cursor-pointer overflow-hidden'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
              >
                {/* Icon */}
                <motion.div
                  className='shrink-0 w-20 h-20 bg-linear-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center text-3xl font-black shadow-2xl group-hover:scale-125 group-hover:shadow-blue-500/50 group-hover:rotate-12 transition-all duration-500 flex-shrink-0'
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <div className='flex-1 min-w-0 pt-2'>
                  <span className='block text-base font-bold text-emerald-600 uppercase tracking-wider mb-3'>
                    {item.year}
                  </span>
                  <h3 className='text-3xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-4 group-hover:from-blue-600 group-hover:to-emerald-600 transition-all duration-500'>
                    {item.title}
                  </h3>
                  <p className='text-xl text-slate-700 dark:text-slate-200 font-semibold mb-4'>
                    {item.role}
                  </p>
                  <p className='text-lg font-bold text-slate-900 dark:text-white leading-relaxed'>
                    {item.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
