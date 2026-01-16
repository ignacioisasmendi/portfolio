import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Projects() {
  const projects = [
    {
      slug: "customer-feedback-system",
      title: "Customer Feedback System",
      description: "React Native tablet app and Next.js admin dashboard for real-time customer feedback collection",
      image: "/pharmacy-project/main.png",
      tech: ["React Native", "Next.js", "Supabase"],
    },
    {
      slug: "project-scaffolding-spa",
      title: "Project Scaffolding SPA",
      description: "Automated project generation tool that reduces setup time from hours to minutes",
      image: "/project-scaffolding-automation-dashboard.jpg",
      tech: ["NestJS", "React", "TypeScript"],
    },
    {
      slug: "photographer-portfolio",
      title: "Photographer Portfolio",
      description: "SEO-optimized Next.js landing page showcasing professional photography work",
      image: "/photographer-portfolio-landing-page.jpg",
      tech: ["Next.js", "SEO", "Responsive Design"],
    },
    {
      slug: "municipalidad-tandil",
      title: "Municipalidad de Tandil Website",
      description: "Government website maintenance and internal systems development",
      image: "/government-website-vue-react-interface.jpg",
      tech: ["Vue", "React", "Node.js", "Oracle"],
    },
  ]

  return (
    <section id="projects" className="border-t border-[#E5E7EB] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-[#1C1C1C]">Freelance & Personal Projects</h2>
        <div className="mt-2 h-1 w-16 bg-[#146C43]" />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group">
              <article className="overflow-hidden rounded-lg border border-[#E5E7EB] transition-all hover:border-[#146C43] hover:shadow-lg">
                {/* Project Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1C1C1C] group-hover:text-[#146C43] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-[#E5E7EB] px-3 py-1 text-xs font-medium text-[#6B7280]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Details Link */}
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#146C43] group-hover:gap-3 transition-all">
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
