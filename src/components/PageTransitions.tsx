'use client'
import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'

interface PageTransitionProps {
  children: React.ReactNode
  id: string
  className?: string
}

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
    },
  },
}

export default function PageTransition({
  children,
  id,
  className = '',
}: PageTransitionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px 0px -100px 0px',
  })

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`min-h-screen py-20 ${className}`}
      variants={variants}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  )
}
