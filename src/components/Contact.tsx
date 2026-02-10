'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

type FormState = {
  name: string
  email: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
}

const Contact = () => {
  const [formData, setFormData] = useState<FormState>(initialState)
  const [status, setStatus] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loading) return

    setLoading(true)
    setStatus('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error('Request failed')
      }

      setStatus("Thank you! I've received your message.")
      setFormData(initialState)
    } catch (error) {
      setStatus('Something went wrong. Please try again in a moment.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id='contact'
      className='py-32 bg-gradient-to-b from-slate-950 to-slate-900'
    >
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-6xl font-black bg-linear-to-r from-sky-300 via-emerald-300 to-purple-300 bg-clip-text text-transparent mb-4'>
            Let&apos;s Work Together
          </h2>
          <p className='text-lg md:text-xl text-slate-300 max-w-2xl mx-auto'>
            Have a role, project, or collaboration in mind? Drop a message and
            I&apos;ll reply within 24 hours.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-3 gap-10 items-start'>
          {/* Left: Contact Info */}
          <motion.div
            className='lg:col-span-1 space-y-6'
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className='rounded-3xl bg-white/5 border border-slate-800/80 p-6 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.7)]'>
              <h3 className='text-xl font-bold text-white mb-4'>
                Quick Details
              </h3>
              <ul className='space-y-3 text-sm text-slate-300'>
                <li>
                  <span className='font-semibold text-white'>Location:</span>{' '}
                  Delhi, India
                </li>
                <li>
                  <span className='font-semibold text-white'>Open to:</span>{' '}
                  Full‑time, Remote, Contract
                </li>
                <li>
                  <span className='font-semibold text-white'>Tech Focus:</span>{' '}
                  Full‑Stack · Next.js · AI/ML
                </li>
              </ul>
            </div>

            <div className='rounded-3xl bg-white/5 border border-slate-800/80 p-6 backdrop-blur-xl text-sm text-slate-300'>
              <p className='mb-2 font-semibold text-white'>Prefer email?</p>
              <a
                href='mailto:youremail@example.com'
                className='text-sky-300 hover:text-sky-200 underline underline-offset-4'
              >
                guliaatul124@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            className='lg:col-span-2 rounded-3xl bg-white/10 border border-slate-700/70 p-8 md:p-10 backdrop-blur-2xl shadow-[0_25px_100px_rgba(15,23,42,0.9)] space-y-6'
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-semibold text-slate-200 mb-2'
                >
                  Name
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full rounded-2xl bg-slate-950/60 border border-slate-700/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400'
                  placeholder='Enter your name'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-semibold text-slate-200 mb-2'
                >
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full rounded-2xl bg-slate-950/60 border border-slate-700/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400'
                  placeholder='you@example.com'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='message'
                className='block text-sm font-semibold text-slate-200 mb-2'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className='w-full rounded-2xl bg-slate-950/60 border border-slate-700/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 resize-none'
                placeholder='Tell me briefly about the role or project...'
              />
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
              <button
                type='submit'
                disabled={loading}
                className='inline-flex items-center justify-center px-8 py-3 rounded-2xl bg-sky-500 text-slate-950 text-sm font-bold shadow-lg hover:bg-sky-400 hover:shadow-sky-500/30 disabled:opacity-60 disabled:cursor-not-allowed transition-all'
              >
                {loading ? 'Sending…' : 'Send Message'}
              </button>

              {status && (
                <p className='text-xs md:text-sm text-slate-300'>{status}</p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
