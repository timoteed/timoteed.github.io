import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
  className?: string
}

export default function Section({ id, eyebrow, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl px-6 py-24 md:px-10 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="font-mono text-sm text-primary">
          <span className="text-muted-foreground">$</span> {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
      </motion.div>
      <div className="mt-12">{children}</div>
    </section>
  )
}
