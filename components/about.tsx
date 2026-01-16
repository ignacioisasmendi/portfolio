import { Mountain, Footprints, Heart, Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="border-t border-[#E5E7EB] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-[#1C1C1C]">About</h2>

        <div className="mt-2 h-1 w-16 bg-[#146C43]" />

        <div className="mt-12 space-y-6 text-lg leading-relaxed text-[#6B7280]">
          <p>
            I'm a software engineer with 2 years of hands-on experience building and maintaining web applications.
            Currently finalizing my degree in Software Engineering, I focus on backend development with strong fullstack
            capabilities.
          </p>

          <p>
            My work centers on creating scalable architectures, optimizing performance, and solving real problems with
            clean, maintainable code. I believe in building systems that work reliably and evolve gracefully over time.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <InterestTag icon={Mountain} label="Trekking" />
          <InterestTag icon={Footprints} label="Running" />
          <InterestTag icon={Heart} label="Camping" />
          <InterestTag icon={Users} label="Handball" />
        </div>
      </div>
    </section>
  )
}

function InterestTag({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[#E5E7EB] px-4 py-2">
      <Icon className="h-4 w-4 text-[#146C43]" />
      <span className="text-sm text-[#6B7280]">{label}</span>
    </div>
  )
}
