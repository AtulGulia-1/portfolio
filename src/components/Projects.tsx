'use client'
import { motion } from 'framer-motion'

type Project = {
  title: string
  subtitle: string
  description: string
  tech: string[]
  metrics: string[]
  github: string
  gradient: string
}

const projects: Project[] = [
  {
    title: 'Tomato Leaf Disease Detection',
    subtitle: 'CNN/ViT • 98% Accuracy',
    description:
      'Production-ready tomato leaf disease classifier using Transfer Learning, with a React dashboard and real-time inference.',
    tech: ['Python', 'TensorFlow', 'Next.js', 'Vercel'],
    metrics: ['98% Accuracy', '10k+ Images', 'Real-time API'],
    github: 'https://github.com/AtulGulia-1/Plant-Village.git',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    title: '3D Interactive Portfolio',
    subtitle: 'React Three Fiber Experience',
    description:
      '3D developer portfolio with React Three Fiber, Framer Motion animations, and smooth scroll interactions.',
    tech: ['React', 'Three.js', 'Framer Motion'],
    metrics: ['60 FPS', 'Mobile Optimized', 'Custom Shaders'],
    github: 'https://github.com/AtulGulia-1',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Library Book Management System',
    subtitle: 'Python',
    description:
      'Complete library management system with authentication, role-based access, book search, and fine calculation.',
    tech: ['Python', 'CSV', 'datetime'],
    metrics: ['500+ Books', 'Admin Dashboard', 'Auth & Roles'],
    github: 'https://github.com/AtulGulia-1/Library-Book-Management-System.git',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Currency Convertor',
    subtitle: 'Python',
    description:
      'Currency converter with real-time exchange rates and a clean desktop UI.',
    tech: ['Python', 'Requests', 'Tkinter'],
    metrics: ['Real-time Rates', '100+ Currencies', 'Offline Support'],
    github: 'https://github.com/AtulGulia-1',
    gradient: 'from-sky-500 to-cyan-500',
  },
  {
    title: 'ExpenseTracker',
    subtitle: 'Python',
    description:
      'Expense tracking application with budgeting, categorization, and reporting features.',
    tech: ['Python', 'Requests', 'Tkinter'],
    metrics: ['Budget Tracking', 'Expense Categorization', 'Monthly Reports'],
    github: 'https://github.com/AtulGulia-1/ExpenseTracker.git',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Password Generator',
    subtitle: 'Python',
    description:
      'Secure password generator with customizable options and clipboard integration.',
    tech: ['Python', 'Tkinter'],
    metrics: ['Custom Length', 'Special Characters', 'Clipboard Support'],
    github: 'https://github.com/AtulGulia-1/Password_generator.git',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Task Manager',
    subtitle: 'Python',
    description:
      'Task manager with CRUD operations, due date tracking, and a clean UI.',
    tech: ['Python', 'Tkinter'],
    metrics: ['Task Creation', 'Due Dates', 'Completion Status'],
    github: 'https://github.com/AtulGulia-1/Task_manager.git',
    gradient: 'from-fuchsia-500 to-rose-500',
  },
  {
    title: 'WeatherApp',
    subtitle: 'Python',
    description:
      'Weather application with real-time data fetching and a user-friendly interface.',
    tech: ['Python', 'Requests', 'Tkinter'],
    metrics: ['Real-time Data', '50+ Cities', 'Offline Support'],
    github: 'https://github.com/AtulGulia-1/WeatherApp.git',
    gradient: 'from-blue-500 to-emerald-500',
  },
  {
    title: 'QuizApp',
    subtitle: 'Python',
    description:
      'Quiz application with multiple-choice questions, scoring, and timer support.',
    tech: ['Python', 'Tkinter'],
    metrics: ['100+ Questions', 'Scoring System', 'Timer'],
    github: 'https://github.com/AtulGulia-1/QuizApp.git',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'ChatBot',
    subtitle: 'Python NLP ChatBot',
    description:
      'Custom chatbot using Python and NLP libraries, with a responsive web interface.',
    tech: ['Python', 'NLP', 'Flask', 'React'],
    metrics: [
      '100+ Conversations',
      'Multi-language Support',
      'Context-aware Responses',
    ],
    github: 'https://github.com/AtulGulia-1/chatbot.git',
    gradient: 'from-red-500 to-orange-500',
  },
]

const Projects = () => {
  return (
    <section
      id='projects'
      className='py-32 bg-linear-to-t from-slate-900/20 to-transparent dark:from-slate-900/60'
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
          <h2 className='text-4xl md:text-6xl font-black bg-linear-to-r from-slate-900 via-blue-900 to-emerald-900 bg-clip-text text-transparent mb-6'>
            Featured Projects
          </h2>
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
            Selected work that showcases my strengths in full‑stack development,
            AI/ML, and modern UI engineering.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className='group relative overflow-hidden rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/60 dark:border-slate-700/60 hover:border-blue-400/70 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02]'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-linear-to-t ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-700 -z-10 blur-sm`}
              />

              {/* Card Content */}
              <div className='relative z-10 p-8 lg:p-10 h-full flex flex-col'>
                {/* Tech Badges */}
                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.tech.map((tag) => (
                    <motion.span
                      key={tag}
                      className='px-4 py-2 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm text-xs font-bold rounded-xl text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-600/60 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:border-blue-300 transition-all duration-300'
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Title */}
                <motion.h3
                  className='text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-500 group-hover:to-emerald-500 group-hover:bg-clip-text transition-all duration-700 leading-tight'
                  whileHover={{ y: -2 }}
                >
                  {project.title}
                </motion.h3>

                {/* Subtitle */}
                <p className='text-base md:text-lg font-semibold text-slate-600 dark:text-slate-300 mb-4'>
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className='text-sm md:text-base text-slate-600 dark:text-slate-400 mb-6 grow'>
                  {project.description}
                </p>

                {/* Metrics */}
                <div className='flex flex-wrap gap-3 mb-8'>
                  {project.metrics.map((metric) => (
                    <motion.div
                      key={metric}
                      className='px-3 py-2 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm text-xs font-bold rounded-xl text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-600/60 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:border-blue-300 transition-all duration-300'
                      whileHover={{ scale: 1.08, y: -2 }}
                    >
                      {metric}
                    </motion.div>
                  ))}
                </div>

                {/* Single CTA: View Code */}
                <div className='pt-6 border-t border-slate-200/60 dark:border-slate-700/60'>
                  <motion.a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block w-full px-6 py-3 bg-slate-900 text-white font-bold text-sm md:text-base rounded-2xl text-center hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300'
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View Code →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
