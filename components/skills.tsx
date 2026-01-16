export function Skills() {
  return (
    <section id="skills" className="border-t border-[#E5E7EB] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-[#1C1C1C]">Skills</h2>

        <div className="mt-2 h-1 w-16 bg-[#146C43]" />

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <SkillGroup
            title="Backend"
            skills={["Node.js", "NestJS", "TypeScript", "PostgreSQL", "MongoDB", "REST APIs"]}
          />

          <SkillGroup
            title="Architecture"
            skills={["Microservices", "Event-Driven Design", "Database Design", "API Design", "System Scaling"]}
          />

          <SkillGroup title="Frontend" skills={["React", "Next.js", "Vue", "TypeScript", "React Native"]} />

          <SkillGroup title="Cloud & Tools" skills={["AWS", "Docker", "Git", "Grafana", "AppDynamics", "Kibana"]} />

          <SkillGroup title="Database" skills={["PostgreSQL", "MongoDB", "Oracle DB", "Oracle APEX", "Supabase"]} />
        </div>
      </div>
    </section>
  )
}

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-[#1C1C1C]">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="rounded-md border border-[#E5E7EB] px-3 py-1.5 text-sm text-[#6B7280]">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
