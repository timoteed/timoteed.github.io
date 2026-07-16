import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Calculator } from 'lucide-react'
import Section from '../components/Section'
import { education } from '../data/resume'

const details = [
  { icon: BookOpen, label: 'Concentration', value: education.concentration },
  { icon: Calculator, label: 'Emphasis', value: education.emphasis },
  { icon: Award, label: 'Honors', value: education.honors },
]

export default function Education() {
  return (
    <Section id="education" eyebrow="cat education.json" title="Education">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-xl border border-border bg-card p-8 md:p-10"
      >
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
              <GraduationCap className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{education.degree}</h3>
              <p className="mt-1 text-lg text-primary">{education.school}</p>
              <p className="mt-1 text-sm text-muted-foreground">{education.location}</p>
            </div>
          </div>
          <span className="rounded-md bg-secondary px-4 py-2 font-mono text-sm text-muted-foreground">
            Graduated {education.graduated}
          </span>
        </div>

        <div className="mt-8 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
          {details.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-lg bg-secondary/50 p-5"
            >
              <d.icon className="h-5 w-5 text-primary" />
              <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">{d.label}</p>
              <p className="mt-1.5 text-sm font-medium leading-snug">{d.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
