import { Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="border-t border-[#E5E7EB] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-[#1C1C1C]">Contact</h2>

        <div className="mt-2 h-1 w-16 bg-[#146C43]" />

        <p className="mt-12 text-lg leading-relaxed text-[#6B7280]">
          Open to meaningful projects and long-term challenges.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button
            size="lg"
            variant="outline"
            className="border-[#E5E7EB] text-[#1C1C1C] hover:border-[#146C43] hover:text-[#0d4d2f] hover:bg-transparent bg-transparent [&_svg]:text-current"
            asChild
          >
            <a href="mailto:isasmendi.ignacio@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              isasmendi.ignacio@gmail.com
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-[#E5E7EB] text-[#1C1C1C] hover:border-[#146C43] hover:text-[#0d4d2f] hover:bg-transparent bg-transparent [&_svg]:text-current"
            asChild
          >
            <a href="https://www.linkedin.com/in/ignacio-isasmendi/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
