'use client'
import { motion } from 'framer-motion'

type Testimonial = {
  name: string
  role: string
  company: string
  text: string
  relation: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Dr. Megha Chhabra',
    role: 'Associate Professor',
    company: 'SGT University',
    text: 'Atul built reliable systems under tight deadlines, from full-stack apps to ML models. He is proactive, detail-oriented, and brings strong problem-solving skills.',
    relation: 'Academic Mentor',
  },
  {
    name: 'Dr. Bharti Raina',
    role: 'Central Coordination Cell',
    company: 'SGT University',
    text: 'During his internship, Atul took ownership of production features, communicated clearly, and wrote clean, maintainable code. I would gladly work with him again.',
    relation: 'Internship Supervisor',
  },
  {
    name: 'Tamizan Skills Team',
    role: 'Remote Internship',
    company: 'Tamizan Skills',
    text: 'Atul consistently delivers beyond expectations. His ability to own complex full-stack tasks and learn new technologies quickly makes him stand out among his peers.',
    relation: 'Project Lead',
  },
]

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className='py-32 bg-gradient-to-b from-slate-900/80 to-slate-950 text-white'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          className='text-center mb-20'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-6xl font-black bg-linear-to-r from-sky-300 via-emerald-300 to-purple-300 bg-clip-text text-transparent mb-4'>
            What People Say
          </h2>
          <p className='text-lg md:text-xl text-slate-300 max-w-3xl mx-auto'>
            Trust signals from mentors and supervisors who have seen my work
            ethic, code quality, and ownership on real projects.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className='grid md:grid-cols-3 gap-8 lg:gap-10'>
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name + index}
              className='relative h-full rounded-3xl bg-white/5 border border-slate-700/60 backdrop-blur-xl p-8 flex flex-col justify-between shadow-[0_25px_80px_rgba(0,0,0,0.6)] hover:-translate-y-3 hover:shadow-[0_35px_120px_rgba(59,130,246,0.45)] transition-all duration-500'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Quote Icon */}
              <div className='absolute -top-6 left-8 w-12 h-12 rounded-2xl bg-white/10 border border-slate-600/70 flex items-center justify-center text-2xl text-sky-300 shadow-lg'>
                “
              </div>

              {/* Text */}
              <p className='mt-6 text-sm md:text-base text-slate-100 leading-relaxed'>
                {t.text}
              </p>

              {/* Person Info */}
              <div className='mt-8 pt-6 border-t border-slate-700/60 flex flex-col gap-1'>
                <p className='text-base font-bold text-white'>{t.name}</p>
                <p className='text-sm text-slate-300'>
                  {t.role} · {t.company}
                </p>
                <p className='text-xs font-semibold text-emerald-300 uppercase tracking-wide'>
                  {t.relation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proof CTA */}
        <motion.div
          className='mt-16 text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className='text-sm md:text-base text-slate-400 mb-3'>
            Want to verify?
          </p>
          <a
            href='www.linkedin.com/in/atul-gulia-a27851242'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-slate-900 text-sm font-bold hover:bg-sky-100 transition-colors'
          >
            View Recommendations on LinkedIn →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
