
import { ArrowRight, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="max-w-4xl">
        <h1 className="text-balance font-sans text-6xl font-bold leading-tight tracking-tight text-[#1C1C1C] md:text-7xl lg:text-8xl">
          Ignacio Isasmendi
        </h1>

        <div className="mt-8 space-y-4">
          <p className="text-pretty text-2xl text-[#6B7280] md:text-3xl">
            Software Engineer — Fullstack with Backend Focus
          </p>

          <div className="h-1 w-24 bg-[#146C43]" />

          <p className="text-pretty text-xl leading-relaxed text-[#6B7280] md:text-2xl">
            Building systems that work reliably, scale thoughtfully, and last.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Button size="lg" className="bg-[#146C43] text-white hover:bg-[#0d4d2f]" asChild>
            <a href="#projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-[#E5E7EB] text-[#1C1C1C] hover:border-[#146C43] hover:text-[#0d4d2f] hover:bg-transparent bg-transparent [&_svg]:text-current"
            asChild
          >
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
