import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { HowIWork } from "@/components/how-i-work"
import { Contact } from "@/components/contact"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <HowIWork />
      <Contact />
    </main>
  )
}
