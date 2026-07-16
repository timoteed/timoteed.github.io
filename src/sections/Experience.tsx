import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'
import Section from '../components/Section'
import { experience } from '../data/resume'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="git log --career" title="Experience">
      <div className="space-y-10">
        {experience.map((job, i) => (
          <motion.article
            key={job.company}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="timeline-line relative pl-12"
          >
            {/* Timeline node */}
            <span
              className={`absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                job.current
                  ? 'border-primary bg-primary/20 shadow-[0_0_16px_hsl(162_84%_42%/0.5)]'
                  : 'border-border bg-card'
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${job.current ? 'bg-primary' : 'bg-muted-foreground/50'}`} />
            </span>

            <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold">
                    {job.role}
                    <span className="text-primary"> · {job.company}</span>
                  </h3>
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {job.location}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {job.current && (
                    <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                      Current
                    </span>
                  )}
                  <span className="rounded-md bg-secondary px-3 py-1.5 font-mono text-xs text-muted-foreground">
                    {job.period}
                  </span>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {job.highlights.map((h) => (
                  <li key={h.title} className="flex gap-3">
                    <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">{h.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
