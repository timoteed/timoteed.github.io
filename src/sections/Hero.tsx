import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, Phone, MapPin } from 'lucide-react'
import { profile, stats } from '../data/resume'

const TYPED_ROLES = ['DevOps Engineer', 'Build Engineering Lead', 'CI/CD Automation Expert', 'Senior Consultant']

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    const speed = deleting ? 40 : 85

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1)
        setText(next)
        if (next === word) setTimeout(() => setDeleting(true), 1800)
      } else {
        const next = word.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setIndex((i) => (i + 1) % words.length)
        }
      }
    }, speed)
    return () => clearTimeout(timer)
  }, [text, deleting, index, words])

  return text
}

export default function Hero() {
  const typed = useTypewriter(TYPED_ROLES)

  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      {/* Backdrop */}
      <div className="bg-grid absolute inset-0" />
      <div className="glow-emerald absolute -top-32 left-1/2 h-[560px] w-[860px] -translate-x-1/2" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-28 pb-16 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for new engagements
          </p>

          <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            {profile.name.split(' ')[0]}
            <br />
            <span className="text-gradient">{profile.name.split(' ')[1]}</span>
          </h1>

          <p className="mt-6 font-mono text-lg text-muted-foreground md:text-xl">
            <span className="text-primary">&gt;</span> {typed}
            <span className="cursor-blink ml-0.5 inline-block h-5 w-[10px] translate-y-0.5 bg-primary" />
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_hsl(162_84%_42%/0.35)] transition-transform hover:scale-[1.03]"
            >
              View My Experience
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md border border-border bg-secondary/60 px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" /> {profile.location}
            </span>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-primary">
              <Mail className="h-3.5 w-3.5 text-primary" /> {profile.email}
            </a>
            <a href="tel:+14232021680" className="inline-flex items-center gap-1.5 hover:text-primary">
              <Phone className="h-3.5 w-3.5 text-primary" /> {profile.phone}
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-card px-6 py-6">
              <p className="text-3xl font-bold text-primary">{s.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary md:block"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  )
}
