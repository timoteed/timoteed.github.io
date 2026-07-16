import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, TerminalSquare } from 'lucide-react'
import Section from '../components/Section'
import { profile } from '../data/resume'

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: 'tel:+14232021680',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
    href: undefined,
  },
]

export default function Contact() {
  return (
    <>
      <Section id="contact" eyebrow="./contact --init" title="Let's Build Something">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-card via-card to-primary/5 p-8 md:p-12"
        >
          <div className="glow-emerald absolute -right-24 -top-24 h-72 w-72" />
          <div className="relative">
            <h3 className="max-w-xl text-2xl font-bold leading-snug md:text-3xl">
              Have a pipeline to fix, a build system to modernize, or a team to level up?
            </h3>
            <p className="mt-4 max-w-lg text-muted-foreground">
              I'm always interested in talking about DevOps, automation, and build engineering.
              Reach out — I usually respond within a day.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {channels.map((c) => {
                const inner = (
                  <>
                    <c.icon className="h-5 w-5 text-primary" />
                    <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="mt-1 break-all text-sm font-medium">{c.value}</p>
                  </>
                )
                const cls =
                  'rounded-lg border border-border bg-background/60 p-5 transition-all hover:border-primary/50 hover:shadow-[0_0_24px_hsl(162_84%_42%/0.1)]'
                return c.href ? (
                  <a key={c.label} href={c.href} className={cls}>
                    {inner}
                  </a>
                ) : (
                  <div key={c.label} className={cls}>
                    {inner}
                  </div>
                )
              })}
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_hsl(162_84%_42%/0.35)] transition-transform hover:scale-[1.03]"
            >
              Send Me an Email
            </a>
          </div>
        </motion.div>
      </Section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row md:px-10">
          <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <TerminalSquare className="h-4 w-4 text-primary" />
            tim<span className="text-primary">@</span>dixon:~$ exit 0
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. Built with care in {profile.location}.
          </p>
        </div>
      </footer>
    </>
  )
}
