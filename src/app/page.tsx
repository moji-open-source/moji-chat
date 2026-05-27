import {
  FeatureCards,
  HeroSection,
  QuickActions,
  WorkspacePreview,
} from '@/features/home/components'

export default function HomePage() {
  return (
    <main className="h-dvh overflow-y-auto bg-[radial-gradient(circle_at_top,rgba(196,98,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_24%),linear-gradient(180deg,#16141f_0%,#0c0d13_100%)] text-foreground">
      <div className="mx-auto flex min-h-dvh w-full max-w-7xl flex-col px-4 py-4 sm:px-6 sm:py-6">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8 lg:p-10">
          <GlowEffects />

          <div className="relative flex min-h-[calc(100dvh-2rem)] flex-col justify-between gap-10 lg:min-h-168">
            <header className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <HeroSection />
              <QuickActions />
            </header>

            <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
              <FeatureCards />
              <WorkspacePreview />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

function GlowEffects() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute -left-16 top-10 h-36 w-36 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
    </div>
  )
}
