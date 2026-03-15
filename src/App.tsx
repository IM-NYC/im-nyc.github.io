import './App.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import heroImage from './assets/personal-picture.png'

const scrollFadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

function App() {
  const pageRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    container: pageRef,
  })

  const heroGlowOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.3])

  return (
    <div
      ref={pageRef}
      className="relative min-h-screen overflow-y-auto bg-[#0a0a0a] text-slate-100"
    >
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.12),_transparent_55%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-20 pt-8 md:px-10 lg:px-16">
        <Header />
        <main className="mt-8 space-y-32 md:mt-16 md:space-y-40">
          <Hero heroGlowOpacity={heroGlowOpacity} />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  )
}

type HeroProps = {
  heroGlowOpacity: ReturnType<typeof useTransform>
}

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-white/5 pb-4 md:pb-6">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs font-mono tracking-[0.2em] uppercase">
          IM
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
            Portfolio
          </span>
          <span className="text-sm text-slate-300">Imran Mukhiddinov</span>
        </div>
      </div>
      <nav className="hidden gap-8 text-xs font-mono uppercase tracking-[0.25em] text-slate-400 md:flex">
        <a href="#about" className="hover:text-slate-100">
          About
        </a>
        <a href="#skills" className="hover:text-slate-100">
          Skills
        </a>
        <a href="#projects" className="hover:text-slate-100">
          Projects
        </a>
        <a href="#contact" className="hover:text-slate-100">
          Contact
        </a>
      </nav>
    </header>
  )
}

function Hero({ heroGlowOpacity }: HeroProps) {
  return (
    <section
      id="hero"
      className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center"
      aria-labelledby="hero-heading"
    >
      <div className="space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.25em] text-slate-300/80 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          Available for opportunities
        </motion.p>

        <motion.div
          variants={scrollFadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="space-y-6"
        >
          <h1
            id="hero-heading"
            className="font-display text-4xl leading-tight tracking-tight text-slate-50 md:text-5xl lg:text-6xl"
          >
            Imran Mukhiddinov
          </h1>
          <p className="text-lg font-medium text-slate-300 md:text-xl">
            Full-Stack Developer & Student
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
            Building modern digital experiences through code, creativity, and
            problem solving. Focused on clean engineering, thoughtful design,
            and learning the systems behind world-class software.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: 'easeOut' }}
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-medium text-slate-900 shadow-[0_0_35px_rgba(34,211,238,0.7)] transition hover:bg-cyan-300"
          >
            <span className="relative z-10">View Projects</span>
            <span className="relative z-10 text-xs font-mono uppercase tracking-[0.25em]">
              Work in progress
            </span>
            <span className="absolute inset-0 translate-x-[-120%] bg-white/40 transition group-hover:translate-x-[120%]" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium text-slate-100/90 backdrop-blur transition hover:border-cyan-400/70 hover:text-white"
          >
            <span>Contact Me</span>
          </a>
        </motion.div>

        <div className="flex flex-wrap gap-6 text-[11px] font-mono uppercase tracking-[0.24em] text-slate-500">
          <span className="flex items-center gap-2">
            <span className="h-px w-6 bg-slate-600" />
            Full-stack web development
          </span>
          <span className="flex items-center gap-2">
            <span className="h-px w-6 bg-slate-600" />
            Modern React & TypeScript
          </span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
        className="relative"
      >
        <motion.div
          style={{ opacity: heroGlowOpacity }}
          className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_20%_0,_rgba(56,189,248,0.45),_transparent_55%),radial-gradient(circle_at_80%_100%,_rgba(129,140,248,0.45),_transparent_55%)] blur-3xl"
        />
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-black/40 shadow-soft-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.7),_transparent_65%)]" />
          <div className="relative aspect-[4/5] w-full">
            <img
              src={heroImage}
              alt="Imran standing on a rooftop with a city skyline in the background"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 text-xs text-slate-200">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
                <span className="font-mono uppercase tracking-[0.25em]">
                  Student • 16
                </span>
              </div>
              <p className="max-w-xs text-[11px] text-slate-300">
                Based in New York City, learning modern software development and
                building real-world projects outside of class.
              </p>
            </div>
            <div className="hidden flex-col items-end text-right text-[10px] font-mono uppercase tracking-[0.35em] text-slate-400/80 sm:flex">
              <span>Franklin Delano Roosevelt</span>
              <span className="text-slate-500/80">High School • NYC</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function SectionShell({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-8">
      <motion.div
        variants={scrollFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="space-y-3"
      >
        <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-cyan-300/80">
          {eyebrow}
        </p>
        <h2 className="font-display text-2xl tracking-tight text-slate-50 md:text-3xl">
          {title}
        </h2>
      </motion.div>
      {children}
    </section>
  )
}

function About() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="A young developer focused on real-world impact"
    >
      <motion.div
        variants={scrollFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
      >
        <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
          I am a 16-year-old full-time student at Franklin Delano Roosevelt High
          School and a self-driven full-stack web developer. I spend my time
          learning modern tools, exploring how real products are built, and
          turning ideas into interactive experiences on the web.
        </p>
        <p className="max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
          I&apos;m especially interested in clean engineering, performance, and
          design systems—understanding not just how to build something, but why
          it feels intuitive and fast. I enjoy working end-to-end: from shaping
          the user experience to implementing robust backends that scale.
        </p>
      </motion.div>
    </SectionShell>
  )
}

