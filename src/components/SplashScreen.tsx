'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2800) // 2.8s perfect timing

    return () => clearTimeout(timer)
  }, [])

  return isVisible ? (
    <motion.div
      className='fixed inset-0 z-[9999] bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 flex items-center justify-center px-4 overflow-hidden'
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      onAnimationComplete={() => !isVisible && router.refresh()}
    >
      {/* Animated particles background */}
      <motion.div
        className='absolute inset-0'
        animate={{
          background: [
            'radial-gradient(200px circle at 20% 80%, rgba(59,130,246,0.6) 0%, transparent 50%), radial-gradient(200px circle at 80% 20%, rgba(168,85,247,0.6) 0%, transparent 50%)',
            'radial-gradient(200px circle at 40% 40%, rgba(120,219,255,0.6) 0%, transparent 50%), radial-gradient(200px circle at 90% 90%, rgba(16,185,129,0.6) 0%, transparent 50%)',
            'radial-gradient(200px circle at 20% 80%, rgba(59,130,246,0.6) 0%, transparent 50%), radial-gradient(200px circle at 80% 20%, rgba(168,85,247,0.6) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
      />

      {/* Name Reveal - Richard Mille Luxury */}
      <motion.div
        className='text-center space-y-12 relative z-10'
        initial={{ scale: 0.2, opacity: 0, rotateX: 90 }}
        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
        transition={{
          duration: 1.5,
          delay: 0.3,
          type: 'spring',
          stiffness: 60,
        }}
      >
        <motion.h1
          className='text-7xl md:text-[10rem] lg:text-[12rem] font-black bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent tracking-[-0.05em] leading-none drop-shadow-2xl [text-shadow:0_0_20px_rgba(255,255,255,0.8)]'
          animate={{
            scale: [1, 1.02, 1],
            textShadow: [
              '0 0 20px rgba(255,255,255,0.8)',
              '0 0 40px rgba(59,130,246,0.9)',
              '0 0 60px rgba(168,85,247,0.9)',
              '0 0 40px rgba(255,255,255,0.8)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 2,
          }}
        >
          ATUL
          <br className='md:hidden' />
          GULIA
        </motion.h1>

        <motion.div
          className='flex flex-col items-center space-y-4'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <p className='text-2xl md:text-3xl text-slate-200 font-light uppercase tracking-widest'>
            FULL-STACK DEVELOPER
          </p>
          <motion.div
            className='w-40 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 rounded-full mx-auto shadow-lg'
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 2.2 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  ) : null
}

export default SplashScreen
