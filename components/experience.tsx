export function Experience() {
  return (
    <section id="experience" className="border-t border-[#E5E7EB] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-[#1C1C1C]">Experience</h2>

        <div className="mt-2 h-1 w-16 bg-[#146C43]" />

        <div className="mt-12 space-y-12">
          <ExperienceItem
            company="Incubator"
            role="Backend Developer"
            period="Oct 2024 — Present"
            location="Remote"
            achievements={[
              "Rebuilt and optimized NestJS libraries at Banco Galicia, achieving 35% performance improvement",
              "Diagnosed and fixed memory leaks in Node.js services using Grafana, AppDynamics, and Kibana",
              "Developed API and SPA for project scaffolding with dynamic application creation",
            ]}
          />

          <ExperienceItem
            company="Freelance"
            role="Full Stack Developer"
            period="Oct 2023 — Present"
            location="Remote"
            achievements={[
              "Built customer feedback system with React Native tablet app and Next.js admin dashboard",
              "Designed and developed responsive photographer landing page with Next.js",
              "Implemented full-stack solutions using Supabase backend",
            ]}
          />

          <ExperienceItem
            company="Municipalidad de Tandil"
            role="Full Stack Developer"
            period="Oct 2023 — Oct 2024"
            location="Tandil, Argentina"
            achievements={[
              "Maintained and developed new features for municipality website using Vue and React",
              "Developed internal APIs in Node.js for municipal services",
              "Created and maintained database procedures/functions in Oracle DB",
              "Built applications using Oracle APEX platform",
            ]}
          />
        </div>
      </div>
    </section>
  )
}

interface ExperienceItemProps {
  company: string
  role: string
  period: string
  location: string
  achievements: string[]
}

function ExperienceItem({ company, role, period, location, achievements }: ExperienceItemProps) {
  return (
    <div className="relative pl-8">
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-0 h-full">
        <div className="relative h-full">
          <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-[#146C43]" />
          <div className="absolute left-[5px] top-5 h-[calc(100%-20px)] w-0.5 bg-[#E5E7EB]" />
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-semibold text-[#1C1C1C]">{role}</h3>
          <p className="text-lg text-[#6B7280]">{company}</p>
          <p className="text-sm text-[#6B7280]">
            {period} • {location}
          </p>
        </div>

        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-[#6B7280] leading-relaxed">
              • {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
