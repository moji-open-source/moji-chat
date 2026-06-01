export function GlowEffects() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute -left-16 top-10 h-36 w-36 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
    </div>
  )
}
