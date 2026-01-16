import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { projectsData } from "@/lib/projects-data"
import { techIcons, techNames } from '@/lib/tech-icons'
import { ProjectCarousel } from "@/components/project-carousel"


interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="border-b border-[#E5E7EB] px-6 py-6">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] transition-colors hover:text-[#146C43]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Project Header */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-5xl font-bold text-[#1C1C1C]">{project.title}</h1>
          <p className="mt-4 text-xl leading-relaxed text-[#6B7280]">{project.description}</p>

          {/* Links */}
          {(project.links?.live || project.links?.github) && (
            <div className="mt-8 flex gap-4">
              {project.links?.live && (
                <a
                  href={project.links.live}
                  className="inline-flex items-center gap-2 rounded-md bg-[#146C43] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0F5534]"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Live Demo
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  className="inline-flex items-center gap-2 rounded-md border border-[#146C43] px-6 py-3 text-sm font-medium text-[#146C43] transition-colors hover:bg-[#146C43] hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
              )}
            </div>
          )}

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((techId) => {
              const Icon = techIcons[techId.toLowerCase()];
              const name = techNames[techId.toLowerCase()] || techId;
              
              return (
                <span
                  key={techId}
                  className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-card-foreground shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#146C43]/30 hover:shadow-md"
                  title={name}
                >
                  {Icon && <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-[#146C43]" />}
                  <span>{name}</span>
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="px-6">
        <div className="mx-auto max-w-5xl">
          <ProjectCarousel 
            images={project.images} 
            title={project.title}
          />
        </div>
      </section>

      {/* Challenge, Solution, Impact */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[#146C43]">The Challenge</h2>
              <div className="mt-2 h-1 w-12 bg-[#146C43]" />
              <p className="mt-4 text-lg leading-relaxed text-[#6B7280]">{project.challenge}</p>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[#146C43]">The Solution</h2>
              <div className="mt-2 h-1 w-12 bg-[#146C43]" />
              <p className="mt-4 text-lg leading-relaxed text-[#6B7280]">{project.solution}</p>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[#146C43]">The Impact</h2>
              <div className="mt-2 h-1 w-12 bg-[#146C43]" />
              <p className="mt-4 text-lg leading-relaxed text-[#6B7280]">{project.impact}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos */}
      {project.videos && project.videos.length > 0 && (
        <section className="border-t border-[#E5E7EB] px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-[#1C1C1C]">Demo Videos</h2>
            <div className="mt-2 h-1 w-16 bg-[#146C43]" />

            <div className="mt-8 space-y-6">
              {project.videos.map((video, index) => (
                <div key={index} className="overflow-hidden rounded-lg border border-[#E5E7EB]">
                  <video src={video} controls className="w-full" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Projects */}
      <section className="border-t border-[#E5E7EB] px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-lg font-medium text-[#146C43] transition-colors hover:text-[#0F5534]"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to All Projects
          </Link>
        </div>
      </section>
    </main>
  )
}