type SkillCategory = {
  label: string
  skills: string[]
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: 'Frontend',
    skills: [
      'HTML5',
      'CSS3',
      'Responsive Design',
      'JavaScript (ES6+)',
      'TypeScript',
      'React',
      'Modern UI/UX Patterns',
    ],
  },
  {
    label: 'Backend',
    skills: [
      'Node.js',
      'REST API Design',
      'Authentication & Sessions',
      'Database Design',
      'Basic System Design',
    ],
  },
  {
    label: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'C++', 'Python'],
  },
  {
    label: 'Tools',
    skills: ['Git & GitHub', 'VS Code', 'Linux Basics', 'Docker (intro)', 'CI/CD fundamentals'],
  },
  {
    label: 'Concepts',
    skills: [
      'Clean Code',
      'Performance Optimization',
      'Security Best Practices (foundations)',
      'Problem Solving',
    ],
  },
]

function Skills() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="Technical foundation built for growth"
    >
      <motion.div
        variants={scrollFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {SKILL_CATEGORIES.map((category) => (
          <article
            key={category.label}
            className="group rounded-2xl border border-white/8 bg-white/[0.02] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.6)] backdrop-blur transition hover:border-cyan-400/60 hover:bg-white/[0.03]"
          >
            <h3 className="flex items-center justify-between text-sm font-medium text-slate-100">
              {category.label}
              <span className="h-px w-8 bg-gradient-to-r from-cyan-400/70 to-transparent" />
            </h3>
            <ul className="mt-4 space-y-2 text-xs text-slate-300">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="h-[3px] w-[14px] rounded-full bg-cyan-400/80" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </motion.div>
    </SectionShell>
  )
}

function Projects() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Case studies in progress"
    >
      <motion.div
        variants={scrollFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className="space-y-6"
      >
        <p className="max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
          I&apos;m actively working on personal projects that apply modern
          development practices to real problems. This section is designed to
          showcase detailed case studies—including context, decisions, and
          outcomes—as those projects are completed.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2].map((index) => (
            <article
              key={index}
              className="flex flex-col justify-between rounded-3xl border border-dashed border-white/10 bg-gradient-to-b from-white/[0.02] to-black/50 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.65)]"
            >
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.28em] text-slate-300/90">
                  Upcoming Case Study
                </div>
                <h3 className="font-display text-lg text-slate-50">
                  Future project slot {index}
                </h3>
                <p className="text-xs leading-relaxed text-slate-400">
                  This card will highlight a real project with a clear problem,
                  a focused solution, and a breakdown of the engineering and
                  design decisions behind it.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-slate-500">
                <span>Projects currently in development</span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] text-cyan-300">
                  GitHub & live demos coming soon
                </span>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </SectionShell>
  )
}

function Contact() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Let’s build something meaningful"
    >
      <motion.div
        variants={scrollFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
      >
        <div className="space-y-4">
          <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
            If you&apos;re looking for a motivated young developer who cares
            about details, systems, and learning fast, I&apos;d love to talk.
            I&apos;m open to internships, mentorship, and opportunities to
            collaborate on impactful products.
          </p>
          <div className="space-y-2 text-sm text-slate-300">
            <a
              href="mailto:imranmukhiddinov2009@gmail.com"
              className="flex items-center gap-2 text-slate-100 hover:text-cyan-300"
            >
              <span className="h-1 w-6 rounded-full bg-cyan-400" />
              <span className="font-mono text-xs uppercase tracking-[0.2em]">
                Email
              </span>
              <span className="text-slate-300">
                imranmukhiddinov2009@gmail.com
              </span>
            </a>
            <a
              href="tel:17187108933"
              className="flex items-center gap-2 text-slate-100 hover:text-cyan-300"
            >
              <span className="h-1 w-6 rounded-full bg-cyan-400" />
              <span className="font-mono text-xs uppercase tracking-[0.2em]">
                Phone
              </span>
              <span className="text-slate-300">+1 (718) 710-8933</span>
            </a>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.02] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
          <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-slate-400">
            Social
          </p>
          <p className="text-xs text-slate-400">
            Social profiles are placeholders and can be updated as new links are
            created.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
            <SocialLink label="GitHub" href="#" />
            <SocialLink label="LinkedIn" href="#" />
            <SocialLink label="Twitter / X" href="#" />
            <SocialLink label="Instagram" href="#" />
          </div>
        </div>
      </motion.div>
    </SectionShell>
  )
}

function SocialLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="group flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-3 py-2 text-[11px] text-slate-200 transition hover:border-cyan-400/70 hover:bg-black/70"
    >
      <span>{label}</span>
      <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-slate-500 group-hover:text-cyan-300">
        Soon
      </span>
    </a>
  )
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5 pt-6 text-[11px] text-slate-500">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <span>
          Designed & built with intention by{' '}
          <span className="text-slate-300">Imran Mukhiddinov</span>.
        </span>
        <span className="font-mono uppercase tracking-[0.25em] text-slate-500/80">
          Ready to learn. Ready to build.
        </span>
      </div>
    </footer>
  )
}

export default App
