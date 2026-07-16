import { motion } from 'framer-motion'
import Section from '../components/Section'
import { skillGroups } from '../data/resume'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="tree ~/skills" title="Skills & Toolbox">
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: gi * 0.12 }}
            className="overflow-hidden rounded-xl border border-border bg-card"
          >
            {/* Terminal chrome */}
            <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">{group.title}</span>
            </div>
            <div className="p-5">
              <p className="font-mono text-xs text-muted-foreground">
                <span className="text-primary">$</span> {group.command}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.12 + i * 0.05 }}
                    className="rounded-md border border-primary/25 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10 overflow-hidden rounded-xl border border-border bg-secondary/40 py-4"
      >
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10 font-mono text-sm text-muted-foreground">
          {[...Array(2)].flatMap((_, dup) =>
            ['Jenkins', 'Git', 'Python', 'Shell Scripting', 'CI/CD', 'Automation', 'Agile', 'Version Control', 'Informatica', 'Teradata', 'Build Engineering', 'DevOps'].map(
              (item) => (
                <span key={`${dup}-${item}`} className="flex items-center gap-10 whitespace-nowrap">
                  {item} <span className="text-primary">◆</span>
                </span>
              )
            )
          )}
        </div>
      </motion.div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </Section>
  )
}
