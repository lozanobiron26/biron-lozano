import { ArrowUpRight, BriefcaseBusiness, Mail } from 'lucide-react'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-10 sm:px-10 lg:px-16">
        <div className="grid w-full overflow-hidden rounded-3xl border border-border bg-card shadow-[0_24px_80px_-36px_rgba(15,39,71,0.35)] lg:grid-cols-[0.9fr_1.1fr]">
          <section className="relative flex min-h-[340px] flex-col justify-between overflow-hidden bg-primary p-8 text-primary-foreground sm:p-12 lg:min-h-[560px] lg:p-14">
            <div aria-hidden="true" className="absolute -right-24 -top-24 size-72 rounded-full border border-white/10" />
            <div aria-hidden="true" className="absolute -bottom-36 -left-28 size-96 rounded-full border border-white/10" />
            <div className="relative flex items-center gap-3 text-sm font-medium tracking-wide text-primary-foreground/70">
              <span className="flex size-9 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-white">BL</span>
              <span>Personal calling card</span>
            </div>
            <div className="relative mt-16">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-sky-200">Senior Software Engineer</p>
              <h1 className="max-w-md text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl">Biron Lozano</h1>
              <div className="mt-7 h-px w-16 bg-sky-300/70" />
              <p className="mt-6 max-w-sm text-base leading-7 text-primary-foreground/75">Full-stack development, AI integrations, and workflow automation.</p>
            </div>
            <p className="relative mt-12 text-xs font-medium tracking-wide text-primary-foreground/50">11+ years building for the web</p>
          </section>

          <section className="flex flex-col justify-between p-8 sm:p-12 lg:p-14">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">About</p>
              <h2 className="mt-4 max-w-lg text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-3xl">Turning complex ideas into dependable digital products.</h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">I have 11+ years of experience building web applications and backend services with Python, JavaScript, TypeScript, React, Next.js, Node.js, and Django. My experience includes integrating Azure OpenAI and LLM APIs, creating n8n automations, and delivering cloud-based applications.</p>
            </div>

            <div className="mt-12 border-t border-border pt-8">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Let&apos;s connect</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a href="mailto:lozanobiron26@gmail.com" className="group inline-flex h-12 items-center justify-between gap-4 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <span className="inline-flex items-center gap-3"><Mail aria-hidden="true" data-icon="inline-start" />Email</span>
                  <ArrowUpRight aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a href="https://www.linkedin.com/in/biron-lozano-97a275437" target="_blank" rel="noreferrer" className="group inline-flex h-12 items-center justify-between gap-4 rounded-xl border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <span className="inline-flex items-center gap-3"><BriefcaseBusiness aria-hidden="true" data-icon="inline-start" />LinkedIn</span>
                  <ArrowUpRight aria-hidden="true" className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
