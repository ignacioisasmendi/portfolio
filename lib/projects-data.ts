export interface ProjectData {
  slug: string
  title: string
  description: string
  challenge: string
  solution: string
  impact: string
  tech: string[]
  images: string[]
  imageDescriptions?: string[]
  videos?: string[]
  links?: {
    live?: string
    github?: string
  }
}

export interface TechStack {
  id: string;        // Icon identifier (e.g., "react", "nextjs", "typescript")
  name?: string;     // Optional display name for accessibility/tooltips
}

export const projectsData: ProjectData[] = [
  {
    slug: "customer-feedback-system",
    title: "Customer Feedback System",
    description: "Real-time customer feedback collection system for pharmacy",
    challenge:
      "A pharmacy needed a seamless way to collect in-store customer feedback and analyze responses in real-time. Traditional paper surveys were inefficient, and customers often didn't provide feedback at all.",
    solution:
      "Built a dual-platform solution: a React Native tablet app for customers to provide instant feedback in-store, and a Next.js admin dashboard for staff to monitor responses and analyze trends. Supabase handles real-time data synchronization, ensuring staff can act on feedback immediately.",
    impact:
      "Collected 3,000+ in-store customer feedback entries and is currently running in production, replacing paper surveys with a real-time, actionable feedback system that improves customer satisfaction tracking",
    tech: ["react-native", "nextjs", "supabase", "typescript", "tailwindcss"],
    images: [
      "/pharmacy-project/admin-login.png",
      "/pharmacy-project/admin-dashboard.png",
      "/pharmacy-project/tablet-question.jpeg",
      "/pharmacy-project/tablet-end.jpeg",
    ],
    imageDescriptions: [
      "Secure admin login interface with email and password authentication",
      "Real-time dashboard displaying customer feedback analytics and trends",
      "Interactive tablet interface where customers rate their pharmacy experience",
      "Thank you screen shown to customers after completing their feedback",
    ],
  },
  {
    slug: "project-scaffolding-spa",
    title: "Project Scaffolding SPA",
    description: "Automated project generation and scaffolding tool",
    challenge:
      "Development teams wasted hours on repetitive project setup tasks: creating directory structures, configuring build tools, setting up linters, installing dependencies, and initializing repositories. This manual process was error-prone and inconsistent across teams.",
    solution:
      "Created an API and single-page application that automates the entire project generation process. Teams select a template (React, Vue, Node.js, etc.), customize configurations through an intuitive UI, and the system generates a complete project with all dependencies, pre-configured tools, and repository initialization.",
    impact:
      "Reduced project setup time from 2-3 hours to under 5 minutes. Improved consistency across team projects, reduced configuration errors, and allowed developers to focus on building features instead of boilerplate setup.",
    tech: ["NestJS", "React", "TypeScript", "Git APIs", "Docker"],
    images: [
      "/project-scaffolding-automation-dashboard.jpg",
      "/template-selection-interface.jpg",
      "/configuration-wizard.jpg",
    ],
    links: {
      github: "#",
    },
  },
  {
    slug: "photographer-portfolio",
    title: "Photographer Portfolio",
    description: "SEO-optimized portfolio website for professional photographer",
    challenge:
      "A professional photographer needed an online presence that beautifully showcased their work while ranking well in search results. The site needed to load quickly despite high-resolution images, work perfectly on mobile devices, and attract organic traffic.",
    solution:
      "Designed and developed a responsive Next.js landing page with optimized image loading using next/image, implemented comprehensive SEO best practices (structured data, meta tags, sitemaps), and ensured fast performance through code splitting and lazy loading. Added a contact form that allows visitors to reach out directly from the page, with email notifications sent to the photographer using Resend.",
    impact:
      "Delivered a visually compelling portfolio that achieves 95+ Lighthouse scores across all metrics. The site loads in under 2 seconds and attracts consistent organic traffic through search engines, resulting in increased client inquiries.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "SEO Optimization", "Responsive Design", "Resend"],
    images: ["/photographer-portfolio-landing-page.jpg", "/photography-gallery-grid.jpg", "/mobile-responsive-design.png"],
    links: {
      live: "https://gabrielabissoni.com.ar/",
      github: "#",
    },
  },
  {
    slug: "municipalidad-tandil",
    title: "Municipalidad de Tandil Website",
    description: "Government website maintenance and internal systems",
    challenge:
      "The city government needed ongoing maintenance and new features for their public-facing website and internal systems. The existing infrastructure used multiple technologies (Vue, React, Oracle) that needed to be maintained and extended while serving thousands of citizens daily.",
    solution:
      "Maintained and extended the public website using Vue and React, built internal APIs with Node.js for data management, and developed Oracle APEX applications for government operations. Ensured high availability and implemented new citizen-facing features regularly.",
    impact:
      "Delivered reliable public services online with 99.9% uptime while modernizing internal tools that improved city staff efficiency. Enabled citizens to access government services digitally, reducing in-person visits and wait times.",
    tech: ["Vue", "React", "Node.js", "Oracle Database", "Oracle APEX", "REST APIs"],
    images: ["/government-website-vue-react-interface.jpg", "/government-services-portal.jpg", "/admin-management-system.jpg"],
    links: {
      live: "#",
    },
  },
]
