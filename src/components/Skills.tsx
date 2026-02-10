'use client'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        {
          name: 'Next.js',
          icon: '⚛️',
          level: 'Advanced',
          color: 'from-indigo-500 to-blue-500',
        },
        {
          name: 'React',
          icon: '⚛️',
          level: 'Advanced',
          color: 'from-blue-400 to-indigo-500',
        },
        {
          name: 'TypeScript',
          icon: '🔤',
          level: 'Intermediate',
          color: 'from-blue-600 to-sky-500',
        },
        {
          name: 'Tailwind',
          icon: '🎨',
          level: 'Expert',
          color: 'from-emerald-500 to-teal-500',
        },
        {
          name: 'Three.js',
          icon: '🔺',
          level: 'Intermediate',
          color: 'from-purple-500 to-pink-500',
        },
      ],
    },
    {
      category: 'Backend',
      skills: [
        {
          name: 'Node.js',
          icon: '🟢',
          level: 'Intermediate',
          color: 'from-green-500 to-emerald-600',
        },
        {
          name: 'MongoDB',
          icon: '🗄️',
          level: 'Intermediate',
          color: 'from-green-400 to-emerald-500',
        },
        {
          name: 'MySQL',
          icon: '🗃️',
          level: 'Moderate',
          color: 'from-orange-500 to-yellow-500',
        },
      ],
    },
    {
      category: 'AI/ML',
      skills: [
        {
          name: 'Python',
          icon: '🐍',
          level: 'Advanced',
          color: 'from-yellow-500 to-orange-500',
        },
        {
          name: 'TensorFlow',
          icon: '🧠',
          level: 'Intermediate',
          color: 'from-pink-500 to-rose-500',
        },
        {
          name: 'CNN/ViT',
          icon: '📈',
          level: 'Intermediate',
          color: 'from-red-500 to-orange-500',
        },
      ],
    },
    // ✅ DevOps REMOVED
  ]

  return (
    <section
      id='skills'
      className='py-32 bg-gradient-to-b from-slate-50/50 to-blue-50/50 dark:from-slate-900/50 dark:to-slate-800/50'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          className='text-center mb-24'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6'>
            Tech Stack
          </h2>
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
            Technologies I use to build production-grade AI/ML, full-stack, and
            scalable applications.
          </p>
        </motion.div>

        {/* 3 Categories Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6'>
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              className='group'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className='flex items-center space-x-4 mb-8 pb-6 border-b-4 border-slate-200/50 dark:border-slate-700/50 group-hover:border-blue-400 transition-all duration-500'>
                <div className='w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-xl group-hover:scale-110 transition-transform'>
                  🛠️
                </div>
                <h3 className='text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent'>
                  {category.category}
                </h3>
              </div>

              {/* Skills */}
              <div className='space-y-6'>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className='group/item relative p-8 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/70 dark:border-slate-700/70 hover:bg-white dark:hover:bg-slate-700 hover:border-blue-300/80 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2'
                    whileHover={{ scale: 1.02, y: -6 }}
                  >
                    <div
                      className={`w-24 h-24 rounded-2xl flex items-center justify-center text-5xl font-black mx-auto mb-6 shadow-2xl group-hover/item:shadow-white/60 group-hover/item:scale-110 transition-all duration-400 ${skill.color}`}
                    >
                      {skill.icon}
                    </div>
                    <h4 className='text-3xl font-black text-slate-900 dark:text-white text-center mb-4 group-hover/item:text-blue-600 transition-colors duration-400'>
                      {skill.name}
                    </h4>
                    <div className='flex items-center justify-center'>
                      <span className='px-6 py-3 bg-gradient-to-r from-emerald-500/95 to-teal-500/95 text-white text-lg font-bold rounded-2xl shadow-2xl backdrop-blur-sm border-2 border-emerald-400/60 group-hover/item:from-emerald-600 group-hover/item:to-teal-600 transition-all duration-300'>
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
