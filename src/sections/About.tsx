import { motion } from 'framer-motion'
import { GitBranch, Workflow, ShieldCheck, Lightbulb } from 'lucide-react'
import Section from '../components/Section'

const pillars = [
  {
    icon: GitBranch,
    title: 'Build Engineering',
    text: 'Owning the build system end to end — creating, maintaining, and modernizing how software gets assembled and released.',
  },
  {
    icon: Workflow,
    title: 'CI/CD Automation',
    text: 'Designing pipelines and automation that cut manual toil, reduce operating costs, and make deployments routine instead of risky.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Reliability',
    text: 'Delivering in regulated environments — federal and healthcare — where data handling and uptime are non-negotiable.',
  },
  {
    icon: Lightbulb,
    title: 'Technical Leadership',
    text: 'Prototyping new tools and methodologies through proofs of concept, then leading the major upgrades that follow.',
  },
]

export default function About() {
  return (
    <Section id="about" eyebrow="cat about.txt" title="About Me">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-muted-foreground leading-relaxed"
        >
          <p>
            I'm a senior consultant at <span className="text-foreground font-medium">CGI Federal</span> with
            nearly a decade spent in configuration management and build engineering. My work centers on
            one idea: <span className="text-primary">great teams ship great software when the path from
            code to production is automated, versioned, and dependable.</span>
          </p>
          <p>
            From healthcare big data — building Informatica and Teradata workflows that kept critical
            data moving correctly between systems — to federal engagements where I lead major system
            upgrades and overhauls, I've built my career on making complex delivery pipelines simple
            and repeatable.
          </p>
          <p>
            Before tech, I spent six years in operations management, where I learned root cause
            analysis and how to lead teams under pressure — skills that still shape how I approach
            every incident, deployment, and design review today.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-[0_0_30px_hsl(162_84%_42%/0.08)]"
            >
              <p.icon className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
              <h3 className="mt-4 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
