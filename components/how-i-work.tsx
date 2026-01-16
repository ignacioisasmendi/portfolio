export function HowIWork() {
  return (
    <section id="how-i-work" className="border-t border-[#E5E7EB] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-[#1C1C1C]">How I Work</h2>

        <div className="mt-2 h-1 w-16 bg-[#146C43]" />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Principle
            title="Simplicity over cleverness"
            description="Clear code that anyone can understand and maintain"
          />

          <Principle title="Stability before speed" description="Systems that work reliably under pressure" />

          <Principle title="Consistency beats intensity" description="Steady progress creates lasting results" />

          <Principle title="Long-term thinking" description="Build for tomorrow, not just today" />
        </div>
      </div>
    </section>
  )
}

function Principle({ title, description }: { title: string; description: string }) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-[#1C1C1C]">{title}</h3>
      <p className="leading-relaxed text-[#6B7280]">{description}</p>
    </div>
  )
}
